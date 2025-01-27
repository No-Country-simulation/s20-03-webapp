'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'

const EditUserFormSchema = z.object({
  name: z.string().min(2, {
    message: 'El nombre debe tener al menos 2 caracteres',
  }),
})

export const FormEditUser = () => {
  const form = useForm<z.infer<typeof EditUserFormSchema>>({
    resolver: zodResolver(EditUserFormSchema),
    defaultValues: {
      name: '',
    },
  })

  const onSubmit = form.handleSubmit(data => {
    alert(JSON.stringify(data, undefined, 2))
  })

  return (
    <Form {...form}>
      <form onSubmit={onSubmit} className="w-full max-w-3xl space-y-6">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem className="w-full">
              <FormLabel>Nombres</FormLabel>
              <FormControl>
                <Input placeholder="John" {...field} />
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
