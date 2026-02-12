import type { Metadata } from 'next'
import Section from '@/components/ui/Section'
import SkillCategory from '@/components/skills/SkillCategory'
import skillsData from '@/data/skills.json'
import type { SkillCategory as SkillCategoryType } from '@/lib/types'

export const metadata: Metadata = {
  title: 'Skills',
  description:
    'Explore my technical expertise spanning languages, frameworks, cloud infrastructure, databases, architecture patterns, and leadership capabilities.',
}

export default function SkillsPage() {
  const categories = skillsData.categories as SkillCategoryType[]

  return (
    <Section spacing="xl">
      <div className="text-center mb-12">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-heading mb-4">
          Technical <span className="bg-gradient-secondary bg-clip-text text-transparent">Skills</span>
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
          An overview of my technical expertise, tools, and capabilities built over years of
          hands-on experience in software engineering and technical leadership.
        </p>
      </div>

      <div className="max-w-6xl mx-auto">
        {categories.map((category, index) => (
          <SkillCategory key={category.name} category={category} index={index} />
        ))}
      </div>
    </Section>
  )
}
