'use client'

import { motion } from 'framer-motion'
import Section from '@/components/ui/Section'
import Card from '@/components/ui/Card'
import SocialLinks from '@/components/contact/SocialLinks'
import profileData from '@/data/profile.json'
import socialData from '@/data/social.json'
import type { SocialLink } from '@/lib/types'

export default function AboutPage() {
  const social = socialData as SocialLink[]

  return (
    <Section spacing="xl">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-heading mb-4">
            About <span className="bg-gradient-secondary bg-clip-text text-transparent">Me</span>
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400">
            {profileData.tagline}
          </p>
        </motion.div>

        {/* Profile Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="mb-12"
        >
          <Card className="p-8 md:p-12">
            <div className="flex flex-col md:flex-row gap-8 items-start">
              {/* Profile Image */}
              <div className="relative w-48 h-48 rounded-full overflow-hidden border-4 border-white shadow-2xl bg-gradient-to-br from-primary-500 to-secondary-500 flex items-center justify-center text-white text-6xl font-bold flex-shrink-0 mx-auto md:mx-0">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/images/profile.webp"
                  alt={profileData.name}
                  className="object-cover w-full h-full"
                  fetchPriority="high"
                />
              </div>

              {/* Info */}
              <div className="flex-1">
                <h2 className="text-3xl font-bold font-heading mb-2">{profileData.name}</h2>
                <p className="text-xl text-primary-600 dark:text-primary-400 mb-4">
                  {profileData.title}
                </p>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  📍 {profileData.location}
                </p>
                <div className="mb-6">
                  <SocialLinks links={social} size="md" />
                </div>
              </div>
            </div>
          </Card>
        </motion.div>

        {/* Mission & Vision */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {/* Mission */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <Card className="p-8 h-full">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-lg bg-gradient-primary flex items-center justify-center mr-4">
                  <span className="text-2xl">🎯</span>
                </div>
                <h2 className="text-2xl font-bold font-heading">Mission</h2>
              </div>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                {profileData.mission}
              </p>
            </Card>
          </motion.div>

          {/* Vision */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25 }}
          >
            <Card className="p-8 h-full">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-lg bg-gradient-primary flex items-center justify-center mr-4">
                  <span className="text-2xl">🚀</span>
                </div>
                <h2 className="text-2xl font-bold font-heading">Vision</h2>
              </div>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                {profileData.vision}
              </p>
            </Card>
          </motion.div>
        </div>

        {/* Bio */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <Card className="p-8 md:p-12">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 rounded-lg bg-gradient-primary flex items-center justify-center mr-4">
                <span className="text-2xl">📖</span>
              </div>
              <h2 className="text-2xl font-bold font-heading">My Story</h2>
            </div>
            <div className="prose dark:prose-invert max-w-none">
              {profileData.bio.split('\n\n').map((paragraph, index) => (
                <p key={index} className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </div>
          </Card>
        </motion.div>

        {/* Quick Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {[
            { label: 'Years Experience', value: '10+' },
            { label: 'Projects Completed', value: '50+' },
            { label: 'Team Members Led', value: '10+' },
            { label: 'Technologies Mastered', value: '30+' },
          ].map((stat, index) => (
            <Card key={stat.label} variant="glass" className="p-6 text-center">
              <div className="text-3xl font-bold font-heading bg-gradient-secondary bg-clip-text text-transparent mb-2">
                {stat.value}
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400">{stat.label}</div>
            </Card>
          ))}
        </motion.div>
      </div>
    </Section>
  )
}
