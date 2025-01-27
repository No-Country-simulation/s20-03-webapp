import { Metadata } from 'next'
import Link from 'next/link'

import { Background } from '@/components/molecules/background'
import { FormSignIn } from '@/components/organisms/forms/form-sign-in'

export const metadata: Metadata = {
  title: 'Iniciar sesión',
  // description: ""
}

export default function SignInPage() {
  return (
    <Background justifyEnd>
      <div className="flex h-full w-full flex-col items-center justify-center gap-8 bg-white p-8 backdrop-blur-md lg:w-1/2">
        <div className="flex flex-col gap-2 text-center">
          <h1 className="text-3xl font-bold">Iniciar sesión</h1>
          <h2 className="text-md text-muted-foreground">
            Ingresa tu correo electrónico y contraseña para iniciar sesión
          </h2>
        </div>
        <FormSignIn />
        <div className="flex gap-2 text-center text-sm">
          <span className="text-muted-foreground">¿No tienes una cuenta?</span>
          <Link href="/sign-up" className="hover:underline">
            ¡Regístrate!
          </Link>
        </div>
      </div>
    </Background>
  )
}
