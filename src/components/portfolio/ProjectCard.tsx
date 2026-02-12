import Link from 'next/link'
import Image from 'next/image'
import { ExternalLink, Github } from 'lucide-react'
import Card from '@/components/ui/Card'
import Badge from '@/components/ui/Badge'
import type { Project } from '@/lib/types'

interface ProjectCardProps {
  project: Project
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Link href={`/portfolio/${project.slug}`}>
      <Card hover className="h-full p-6 group">
        {/* Project Image/Placeholder */}
        <div className="relative w-full h-48 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-lg mb-4 flex items-center justify-center text-white text-4xl font-bold overflow-hidden">
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover"
            priority
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
        </div>

        {/* Category Badge */}
        {project.category && (
          <Badge variant="secondary" size="sm" className="mb-3">
            {project.category}
          </Badge>
        )}

        {/* Title */}
        <h3 className="text-2xl font-bold font-heading mb-3 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-smooth">
          {project.title}
        </h3>

        {/* Description */}
        <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-3">
          {project.description}
        </p>

        {/* Technologies */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.slice(0, 4).map((tech) => (
            <Badge key={tech} variant="primary" size="sm">
              {tech}
            </Badge>
          ))}
          {project.technologies.length > 4 && (
            <Badge variant="outline" size="sm">
              +{project.technologies.length - 4}
            </Badge>
          )}
        </div>
      </Card>
    </Link>
  )
}
