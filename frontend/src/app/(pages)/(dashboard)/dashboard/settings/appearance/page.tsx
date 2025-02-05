import { Metadata } from 'next'

import { Section } from '@/components/atoms/section'
import { ThemeSwitcher } from '@/components/organisms/theme-switcher'
import { Separator } from '@/components/ui/separator'

export const metadata: Metadata = {
  title: 'Apariencia',
}

export default function AppearancePage() {
  return (
    <>
      <Section component="section" className="w-full">
        <h2 className="text-lg font-semibold">Apariencia</h2>
        <p className="text-sm text-muted-foreground">
          Personaliza la apariencia de la aplicación. Cambia automáticamente
          entre los temas claro y oscuro.
        </p>
        <Separator className="my-4" />
        <ThemeSwitcher />
      </Section>
    </>
  )
}
