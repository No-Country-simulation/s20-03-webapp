'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

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
import { Switch } from '@/components/ui/switch'
import { ProfileFormSchema } from '@/validations/schemas'
import { Textarea } from '@/components/ui/textarea'

const userFromDb = {
  name: 'Eduardo',
  lastName: 'Rodríguez',
  phone: '123456789',
  dni: '987654321',
  address: 'Av. Olivos 4109, B1667 KQU, Tortuguitas, Pcia. de Buenos Aires',
  birthdate: '2003-08-21',
}

export const FormProfile = () => {
  const form = useForm<z.infer<typeof ProfileFormSchema>>({
    resolver: zodResolver(ProfileFormSchema),
    defaultValues: {
      name: userFromDb.name,
      lastName: userFromDb.lastName,
      phone: userFromDb.phone,
      dni: userFromDb.dni,
      address: userFromDb.address,
      birthdate: userFromDb.birthdate,
    },
  })

  const onSubmit = form.handleSubmit(data => {
    alert(JSON.stringify(data, undefined, 2))
  })

  return (
    <Form {...form}>
      <form onSubmit={onSubmit} className="max-w-2xl space-y-8">
        <div className="flex gap-4">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormLabel>Nombres</FormLabel>
                <FormControl>
                  <Input placeholder="Eduardo" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="lastName"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormLabel>Apellidos</FormLabel>
                <FormControl>
                  <Input placeholder="Rodríguez" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <div className="flex gap-4">
          <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormLabel>Teléfono</FormLabel>
                <FormControl>
                  <Input type="phone" placeholder="9 XXX XXX XXXX" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="dni"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormLabel>DNI</FormLabel>
                <FormControl>
                  <Input placeholder="123456789" type="number" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <FormField
          control={form.control}
          name="birthdate"
          render={({ field }) => (
            <FormItem className="w-full">
              <FormLabel>Fecha de nacimiento</FormLabel>
              <FormControl>
                <Input type="date" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="address"
          render={({ field }) => (
            <FormItem className="w-full">
              <FormLabel>Dirección</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Av. Olivos 4109, B1667 KQU, Tortuguitas, Pcia. de Buenos Aires"
                  className="resize-none"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="security_emails"
          render={({ field }) => (
            <FormItem className="flex flex-row items-center justify-between rounded-lg border p-4">
              <div className="space-y-0.5">
                <FormLabel className="text-base">
                  Correos electrónicos de seguridad
                </FormLabel>
                <FormDescription>
                  Recibir correos electrónicos sobre la seguridad de su cuenta.
                </FormDescription>
              </div>
              <FormControl>
                <Switch
                  checked={field.value}
                  onCheckedChange={field.onChange}
                />
              </FormControl>
            </FormItem>
          )}
        />
        <Button type="submit">Actualizar perfil</Button>
      </form>
    </Form>
  )
}
