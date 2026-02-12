# Wesley Howell - Personal Portfolio

A modern, bold portfolio website built with Next.js 15, TypeScript, and Tailwind CSS. This professional portfolio showcases skills, projects, work experience, and provides an elegant way to connect with potential collaborators and employers.

## ✨ Features

- 🎨 **Modern Design**: Bold gradients, glassmorphism effects, and smooth animations
- 🌓 **Dark Mode**: Full dark mode support with theme persistence
- 📱 **Responsive**: Mobile-first design that works on all devices
- ⚡ **Fast**: Optimized with Next.js 15 App Router and static generation
- ♿ **Accessible**: Built with accessibility best practices
- 🎭 **Animated**: Smooth page transitions and micro-interactions with Framer Motion
- 🔍 **SEO Optimized**: Comprehensive metadata and sitemap generation

## 🚀 Tech Stack

### Core
- **Framework**: [Next.js 15](https://nextjs.org/) with App Router
- **Language**: [TypeScript](https://www.typescriptlang.org/) (strict mode)
- **Styling**: [Tailwind CSS v3](https://tailwindcss.com/)
- **React**: React 19

### Libraries
- **Animations**: [Framer Motion](https://www.framer.com/motion/) for smooth transitions
- **Icons**: [Lucide React](https://lucide.dev/) for consistent iconography
- **Theme**: [next-themes](https://github.com/pacocoursey/next-themes) for dark mode
- **Utilities**: clsx + tailwind-merge for class management

### Development Tools
- **Linting**: ESLint with Next.js configuration
- **Formatting**: Prettier with Tailwind plugin
- **Type Safety**: TypeScript strict mode

## 📋 Getting Started

### Prerequisites

- Node.js 18 or higher
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd new-personal-site
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## 🛠️ Available Scripts

```bash
# Development
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server

# Code Quality
npm run lint         # Run ESLint
npm run format       # Format code with Prettier
```

## 📁 Project Structure

```
new-personal-site/
├── public/                      # Static assets
│   └── images/                  # Images (profile, projects)
│       ├── profile.jpg
│       └── projects/
├── src/
│   ├── app/                     # Next.js App Router
│   │   ├── layout.tsx           # Root layout with theme
│   │   ├── page.tsx             # Homepage
│   │   ├── globals.css          # Global styles
│   │   ├── sitemap.ts           # Dynamic sitemap
│   │   ├── robots.ts            # SEO robots
│   │   ├── not-found.tsx        # 404 page
│   │   ├── about/               # About page
│   │   ├── skills/              # Skills showcase
│   │   ├── portfolio/           # Portfolio listing
│   │   │   └── [slug]/          # Project details
│   │   ├── resume/              # Resume/CV
│   │   └── contact/             # Contact page
│   ├── components/              # React components
│   │   ├── layout/              # Layout components
│   │   │   ├── Header.tsx       # Site header
│   │   │   ├── Footer.tsx       # Site footer
│   │   │   ├── Navigation.tsx   # Desktop nav
│   │   │   ├── MobileMenu.tsx   # Mobile menu
│   │   │   └── ThemeToggle.tsx  # Dark mode toggle
│   │   ├── home/                # Homepage sections
│   │   │   ├── Hero.tsx
│   │   │   ├── FeaturedProjects.tsx
│   │   │   └── SkillsPreview.tsx
│   │   ├── portfolio/           # Portfolio components
│   │   ├── skills/              # Skills components
│   │   ├── resume/              # Resume components
│   │   ├── contact/             # Contact components
│   │   └── ui/                  # Reusable UI components
│   │       ├── Button.tsx
│   │       ├── Card.tsx
│   │       ├── Badge.tsx
│   │       └── Section.tsx
│   ├── data/                    # JSON data files
│   │   ├── profile.json         # Personal info
│   │   ├── projects.json        # Portfolio projects
│   │   ├── skills.json          # Skills by category
│   │   ├── experience.json      # Work history
│   │   ├── education.json       # Education
│   │   └── social.json          # Social links
│   ├── lib/                     # Utilities
│   │   ├── types.ts             # TypeScript types
│   │   ├── utils.ts             # Helper functions
│   │   └── constants.ts         # App constants
│   └── providers/               # Context providers
│       └── ThemeProvider.tsx    # Dark mode provider
├── tailwind.config.ts           # Tailwind configuration
├── tsconfig.json                # TypeScript config
├── next.config.ts               # Next.js config
├── postcss.config.js            # PostCSS config
├── .eslintrc.json               # ESLint config
├── .prettierrc                  # Prettier config
└── package.json                 # Dependencies
```

## 📝 Updating Content

### Personal Information

Edit `src/data/profile.json`:
```json
{
  "name": "Your Name",
  "title": "Your Title",
  "tagline": "Your tagline",
  "bio": "Your bio...",
  "email": "your@email.com",
  "location": "Your City, Country"
}
```

### Projects

Add/edit projects in `src/data/projects.json`:
```json
{
  "id": "unique-id",
  "slug": "project-slug",
  "title": "Project Title",
  "description": "Short description",
  "longDescription": "Detailed description...",
  "technologies": ["React", "Node.js"],
  "category": "web",
  "featured": true,
  "liveUrl": "https://...",
  "githubUrl": "https://github.com/..."
}
```

### Skills

Update `src/data/skills.json` to modify skill categories and items.

### Work Experience

Edit `src/data/experience.json` to update your professional history.

### Education

Modify `src/data/education.json` for educational background.

### Social Links

Update `src/data/social.json` to change social media links.

### Images

Replace placeholder images in `public/images/`:
- `profile.jpg` - Your profile photo
- `projects/*.jpg` - Project screenshots

## 🎨 Design System

### Color Palette

**Primary Gradient**: Blue to Indigo (#0ea5e9 → #6366f1)
**Secondary Gradient**: Pink to Purple (#ec4899 → #8b5cf6)
**Accent Gradient**: Cyan to Purple (#06b6d4 → #8b5cf6)

### Typography

- **Headings**: Plus Jakarta Sans (modern, bold)
- **Body**: Inter (clean, readable)
- **Mono**: JetBrains Mono (code snippets)

### Components

All components support:
- Multiple size variants (sm, md, lg)
- Multiple style variants (primary, secondary, outline, etc.)
- Dark mode compatibility
- Hover and focus states
- Smooth transitions

## 🚀 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import project to Vercel
3. Vercel will auto-detect Next.js and deploy

Or use Vercel CLI:
```bash
npm install -g vercel
vercel
```

### Other Platforms

This is a standard Next.js app and can be deployed to:
- Netlify
- AWS Amplify
- Google Cloud Run
- Any platform supporting Node.js

Build command: `npm run build`
Output directory: `.next`

## 🔧 Configuration

### Environment Variables

Create `.env.local` for local development:
```bash
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

### Custom Domain

Update `SITE_URL` in `src/lib/constants.ts` and `src/app/sitemap.ts`

## 📊 Performance

- **Lighthouse Score**: 90+ for all metrics
- **Static Generation**: All pages pre-rendered at build time
- **Image Optimization**: Automatic with Next.js Image component
- **Font Optimization**: Fonts loaded via next/font
- **Bundle Size**: Optimized with automatic code splitting

## ♿ Accessibility

- Semantic HTML structure
- ARIA labels where appropriate
- Keyboard navigation support
- Screen reader friendly
- High contrast ratios in both themes

## 🤝 Contributing

This is a personal portfolio template. Feel free to fork and customize for your own use!

## 📄 License

© 2026 Wesley Howell. All rights reserved.

---

**Built with ❤️ using Next.js, TypeScript, and Tailwind CSS**
