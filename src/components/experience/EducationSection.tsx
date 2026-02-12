import Card from '@/components/ui/Card'
import { GraduationCap } from 'lucide-react'
import educationData from '@/data/education.json'
import type { Education } from '@/lib/types'

export default function EducationSection() {
  return (
    <div>
      <h2 className="text-3xl font-bold font-heading mb-8">
        <span className="bg-gradient-secondary bg-clip-text text-transparent">Education</span>
      </h2>
      <div>
        {educationData.map((edu: Education, index) => (
          <div
            key={edu.id}
            className={`relative pl-8 border-l-2 border-gray-200 dark:border-gray-700 ${index < educationData.length - 1 ? 'pb-8' : ''}`}
          >
            {/* Timeline dot */}
            <div className="absolute left-0 top-0 -translate-x-[9px] w-4 h-4 rounded-full bg-gradient-primary border-4 border-white dark:border-gray-900" />

            <Card className="p-6">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-gradient-primary rounded-lg flex-shrink-0">
                  <GraduationCap className="h-6 w-6 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold mb-1">{edu.degree}</h3>
                  <p className="text-lg text-gray-700 dark:text-gray-300 mb-2">{edu.field}</p>
                  <p className="text-gray-600 dark:text-gray-400 mb-2">
                    {edu.institution} • {edu.location}
                  </p>
                  {edu.description && (
                    <p className="text-gray-600 dark:text-gray-400 mb-3">{edu.description}</p>
                  )}
                  {edu.honors && edu.honors.length > 0 && (
                    <div className="mt-3">
                      <p className="font-semibold text-sm text-gray-700 dark:text-gray-300 mb-2">
                        Honors & Activities:
                      </p>
                      <ul className="list-disc list-inside space-y-1">
                        {edu.honors.map((honor, index) => (
                          <li key={index} className="text-gray-600 dark:text-gray-400">
                            {honor}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            </Card>
          </div>
        ))}
      </div>
    </div>
  )
}
