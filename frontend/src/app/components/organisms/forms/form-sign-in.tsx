'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { useRouter } from 'next/navigation'
import axios from 'axios'
import axiosInstance from '@/lib/axiosInstance'; // Asegúrate de importar axiosInstance correctamente


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
  password: z.string().min(8, "La contraseña debe tener al menos 8 caracteres."),
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

  const onSubmit = form.handleSubmit(async (data) => {
    // try {
    //   const response = await axios.post(
    //     'https://s20-03-webapp-production.up.railway.app/auth/login', 
    //     data,
    //     { withCredentials: true }
    //   )
      
    //   localStorage.setItem('token', response.data.token) // Guarda el token en localStorage
    //   console.log('Login exitoso:', response.data)
    //   router.push('/dashboard') // Redirigir a dashboard después del login

    // } catch (error) {
    //   console.error('Error en el login:', error)
    // }
    try {
      const response = await axiosInstance.post('/auth/login', data);  // Usa axiosInstance aquí

      localStorage.setItem('token', response.data.token); // Guarda el token en localStorage
      console.log('Login exitoso:', response.data);
      router.push('/dashboard'); // Redirigir a dashboard después del login
    } catch (error) {
      console.error('Error en el login:', error);
    }
  })

  return (
    <Form {...form}>
      <form onSubmit={onSubmit} className="w-full max-w-md space-y-6">
        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem className="w-full">
              <FormLabel>Usuario</FormLabel>
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
              <FormDescription>
                La contraseña debe tener al menos 8 caracteres.
              </FormDescription>
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
