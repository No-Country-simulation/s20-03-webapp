'use client'

import { SidebarProvider } from '@/components/ui/sidebar'
import { ThemeProvider } from '@/components/ui/theme-provider'
import { Toaster } from '@/components/ui/toaster'


export const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Toaster />
      <ThemeProvider
        attribute="class"
        defaultTheme="system"
        enableSystem
        disableTransitionOnChange
      >
        <SidebarProvider>{children}</SidebarProvider>
      </ThemeProvider>
    </>
  )
}
