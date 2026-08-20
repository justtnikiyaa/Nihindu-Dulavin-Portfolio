import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { StrokeText } from './StrokeText'

export function IntroSplash({ onComplete }) {
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    // Transition after the slow sequential stroke writing & fill finishes
    const timer = setTimeout(() => {
      handleDismiss()
    }, 6200)

    return () => clearTimeout(timer)
  }, [])

  const handleDismiss = () => {
    setIsVisible(false)
    if (onComplete) {
      setTimeout(onComplete, 750) // Call onComplete after exit animation finishes
    }
  }

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, y: -40, scale: 1.03, filter: 'blur(12px)' }}
          transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#151022] overflow-hidden px-4 select-none cursor-pointer"
          onClick={handleDismiss}
        >
          {/* Background Spotlight Cones & Stage Glow */}
          <div className="pointer-events-none absolute inset-0 overflow-hidden">
            <div className="spotlight-beam-left" />
            <div className="spotlight-beam-right" />
            <div className="spotlight-center-glow" />
          </div>

          {/* Central Animated Content */}
          <div className="relative z-10 flex flex-col items-center text-center max-w-4xl w-full">
            {/* Top Welcome Badge */}
            <motion.div
              initial={{ opacity: 0, y: -15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.7 }}
              className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#9D86FF]/30 bg-[#1C152E]/80 px-4 py-1.5 backdrop-blur-md shadow-[0_0_20px_rgba(125,82,253,0.25)]"
            >
              <span className="text-[#9D86FF] text-base animate-pulse">✦</span>
              <span className="text-xs font-semibold uppercase tracking-widest text-[#D0CFD3]">
                Welcome To My Portfolio
              </span>
            </motion.div>

            {/* ReactBits Stroke Text Animation (Slow & Sequential Drawing) */}
            <div className="w-full px-2 sm:px-6 my-2">
              <StrokeText
                text="Nihindu Dulavin"
                stroke="#a78bfa"
                fillColor="#7C3AED"
                strokeWidth={1.5}
                letterDrawDuration={2.0}
                stagger={0.18}
                fillDelay={0.25}
                fontSize={105}
                fontWeight={800}
                letterSpacing="-3px"
              />
            </div>

            {/* Subtitle & Role Tagline */}
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 3.5, duration: 0.8 }}
              className="mt-4 text-xs sm:text-sm font-medium tracking-wider text-[#D0CFD3]/80 uppercase"
            >
              Full Stack Developer &bull; IT Undergraduate &bull; Web Developer
            </motion.p>

            {/* Animated Loading Bar & Skip Button */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="mt-8 flex flex-col items-center gap-3 w-full max-w-xs"
            >
              <div className="h-[3px] w-full rounded-full bg-white/10 overflow-hidden">
                <motion.div
                  className="h-full bg-gradient-primary rounded-full shadow-[0_0_10px_#9D86FF]"
                  initial={{ width: '0%' }}
                  animate={{ width: '100%' }}
                  transition={{ duration: 5.8, ease: 'easeInOut' }}
                />
              </div>

              <span className="text-[11px] font-mono text-[#D0CFD3]/50 hover:text-white transition-colors">
                Click anywhere to skip &rarr;
              </span>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default IntroSplash
