import { Metadata } from 'next'
import Section from '@/components/ui/Section'
import profileData from '@/data/profile.json'
import ExperienceSection from '@/components/experience/ExperienceSection'
import EducationSection from '@/components/experience/EducationSection'

export const metadata: Metadata = {
  title: 'Experience',
  description: `Professional work experience of ${profileData.name}`,
}

export default function ExperiencePage() {
  return (
    <Section spacing="xl">
      <div className="text-center mb-12">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-heading mb-4">
          Experience <span className="bg-gradient-secondary bg-clip-text text-transparent">&amp; CV</span>
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
          My professional journey, skills, and experience
        </p>
      </div>

      <div className="max-w-4xl mx-auto space-y-16">
        <ExperienceSection />
        <EducationSection />
      </div>
    </Section>
  )
}
