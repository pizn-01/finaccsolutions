'use client'

import { useState, useEffect, useRef } from 'react'
import { Menu, X, ChevronDown, ArrowRight, BookOpen, Users, TrendingUp, LineChart, Building2, ClipboardCheck, CheckCircle2 } from 'lucide-react'
import Button from '@/components/ui/Button'

const serviceItems = [
  { name: 'Bookkeeping', desc: 'Accurate, organised ledgers.', icon: BookOpen, href: '#services' },
  { name: 'Payroll Services', desc: 'Accurate, on-time processing.', icon: Users, href: '#services' },
  { name: 'Budgeting & Forecasting', desc: 'Real-time forecasting & plans.', icon: TrendingUp, href: '#services' },
  { name: 'Fundraising Support', desc: 'Investor-ready modeling.', icon: LineChart, href: '#services' },
  { name: 'Group Consolidation', desc: 'Multi-entity consolidation.', icon: Building2, href: '#services' },
  { name: 'Tax Records & Compliance', desc: 'Organised and reconciled records.', icon: ClipboardCheck, href: '#services' },
]

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [megaMenuOpen, setMegaMenuOpen] = useState(false)
  const megaMenuRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 80)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close mega menu when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (megaMenuRef.current && !megaMenuRef.current.contains(event.target as Node)) {
        setMegaMenuOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  const linkColorClass = isScrolled
    ? 'text-brand-navy hover:text-brand-blue'
    : 'text-white/90 hover:text-white'

  const logoColorClass = isScrolled
    ? 'text-brand-blue'
    : 'text-white'

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white shadow-sm border-b border-brand-border py-4'
          : 'bg-transparent border-b border-white/10 py-6'
      }`}
      style={{
        transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)',
      }}
    >
      <nav className="max-w-content mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <a
          href="#"
          className={`font-sora font-bold text-2xl transition-colors duration-300 tracking-tight flex items-center gap-1.5`}
        >
          <span className={`w-8 h-8 rounded-lg bg-brand-blue text-white flex items-center justify-center font-extrabold text-lg transition-transform duration-300 group-hover:scale-105`}>F</span>
          <span className={logoColorClass}>
            FinAcc<span className="text-brand-sky font-semibold">Solutions</span>
          </span>
        </a>

        {/* Desktop Nav Links */}
        <div className="hidden lg:flex items-center gap-8">
          {/* Services Mega Menu Trigger */}
          <div
            className="relative h-full flex items-center"
            onMouseEnter={() => setMegaMenuOpen(true)}
            onMouseLeave={() => setMegaMenuOpen(false)}
          >
            <button
              className={`nav-link flex items-center gap-1.5 font-dm-sans font-medium text-sm transition-colors duration-300 ${linkColorClass}`}
              aria-expanded={megaMenuOpen}
            >
              Services
              <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${megaMenuOpen ? 'rotate-180' : ''}`} />
            </button>

            {/* Mega Menu Dropdown */}
            {megaMenuOpen && (
              <div
                ref={megaMenuRef}
                className="absolute left-1/2 -translate-x-1/2 top-full pt-6 w-[760px] animate-fade-in z-50"
              >
                <div
                  className="bg-white border border-brand-border rounded-2xl shadow-[0_20px_50px_rgba(10,22,40,0.12)] p-8 grid grid-cols-12 gap-8"
                  style={{
                    animation: 'scale-in 0.25s cubic-bezier(0.16, 1, 0.3, 1) forwards',
                  }}
                >
                  {/* Left Column - Core Services */}
                  <div className="col-span-8">
                    <h3 className="font-sora font-semibold text-xs uppercase tracking-wider text-brand-blue mb-4 flex items-center gap-2">
                      <span className="w-1.5 h-3 bg-brand-blue rounded-full" />
                      Core Finance &amp; Accounting
                    </h3>
                    <div className="grid grid-cols-2 gap-4">
                      {serviceItems.map((item) => {
                        const Icon = item.icon
                        return (
                          <a
                            key={item.name}
                            href={item.href}
                            onClick={() => setMegaMenuOpen(false)}
                            className="group/item flex items-start gap-3 p-2.5 rounded-xl hover:bg-brand-slate transition-colors duration-200"
                          >
                            <div className="w-9 h-9 rounded-lg bg-brand-blue/5 text-brand-blue flex items-center justify-center group-hover/item:bg-brand-blue group-hover/item:text-white transition-all duration-200 flex-shrink-0">
                              <Icon className="w-4.5 h-4.5" />
                            </div>
                            <div>
                              <div className="font-dm-sans font-semibold text-sm text-brand-navy group-hover/item:text-brand-blue transition-colors">
                                {item.name}
                              </div>
                              <div className="text-xs text-brand-muted mt-0.5 leading-normal">
                                {item.desc}
                              </div>
                            </div>
                          </a>
                        )
                      })}
                    </div>
                  </div>

                  {/* Right Column - Promos */}
                  <div className="col-span-4 bg-brand-slate rounded-xl p-5 border border-brand-border flex flex-col justify-between">
                    <div>
                      <h4 className="font-sora font-bold text-sm text-brand-navy mb-2">Flexible Scaling</h4>
                      <p className="text-xs text-brand-muted leading-relaxed mb-4">
                        Build your dedicated offshore finance department with zero hassle.
                      </p>
                      <div className="space-y-2.5 text-[11px] text-brand-navy font-semibold">
                        <div className="flex items-center gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-brand-gold" />
                          <span>Big 4 &amp; Big 10 Trained</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-brand-gold" />
                          <span>IFRS &amp; GAAP Certified</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-brand-gold" />
                          <span>1-Month Notice Period</span>
                        </div>
                      </div>
                    </div>
                    <a
                      href="#contact"
                      onClick={() => setMegaMenuOpen(false)}
                      className="mt-6 flex items-center justify-center gap-1.5 py-2.5 bg-brand-blue hover:bg-brand-sky text-white rounded-lg text-xs font-bold transition-colors duration-200"
                    >
                      Hire Talent Now
                      <ArrowRight className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              </div>
            )}
          </div>

          <a href="#technology" className={`nav-link font-dm-sans font-medium text-sm transition-colors duration-300 ${linkColorClass}`}>
            Technology
          </a>
          <a href="#talent" className={`nav-link font-dm-sans font-medium text-sm transition-colors duration-300 ${linkColorClass}`}>
            Talent
          </a>
          <a href="#why-us" className={`nav-link font-dm-sans font-medium text-sm transition-colors duration-300 ${linkColorClass}`}>
            Why Us
          </a>
          <a href="#contact" className={`nav-link font-dm-sans font-medium text-sm transition-colors duration-300 ${linkColorClass}`}>
            Contact
          </a>
          <a href="/blog" className={`nav-link font-dm-sans font-medium text-sm transition-colors duration-300 ${linkColorClass}`}>
            Blog
          </a>
        </div>

        {/* CTA Button */}
        <div className="hidden lg:block">
          <a href="#contact">
            <Button variant="gold" size="sm">
              Book Your Free Consultation
            </Button>
          </a>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className={`lg:hidden p-2 rounded-xl transition-colors duration-300 ${
            isScrolled ? 'text-brand-navy hover:bg-brand-slate' : 'text-white hover:bg-white/10'
          }`}
          aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </nav>

      {/* Mobile Drawer (Slide Down) */}
      {mobileOpen && (
        <div className="lg:hidden absolute left-0 right-0 top-full bg-white border-t border-brand-border shadow-[0_12px_30px_rgba(10,22,40,0.15)] py-6 px-6 z-50 flex flex-col gap-4 animate-fade-in border-b rounded-b-2xl">
          <div className="flex flex-col gap-3">
            <a
              href="#services"
              onClick={() => setMobileOpen(false)}
              className="font-dm-sans font-semibold text-base text-brand-navy hover:text-brand-blue py-2 border-b border-brand-border/40"
            >
              Services
            </a>
            <a
              href="#technology"
              onClick={() => setMobileOpen(false)}
              className="font-dm-sans font-semibold text-base text-brand-navy hover:text-brand-blue py-2 border-b border-brand-border/40"
            >
              Technology
            </a>
            <a
              href="#talent"
              onClick={() => setMobileOpen(false)}
              className="font-dm-sans font-semibold text-base text-brand-navy hover:text-brand-blue py-2 border-b border-brand-border/40"
            >
              Talent
            </a>
            <a
              href="#why-us"
              onClick={() => setMobileOpen(false)}
              className="font-dm-sans font-semibold text-base text-brand-navy hover:text-brand-blue py-2 border-b border-brand-border/40"
            >
              Why Us
            </a>
            <a
              href="/blog"
              onClick={() => setMobileOpen(false)}
              className="font-dm-sans font-semibold text-base text-brand-navy hover:text-brand-blue py-2 border-b border-brand-border/40"
            >
              Blog
            </a>
            <a
              href="#contact"
              onClick={() => setMobileOpen(false)}
              className="font-dm-sans font-semibold text-base text-brand-navy hover:text-brand-blue py-2 border-b border-brand-border/40"
            >
              Contact
            </a>
          </div>

          <a href="#contact" onClick={() => setMobileOpen(false)} className="w-full mt-2">
            <Button variant="gold" className="w-full">
              Book Your Free Consultation
            </Button>
          </a>
        </div>
      )}
    </header>
  )
}
