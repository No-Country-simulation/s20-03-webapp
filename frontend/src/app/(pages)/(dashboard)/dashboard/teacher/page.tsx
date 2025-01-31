'use client'

import { columns } from '@/app/(pages)/(dashboard)/dashboard/dataTable//colums'
import { DataTable } from '@/app/(pages)/(dashboard)/dashboard/dataTable/data-table'
import { payments } from '@/data/payments.data'
import { Section } from '#/src/app/components/atoms/section'
import { UpdateGrades } from '#/src/app/components/molecules/card-grades'

export default function TeacherPage() {
  const studentNames = payments.map(payment => payment.alumnName)

  return (
    <Section className="grid grid-cols-3 gap-4" component={'section'}>
      <UpdateGrades names={studentNames} />

      <DataTable columns={columns} data={payments} />
    </Section>
  )
}
