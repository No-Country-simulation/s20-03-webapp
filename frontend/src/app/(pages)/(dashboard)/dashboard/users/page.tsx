/* eslint-disable unicorn/prefer-structured-clone */
'use client'

import { columns, User } from './columns'
import { DataTable } from './data-table'
import { useUsers } from '@/hooks/useUser'
import { ColumnDef } from '@tanstack/react-table'

export default function UsersPage() {
  // 1 línea de código que hace todo el trabajo sucio
  const { users, loading, error } = useUsers();

  if (loading) return <p>Cargando...</p>;
  if (error) return <p className="text-red-500">{error}</p>;

  return (
    <div className="container mx-auto py-10">
      <h1 className="text-2xl font-bold mb-4">Lista de Usuarios</h1>
      <DataTable columns={columns as any} data={users} />
    </div>
  )
}