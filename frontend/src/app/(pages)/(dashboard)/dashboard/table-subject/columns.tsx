'use client'

import { type ColumnDef } from '@tanstack/react-table'
import { useState } from 'react'

import { Badge } from '#/src/app/components/ui/badge'

export type User = {
  type: 'profesor' | 'alumno'
  materia: string
  dni: string
  celular: string
  nombreApellido: string
  correo?: string
  nombreTutor?: string
  dniTutor?: string
  telefonoTutor?: string
  correoTutor?: string
}

export const columns: ColumnDef<User>[] = [
  {
    accessorKey: 'nombreApellido',
    header: 'Nombre y Apellido',
    cell: ({ row }) => {
      const user = row.original
      return <Badge variant="default">{user.nombreApellido}</Badge>
    },
  },
  {
    accessorKey: 'materia',
    header: 'Materia',
  },
  {
    accessorKey: 'dni',
    header: 'DNI',
  },
  {
    accessorKey: 'celular',
    header: 'Celular',
  },
  {
    accessorKey: 'correo',
    header: 'Correo',
    cell: ({ row }) => {
      const user = row.original
      return user.type === 'profesor' ? user.correo : '-'
    },
  },
  {
    accessorKey: 'nombreTutor',
    header: 'Nombre Tutor',
    cell: ({ row }) => {
      const user = row.original
      return user.type === 'alumno' ? user.nombreTutor : '-'
    },
  },
  {
    accessorKey: 'dniTutor',
    header: 'DNI Tutor',
    cell: ({ row }) => {
      const user = row.original
      return user.type === 'alumno' ? user.dniTutor : '-'
    },
  },
  {
    accessorKey: 'telefonoTutor',
    header: 'Teléfono Tutor',
    cell: ({ row }) => {
      const user = row.original
      return user.type === 'alumno' ? user.telefonoTutor : '-'
    },
  },
  {
    accessorKey: 'correoTutor',
    header: 'Correo Tutor',
    cell: ({ row }) => {
      const user = row.original
      return user.type === 'alumno' ? user.correoTutor : '-'
    },
  },
  {
    id: 'rol',
    header: 'Rol',
    cell: ({ row }) => {
      const user = row.original
      const [rol, setRol] = useState(user.type)

      const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const newRol = event.target.value as 'profesor' | 'alumno'
        setRol(newRol)
        row.original.type = newRol // Actualiza el tipo en los datos
      }

      return (
        <select
          value={rol}
          onChange={handleChange}
          className="rounded-md border p-1"
        >
          <option value="profesor">Profesor</option>
          <option value="alumno">Alumno</option>
        </select>
      )
    },
  },
]
