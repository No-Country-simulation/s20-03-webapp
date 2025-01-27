'use client'

import { type ColumnDef } from '@tanstack/react-table'
import {
  Contact,
  MoreHorizontal,
  Pencil,
  Trash,
  UserRound,
  UserRoundSearch,
  Users,
} from 'lucide-react'

import { DataTableColumnHeader } from '@/components/date-table/data-table-column-header'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Checkbox } from '@/components/ui/checkbox'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { User } from '@/types/user-type'

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
    header: 'Nombre completo',
    cell: ({ row }) => {
      const { first, last } = row.original.name
      return `${first || ''} ${last || ''}`
    },
  },
  {
    accessorKey: 'email',
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Correo electrónico" />
    ),
  },
  {
    accessorKey: 'phone',
    header: 'Teléfono',
  },
  {
    accessorKey: 'status',
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Status" />
    ),
    cell: ({ row }) => {
      const status = row.original.status
      return (
        <Badge variant={status === 'active' ? 'active' : 'inactive'}>
          {status === 'active' ? 'Activo' : 'Inactivo'}
        </Badge>
      )
    },
  },
  {
    accessorKey: 'role',
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Rol" />
    ),
    cell: ({ row }) => {
      const role = row.original.role
      const roleText = {
        schoolAdmin: 'Coordinador',
        teacher: 'Profesor',
        student: 'Estudiante',
        parent: 'Tutor',
      } as const
      const roleIcon = {
        schoolAdmin: <UserRoundSearch className="h-4 w-4 text-gray-600" />,
        teacher: <Contact className="h-4 w-4 text-gray-600" />,
        student: <UserRound className="h-4 w-4 text-gray-600" />,
        parent: <Users className="h-4 w-4 text-gray-600" />,
      } as const
      return (
        <span className="flex items-center gap-2">
          {roleIcon[role]}
          {roleText[role]}
        </span>
      )
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
