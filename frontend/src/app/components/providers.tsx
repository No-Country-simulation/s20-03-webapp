'use client'

import { SidebarProvider } from './ui/sidebar'

export const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <SidebarProvider>{children}</SidebarProvider>
    </>
  )
}
