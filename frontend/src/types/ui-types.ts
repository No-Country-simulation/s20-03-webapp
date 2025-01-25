// types.ts

import { type LucideProps } from 'lucide-react'
import { ForwardRefExoticComponent, ReactNode, RefAttributes } from 'react'

export interface NavItem {
  title: string
  icon?: ForwardRefExoticComponent<
    Omit<LucideProps, 'ref'> & RefAttributes<SVGSVGElement>
  >
  url: string // Esta propiedad es obligatoria
  badge?: string // Opcional
  items?: NavItem[] // Opcional, para subelementos
}

export interface NavGroupProps {
  title: string
  items: NavItem[] // Debe ser un array de NavItem
}
