'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowLeft, ExternalLink, Github, Calendar } from 'lucide-react'
import Button from '@/components/ui/Button'
import Badge from '@/components/ui/Badge'
import Card from '@/components/ui/Card'
import { formatDate } from '@/lib/utils'
import type { Project } from '@/lib/types'

interface ProjectDetailProps {
  project: Project
}

export default function ProjectDetail({ project }: ProjectDetailProps) {
  return (
    <div className="space-y-8">
      {/* Back Button */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.3 }}
      >
        <Link href="/portfolio">
          <Button variant="ghost">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Portfolio
          </Button>
        </Link>
      </motion.div>

      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        <div className="mb-6">
          {project.category && (
            <Badge variant="secondary" size="md" className="mb-4">
              {project.category}
            </Badge>
          )}
          <h1 className="text-4xl sm:text-5xl font-bold font-heading mb-4">
            {project.title}
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400">
            {project.description}
          </p>
        </div>

        {/* Meta Info */}
        <div className="flex flex-wrap gap-6 mb-6">
          {project.startDate && (
            <div className="flex items-center text-sm text-gray-600 dark:text-gray-400">
              <Calendar className="h-4 w-4 mr-2" />
              {formatDate(project.startDate)} - {formatDate(project.endDate || 'Present')}
            </div>
          )}
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-sm text-primary-600 dark:text-primary-400 hover:underline"
            >
              <ExternalLink className="h-4 w-4 mr-2" />
              View Live Demo
            </a>
          )}
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-sm text-gray-600 dark:text-gray-400 hover:underline"
            >
              <Github className="h-4 w-4 mr-2" />
              View Source Code
            </a>
          )}
        </div>

        {/* Technologies */}
        <div className="flex flex-wrap gap-2">
          {project.technologies.map((tech) => (
            <Badge key={tech} variant="primary">
              {tech}
            </Badge>
          ))}
        </div>
      </motion.div>

      {/* Project Image */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <Card className="overflow-hidden">
          <div className="relative w-full h-96 bg-gradient-to-br from-primary-500 to-secondary-500 flex items-center justify-center text-white text-6xl font-bold">
            <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover"
                  priority
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
          </div>
        </Card>
      </motion.div>

      {/* Long Description */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        <Card className="p-8">
          <h2 className="text-2xl font-bold font-heading mb-4">About This Project</h2>
          <div className="prose dark:prose-invert max-w-none">
            {project.longDescription.split('\n\n').map((paragraph, index) => (
              <p key={index} className="text-gray-600 dark:text-gray-400 mb-4">
                {paragraph}
              </p>
            ))}
          </div>
        </Card>
      </motion.div>

      {/* Highlights */}
      {project.highlights && project.highlights.length > 0 && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <Card className="p-8">
            <h2 className="text-2xl font-bold font-heading mb-4">Key Highlights</h2>
            <ul className="space-y-3">
              {project.highlights.map((highlight, index) => (
                <li key={index} className="flex items-start">
                  <span className="inline-block w-2 h-2 bg-primary-500 rounded-full mt-2 mr-3 flex-shrink-0" />
                  <span className="text-gray-600 dark:text-gray-400">{highlight}</span>
                </li>
              ))}
            </ul>
          </Card>
        </motion.div>
      )}
    </div>
  )
}
