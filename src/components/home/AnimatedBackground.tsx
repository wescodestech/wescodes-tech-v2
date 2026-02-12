'use client'

import { useEffect, useRef } from 'react'

interface CircuitTrace {
  startX: number
  startY: number
  endX: number
  endY: number
  width: number
}

interface SolderPad {
  x: number
  y: number
  radius: number
}

interface ICChip {
  x: number
  y: number
  width: number
  height: number
  pins: number
  rotation: number
}

interface Signal {
  traceIndex: number
  position: number
  speed: number
}

export default function AnimatedBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let animationFrameId: number
    const traces: CircuitTrace[] = []
    const pads: SolderPad[] = []
    const chips: ICChip[] = []
    const signals: Signal[] = []

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    resizeCanvas()
    window.addEventListener('resize', resizeCanvas)

    // Generate realistic PCB layout
    const generatePCB = () => {
      traces.length = 0
      pads.length = 0
      chips.length = 0

      const gridSize = 60
      const cols = Math.ceil(canvas.width / gridSize)
      const rows = Math.ceil(canvas.height / gridSize)

      // Create circuit traces with more realistic routing
      for (let row = 0; row < rows; row++) {
        for (let col = 0; col < cols - 1; col++) {
          const x = col * gridSize
          const y = row * gridSize

          // Horizontal traces with some gaps
          if (Math.random() > 0.3) {
            traces.push({
              startX: x,
              startY: y,
              endX: x + gridSize,
              endY: y,
              width: Math.random() > 0.7 ? 3 : 2,
            })
          }

          // Add some angled traces for realism
          if (Math.random() > 0.85 && col < cols - 2) {
            traces.push({
              startX: x,
              startY: y,
              endX: x + gridSize * 2,
              endY: y + (Math.random() > 0.5 ? gridSize : -gridSize),
              width: 2,
            })
          }
        }
      }

      // Vertical traces
      for (let col = 0; col < cols; col++) {
        for (let row = 0; row < rows - 1; row++) {
          const x = col * gridSize
          const y = row * gridSize

          if (Math.random() > 0.3) {
            traces.push({
              startX: x,
              startY: y,
              endX: x,
              endY: y + gridSize,
              width: Math.random() > 0.7 ? 3 : 2,
            })
          }
        }
      }

      // Add solder pads at intersections
      for (let row = 0; row < rows; row++) {
        for (let col = 0; col < cols; col++) {
          if (Math.random() > 0.7) {
            pads.push({
              x: col * gridSize,
              y: row * gridSize,
              radius: Math.random() > 0.5 ? 4 : 3,
            })
          }
        }
      }

      // Add IC chips
      for (let row = 1; row < rows - 1; row++) {
        for (let col = 1; col < cols - 1; col++) {
          if (Math.random() > 0.92) {
            chips.push({
              x: col * gridSize,
              y: row * gridSize,
              width: 40,
              height: 30,
              pins: Math.random() > 0.5 ? 8 : 14,
              rotation: Math.random() > 0.5 ? 0 : 90,
            })
          }
        }
      }

      // Initialize signals
      signals.length = 0
      for (let i = 0; i < 30; i++) {
        signals.push({
          traceIndex: Math.floor(Math.random() * traces.length),
          position: Math.random(),
          speed: 0.001 + Math.random() * 0.002,
        })
      }
    }

    generatePCB()

    const drawICChip = (chip: ICChip) => {
      ctx.save()
      ctx.translate(chip.x, chip.y)
      ctx.rotate((chip.rotation * Math.PI) / 180)

      // Chip body - black/dark (dark mode only)
      ctx.fillStyle = 'rgba(30, 30, 35, 0.32)'
      ctx.fillRect(-chip.width / 2, -chip.height / 2, chip.width, chip.height)

      // Chip outline (dark mode only)
      ctx.strokeStyle = 'rgba(100, 100, 110, 0.24)'
      ctx.lineWidth = 1
      ctx.strokeRect(-chip.width / 2, -chip.height / 2, chip.width, chip.height)

      // Draw pins (dark mode only)
      const pinSpacing = chip.width / (chip.pins / 2 + 1)
      ctx.fillStyle = 'rgba(180, 160, 120, 0.28)'

      for (let i = 0; i < chip.pins / 2; i++) {
        const pinX = -chip.width / 2 + pinSpacing * (i + 1)
        // Top pins
        ctx.fillRect(pinX - 1.5, -chip.height / 2 - 4, 3, 4)
        // Bottom pins
        ctx.fillRect(pinX - 1.5, chip.height / 2, 3, 4)
      }

      // Small dot on chip (pin 1 indicator) (dark mode only)
      ctx.fillStyle = 'rgba(200, 200, 220, 0.16)'
      ctx.beginPath()
      ctx.arc(-chip.width / 2 + 5, -chip.height / 2 + 5, 2, 0, Math.PI * 2)
      ctx.fill()

      ctx.restore()
    }

    const animate = () => {
      // Dark mode colors only
      const bgColor = 'rgba(10, 10, 10, 0.12)'
      const traceColor = 'rgba(180, 140, 80, 0.096)'
      const padColor = 'rgba(200, 200, 210, 0.12)'
      const signalColor = 'rgba(100, 200, 255, 0.9)'

      // Fade effect
      ctx.fillStyle = bgColor
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      // Draw traces (copper color)
      ctx.lineCap = 'round'
      traces.forEach((trace) => {
        ctx.strokeStyle = traceColor
        ctx.lineWidth = trace.width
        ctx.beginPath()
        ctx.moveTo(trace.startX, trace.startY)
        ctx.lineTo(trace.endX, trace.endY)
        ctx.stroke()
      })

      // Draw solder pads
      pads.forEach((pad) => {
        // Outer ring (darker)
        ctx.fillStyle = padColor
        ctx.beginPath()
        ctx.arc(pad.x, pad.y, pad.radius, 0, Math.PI * 2)
        ctx.fill()

        // Inner hole (dark mode only)
        ctx.fillStyle = 'rgba(5, 5, 5, 0.3)'
        ctx.beginPath()
        ctx.arc(pad.x, pad.y, pad.radius * 0.4, 0, Math.PI * 2)
        ctx.fill()
      })

      // Draw IC chips
      chips.forEach((chip) => {
        drawICChip(chip)
      })

      // Draw animated signals
      signals.forEach((signal) => {
        signal.position += signal.speed

        if (signal.position > 1) {
          signal.position = 0
          signal.traceIndex = Math.floor(Math.random() * traces.length)
        }

        const trace = traces[signal.traceIndex]
        if (!trace) return

        const signalX = trace.startX + (trace.endX - trace.startX) * signal.position
        const signalY = trace.startY + (trace.endY - trace.startY) * signal.position

        // Draw glowing signal pulse
        ctx.fillStyle = signalColor
        ctx.shadowBlur = 10
        ctx.shadowColor = signalColor
        ctx.beginPath()
        ctx.arc(signalX, signalY, 2.5, 0, Math.PI * 2)
        ctx.fill()
        ctx.shadowBlur = 0
      })

      animationFrameId = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener('resize', resizeCanvas)
      cancelAnimationFrame(animationFrameId)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full"
      style={{ background: 'transparent' }}
    />
  )
}
