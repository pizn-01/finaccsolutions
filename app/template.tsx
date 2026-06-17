'use client'

import { useEffect } from 'react'
import { useLenis } from '@/components/providers/SmoothScroll'

export default function Template({ children }: { children: React.ReactNode }) {
  const lenis = useLenis()

  useEffect(() => {
    if (lenis) {
      lenis.scrollTo(0, { immediate: true })
    }
  }, [lenis])

  return <>{children}</>
}
