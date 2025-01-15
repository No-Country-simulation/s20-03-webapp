import { AppSidebar } from '@/components/ui/app-sidebar'
import { SidebarTrigger } from '@/components/ui/sidebar'

interface LayoutProps {
  children: React.ReactNode
}

export default function Layout({ children }: LayoutProps) {
  return (
    <>
      <AppSidebar />
      <div className="flex w-full flex-col">
        <SidebarTrigger />
        <main className="flex-1">{children}</main>
      </div>
    </>
  )
}
