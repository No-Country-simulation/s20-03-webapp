'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { useRouter } from 'next/navigation'
import axios from 'axios'
// import axiosInstance from '@/lib/axiosInstance'; // Si no lo usas aún, puedes dejarlo comentado o borrarlo

import { Button } from '@/components/ui/button'
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'

// Esquema de validación con Zod
const SignInFormSchema = z.object({
  username: z.string().min(3, "El nombre de usuario debe tener al menos 3 caracteres."),
  password: z.string().min(6, "La contraseña debe tener al menos 6 caracteres."),
})

export const FormSignIn = () => {
  const form = useForm<z.infer<typeof SignInFormSchema>>({
    resolver: zodResolver(SignInFormSchema),
    defaultValues: {
      username: '',
      password: '',
    },
  })
  const router = useRouter()

  // --- NUEVA FUNCIÓN: Rellena los datos automáticamente ---
  const handleDemoLogin = (role: 'student' | 'teacher') => {
    // 1. Rellenamos los campos usando setValue de react-hook-form
    form.setValue('username', role === 'student' ? 'student_demo' : 'teacher_demo');
    form.setValue('password', '123456');
    
    // 2. Limpiamos errores previos si los hubiera
    form.clearErrors();
  };
  // --------------------------------------------------------

  const onSubmit = form.handleSubmit(async (data) => {
    axios.defaults.withCredentials = true; 

    try {
      const response = await axios.post(
        'http://localhost:5000/auth/login', 
        data,
      )

      if (!response.data.token) {
        console.error('Error: No se recibió un token del backend')
        return
      }
      
      localStorage.setItem('token', response.data.token);
      
      // Datos del user logueado como 'texto'
      localStorage.setItem('user', JSON.stringify(response.data.user));

      router.push('/dashboard') 

    } catch (error) {
      console.error('Error en el login:', error)
    }
  })

  return (
    <Form {...form}>
      <form onSubmit={onSubmit} className="w-full max-w-md space-y-6 text-gray-700">
        
        {/* --- SECCIÓN NUEVA: BOTONES DEMO --- */}
        <div className="space-y-4">
            <div className="relative">
                <div className="absolute inset-0 flex items-center">
                    <span className="w-full border-t border-gray-300" />
                </div>
                <div className="relative flex justify-center text-xs uppercase">
                    <span className="bg-white px-2 text-gray-500">
                        Accesos Demo (Portfolio)
                    </span>
                </div>
            </div>

            <div className="grid grid-cols-2 gap-3">
                <Button 
                    variant="outline" 
                    type="button" // Importante: type="button" para que no envíe el formulario
                    onClick={() => handleDemoLogin('student')}
                    className="border-blue-200 text-blue-700 hover:bg-blue-50 hover:text-blue-800"
                >
                    🎓 Alumno
                </Button>
                <Button 
                    variant="outline" 
                    type="button"
                    onClick={() => handleDemoLogin('teacher')}
                    className="border-green-200 text-green-700 hover:bg-green-50 hover:text-green-800"
                >
                    👨‍🏫 Profesor
                </Button>
            </div>
        </div>
        {/* ----------------------------------- */}

        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem className="w-full">
              <FormLabel>Usuario o Email</FormLabel>
              <FormControl>
                <Input placeholder="Tu usuario" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem className="w-full">
              <FormLabel>Contraseña</FormLabel>
              <FormControl>
                <Input type="password" placeholder="********" {...field} />
              </FormControl>
              {/* Comenté la descripción para limpiar la UI, descomenta si la quieres
              <FormDescription>
                La contraseña debe tener al menos 6 caracteres.
              </FormDescription> 
              */}
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" className="w-full">
          Iniciar sesión
        </Button>
      </form>
    </Form>
  )
}