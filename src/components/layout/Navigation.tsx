'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils'
import { NAV_LINKS } from '@/lib/constants'

export default function Navigation() {
  const pathname = usePathname()

  return (
    <nav className="hidden md:flex items-center space-x-1">
      {NAV_LINKS.map((link) => {
        const isActive = pathname === link.href
        return (
          <Link
            key={link.href}
            href={link.href}
            className={cn(
              'px-4 py-2 rounded-lg text-sm font-medium transition-smooth',
              isActive
                ? 'bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300'
                : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800'
            )}
          >
            {link.label}
          </Link>
        )
      })}
    </nav>
  )
}
