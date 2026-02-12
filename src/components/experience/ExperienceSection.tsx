import experienceData from '@/data/experience.json'
import ExperienceCard from './ExperienceCard'
import type { Experience } from '@/lib/types'

export default function ExperienceSection() {
  const experiences = experienceData as Experience[]

  return (
    <div>
      <h2 className="text-3xl font-bold font-heading mb-8">
        Work <span className="bg-gradient-secondary bg-clip-text text-transparent">Experience</span>
      </h2>
      <div>
        {experiences.map((experience) => (
          <ExperienceCard key={experience.id} experience={experience} />
        ))}
      </div>
    </div>
  )
}
