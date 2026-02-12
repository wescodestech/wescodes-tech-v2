import * as Icons from 'lucide-react'
import type { SocialLink } from '@/lib/types'

interface SocialLinksProps {
  links: SocialLink[]
  size?: 'sm' | 'md' | 'lg'
}

export default function SocialLinks({ links, size = 'md' }: SocialLinksProps) {
  const sizeClasses = {
    sm: 'w-10 h-10',
    md: 'w-12 h-12',
    lg: 'w-14 h-14',
  }

  const iconSizes = {
    sm: 'h-5 w-5',
    md: 'h-6 w-6',
    lg: 'h-7 w-7',
  }

  return (
    <div className="flex flex-wrap gap-4">
      {links.map((link) => {
        // Capitalize first letter for icon lookup
        const iconName = link.icon.charAt(0).toUpperCase() + link.icon.slice(1)
        const IconComponent = (Icons[iconName as keyof typeof Icons] as React.ComponentType<{ className?: string }>) || Icons.Link

        return (
          <a
            key={link.platform}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className={`${sizeClasses[size]} flex items-center justify-center rounded-lg bg-gradient-primary text-white hover:opacity-80 transition-smooth shadow-lg hover:shadow-xl hover:scale-110`}
            aria-label={link.platform}
          >
            <IconComponent className={iconSizes[size]} />
          </a>
        )
      })}
    </div>
  )
}
