import { z } from 'zod'

export const ProfileFormSchema = z
  .object({
    name: z.string().min(3, {
      message: 'El nombre debe tener al menos 3 caracteres',
    }),
    lastName: z.string().min(3, {
      message: 'El apellido debe tener al menos 3 caracteres',
    }),
    phone: z.string().min(3, {
      message: 'El teléfono debe tener al menos 3 caracteres',
    }),
    dni: z.string().min(3, {
      message: 'El DNI debe tener al menos 3 caracteres',
    }),
    birthdate: z.string().refine(
      value => {
        const date = new Date(value)
        return date.getFullYear() > 1900 && !isNaN(date.getTime()) // Verifica que el año sea posterior a 1900 y que sea una fecha válida
      },
      {
        message: 'La fecha de nacimiento debe ser posterior a 1900',
      }
    ),
    address: z.string().min(6, {
      message: 'La dirección debe tener al menos 6 caracteres',
    }),
    security_emails: z.boolean().default(false),
  })
  .refine(data => data.security_emails === true, {
    message: 'Debes aceptar los términos y condiciones',
    path: ['security_emails'],
  })

export const SignInFormSchema = z.object({
  email: z.string().email({
    message: 'El correo electrónico debe ser válido',
  }),
  password: z.string().min(8, {
    message: 'La contraseña debe tener al menos 8 caracteres',
  }),
})

export const SignUpFormSchema = z.object({
  name: z.string().min(3, {
    message: 'El nombre debe tener al menos 3 caracteres',
  }),
  lastName: z.string().min(3, {
    message: 'El apellido debe tener al menos 3 caracteres',
  }),
  email: z.string().email({
    message: 'El correo electrónico debe ser válido',
  }),
  password: z.string().min(8, {
    message: 'La contraseña debe tener al menos 8 caracteres',
  }),
})

export const EditUserFormSchema = z.object({
  name: z.string().min(3, {
    message: 'El nombre debe tener al menos 3 caracteres',
  }),
  lastName: z.string().min(3, {
    message: 'El apellido debe tener al menos 3 caracteres',
  }),
  email: z
    .string()
    .min(3, {
      message: 'El correo debe tener al menos 3 caracteres',
    })
    .email({ message: 'El correo debe ser válido' }),
  phone: z.string().min(3, {
    message: 'El teléfono debe tener al menos 3 caracteres',
  }),
  dni: z.string().min(3, {
    message: 'El DNI debe tener al menos 3 caracteres',
  }),
  birthdate: z.string().refine(
    value => {
      const date = new Date(value)
      return date.getFullYear() > 1900 && !isNaN(date.getTime()) // Verifica que el año sea posterior a 1900 y que sea una fecha válida
    },
    {
      message: 'La fecha de nacimiento debe ser posterior a 1900',
    }
  ),
  address: z.string().min(6, {
    message: 'La dirección debe tener al menos 6 caracteres',
  }),
  role: z.enum(['schoolAdmin', 'teacher', 'student', 'parent'], {
    required_error: 'Debe seleccionar un rol',
  }),
  status: z.boolean().default(false),
})

export const CreateSubjectFormSchema = z.object({
  name: z.string().min(3, {
    message: 'El nombre debe tener al menos 3 caracteres',
  }),
  description: z.string(),
})
