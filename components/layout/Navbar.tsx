'use client'

import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'

const navLinks = [
  { label: 'Services', href: '#services' },
  { label: 'Outsourcing', href: '#outsourcing' },
  { label: 'Why Us', href: '#why-us' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-sm border-b border-slate-100/80 shadow-sm'
          : 'bg-transparent'
      }`}
      style={{ transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)' }}
    >
      <nav
        className="max-w-content mx-auto px-6"
        aria-label="Main navigation"
      >
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <a
            href="#"
            className={`font-sora font-bold text-xl transition-colors duration-300 ${
              scrolled ? 'text-brand-blue' : 'text-white'
            }`}
            style={{ letterSpacing: '-0.02em' }}
          >
            Fin-Acc Solutions
          </a>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`relative font-medium text-sm transition-colors duration-300 pb-1
                  after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] 
                  after:transition-[width] after:duration-300 after:ease-out hover:after:w-full
                  ${
                    scrolled
                      ? 'text-brand-navy hover:text-brand-blue after:bg-brand-blue'
                      : 'text-white/85 hover:text-white after:bg-white'
                  }`}
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Desktop CTA */}
          <a
            href="#contact"
            className="hidden md:inline-flex items-center px-5 py-2.5 bg-brand-gold text-brand-navy font-semibold text-sm rounded-lg hover:bg-amber-400 transition-all duration-300 btn-shimmer shadow-sm hover:shadow-md"
            style={{ transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)' }}
          >
            Contact Us Today
          </a>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className={`md:hidden p-2 rounded-md transition-colors ${
              scrolled ? 'text-brand-navy hover:bg-slate-100' : 'text-white hover:bg-white/10'
            }`}
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile drawer */}
        <div
          className={`md:hidden overflow-hidden rounded-2xl transition-all duration-300 ${
            mobileOpen ? 'max-h-96 opacity-100 mt-2 mb-4 shadow-lg border border-slate-100' : 'max-h-0 opacity-0'
          } ${scrolled ? 'bg-white' : 'bg-brand-navy/98 backdrop-blur-md border-white/10'}`}
          style={{ transition: 'max-height 0.4s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.3s ease' }}
        >
          <div className="px-4 pb-5 pt-2 flex flex-col gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className={`font-medium text-sm px-3 py-3 rounded-lg border-b transition-colors hover:text-brand-blue ${
                  scrolled
                    ? 'text-brand-navy border-slate-100'
                    : 'text-white/90 border-white/10'
                }`}
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setMobileOpen(false)}
              className="mt-3 inline-flex items-center justify-center px-5 py-3 bg-brand-gold text-brand-navy font-semibold text-sm rounded-lg hover:bg-amber-400 transition-colors"
            >
              Contact Us Today
            </a>
          </div>
        </div>
      </nav>
    </header>
  )
}
