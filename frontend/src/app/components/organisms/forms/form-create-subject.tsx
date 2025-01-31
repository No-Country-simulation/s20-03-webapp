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
import { Textarea } from '@/components/ui/textarea'
import { CreateSubjectFormSchema } from '@/validations/schemas'

// const subjectSchema = new Schema({
//   name: { type: String, required: true, unique: true },   // Nombre único de la materia
//   description: { type: String, required: false },        // Descripción opcional
//   teacher: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true }, // Profesor responsable
// }, { timestamps: true });

export const FormCreateSubject = () => {
  const form = useForm<z.infer<typeof CreateSubjectFormSchema>>({
    resolver: zodResolver(CreateSubjectFormSchema),
    defaultValues: {
      name: '',
      description: '',
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
              <FormLabel>Nombre</FormLabel>
              <FormControl>
                <Input
                  required
                  type="text"
                  placeholder="Matemática III-2025"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="description"
          render={({ field }) => (
            <FormItem className="w-full">
              <FormLabel>Descripción</FormLabel>
              <FormControl>
                <Textarea placeholder="" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="flex flex-col">
          <span className="font-bold italic text-red-500">
            ¿Cómo se gestiona el seleccionar profesor?
          </span>
          <span className="font-bold italic text-red-500">
            ¿ID del profesor?
          </span>
          <span className="font-bold italic text-red-500">
            ¿Un fetch con todos los profesores?
          </span>
        </div>
        <Button type="submit" className="w-full">
          Crear materia
        </Button>
      </form>
    </Form>
  )
}
