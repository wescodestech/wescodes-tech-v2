import { Calendar, MapPin, Briefcase } from 'lucide-react'
import Card from '@/components/ui/Card'
import Badge from '@/components/ui/Badge'
import { formatDate } from '@/lib/utils'
import type { Experience } from '@/lib/types'

interface ExperienceCardProps {
  experience: Experience
}

export default function ExperienceCard({ experience }: ExperienceCardProps) {

  return (
    <div className="relative pl-8 pb-8 border-l-2 border-gray-200 dark:border-gray-700 last:pb-0">
      {/* Timeline dot */}
      <div className="absolute left-0 top-0 -translate-x-[9px] w-4 h-4 rounded-full bg-gradient-primary border-4 border-white dark:border-gray-900" />

      <Card className="p-6">
        <div className="flex flex-col sm:flex-row sm:items-start gap-4">
          <div className="p-3 bg-gradient-primary rounded-lg flex-shrink-0">
            <Briefcase className="h-6 w-6 text-white" />
          </div>
          <div className="flex-1">
          <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-3">
            <div>
              <h3 className="text-xl sm:text-2xl font-bold mb-1">{experience.position}</h3>
              <p className="text-lg text-gray-700 dark:text-gray-300 font-medium">
                {experience.company}
              </p>
            </div>
            <Badge variant="primary">{experience.type}</Badge>
          </div>

          <div className="flex flex-wrap gap-4 text-sm text-gray-600 dark:text-gray-400 mb-4">
            <div className="flex items-center gap-1">
              <Calendar className="h-4 w-4" />
              <span>
                {formatDate(experience.startDate)} - {formatDate(experience.endDate)}
              </span>
            </div>
            <div className="flex items-center gap-1">
              <MapPin className="h-4 w-4" />
              <span>{experience.location}</span>
            </div>
          </div>

          <p className="text-gray-700 dark:text-gray-300 mb-4 whitespace-pre-line">
            {experience.description}
          </p>

          {experience.achievements && experience.achievements.length > 0 && (
            <div className="mb-4">
              <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                Key Achievements:
              </h4>
              <ul className="space-y-2">
                {experience.achievements.map((achievement, index) => (
                  <li
                    key={index}
                    className="flex items-start gap-2 text-gray-700 dark:text-gray-300"
                  >
                    <span className="text-primary-500 mt-1.5">•</span>
                    <span>{achievement}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {experience.technologies && experience.technologies.length > 0 && (
            <div>
              <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                Technologies:
              </h4>
              <div className="flex flex-wrap gap-2">
                {experience.technologies.map((tech) => (
                  <Badge key={tech} variant="secondary">
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </Card>
    </div>
  )
}
