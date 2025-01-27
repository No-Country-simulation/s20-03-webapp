import { Section } from '@/components/atoms/section'
import { NavSettings } from '@/components/molecules/nav-settings'
import { Separator } from '@/components/ui/separator'

export default function SettingLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <Section>
      <div className="space-y-2">
        <h2 className="text-2xl font-bold">{`Configuraciones`}</h2>
        <p className="text-muted-foreground">
          {`Gestione la configuración de su cuenta y establezca las preferencias de
        correo electrónico.`}
        </p>
      </div>
      <Separator className="my-4" />
      <div className="grid grid-cols-1 gap-4 md:grid-cols-[auto_1fr]">
        <NavSettings />
        <div className="w-full">{children}</div>
      </div>
    </Section>
  )
}
