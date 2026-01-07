"use client"

import { ColumnDef } from "@tanstack/react-table"
import { MoreHorizontal, ArrowUpDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

// Definimos el tipo basado en TU schema de Mongoose
export type User = {
  _id: string
  username: string
  name: string
  lastname: string
  email: string
  role: string
  active: boolean
  phonenumber: string
}

export const columns: ColumnDef<User>[] = [
  {
    accessorKey: "username", // Debe coincidir con DB: 'username'
    header: "Usuario",
  },
  {
    accessorKey: "name", // Debe coincidir con DB: 'name'
    header: "Nombre",
  },
  {
    accessorKey: "lastname", // Debe coincidir con DB: 'lastname'
    header: "Apellido",
  },
  {
    accessorKey: "email", // Debe coincidir con DB: 'email'
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Email
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      )
    },
  },
  {
    accessorKey: "role", // Debe coincidir con DB: 'role'
    header: "Rol",
    cell: ({ row }) => {
      // Opcional: Darle formato bonito al rol
      const role = row.getValue("role") as string
      return <div className="capitalize font-medium">{role}</div>
    }
  },
  {
    accessorKey: "active", // Debe coincidir con DB: 'active'
    header: "Estado",
    cell: ({ row }) => {
      const isActive = row.getValue("active") as boolean
      return (
        <div className={isActive ? "text-green-600" : "text-red-500"}>
          {isActive ? "Activo" : "Inactivo"}
        </div>
      )
    },
  },
  {
    id: "actions",
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
            <DropdownMenuLabel>Acciones</DropdownMenuLabel>
            <DropdownMenuItem
              onClick={() => navigator.clipboard.writeText(user.email)}
            >
              Copiar Email
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Ver detalles</DropdownMenuItem>
            <DropdownMenuItem className="text-red-600">Eliminar usuario</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      )
    },
  },
]