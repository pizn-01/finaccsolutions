'use client'

import Button from '@/components/ui/Button'
import type { ButtonHTMLAttributes } from 'react'

declare global {
  interface Window {
    Calendly?: {
      initPopupWidget: (opts: { url: string }) => void
    }
  }
}

const CALENDLY_URL = 'https://calendly.com/contact-finaccsolutions'

type Variant = 'primary' | 'secondary' | 'outline' | 'gold'
type Size = 'sm' | 'md' | 'lg'

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant
  size?: Size
}

export default function CalendlyButton({ children, variant = 'primary', size = 'md', className, ...rest }: Props) {
  function open() {
    if (typeof window !== 'undefined') {
      if (window.Calendly) {
        window.Calendly.initPopupWidget({ url: CALENDLY_URL })
      } else {
        window.open(CALENDLY_URL, '_blank', 'noopener,noreferrer')
      }
    }
  }

  return (
    <Button type="button" variant={variant} size={size} className={className} onClick={open} {...rest}>
      {children}
    </Button>
  )
}
