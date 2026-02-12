// Core type definitions for the portfolio site

export interface Profile {
  name: string
  title: string
  tagline: string
  mission: string
  vision: string
  bio: string
  email: string
  location: string
  profileImage: string
  resumeUrl?: string
}

export interface Project {
  id: string
  slug: string
  title: string
  description: string
  longDescription: string
  image: string
  images?: string[]
  technologies: string[]
  category: string
  featured: boolean
  liveUrl?: string
  githubUrl?: string
  startDate?: string
  endDate?: string
  highlights?: string[]
}

export interface SkillCategory {
  name: string
  icon: string
  skills: Skill[]
}

export interface Skill {
  name: string
  level?: 'beginner' | 'intermediate' | 'advanced' | 'expert'
  yearsOfExperience?: number
}

export interface Experience {
  id: string
  company: string
  position: string
  location: string
  startDate: string
  endDate: string | 'Present'
  description: string
  achievements: string[]
  technologies: string[]
  type: 'full-time' | 'part-time' | 'contract' | 'freelance' | 'Intern'
}

export interface Education {
  id: string
  institution: string
  degree: string
  field: string
  location: string
  startDate?: string
  endDate?: string
  gpa?: string
  honors?: string[]
  description?: string
}

export interface SocialLink {
  platform: string
  url: string
  icon: string
  username?: string
}

export interface NavLink {
  label: string
  href: string
}

export interface Metadata {
  title: string
  description: string
  keywords?: string[]
  ogImage?: string
}
