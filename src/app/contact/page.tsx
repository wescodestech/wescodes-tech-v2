'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, MapPin, Copy, Check } from 'lucide-react'
import Section from '@/components/ui/Section'
import Card from '@/components/ui/Card'
import Button from '@/components/ui/Button'
import SocialLinks from '@/components/contact/SocialLinks'
import { copyToClipboard } from '@/lib/utils'
import profileData from '@/data/profile.json'
import socialData from '@/data/social.json'
import type { SocialLink } from '@/lib/types'

export default function ContactPage() {
  const [emailCopied, setEmailCopied] = useState(false)
  const social = socialData as SocialLink[]

  const handleCopyEmail = async () => {
    const success = await copyToClipboard(profileData.email)
    if (success) {
      setEmailCopied(true)
      setTimeout(() => setEmailCopied(false), 2000)
    }
  }

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
            Get In <span className="bg-gradient-secondary bg-clip-text text-transparent">Touch</span>
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            I&apos;d love to hear from you!
          </p>
        </motion.div>

        {/* Contact Information */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="mb-12"
        >
          <Card className="p-8 md:p-12">
            <h2 className="text-2xl font-bold font-heading mb-6">Contact Information</h2>

            <div className="space-y-6">
              {/* Email */}
              <div className="flex items-start gap-4">
                <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-gradient-primary text-white flex-shrink-0">
                  <Mail className="h-6 w-6" />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-1">Email</h3>
                  <div className="flex items-center gap-2">
                    <a
                      href={`mailto:${profileData.email}`}
                      className="text-primary-600 dark:text-primary-400 hover:underline"
                    >
                      {profileData.email}
                    </a>
                    <button
                      onClick={handleCopyEmail}
                      className="p-1 hover:bg-gray-100 dark:hover:bg-gray-800 rounded transition-smooth"
                      aria-label="Copy email"
                    >
                      {emailCopied ? (
                        <Check className="h-4 w-4 text-green-500" />
                      ) : (
                        <Copy className="h-4 w-4 text-gray-500" />
                      )}
                    </button>
                  </div>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-start gap-4">
                <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-gradient-secondary text-white flex-shrink-0">
                  <MapPin className="h-6 w-6" />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-1">Location</h3>
                  <p className="text-gray-600 dark:text-gray-400">{profileData.location}</p>
                </div>
              </div>
            </div>
          </Card>
        </motion.div>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <Card className="p-8 md:p-12">
            <h2 className="text-2xl font-bold font-heading mb-6">Connect With Me</h2>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              Follow me on the various platforms below and let&apos;s connect!
            </p>
            <SocialLinks links={social} size="lg" />
          </Card>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mt-12 text-center"
        >
          <Card variant="gradient" className="p-8 md:p-12">
            <h2 className="text-2xl font-bold font-heading text-white mb-4">
              Ready. Set. Build!
            </h2>
            <p className="text-white/90 mb-6 max-w-2xl mx-auto">
              Let&apos;s discuss how we can build something great together.
            </p>
            <a href={`mailto:${profileData.email}`}>
              <Button variant="outline" size="lg" className="bg-white text-primary-600 hover:bg-gray-100 border-white">
                <Mail className="mr-2 h-5 w-5" />
                Send Me an Email
              </Button>
            </a>
          </Card>
        </motion.div>
      </div>
    </Section>
  )
}
