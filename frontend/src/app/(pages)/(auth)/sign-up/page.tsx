import { FormSignUp } from '@/components/organisms/forms/form-sign-up'
import { Background } from '@/components/molecules/background'
import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Registrarse',
  // description: ""
}

export default function SignUpPage() {
  return (
    <Background>
      <div className="flex h-full w-full flex-col items-center justify-center gap-8 bg-white p-8 backdrop-blur-md lg:w-1/2">
        <div className="flex flex-col gap-2 text-center">
          <h1 className="text-3xl font-bold">Registrarse</h1>
          <h2 className="text-md text-muted-foreground">
            Ingresa tus datos para registrarte
          </h2>
        </div>
        <FormSignUp />
        <div className="flex gap-2 text-center text-sm">
          <span className="text-muted-foreground">¿Ya tienes una cuenta?</span>
          <Link href="/sign-in" className="hover:underline">
            ¡Inicia sesión!
          </Link>
        </div>
      </div>
    </Background>
  )
}
