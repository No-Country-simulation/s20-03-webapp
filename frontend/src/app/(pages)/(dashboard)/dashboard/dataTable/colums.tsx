'use client'

import { type ColumnDef } from '@tanstack/react-table'
import { useState } from 'react'

import { Badge } from '#/src/app/components/ui/badge'
import { Checkbox } from '#/src/app/components/ui/checkbox'
import { Input } from '#/src/app/components/ui/input' // Importar el Input de shadcn
import { Payment } from '#/src/data/payments.data'

export const columns: ColumnDef<Payment>[]  = [
  {
    accessorKey: 'alumnName',
    header: 'Alumno',
    cell: ({ row }) => {
      const status = row.original.status
      const variant =
        {
          success: 'success',
          failed: 'destructive',
        }[status] ?? ('default' as any)

      return <Badge variant={variant}>{row.original.alumnName}</Badge>
    },
  },

  {
    accessorKey: 'status',
    header: () => <div className="pr-4 text-right">Presentism</div>,
    cell: ({ row }) => {
      const [isChecked, setIsChecked] = useState(
        row.original.status === 'success'
      )

      const handleCheckboxChange = (checked: boolean) => {
        setIsChecked(checked)
        row.original.status = checked ? 'success' : 'failed'
        row.toggleSelected(checked)
      }

      return (
        <div className="ml-9 flex w-5 items-center justify-start">
          <Checkbox
            checked={isChecked}
            onCheckedChange={checked =>
              handleCheckboxChange(checked as boolean)
            }
          />
        </div>
      )
    },
  },

  // Nueva columna para ingresar la nota
  {
    accessorKey: 'grade',
    header: () => <div className="text-right">Nota</div>,
    cell: ({ row }) => {
      const [grade, setGrade] = useState(row.original.grade || '')

      const handleGradeChange = (value: string) => {
        setGrade(value)
        row.original.grade = value // Actualizar el valor en los datos originales
      }

      return (
        <div className="flex justify-end ">
          <Input
            value={grade}
            onChange={e => handleGradeChange(e.target.value)}
            className="w-11"
            min={0}
            max={10}
            step={0.1}
          />
        </div>
      )
    },
  },
]