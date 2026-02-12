import { NavLink } from './types'

/**
 * Site-wide constants and configuration
 */

export const SITE_NAME = 'Wesley Howell'
export const SITE_TITLE = 'Wesley Howell | Senior Technical Lead'
export const SITE_DESCRIPTION =
  'Senior Technical Lead specializing in building scalable systems and leading high-performance teams.'
export const SITE_URL = 'https://wesleyhowell.com'

export const NAV_LINKS: NavLink[] = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Skills', href: '/skills' },
  { label: 'Portfolio', href: '/portfolio' },
  { label: 'Experience', href: '/experience' },
  { label: 'Contact', href: '/contact' },
]

export const ANIMATION_DURATION = {
  fast: 0.2,
  normal: 0.3,
  slow: 0.5,
}

export const BREAKPOINTS = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  '2xl': 1536,
}

export const SOCIAL_PLATFORMS = {
  github: 'GitHub',
  linkedin: 'LinkedIn',
  twitter: 'Twitter',
  email: 'Email',
  website: 'Website',
} as const

export const PROJECT_CATEGORIES = {
  web: 'Web Development',
  mobile: 'Mobile Development',
  backend: 'Backend Development',
  devops: 'DevOps',
  data: 'Data Engineering',
  ml: 'Machine Learning',
  opensource: 'Open Source',
} as const

export const SKILL_LEVELS = {
  beginner: 'Beginner',
  intermediate: 'Intermediate',
  advanced: 'Advanced',
  expert: 'Expert',
} as const
