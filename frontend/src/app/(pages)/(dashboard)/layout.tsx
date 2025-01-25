import { Header } from '@/components/molecules/header'
import { AppSidebar } from '@/components/ui/app-sidebar'
import { Input } from '@/components/ui/input'

interface LayoutProps {
  children: React.ReactNode
}

export default function Layout({ children }: LayoutProps) {
  return (
    <>
      <AppSidebar />
      <div className="flex w-full flex-col">
        <Header fixed>
          <Input type="text" className="max-w-sm" placeholder="Search..." />
        </Header>
        <div className="h-16" /> {/* Header height --> Header pusher */}
        <main className="flex-1">{children}</main>
      </div>
    </>
  )
}
