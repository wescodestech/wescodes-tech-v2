import Link from 'next/link'
import { Home } from 'lucide-react'
import Button from '@/components/ui/Button'
import Section from '@/components/ui/Section'

export default function NotFound() {
  return (
    <Section spacing="xl">
      <div className="text-center max-w-2xl mx-auto">
        <div className="mb-8">
          <h1 className="text-9xl font-bold font-heading bg-gradient-secondary bg-clip-text text-transparent mb-4">
            404
          </h1>
          <h2 className="text-3xl font-bold font-heading mb-4">Page Not Found</h2>
          <p className="text-xl text-gray-600 dark:text-gray-400">
            Oops! The page you&apos;re looking for doesn&apos;t exist or has been moved.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4">
          <Link href="/">
            <Button variant="gradient" size="lg">
              <Home className="mr-2 h-5 w-5" />
              Go Home
            </Button>
          </Link>
          <Link href="/portfolio">
            <Button variant="outline" size="lg">
              View Portfolio
            </Button>
          </Link>
        </div>

        <div className="mt-12 p-6 bg-gray-50 dark:bg-gray-900 rounded-lg">
          <p className="text-gray-600 dark:text-gray-400 mb-4">
            Looking for something specific? Try these popular pages:
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm">
            <Link href="/about" className="text-primary-600 dark:text-primary-400 hover:underline">
              About
            </Link>
            <Link href="/skills" className="text-primary-600 dark:text-primary-400 hover:underline">
              Skills
            </Link>
            <Link href="/experience" className="text-primary-600 dark:text-primary-400 hover:underline">
              Experience
            </Link>
            <Link href="/contact" className="text-primary-600 dark:text-primary-400 hover:underline">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </Section>
  )
}
