import { AppSidebar } from '@/components/ui/app-sidebar'
import { Header } from '@/components/molecules/header'

interface LayoutProps {
  children: React.ReactNode
}

export default function Layout({ children }: LayoutProps) {
  return (
    <>
      <AppSidebar />
      <div className="flex w-full flex-col">
        <Header>
          {`<Search/>`}
          <div className="ml-auto flex items-center gap-4">
            {`<ExampleComponente/>`}
          </div>
        </Header>
        <main className="flex-1">{children}</main>
      </div>
    </>
  )
}
