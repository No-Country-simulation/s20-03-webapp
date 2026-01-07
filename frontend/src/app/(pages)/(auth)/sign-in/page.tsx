import { Metadata } from 'next'
import Link from 'next/link'

// Asegúrate de que estas rutas de importación sean las correctas en tu proyecto
import { Background } from '@/components/molecules/background'
import { FormSignIn } from '@/components/organisms/forms/form-sign-in'

export const metadata: Metadata = {
  title: 'Iniciar sesión',
  description: "Ingresa a ClassRun para gestionar tus clases."
}

export default function SignInPage() {
  // YA NO NECESITAS NADA AQUÍ.
  // La lógica está encapsulada dentro de <FormSignIn />

  return (
    <Background justifyEnd>
      <div className="flex h-full w-full flex-col items-center justify-center gap-8 bg-white p-8 backdrop-blur-md lg:w-1/2">
        
        {/* Encabezado */}
        <div className="flex flex-col gap-2 text-center">
          <h1 className="text-3xl font-bold dark:text-gray-900">
            Iniciar sesión
          </h1>
          <h2 className="text-md text-muted-foreground">
            Ingresa tu nombre de usuario y contraseña
          </h2>
        </div>

        {/* El formulario (que ahora incluye los botones Demo dentro) */}
        <FormSignIn />

        {/* Pie de página (Registro) */}
        <div className="flex gap-2 text-center text-sm">
          <span className="text-muted-foreground">¿No tienes una cuenta?</span>
          <Link href="/sign-up" className="hover:underline dark:text-black font-medium">
            ¡Regístrate!
          </Link>
        </div>
      </div>
    </Background>
  )
}