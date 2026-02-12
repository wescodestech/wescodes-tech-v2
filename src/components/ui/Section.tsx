import { HTMLAttributes, forwardRef } from 'react'
import { cn } from '@/lib/utils'

export interface SectionProps extends HTMLAttributes<HTMLElement> {
  container?: boolean
  spacing?: 'sm' | 'md' | 'lg' | 'xl'
}

const Section = forwardRef<HTMLElement, SectionProps>(
  ({ className, container = true, spacing = 'lg', children, ...props }, ref) => {
    const spacingStyles = {
      sm: 'py-8',
      md: 'py-12',
      lg: 'py-16',
      xl: 'py-24',
    }

    const containerStyles = container ? 'container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl' : ''

    return (
      <section ref={ref} className={cn(spacingStyles[spacing], className)} {...props}>
        <div className={cn(containerStyles)}>{children}</div>
      </section>
    )
  }
)

Section.displayName = 'Section'

export default Section
