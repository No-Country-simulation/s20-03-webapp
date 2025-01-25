import { Section } from '@/components/atoms/section'
import USERS_JSON from '@/data/users.json'
import { User } from '#/src/types/user-type'
import { DataTable } from './data-table'
import { columns } from './columns'

async function getData(): Promise<User[]> {
  return JSON.parse(JSON.stringify(USERS_JSON))
}

export default async function UsersPage() {
  const data = await getData()

  return (
    <Section>
      <div className="mb-2 flex flex-wrap items-center justify-between space-y-2">
        <div>
          <h2 className="text-2xl font-bold tracking-tight">
            Lista de usuarios
          </h2>
          <p className="text-muted-foreground">
            Gestione aquí sus usuarios y sus funciones.
          </p>
        </div>
        {/* <UsersPrimaryButtons /> */}
      </div>
      <div className="-mx-4 flex-1 overflow-auto px-4 py-1 lg:flex-row lg:space-x-12 lg:space-y-0">
        <DataTable columns={columns} data={data} />
      </div>
    </Section>
  )
}
