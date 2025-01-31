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

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog'
import { FormEditUser } from '@/components/organisms/forms/form-edit-user'
import { useState } from 'react'
import { textRoles } from '@/lib/constants'
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert'

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
      const { firstName, lastName } = row.original
      return `${firstName || ''} ${lastName || ''}`
    },
  },
  {
    accessorKey: 'dni',
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="DNI" />
    ),
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
        <Badge variant={status ? 'active' : 'inactive'}>
          {status ? 'Activo' : 'Inactivo'}
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
      const roleIcon = {
        schoolAdmin: <UserRoundSearch className="h-4 w-4 text-gray-600" />,
        teacher: <Contact className="h-4 w-4 text-gray-600" />,
        student: <UserRound className="h-4 w-4 text-gray-600" />,
        parent: <Users className="h-4 w-4 text-gray-600" />,
      } as const
      
      return (
        <span className="flex items-center gap-2">
          {roleIcon[role]}
          {textRoles[role]}
        </span>
      )
    },
  },
  {
    id: 'actions',
    accessorKey: 'actions',
    header: undefined,
    cell: ({ row }) => {
      const user = row.original
      const [editDialogOpen, setEditDialogOpen] = useState(false)
      const [deleteDialogOpen, setDeleteDialogOpen] = useState(false)

      const handleEditOpenDialog = () => setEditDialogOpen(true)
      const handleDeleteOpenDialog = () => setDeleteDialogOpen(true)

      return (
        <>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="h-8 w-8 p-0">
                <span className="sr-only">Abrir menú</span>
                <MoreHorizontal className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>

            <DropdownMenuContent align="end">
              <DropdownMenuItem onClick={handleEditOpenDialog}>
                Editar
                <Pencil className="ml-auto h-4 w-4" />
              </DropdownMenuItem>

              <DropdownMenuSeparator />
              <DropdownMenuItem
                className="text-red-500 hover:!bg-red-500 hover:!text-white"
                onClick={handleDeleteOpenDialog}
              >
                Eliminar
                <Trash className="ml-auto h-4 w-4" />
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          {/* Dialog para editar usuarios */}
          <Dialog open={editDialogOpen} onOpenChange={setEditDialogOpen}>
            <DialogContent className="max-h-[95vh] w-full max-w-2xl overflow-y-auto">
              <DialogHeader>
                <DialogTitle>Editar usuario</DialogTitle>
                <DialogDescription>
                  Recuerda darle clic en <strong>Guardar</strong> cuando haya
                  terminado.
                </DialogDescription>
              </DialogHeader>
              <FormEditUser user={user} />
            </DialogContent>
          </Dialog>
          {/* Dialog para eliminar usuarios */}
          <Dialog open={deleteDialogOpen} onOpenChange={setDeleteDialogOpen}>
            <DialogContent className="">
              <DialogHeader>
                <DialogTitle>Eliminar usuario</DialogTitle>
                <DialogDescription className="flex flex-col gap-2">
                  <span>
                    ¿Estás seguro que quieres eliminar{' '}
                    <strong className="text-red-500">{user.email}</strong>?
                  </span>
                  <span>
                    Esta acción eliminará permanentemente del sistema al usuario
                    con el rol de{' '}
                    <strong className="text-red-500">
                      {textRoles[user.role]}
                    </strong>
                    . Esto no se puede deshacer.
                  </span>
                </DialogDescription>
              </DialogHeader>
              <Alert variant="destructive">
                <AlertTitle>¡Cuidado!</AlertTitle>
                <AlertDescription className="text-sm">
                  Por favor, tenga cuidado, esta operación no se puede deshacer.
                </AlertDescription>
              </Alert>
              <DialogFooter>
                <Button
                  // type="submit"
                  variant="destructive"
                  onClick={() => {
                    alert('Eliminado')
                  }}
                >
                  Eliminar
                </Button>
                <Button
                  type="button"
                  onClick={() => setDeleteDialogOpen(false)}
                >
                  Cancelar
                </Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </>
      )
    },
  },
]
