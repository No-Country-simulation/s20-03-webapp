'use client'

import { useEffect, useState } from 'react' // <--- 1. Importamos Hooks necesarios
import Image from 'next/image'
import { DropDownUser } from '@/components/molecules/dropdown-user'
import { NavGroup } from '@/components/organisms/nav-group'
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  useSidebar,
} from '@/components/ui/sidebar'
import { navGroups } from '@/lib/constants'

export function AppSidebar(props: React.ComponentProps<typeof Sidebar>) {
  const { open } = useSidebar()

  // 2. Estado inicial (mientras carga, mostramos algo genérico)
  const [userData, setUserData] = useState({
    name: 'Usuario',
    email: 'cargando...',
    avatar: '/avatar.jpg',
  })

  // 3. Efecto para leer del localStorage al entrar a la página
  useEffect(() => {
    const storedUser = localStorage.getItem('user')
    
    // VALIDACIÓN EXTRA: Nos aseguramos que no sea la palabra "undefined" ni null
    if (storedUser && storedUser !== "undefined" && storedUser !== "null") {
      try {
        const parsedUser = JSON.parse(storedUser)
        setUserData({
          name: `${parsedUser.name} ${parsedUser.lastname || ''}`.trim(),
          email: parsedUser.email,
          avatar: parsedUser.avatar || '/avatar.jpg',
        })
      } catch (error) {
        console.error('Error parseando usuario, limpiando localStorage:', error)
        localStorage.removeItem('user') // Si falla, limpiamos la basura
      }
    } else {
      // Si hay basura guardada, la borramos para evitar problemas futuros
      localStorage.removeItem('user')
    }
  }, [])

  return (
    <Sidebar className='' collapsible="icon" variant="floating" {...props}>
      <SidebarHeader className="flex">
        {open ? (
          <Image
            src="/logo.svg"
            alt="Logo de ClassRun"
            width={160}
            height={200}
            className="h-16 max-h-16 self-start"
          />
        ) : (
          <Image
            src="/isotype.svg"
            alt="Isotipo de ClassRun"
            width={80}
            height={80}
            className="h-6 w-6 self-center"
          />
        )}
      </SidebarHeader>
      <SidebarContent>
        {navGroups.map((group, index) => (
          <NavGroup key={index} {...group} />
        ))}
      </SidebarContent>
      <SidebarFooter>
        {/* 4. Pasamos la variable de estado dinámica en lugar del objeto fijo */}
        <DropDownUser user={userData} />
      </SidebarFooter>
    </Sidebar>
  )
}