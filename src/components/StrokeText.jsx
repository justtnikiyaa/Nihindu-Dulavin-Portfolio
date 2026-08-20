import React from 'react'
import { motion } from 'framer-motion'

/**
 * StrokeText Component (ReactBits)
 * Draws SVG stroke path outlines of each character slowly and sequentially,
 * then floods the completed word with a vibrant purple fill.
 */
export function StrokeText({
  text = 'Nihindu Dulavin',
  stroke = '#a78bfa',
  fillColor = '#7C3AED',
  strokeWidth = 1.5,
  letterDrawDuration = 2.0,
  stagger = 0.18,
  fillDelay = 0.25,
  fontSize = 105,
  fontWeight = 800,
  letterSpacing = '-3px',
  className = '',
}) {
  const characters = text.split('')
  const totalDrawTime = (characters.length - 1) * stagger + letterDrawDuration

  return (
    <div className={`relative inline-block w-full max-w-4xl select-none mx-auto ${className}`}>
      <svg
        className="w-full h-auto overflow-visible"
        viewBox="0 0 950 160"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="strokeGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#7D52FD" />
            <stop offset="50%" stopColor="#9D86FF" />
            <stop offset="100%" stopColor="#C4B5FD" />
          </linearGradient>
          <linearGradient id="fillGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#FFFFFF" />
            <stop offset="60%" stopColor="#E2D9FF" />
            <stop offset="100%" stopColor="#9D86FF" />
          </linearGradient>
          <filter id="strokeGlow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="7" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Ambient Glow Staggered Letters */}
        <text
          x="50%"
          y="55%"
          dominantBaseline="middle"
          textAnchor="middle"
          style={{
            fontFamily: 'Inter, "Space Grotesk", sans-serif',
            fontSize: `${fontSize}px`,
            fontWeight: fontWeight,
            letterSpacing: letterSpacing,
          }}
          filter="url(#strokeGlow)"
        >
          {characters.map((char, index) => (
            <motion.tspan
              key={`glow-${index}`}
              stroke="#7D52FD"
              strokeWidth={strokeWidth * 3.2}
              fill="none"
              initial={{ strokeDasharray: 450, strokeDashoffset: 450, opacity: 0 }}
              animate={{
                strokeDashoffset: 0,
                opacity: [0, 0.9, 0.45],
              }}
              transition={{
                duration: letterDrawDuration,
                delay: index * stagger,
                ease: [0.33, 1, 0.68, 1],
              }}
            >
              {char}
            </motion.tspan>
          ))}
        </text>

        {/* Foreground Sharp Animated Stroke & Sequential Fill */}
        <text
          x="50%"
          y="55%"
          dominantBaseline="middle"
          textAnchor="middle"
          style={{
            fontFamily: 'Inter, "Space Grotesk", sans-serif',
            fontSize: `${fontSize}px`,
            fontWeight: fontWeight,
            letterSpacing: letterSpacing,
          }}
        >
          {characters.map((char, index) => (
            <motion.tspan
              key={`main-${index}`}
              stroke={stroke}
              strokeWidth={strokeWidth}
              initial={{
                strokeDasharray: 450,
                strokeDashoffset: 450,
                fill: 'rgba(124, 58, 237, 0)',
                opacity: 0.95,
              }}
              animate={{
                strokeDashoffset: 0,
                fill: fillColor,
                opacity: 1,
              }}
              transition={{
                strokeDashoffset: {
                  duration: letterDrawDuration,
                  delay: index * stagger,
                  ease: [0.33, 1, 0.68, 1],
                },
                fill: {
                  duration: 1.1,
                  delay: totalDrawTime + fillDelay,
                  ease: 'easeOut',
                },
              }}
            >
              {char}
            </motion.tspan>
          ))}
        </text>
      </svg>
    </div>
  )
}

export default StrokeText
