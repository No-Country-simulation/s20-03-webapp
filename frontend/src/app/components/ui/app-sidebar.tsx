'use client'
import {
  Archive,
  Bell,
  BookOpenCheck,
  CircleHelp,
  LayoutDashboard,
  Settings,
  Users,
} from 'lucide-react'
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

const navGroups = [
  {
    title: 'General',
    items: [
      {
        title: 'Panel de control',
        icon: LayoutDashboard,
        url: '/dashboard',
      },
      {
        title: 'Notificaciones',
        icon: Bell,
        url: '/dashboard/notifications',
      },
    ],
  },
  {
    title: 'Gestión de usuarios',
    items: [
      {
        title: 'Usuarios',
        icon: Users,
        url: '/dashboard/users',
      },
    ],
  },
  {
    title: 'Aulas',
    items: [
      {
        title: 'En curso',
        icon: BookOpenCheck,
        url: '#',
        items: [
          {
            title: '5to A - 2024',
            url: '/dashboard/room/163',
          },
          {
            title: '6to A - 2024',
            url: '/dashboard/room/164',
          },
          {
            title: '7mo A - 2024',
            url: '/dashboard/room/165',
          },
          {
            title: '8vo A - 2024',
            url: '/dashboard/room/166',
          },
        ],
      },
      {
        title: 'Archivadas',
        icon: Archive,
        url: '#',
        items: [
          {
            title: '5to A - 2023',
            url: '/dashboard/room/86',
          },
          {
            title: '6to A - 2023',
            url: '/dashboard/room/87',
          },
          {
            title: '7mo A - 2023',
            url: '/dashboard/room/88',
          },
          {
            title: '8vo A - 2023',
            url: '/dashboard/room/89',
          },
        ],
      },
    ],
  },
  {
    title: 'Otros',
    items: [
      {
        title: 'Configuraciones',
        icon: Settings,
        url: '#',
        items: [
          {
            title: 'Perfil',
            url: '/dashboard/settings',
          },
          {
            title: 'Apariencia',
            url: '/dashboard/settings/appearance',
          },
        ],
      },
      {
        title: 'Soporte',
        icon: CircleHelp,
        url: '#',
        items: [
          {
            title: 'Manual de usuario',
            url: '/dashboard/user-manual',
          },
          {
            title: 'Contacto',
            url: '/dashboard/contact',
          },
        ],
      },
    ],
  },
]

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const { open } = useSidebar()

  return (
    <Sidebar collapsible="icon" variant="floating" {...props}>
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
        {navGroups.map((items, index) => (
          <NavGroup key={index} {...items} />
        ))}
      </SidebarContent>
      <SidebarFooter>
        <DropDownUser
          user={{
            name: 'John Doe',
            email: 'email@example.com',
            avatar: '/avatar.jpg',
          }}
        />
      </SidebarFooter>
    </Sidebar>
  )
}
