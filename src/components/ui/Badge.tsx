import { HTMLAttributes, forwardRef } from 'react'
import { cn } from '@/lib/utils'

export interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  variant?: 'default' | 'primary' | 'secondary' | 'success' | 'warning' | 'outline'
  size?: 'sm' | 'md' | 'lg'
}

const Badge = forwardRef<HTMLSpanElement, BadgeProps>(
  ({ className, variant = 'default', size = 'md', children, ...props }, ref) => {
    const baseStyles =
      'inline-flex items-center justify-center font-medium rounded-full transition-smooth'

    const variants = {
      default: 'bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200',
      primary: 'bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300',
      secondary:
        'bg-secondary-100 dark:bg-secondary-900/30 text-secondary-700 dark:text-secondary-300',
      success: 'bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300',
      warning: 'bg-yellow-100 dark:bg-yellow-900/30 text-yellow-700 dark:text-yellow-300',
      outline:
        'border-2 border-primary-500 text-primary-600 dark:text-primary-400 bg-transparent',
    }

    const sizes = {
      sm: 'text-xs px-2 py-0.5',
      md: 'text-sm px-3 py-1',
      lg: 'text-base px-4 py-1.5',
    }

    return (
      <span ref={ref} className={cn(baseStyles, variants[variant], sizes[size], className)} {...props}>
        {children}
      </span>
    )
  }
)

Badge.displayName = 'Badge'

export default Badge
