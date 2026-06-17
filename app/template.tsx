'use client'

import { useEffect } from 'react'
import { motion } from 'framer-motion'
import { useLenis } from '@/components/providers/SmoothScroll'

export default function Template({ children }: { children: React.ReactNode }) {
  const lenis = useLenis()

  useEffect(() => {
    if (lenis) {
      lenis.scrollTo(0, { immediate: true })
    }
  }, [lenis])

  return (
    <motion.div
      initial={{ opacity: 0.4 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.25, ease: 'easeOut' }}
    >
      {children}
    </motion.div>
  )
}
