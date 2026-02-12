import type { Metadata } from 'next'
import { Inter, Plus_Jakarta_Sans, JetBrains_Mono } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/providers/ThemeProvider'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const jakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-jakarta',
  display: 'swap',
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains',
  display: 'swap',
})

export const metadata: Metadata = {
  title: {
    default: 'Wesley Howell | Senior Technical Lead',
    template: '%s | Wesley Howell',
  },
  description:
    'Senior Technical Lead specializing in building scalable systems and leading high-performance teams. Explore my portfolio, skills, and professional experience.',
  keywords: [
    'Wesley Howell',
    'Senior Technical Lead',
    'Software Engineer',
    'Portfolio',
    'Web Development',
    'Full Stack Developer',
  ],
  authors: [{ name: 'Wesley Howell' }],
  creator: 'Wesley Howell',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://wesleyhowell.com',
    title: 'Wesley Howell | Senior Technical Lead',
    description:
      'Senior Technical Lead specializing in building scalable systems and leading high-performance teams.',
    siteName: 'Wesley Howell Portfolio',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${jakarta.variable} ${jetbrainsMono.variable} font-sans antialiased`}
      >
        <ThemeProvider attribute="class" defaultTheme="dark" forcedTheme="dark" disableTransitionOnChange>
          <div className="flex min-h-screen flex-col">
            <Header />
            <main className="flex-1 pt-16">{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
