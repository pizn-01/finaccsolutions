'use client'

import { ReactNode } from 'react'
import { motion } from 'framer-motion'

interface AnimateInProps {
  children: ReactNode
  delay?: number
  direction?: 'up' | 'left' | 'right' | 'fade'
  className?: string
}

export default function AnimateIn({
  children,
  delay = 0,
  direction = 'up',
  className = '',
}: AnimateInProps) {
  // If prefers-reduced-motion is enabled, don't animate positions
  const getVariants = () => {
    let initialX = 0
    let initialY = 0

    if (direction === 'up') {
      initialY = 20
    } else if (direction === 'left') {
      initialX = -20
    } else if (direction === 'right') {
      initialX = 20
    }

    return {
      hidden: {
        opacity: 0,
        x: initialX,
        y: initialY,
      },
      visible: {
        opacity: 1,
        x: 0,
        y: 0,
      },
    }
  }

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-80px' }}
      variants={getVariants()}
      transition={{
        duration: 0.8,
        delay: delay,
        ease: [0.16, 1, 0.3, 1] as const, // Premium easing curve
      }}
      className={className}
    >
      {children}
    </motion.div>
  )
}
