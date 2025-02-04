'use client'

import { type ColumnDef } from '@tanstack/react-table'
import { useState } from 'react'

import { Badge } from '#/src/app/components/ui/badge'
import { Checkbox } from '#/src/app/components/ui/checkbox'
import { Payment } from '#/src/data/payments.data'

export const columns: ColumnDef<Payment>[] = [
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
        <div className="ml-28 flex w-5 items-center justify-start">
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
]
