'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, ExternalLink, Github } from 'lucide-react'
import Card from '@/components/ui/Card'
import Badge from '@/components/ui/Badge'
import Button from '@/components/ui/Button'
import Section from '@/components/ui/Section'
import projectsData from '@/data/projects.json'
import type { Project } from '@/lib/types'

export default function FeaturedProjects() {
  const featuredProjects = projectsData.filter((project) => project.featured) as Project[]

  return (
    <Section spacing="xl" className="bg-white dark:bg-gray-950">
      <div className="text-center mb-12">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl sm:text-5xl font-bold font-heading mb-4"
        >
          Featured <span className="bg-gradient-secondary bg-clip-text text-transparent">Projects</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto"
        >
          A selection of my recent work showcasing expertise in scalable systems and modern architectures
        </motion.p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
        {featuredProjects.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
          >
            <Link href={`/portfolio/${project.slug}`}>
              <Card hover className="h-full p-6 group">
                <div className="mb-4">
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={400}
                    height={240}
                    className="w-full h-48 object-cover rounded-lg"
                  />
                </div>

                <h3 className="text-2xl font-bold font-heading mb-3 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-smooth">
                  {project.title}
                </h3>

                <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-3">
                  {project.description}
                </p>

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
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center"
      >
        <Link href="/portfolio">
          <Button variant="outline" size="lg">
            View All Projects
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </Link>
      </motion.div>
    </Section>
  )
}
