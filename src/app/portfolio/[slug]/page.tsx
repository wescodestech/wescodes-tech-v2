import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import Section from '@/components/ui/Section'
import ProjectDetail from '@/components/portfolio/ProjectDetail'
import projectsData from '@/data/projects.json'
import type { Project } from '@/lib/types'

interface ProjectPageProps {
  params: Promise<{
    slug: string
  }>
}

export async function generateStaticParams() {
  return projectsData.map((project) => ({
    slug: project.slug,
  }))
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params
  const project = projectsData.find((p) => p.slug === slug) as Project | undefined

  if (!project) {
    return {
      title: 'Project Not Found',
    }
  }

  return {
    title: project.title,
    description: project.description,
  }
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params
  const project = projectsData.find((p) => p.slug === slug) as Project | undefined

  if (!project) {
    notFound()
  }

  return (
    <Section spacing="xl">
      <ProjectDetail project={project} />
    </Section>
  )
}
