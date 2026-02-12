'use client'

import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'

export default function CircuitPattern() {
  const { theme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  const isDark = theme === 'dark'
  const primaryColor = isDark ? '#0ea5e9' : '#0284c7'
  const secondaryColor = isDark ? '#6366f1' : '#3b82f6'

  return (
    <div className="absolute inset-0 opacity-20 dark:opacity-30">
      <svg
        className="w-full h-full"
        xmlns="http://www.w3.org/2000/svg"
        style={{ position: 'absolute', top: 0, left: 0 }}
      >
        <defs>
          {/* Animated gradient for circuit lines */}
          <linearGradient id="circuitGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor={primaryColor} stopOpacity="0.8">
              <animate
                attributeName="stop-opacity"
                values="0.8;0.3;0.8"
                dur="3s"
                repeatCount="indefinite"
              />
            </stop>
            <stop offset="100%" stopColor={secondaryColor} stopOpacity="0.3">
              <animate
                attributeName="stop-opacity"
                values="0.3;0.8;0.3"
                dur="3s"
                repeatCount="indefinite"
              />
            </stop>
          </linearGradient>

          {/* Glowing effect */}
          <filter id="glow">
            <feGaussianBlur stdDeviation="2" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>

          {/* Circuit node */}
          <circle id="node" r="3" fill={primaryColor} filter="url(#glow)" />
        </defs>

        {/* Horizontal circuit lines */}
        <g stroke="url(#circuitGradient)" strokeWidth="1" fill="none">
          <path d="M 50 100 L 200 100" strokeDasharray="5,5">
            <animate attributeName="stroke-dashoffset" from="0" to="10" dur="1s" repeatCount="indefinite" />
          </path>
          <path d="M 300 150 L 500 150" strokeDasharray="5,5">
            <animate attributeName="stroke-dashoffset" from="0" to="10" dur="1.5s" repeatCount="indefinite" />
          </path>
          <path d="M 600 200 L 850 200" strokeDasharray="5,5">
            <animate attributeName="stroke-dashoffset" from="0" to="10" dur="2s" repeatCount="indefinite" />
          </path>
          <path d="M 100 300 L 350 300" strokeDasharray="5,5">
            <animate attributeName="stroke-dashoffset" from="0" to="10" dur="1.3s" repeatCount="indefinite" />
          </path>
          <path d="M 450 350 L 700 350" strokeDasharray="5,5">
            <animate attributeName="stroke-dashoffset" from="0" to="10" dur="1.8s" repeatCount="indefinite" />
          </path>
        </g>

        {/* Vertical circuit lines */}
        <g stroke="url(#circuitGradient)" strokeWidth="1" fill="none">
          <path d="M 150 50 L 150 250" strokeDasharray="5,5">
            <animate attributeName="stroke-dashoffset" from="0" to="10" dur="1.2s" repeatCount="indefinite" />
          </path>
          <path d="M 400 100 L 400 350" strokeDasharray="5,5">
            <animate attributeName="stroke-dashoffset" from="0" to="10" dur="1.6s" repeatCount="indefinite" />
          </path>
          <path d="M 700 150 L 700 400" strokeDasharray="5,5">
            <animate attributeName="stroke-dashoffset" from="0" to="10" dur="1.4s" repeatCount="indefinite" />
          </path>
        </g>

        {/* Circuit nodes with pulsing animation */}
        <g>
          <use href="#node" x="150" y="100">
            <animate attributeName="opacity" values="0.3;1;0.3" dur="2s" repeatCount="indefinite" />
          </use>
          <use href="#node" x="400" y="150">
            <animate attributeName="opacity" values="0.3;1;0.3" dur="2.5s" repeatCount="indefinite" />
          </use>
          <use href="#node" x="700" y="200">
            <animate attributeName="opacity" values="0.3;1;0.3" dur="3s" repeatCount="indefinite" />
          </use>
          <use href="#node" x="200" y="300">
            <animate attributeName="opacity" values="0.3;1;0.3" dur="2.2s" repeatCount="indefinite" />
          </use>
          <use href="#node" x="500" y="350">
            <animate attributeName="opacity" values="0.3;1;0.3" dur="2.8s" repeatCount="indefinite" />
          </use>
        </g>

        {/* Corner circuit patterns */}
        <g stroke="url(#circuitGradient)" strokeWidth="1" fill="none" opacity="0.5">
          {/* Top right corner */}
          <path d="M 90% 5% L 95% 5% L 95% 10%" />
          <path d="M 85% 8% L 90% 8%" strokeDasharray="3,3">
            <animate attributeName="stroke-dashoffset" from="0" to="6" dur="1s" repeatCount="indefinite" />
          </path>

          {/* Bottom left corner */}
          <path d="M 5% 90% L 5% 95% L 10% 95%" />
          <path d="M 8% 85% L 8% 90%" strokeDasharray="3,3">
            <animate attributeName="stroke-dashoffset" from="0" to="6" dur="1s" repeatCount="indefinite" />
          </path>
        </g>
      </svg>
    </div>
  )
}
