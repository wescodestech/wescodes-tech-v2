'use client'

import Link from 'next/link'

export default function Logo() {
  return (
    <Link
      href="/"
      className="group relative flex items-center hover:opacity-80 transition-opacity"
      aria-label="Home"
    >
      {/* SVG Logo */}
      <svg
        width="60"
        height="48"
        viewBox="0 0 60 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="relative"
      >
        {/* Angled brackets - code symbol */}
        <path
          d="M12 14L4 24L12 34"
          stroke="url(#logo-gradient)"
          strokeWidth="3.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M48 14L56 24L48 34"
          stroke="url(#logo-gradient)"
          strokeWidth="3.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        {/* WH Text - monospace for code editor feel */}
        <text
          x="30"
          y="30"
          className="fill-gray-900 dark:fill-white font-mono font-extrabold"
          fontSize="18"
          fontWeight="800"
          textAnchor="middle"
          letterSpacing="1"
          style={{ fontFamily: 'JetBrains Mono, Consolas, Monaco, Courier New, monospace' }}
        >
          WH
        </text>

        {/* Gradient definition */}
        <defs>
          <linearGradient id="logo-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#0ea5e9" />
            <stop offset="100%" stopColor="#6366f1" />
          </linearGradient>
        </defs>
      </svg>
    </Link>
  )
}
