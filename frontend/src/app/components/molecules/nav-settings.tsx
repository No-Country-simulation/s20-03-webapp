import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Palette, User } from 'lucide-react'

export const NavSettings = () => {
  return (
    <nav className="flex w-full gap-2 md:w-[240px] md:flex-col">
      <Button variant="ghost" className="justify-start" asChild>
        <Link href="/dashboard/settings">
          <User />
          Perfil
        </Link>
      </Button>
      <Button variant="ghost" className="justify-start" asChild>
        <Link href="/dashboard/settings/appearance">
          <Palette />
          Apariencia
        </Link>
      </Button>
    </nav>
  )
}
