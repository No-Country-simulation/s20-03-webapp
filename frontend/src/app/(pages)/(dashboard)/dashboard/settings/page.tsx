import { Metadata } from 'next'

import { Section } from '@/components/atoms/section'
import { FormProfile } from '@/components/organisms/forms/form-profile'
import { Separator } from '@/components/ui/separator'

export const metadata: Metadata = {
  title: 'Configuración',
}

export default function ProfilePage() {
  return (
    <Section component="section" className="w-full">
      <h2 className="text-lg font-semibold">Perfil</h2>
      <p className="text-sm text-muted-foreground">
        Así es como te verán los demás en el sitio.
      </p>
      <Separator className="my-4" />

      <FormProfile />
    </Section>
  )
}
