'use client'

import { ReactNode } from 'react'
import { useScrollAnimation } from '@/hooks/useScrollAnimation'

interface AnimateInProps {
  children: ReactNode
  delay?: number // in seconds
  direction?: 'up' | 'left' | 'right' | 'fade'
  className?: string
}

export default function AnimateIn({
  children,
  delay = 0,
  direction = 'up',
  className = '',
}: AnimateInProps) {
  const { ref, isVisible } = useScrollAnimation()

  const directionClass =
    direction === 'left' ? 'from-left' :
    direction === 'right' ? 'from-right' :
    direction === 'fade' ? 'from-fade' : ''

  return (
    <div
      ref={ref}
      className={`animate-hidden ${directionClass} ${isVisible ? 'animate-visible' : ''} ${className}`}
      style={{
        transitionDelay: `${delay}s`,
      }}
    >
      {children}
    </div>
  )
}
