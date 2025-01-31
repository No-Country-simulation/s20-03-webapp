'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
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
import { Button } from '@/components/ui/button'
import { EditUserFormSchema } from '@/validations/schemas'
import { Textarea } from '@/components/ui/textarea'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { Switch } from '@/components/ui/switch'
import { User } from '@/types/user-type'

const roles = [
  {
    value: 'schoolAdmin',
    label: 'Coordinador',
  },
  {
    value: 'teacher',
    label: 'Profesor',
  },
  {
    value: 'student',
    label: 'Estudiante',
  },
  {
    value: 'parent',
    label: 'Tutor',
  },
]

export const FormEditUser = ({ user }: { user: User }) => {
  console.log({ user })
  const form = useForm<z.infer<typeof EditUserFormSchema>>({
    resolver: zodResolver(EditUserFormSchema),
    defaultValues: {
      name: user.firstName,
      lastName: user.lastName,
      email: user.email,
      phone: user.phone,
      dni: user.dni,
      address: user.address,
      birthdate: user.birthdate,
      status: user.status,
      role: user.role,
    },
  })

  const onSubmit = form.handleSubmit(data => {
    alert(JSON.stringify(data, undefined, 2))
  })

  return (
    <Form {...form}>
      <form onSubmit={onSubmit} className="w-full space-y-6">
        <div className="flex gap-4">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormLabel>Nombres</FormLabel>
                <FormControl>
                  <Input type="text" placeholder="John" {...field} />
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
                  <Input type="text" placeholder="Doe" {...field} />
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
          name="email"
          render={({ field }) => (
            <FormItem className="w-full">
              <FormLabel>Correo electrónico</FormLabel>
              <FormControl>
                <Input
                  readOnly
                  type="email"
                  placeholder="email@example.com"
                  {...field}
                />
              </FormControl>
              <FormDescription>
                No se puede cambiar el correo electrónico
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="flex gap-4">
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
            name="role"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormLabel>Rol</FormLabel>
                <FormControl>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Seleccione un rol" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {roles.map(role => (
                        <SelectItem key={role.value} value={role.value}>
                          {role.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <FormField
          control={form.control}
          name="status"
          render={({ field }) => (
            <FormItem className="flex flex-row items-center justify-between rounded-lg border p-3 shadow-sm">
              <div className="space-y-0.5">
                <FormLabel>Status</FormLabel>
                <FormDescription>
                  Si el status es inactivo, el usuario no podrá acceder a la
                  aplicación.
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
        <Button type="submit" className="w-full">
          Guardar
        </Button>
      </form>
    </Form>
  )
}
