import { HTMLAttributes, forwardRef } from 'react'
import { cn } from '@/lib/utils'

export interface CardProps extends HTMLAttributes<HTMLDivElement> {
  variant?: 'default' | 'glass' | 'gradient' | 'elevated'
  hover?: boolean
}

const Card = forwardRef<HTMLDivElement, CardProps>(
  ({ className, variant = 'default', hover = false, children, ...props }, ref) => {
    const baseStyles = 'rounded-xl transition-smooth'

    const variants = {
      default:
        'bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 shadow-md',
      glass: 'glass backdrop-blur-lg',
      gradient: 'bg-gradient-primary text-white',
      elevated:
        'bg-white dark:bg-gray-900 shadow-xl border border-gray-100 dark:border-gray-800',
    }

    const hoverStyles = hover
      ? 'hover:shadow-2xl hover:-translate-y-1 hover:scale-105 cursor-pointer'
      : ''

    return (
      <div ref={ref} className={cn(baseStyles, variants[variant], hoverStyles, className)} {...props}>
        {children}
      </div>
    )
  }
)

Card.displayName = 'Card'

export default Card
