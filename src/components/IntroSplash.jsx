import React, { useState, useEffect, useCallback } from 'react'
import { motion } from 'framer-motion'

const TOTAL_SLICES = 10

const sliceVariants = {
  initial: {
    y: '0%',
  },
  exit: (i) => ({
    y: '100%',
    transition: {
      duration: 0.65,
      ease: [0.76, 0, 0.24, 1], // Smooth staircase cascade
      delay: i * 0.08,
    },
  }),
}

const letterVariants = {
  initial: {
    y: '120%',
  },
  animate: (i) => ({
    y: '0%',
    transition: {
      duration: 0.4,
      ease: [0.22, 1, 0.36, 1],
      delay: 0.15 + i * 0.045,
    },
  }),
}

export function IntroSplash({ onComplete }) {
  const [isExiting, setIsExiting] = useState(false)
  const [isDismissed, setIsDismissed] = useState(false)

  // Lock body scroll during splash intro
  useEffect(() => {
    const originalOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = originalOverflow
    }
  }, [])

  const triggerExit = useCallback(() => {
    if (isExiting) {
      // If clicked again during cascade, dismiss immediately
      setIsDismissed(true)
      if (onComplete) onComplete()
      return
    }

    setIsExiting(true)

    // Total duration for all 10 slices: (9 * 0.08s) + 0.65s = 1.37s + buffer
    const totalDuration = (TOTAL_SLICES * 0.08 + 0.65) * 1000 + 100
    setTimeout(() => {
      setIsDismissed(true)
      if (onComplete) onComplete()
    }, totalDuration)
  }, [isExiting, onComplete])

  useEffect(() => {
    // Letters take ~0.15 + 14 * 0.045 + 0.4 = ~1.18s to enter.
    // Hold name for ~0.8s, then cascade slices down at ~2.0s.
    const exitTimer = setTimeout(() => {
      triggerExit()
    }, 2000)

    return () => clearTimeout(exitTimer)
  }, [triggerExit])

  if (isDismissed) return null

  const firstName = 'NIHINDU'
  const lastName = 'DULAVIN'

  return (
    <div
      className="fixed inset-0 z-[100] overflow-hidden select-none cursor-pointer"
      onClick={triggerExit}
      aria-label="Click anywhere to skip intro"
    >
      {/* 10 Staggered Vertical Curtain Slices (Exact Tajmirul Architecture) */}
      <div className="absolute inset-0 flex w-full h-full pointer-events-none overflow-hidden">
        {Array.from({ length: TOTAL_SLICES }).map((_, i) => (
          <motion.div
            key={i}
            custom={i}
            initial="initial"
            animate={isExiting ? 'exit' : 'initial'}
            variants={sliceVariants}
            className="h-full w-[10.05%] -mr-px bg-[#05030A] will-change-transform border-none"
          />
        ))}
      </div>

      {/* Central Bold Name - Stays visible as slices drop, then smoothly fades out */}
      <motion.div
        initial={{ opacity: 1 }}
        animate={
          isExiting
            ? {
                opacity: 0,
                y: -15,
                transition: {
                  duration: 0.45,
                  delay: 0.4, // Stays visible while slices 0-4 drop, matching Tajmirul screenshot
                  ease: 'easeInOut',
                },
              }
            : { opacity: 1, y: 0 }
        }
        className="absolute inset-0 z-10 flex flex-col items-center justify-center pointer-events-none px-4"
      >
        {/* Giant Anton Display Heading */}
        <h1 className="font-anton uppercase tracking-tight text-white leading-none text-center select-none flex flex-wrap sm:flex-nowrap items-center justify-center gap-x-4 sm:gap-x-7 text-[15vw] sm:text-[12vw] md:text-[11vw] lg:text-[140px] drop-shadow-[0_10px_35px_rgba(0,0,0,0.8)]">
          {/* NIHINDU */}
          <span className="flex overflow-hidden">
            {firstName.split('').map((char, index) => (
              <motion.span
                key={`first-${index}`}
                custom={index}
                initial="initial"
                animate="animate"
                variants={letterVariants}
                className="inline-block"
              >
                {char}
              </motion.span>
            ))}
          </span>

          {/* DULAVIN */}
          <span className="flex overflow-hidden text-[#9D86FF]">
            {lastName.split('').map((char, index) => (
              <motion.span
                key={`last-${index}`}
                custom={firstName.length + index}
                initial="initial"
                animate="animate"
                variants={letterVariants}
                className="inline-block"
              >
                {char}
              </motion.span>
            ))}
          </span>
        </h1>

        {/* Minimal Subtitle Role */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={
            isExiting
              ? { opacity: 0, transition: { duration: 0.25 } }
              : { opacity: 0.75, y: 0 }
          }
          transition={{ delay: 0.85, duration: 0.4 }}
          className="mt-4 sm:mt-6 text-xs sm:text-sm font-mono tracking-[0.4em] uppercase text-[#D0CFD3]"
        >
          Full Stack Developer
        </motion.p>

        {/* Click to skip cue */}
        <motion.span
          initial={{ opacity: 0 }}
          animate={
            isExiting
              ? { opacity: 0, transition: { duration: 0.2 } }
              : { opacity: 0.35 }
          }
          transition={{ delay: 1.1, duration: 0.4 }}
          className="absolute bottom-8 text-[10px] font-mono tracking-widest uppercase text-white/50"
        >
          Click anywhere to skip
        </motion.span>
      </motion.div>
    </div>
  )
}

export default IntroSplash
