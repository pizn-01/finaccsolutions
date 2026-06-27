'use client'

import { useLenis } from '@/components/providers/SmoothScroll'

interface Props {
  target: string
  children: React.ReactNode
  className?: string
}

export default function SmoothScrollLink({ target, children, className }: Props) {
  const lenis = useLenis()

  function handleClick(e: React.MouseEvent) {
    e.preventDefault()
    if (lenis) {
      lenis.scrollTo(target, { offset: -80, duration: 1.4 })
    } else {
      document.querySelector(target)?.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <a href={target} onClick={handleClick} className={className}>
      {children}
    </a>
  )
}
