import Card from '@/components/ui/Card'
import type { Skill } from '@/lib/types'

interface SkillCardProps {
  skill: Skill
}

// Map skill names to Simple Icons slugs
const skillIconMap: Record<string, string> = {
  'Java': 'openjdk',
  'JavaScript': 'javascript',
  'TypeScript': 'typescript',
  'C#': 'sharp',
  'C/C++': 'cplusplus',
  'Python': 'python',
  'Next.js': 'nextdotjs',
  'Node.js': 'nodedotjs',
  'React': 'react',
  'Angular': 'angular',
  'Spring Boot': 'springboot',
  'Docker': 'docker',
  'Kubernetes': 'kubernetes',
  'GitLab': 'gitlab',
  'Jenkins': 'jenkins',
  'Redis': 'redis',
  'Apache Kafka': 'apachekafka',
  'Elasticsearch': 'elasticsearch',
  'Git': 'git',
  'OpenAI': 'openai',
  'Claude': 'anthropic',
  'FastAPI': 'fastapi'
}

export default function SkillCard({ skill }: SkillCardProps) {
  const getLevelColor = (level?: string) => {
    switch (level) {
      case 'expert':
        return 'bg-green-500'
      case 'advanced':
        return 'bg-blue-500'
      case 'intermediate':
        return 'bg-yellow-500'
      case 'beginner':
        return 'bg-gray-500'
      default:
        return 'bg-primary-500'
    }
  }

  const iconSlug = skillIconMap[skill.name]

  return (
    <Card variant="glass" className="p-4 hover:scale-105 transition-transform">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3 flex-1">
          {iconSlug && (
            <div className="flex-shrink-0 w-6 h-6">
              <img
                src={`https://cdn.simpleicons.org/${iconSlug}`}
                alt={`${skill.name} logo`}
                width="24"
                height="24"
                className="w-6 h-6 dark:invert"
              />
            </div>
          )}
          <div className="flex-1 min-w-0">
            <h4 className="font-semibold text-gray-900 dark:text-white truncate">{skill.name}</h4>
            {skill.yearsOfExperience && (
              <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                {skill.yearsOfExperience} {skill.yearsOfExperience === 1 ? 'year' : 'years'}
              </p>
            )}
          </div>
        </div>
        {skill.level && (
          <div className="ml-3 flex-shrink-0">
            <div className={`w-3 h-3 rounded-full ${getLevelColor(skill.level)}`} />
          </div>
        )}
      </div>
    </Card>
  )
}
