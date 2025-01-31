'use client'
import { toast } from '#/src/hooks/use-toast'
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
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

const AuthenticationFormSchema = z.object({
  email: z.string().email(),
  password: z
    .string()
    .min(8, { message: 'La contraseña debe tener al menos 8 caracteres' }),
})

export const FormAuthentication = () => {
  const form = useForm<z.infer<typeof AuthenticationFormSchema>>({
    resolver: zodResolver(AuthenticationFormSchema),
    defaultValues: {
      email: 'email@example.com',
      password: '',
    },
  })

  const onSubmit = form.handleSubmit(data => {
    // alert(JSON.stringify(data, undefined, 2))
    toast({
      title: 'No disponible',
      description: 'Esta funcionalidad se encuentra en desarrollo',
    })
  })

  return (
    <Form {...form}>
      <form onSubmit={onSubmit} className="max-w-2xl space-y-8">
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem className="w-full">
              <FormLabel>Correo electrónico</FormLabel>
              <FormControl>
                <Input
                  type="email"
                  readOnly
                  placeholder="email@example.com"
                  {...field}
                />
              </FormControl>
              <FormDescription>
                El correo electrónico no puede ser cambiado
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="flex gap-4">
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormLabel>Contraseña</FormLabel>
                <FormControl>
                  <Input type="password" placeholder="********" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <Button type="submit">Cambiar contraseña</Button>
      </form>
    </Form>
  )
}
