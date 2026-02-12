'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import Badge from '@/components/ui/Badge'
import Button from '@/components/ui/Button'
import Section from '@/components/ui/Section'
import skillsData from '@/data/skills.json'

export default function SkillsPreview() {
  // Get top skills from first few categories
  const topSkills = skillsData.categories
    .slice(0, 3)
    .flatMap((category) => category.skills.slice(0, 4))
    .map((skill) => skill.name)

  return (
    <Section spacing="xl" className="bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-900 dark:to-gray-950">
      <div className="text-center mb-12">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl sm:text-5xl font-bold font-heading mb-4"
        >
          Technical <span className="bg-gradient-secondary bg-clip-text text-transparent">Expertise</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto"
        >
          A versatile skill set spanning full-stack development, cloud architecture, and technical leadership
        </motion.p>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2 }}
        className="flex flex-wrap justify-center gap-3 mb-12"
      >
        {topSkills.map((skill, index) => (
          <motion.div
            key={skill}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.05 * index }}
          >
            <Badge variant="primary" size="lg" className="text-base hover:scale-110 transition-transform cursor-default">
              {skill}
            </Badge>
          </motion.div>
        ))}
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center"
      >
        <Link href="/skills">
          <Button variant="gradient" size="lg">
            View All Skills
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </Link>
      </motion.div>
    </Section>
  )
}
