import Link from 'next/link'

import { Section } from '@/components/atoms/section'
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '#/src/app/components/ui/card'

export default function UsersPage() {
  return (
    <Section>
      {/* --------------------------- */}
      {/* --------BORRAR------------- */}
      <Card className="w-fit border-2 border-red-500">
        <CardHeader>
          <CardTitle>Tabla de administración de usuarios</CardTitle>
        </CardHeader>

        <CardFooter>
          <Link
            href="https://shadcn-admin.netlify.app/users"
            className="underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            https://shadcn-admin.netlify.app/users
          </Link>
        </CardFooter>
      </Card>
      {/* --------------------------- */}
    </Section>
  )
}
