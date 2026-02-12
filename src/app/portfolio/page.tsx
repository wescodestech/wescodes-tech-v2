import type { Metadata } from 'next'
import Section from '@/components/ui/Section'
import ProjectGrid from '@/components/portfolio/ProjectGrid'
import projectsData from '@/data/projects.json'
import type { Project } from '@/lib/types'

export const metadata: Metadata = {
  title: 'Portfolio',
  description:
    'Explore my portfolio of projects including distributed systems, real-time analytics, microservices platforms, and more.',
}

export default function PortfolioPage() {
  const projects = projectsData as Project[]

  return (
    <Section spacing="xl">
      <div className="text-center mb-12">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-heading mb-4">
          My <span className="bg-gradient-secondary bg-clip-text text-transparent">Portfolio</span>
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
          A showcase of selected projects demonstrating expertise in building scalable systems, leading technical
          initiatives, and delivering high-impact solutions.
        </p>
      </div>

      <ProjectGrid projects={projects} />
    </Section>
  )
}
