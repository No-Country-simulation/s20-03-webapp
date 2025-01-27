'use client'

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
