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
      {/* 
      - Falta el título dinámico según el course
      - Botón para "Guardar/Subir/Enviar" el presentismo
      - Botón para "Enviar/Crear" asignación y/o examen
      */}
      <UpdateGrades names={studentNames} />

      <DataTable columns={columns} data={payments} />
    </Section>
  )
}
