import { JSX } from 'react'

import { cn } from '@/lib/utils'

/**
 * A flexible section component that renders a specified HTML element or component with additional styling.
 *
 * @param {SectionProps} props - The props for the section component.
 * @param {React.ReactNode} props.children - The content to be rendered within the section.
 * @param {string} [props.className] - Optional additional CSS class names to apply to the section.
 * @param {keyof JSX.IntrinsicElements | React.ComponentType<any>} [props.component='div'] -
 *   The type of HTML element or React component to render as the section.
 * @returns {JSX.Element} A JSX element representing the section.
 */

type SectionProps = {
  children: React.ReactNode
  className?: string
  component?: keyof JSX.IntrinsicElements | React.ComponentType<any>
}

export const Section = ({
  children,
  className,
  component: Component = 'div',
}: SectionProps) => {
  return (
    <Component className={cn('px-5 md:px-8 lg:px-12 2xl:px-16', className)}>
      {children}
    </Component>
  )
}
