'use client'

import { motion } from 'framer-motion'
import * as Icons from 'lucide-react'
import SkillCard from './SkillCard'
import type { SkillCategory as SkillCategoryType } from '@/lib/types'

interface SkillCategoryProps {
  category: SkillCategoryType
  index: number
}

export default function SkillCategory({ category, index }: SkillCategoryProps) {
  // Get the icon component dynamically
  const IconComponent = (Icons[category.icon as keyof typeof Icons] as React.ComponentType<{ className?: string }>) || Icons.Code

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      className="mb-12"
    >
      <div className="flex items-center mb-6">
        <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-gradient-primary text-white mr-4">
          <IconComponent className="h-6 w-6" />
        </div>
        <h2 className="text-3xl font-bold font-heading">{category.name}</h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {category.skills.map((skill, skillIndex) => (
          <motion.div
            key={skill.name}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.1 + skillIndex * 0.05 }}
          >
            <SkillCard skill={skill} />
          </motion.div>
        ))}
      </div>
    </motion.div>
  )
}
