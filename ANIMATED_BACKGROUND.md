# Animated Technology Background

## Overview

The homepage hero section now features a sophisticated animated technology-themed background with multiple layers:

1. **Canvas-based Particle System** - Animated nodes and connections
2. **SVG Circuit Patterns** - Animated circuit board aesthetics
3. **Live Typing Code Animation** - Code being typed in real-time with cursor

## Components

### AnimatedBackground.tsx

**Location**: `src/components/home/AnimatedBackground.tsx`

**Features**:
- **Particle Network**: 50-100 animated nodes that move and connect
- **Dynamic Connections**: Lines draw between nearby particles creating a network effect
- **Code Snippets**: Floating code keywords (const, function, async, etc.) that slowly scroll upward
- **Grid Pattern**: Subtle grid overlay for a technical aesthetic
- **Theme-Aware**: Automatically adjusts colors based on dark/light mode
- **Performance Optimized**: Particle count scales based on screen size

**Technical Details**:
- Uses HTML5 Canvas for smooth 60fps animations
- Responsive and adapts to window resize
- Particles have velocity and bounce off screen edges
- Connection opacity fades based on distance between particles
- Circuit nodes appear at connection midpoints for added detail

### TypingCode.tsx

**Location**: `src/components/home/TypingCode.tsx`

**Features**:
- **Live Typing Effect**: Multiple code snippets being typed character-by-character
- **Blinking Cursor**: Animated cursor that follows the typing
- **Auto-Cycling**: Lines complete, fade out, and new code appears at different positions
- **Realistic Timing**: Variable typing speeds for organic feel
- **Syntax Highlighting**: Glowing text effect for code visibility
- **Staggered Start**: Lines begin typing at different times
- **Theme-Aware**: Color adjusts for dark/light mode

**Code Snippets Include**:
- TypeScript interfaces and functions
- React components and hooks
- Async/await patterns
- Class definitions
- System architecture examples
- Comments about innovation and building

**Technical Details**:
- Pure React with useState and useEffect hooks
- Character-by-character animation with configurable speed
- Automatic line cycling and repositioning
- Fade transitions between snippets
- No canvas required - uses positioned div elements
- Fully responsive positioning

### CircuitPattern.tsx

**Location**: `src/components/home/CircuitPattern.tsx`

**Features**:
- **SVG-based Animation**: Lightweight SVG animations
- **Animated Circuit Lines**: Dashed lines with animated dash offset
- **Pulsing Nodes**: Circuit connection points that pulse with varying rhythms
- **Corner Decorations**: Aesthetic circuit patterns in corners
- **Gradient Animation**: Color gradients that pulse through the circuits
- **Glow Effects**: SVG filter for glowing circuit nodes

**Technical Details**:
- Pure SVG with SMIL animations
- No JavaScript required (runs via SVG attributes)
- Multiple animation timings for organic feel
- Theme-responsive colors

## Customization

### Adjusting Particle Density

Edit `AnimatedBackground.tsx`:
```typescript
// Current: Dynamic based on screen size
const particleCount = Math.min(Math.floor((canvas.width * canvas.height) / 15000), 100)

// For more particles:
const particleCount = Math.min(Math.floor((canvas.width * canvas.height) / 10000), 150)

// For fewer particles:
const particleCount = Math.min(Math.floor((canvas.width * canvas.height) / 20000), 50)
```

### Changing Code Snippets

Edit the `codeSnippets` array in `TypingCode.tsx`:
```typescript
const codeSnippets = [
  "const buildScalableSystems = async () => {",
  "  const team = await assembleEngineers();",
  // Add your own code snippets
  "import { Innovation } from 'your-company';",
  "export default NextGenSolution;",
]
```

**Tips for code snippets**:
- Keep lines under 60 characters for best visibility
- Mix different types: functions, comments, imports, classes
- Use realistic code that represents your skills
- Include your actual tech stack (React, TypeScript, etc.)

### Adjusting Connection Distance

Edit the `maxDistance` variable:
```typescript
// Current
const maxDistance = 150

// For more connections
const maxDistance = 200

// For fewer connections
const maxDistance = 100
```

### Circuit Pattern Customization

Edit `CircuitPattern.tsx` to:
- Add more circuit paths
- Change animation speeds (modify `dur` attributes)
- Adjust opacity levels
- Add different circuit node styles

### Adjusting Typing Speed

Edit `TypingCode.tsx`:
```typescript
// Current: Random speed between 30-80ms per character
speed: Math.random() * 50 + 30,

// Faster typing
speed: Math.random() * 30 + 20,

// Slower typing
speed: Math.random() * 80 + 40,
```

### Changing Number of Typing Lines

Edit `TypingCode.tsx`:
```typescript
// Current: Based on screen height, max 6
const lineCount = Math.min(Math.floor(window.innerHeight / 150), 6)

// More lines
const lineCount = Math.min(Math.floor(window.innerHeight / 120), 8)

// Fewer lines
const lineCount = Math.min(Math.floor(window.innerHeight / 200), 4)
```

### Disabling Layers

To disable a specific layer, comment out in `Hero.tsx`:

```typescript
// Disable particle system
// <AnimatedBackground />

// Disable circuit pattern
// <CircuitPattern />

// Disable typing code
// <TypingCode />
```

## Performance Notes

- **Canvas Animation**: Runs at 60fps on modern devices
- **Particle Count**: Automatically scales down on smaller screens
- **Memory Usage**: Minimal - only stores particle positions
- **CPU Usage**: Optimized with requestAnimationFrame
- **Battery Impact**: Minimal on modern devices

## Browser Compatibility

- ✅ Chrome/Edge (Chromium)
- ✅ Firefox
- ✅ Safari
- ✅ Mobile browsers
- ✅ All modern browsers supporting Canvas and SVG

## Future Enhancement Ideas

1. **Interactive Particles**: Make particles react to mouse movement
2. **Data Flow**: Animate data packets flowing through connections
3. **Binary Rain**: Matrix-style falling binary code
4. **3D Effect**: Add parallax scrolling effect
5. **Music Visualization**: React to audio input (if added)
6. **Custom Shapes**: Replace circles with tech icons
7. **WebGL**: Upgrade to WebGL for more particles and effects

## Credits

Built with:
- HTML5 Canvas API
- SVG animations (SMIL)
- React Hooks (useEffect, useRef)
- next-themes for theme detection
