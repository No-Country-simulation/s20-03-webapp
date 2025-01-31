import { FormAuthentication } from '@/components/organisms/forms/form-authentication'
import { Section } from '@/components/atoms/section'
import { Separator } from '@/components/ui/separator'

export default function AuthenticationPage() {
  return (
    <Section component="section" className="w-full">
      <h2 className="text-lg font-semibold">Autenticación</h2>
      <p className="text-sm text-muted-foreground">
        Datos para autenticarte; no los compartas con ninguna persona.
      </p>
      <Separator className="my-4" />

      <FormAuthentication />
    </Section>
  )
}
