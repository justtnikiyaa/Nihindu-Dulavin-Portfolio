import React, { useState, useEffect } from 'react'
import { motion, useSpring } from 'framer-motion'

/**
 * FluidGlassNav Component
 * Adapts dynamically to light and dark themes with liquid glass refraction,
 * chromatic aberration borders, and smooth spring physics.
 */
export function FluidGlassNav({ containerRef, activeTarget, isDark = true }) {
  const [hasInit, setHasInit] = useState(false)

  // Fluid spring physics for elastic liquid stretching
  const springX = useSpring(0, { stiffness: 420, damping: 28, mass: 0.4 })
  const springY = useSpring(0, { stiffness: 420, damping: 28, mass: 0.4 })
  const springWidth = useSpring(0, { stiffness: 440, damping: 28 })
  const springHeight = useSpring(0, { stiffness: 440, damping: 28 })

  useEffect(() => {
    const updatePosition = () => {
      const container = containerRef?.current
      if (!container) return

      const target =
        activeTarget ||
        container.querySelector('[data-nav-active="true"]') ||
        container.querySelector('a[href="#home"]')
      if (!target) return

      const containerRect = container.getBoundingClientRect()
      const targetRect = target.getBoundingClientRect()

      // Exact pixel coordinates relative to the top-left (0,0) of the navbar container
      const targetX = targetRect.left - containerRect.left
      const targetY = targetRect.top - containerRect.top
      const targetW = targetRect.width
      const targetH = targetRect.height

      springX.set(targetX)
      springY.set(targetY)
      springWidth.set(targetW)
      springHeight.set(targetH)
      setHasInit(true)
    }

    updatePosition()
    window.addEventListener('resize', updatePosition)
    const timer = setTimeout(updatePosition, 50)

    return () => {
      window.removeEventListener('resize', updatePosition)
      clearTimeout(timer)
    }
  }, [containerRef, activeTarget, springX, springY, springWidth, springHeight])

  return (
    <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden rounded-full">
      {/* Dynamic Liquid Glass Lens Pill */}
      <motion.div
        className="absolute top-0 left-0 rounded-full select-none"
        style={{
          x: springX,
          y: springY,
          width: springWidth,
          height: springHeight,
          opacity: hasInit ? 1 : 0,
          transition: 'opacity 0.25s ease',
        }}
      >
        {/* Prismatic Rainbow Chromatic Aberration Rim */}
        <div
          className="absolute -inset-[1.5px] rounded-full opacity-85"
          style={{
            background:
              'linear-gradient(135deg, rgba(255,255,255,0.95) 0%, rgba(157,134,255,0.85) 30%, rgba(0,240,255,0.7) 65%, rgba(255,0,128,0.6) 100%)',
            boxShadow: isDark
              ? '0 0 15px rgba(157, 134, 255, 0.4), 0 0 8px rgba(0, 240, 255, 0.25)'
              : '0 0 10px rgba(125, 82, 253, 0.25)',
            filter: 'blur(0.5px)',
          }}
        />

        {/* Ambient Purple Fluid Glow Flare */}
        <div
          className={`absolute -inset-2 rounded-full blur-md ${
            isDark ? 'bg-[#7D52FD]/45' : 'bg-[#7D52FD]/20'
          }`}
        />

        {/* Liquid Glass Crystal Body (Theme Adaptive) */}
        <div
          className={`relative h-full w-full rounded-full border overflow-hidden backdrop-blur-xl ${
            isDark
              ? 'border-white/60 bg-[radial-gradient(ellipse_at_50%_20%,rgba(255,255,255,0.45)_0%,rgba(157,134,255,0.3)_45%,rgba(43,27,84,0.45)_100%)] shadow-[0_8px_25px_rgba(125,82,253,0.35),inset_0_2px_4px_rgba(255,255,255,0.9),inset_0_-2px_4px_rgba(125,82,253,0.5)]'
              : 'border-primary/30 bg-white/70 shadow-[0_4px_16px_rgba(125,82,253,0.2),inset_0_1px_3px_rgba(255,255,255,0.9)]'
          }`}
        >
          {/* Top Curved Specular Gloss Highlight */}
          <div className="absolute inset-x-2 top-0.5 h-[50%] rounded-t-full bg-gradient-to-b from-white/80 via-white/20 to-transparent" />

          {/* Liquid Shimmer Flare */}
          <div
            className="absolute inset-0 opacity-40 mix-blend-overlay"
            style={{
              background:
                'linear-gradient(45deg, transparent 20%, rgba(255,255,255,0.95) 50%, transparent 80%)',
            }}
          />
        </div>
      </motion.div>
    </div>
  )
}

export default FluidGlassNav
