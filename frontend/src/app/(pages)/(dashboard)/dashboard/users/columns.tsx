'use client'

import { Badge } from '#/src/app/components/ui/badge'
import { Button } from '#/src/app/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { User } from '#/src/types/user-type'
import { ColumnDef } from '@tanstack/react-table'
import { MoreHorizontal, Pencil, Trash } from 'lucide-react'
import { Checkbox } from '#/src/app/components/ui/checkbox'
import Link from 'next/link'

export const columns: ColumnDef<User>[] = [
  {
    id: 'select',
    header: ({ table }) => (
      <Checkbox
        checked={
          table.getIsAllPageRowsSelected() ||
          (table.getIsSomePageRowsSelected() && 'indeterminate')
        }
        onCheckedChange={value => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={value => row.toggleSelected(!!value)}
        aria-label="Select row"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: 'name',
    header: 'Nombre',
    cell: ({ row }) => {
      const { first, last } = row.original.name
      return `${first || ''} ${last || ''}`
    },
  },
  {
    accessorKey: 'username',
    header: 'Usuario',
  },
  {
    accessorKey: 'email',
    header: 'Correo electrónico',
    cell: ({ row }) => {
      const email = row.original.email
      return (
        <Link
          className="hover:underline"
          // href={`mailto:${email}`}
          href={'#'}
        >
          {email}
        </Link>
      )
    },
  },
  {
    accessorKey: 'phone',
    header: 'Teléfono',
  },
  {
    accessorKey: 'status',
    header: 'Status',
    cell: ({ row }) => {
      const status = row.original.status
      return (
        <Badge variant={status ? 'default' : 'destructive'}>
          {status ? 'Activo' : 'Inactivo'}
        </Badge>
      )
    },
  },
  {
    accessorKey: 'role',
    header: 'Rol',
    cell: ({ row }) => {
      const role = row.original.role
      const roleBadgeVariants = {
        schoolAdmin: 'default',
        teacher: 'secondary',
        student: 'destructive',
        parent: 'outline',
      } as const
      const roleText = {
        schoolAdmin: 'Coordinador',
        teacher: 'Profesor',
        student: 'Estudiante',
        parent: 'Tutor',
      } as const
      return <Badge variant={roleBadgeVariants[role]}>{roleText[role]}</Badge>
    },
  },
  {
    id: 'actions',
    cell: ({ row }) => {
      const user = row.original

      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">Abrir menú</span>
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem
              onClick={() => {
                alert(`Editar: ${user.name.first} ${user.name.last}`)
              }}
            >
              Editar
              <Pencil className="ml-auto h-4 w-4" />
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem
              onClick={() => {
                alert(`Eliminar: ${user.name.first} ${user.name.last}`)
              }}
            >
              Eliminar
              <Trash className="ml-auto h-4 w-4" />
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      )
    },
  },
]
