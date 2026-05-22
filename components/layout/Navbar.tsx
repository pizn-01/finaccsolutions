'use client'

import { useState, useRef, useEffect } from 'react'
import { Phone, Mail, ChevronDown, Menu, X, ArrowRight, CheckCircle2 } from 'lucide-react'

const financeTalent = [
  { name: 'Bookkeepers & Accountants', desc: 'General ledger, monthly close, AP/AR' },
  { name: 'QuickBooks & NetSuite Experts', desc: 'ERP implementation and management' },
  { name: 'Financial Analysts', desc: 'FP&A, modeling, and investor reporting' },
  { name: 'Tax & Compliance Experts', desc: 'Corporate tax filing and audit prep' },
]

const assistantTalent = [
  { name: 'Video Editors', desc: 'TikTok, YouTube, ad creatives' },
  { name: 'SEO & Content Specialists', desc: 'On-page, link building, keyword strategies' },
  { name: 'Amazon & Shopify Store Managers', desc: 'Listings, PPC, e-commerce ops' },
  { name: 'Marketing & Ad Experts', desc: 'Paid acquisition, PPC, campaign strategy' },
  { name: 'Social Media Managers', desc: 'Content design, calendars, community growth' },
  { name: 'Executive Virtual Assistants', desc: 'Calendar, inbox, travel, admin tasks' },
]

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [megaMenuOpen, setMegaMenuOpen] = useState(false)
  const megaMenuRef = useRef<HTMLDivElement>(null)

  // Handle click outside to close mega menu
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (megaMenuRef.current && !megaMenuRef.current.contains(event.target as Node)) {
        setMegaMenuOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  return (
    <header className="fixed top-0 left-0 right-0 z-50 shadow-sm border-b border-slate-200/80 bg-white">
      {/* 1. Top Bar */}
      <div className="bg-slate-900 text-white text-xs py-2 px-6">
        <div className="max-w-content mx-auto flex flex-col sm:flex-row justify-between items-center gap-2">
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-1">
            <a href="tel:+18005181206" className="flex items-center gap-1.5 hover:text-brand-gold transition-colors">
              <Phone className="w-3.5 h-3.5 text-brand-gold" />
              <span>US Toll Free: <strong>+1-800-518-1206</strong></span>
            </a>
            <a href="mailto:info@finaccsolutions.com" className="flex items-center gap-1.5 hover:text-brand-gold transition-colors">
              <Mail className="w-3.5 h-3.5 text-brand-gold" />
              <span>Email: <strong>info@finaccsolutions.com</strong></span>
            </a>
          </div>
          <div className="flex items-center gap-4">
            <span className="hidden md:inline text-slate-400">🔥 Save 70% on Hiring Costs</span>
            <a
              href="#contact"
              className="px-3 py-1 bg-brand-gold hover:bg-amber-500 text-white font-bold rounded text-[11px] uppercase tracking-wider transition-colors"
            >
              Get Started
            </a>
          </div>
        </div>
      </div>

      {/* 2. Main Nav */}
      <nav className="max-w-content mx-auto px-6 relative" aria-label="Primary Navigation">
        <div className="flex items-center justify-between h-16 lg:h-20">
          
          {/* Logo */}
          <a
            href="#"
            className="font-sora font-extrabold text-xl text-brand-blue flex items-center gap-2"
            style={{ letterSpacing: '-0.03em' }}
          >
            <span className="w-8 h-8 rounded-lg bg-brand-blue text-white flex items-center justify-center font-black text-lg">F</span>
            <span>Fin-Acc<span className="text-slate-900">Solutions</span></span>
          </a>

          {/* Links */}
          <div className="hidden md:flex items-center gap-8 h-full">
            {/* Mega Menu Trigger */}
            <div className="h-full flex items-center">
              <button
                onClick={() => setMegaMenuOpen(!megaMenuOpen)}
                onMouseEnter={() => setMegaMenuOpen(true)}
                className={`flex items-center gap-1 font-semibold text-sm h-full transition-colors ${
                  megaMenuOpen ? 'text-brand-blue' : 'text-slate-700 hover:text-brand-blue'
                }`}
                aria-expanded={megaMenuOpen}
              >
                Services &amp; Roles
                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${megaMenuOpen ? 'rotate-180' : ''}`} />
              </button>
            </div>

            <a href="#why-us" className="font-semibold text-sm text-slate-700 hover:text-brand-blue transition-colors">
              Why Choose Us
            </a>
            <a href="#testimonials" className="font-semibold text-sm text-slate-700 hover:text-brand-blue transition-colors">
              Testimonials
            </a>
            <a href="#contact" className="font-semibold text-sm text-slate-700 hover:text-brand-blue transition-colors">
              Contact
            </a>
          </div>

          {/* Right Action button */}
          <div className="hidden md:flex items-center gap-4">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-brand-blue hover:bg-brand-sky text-white font-bold text-sm rounded-lg transition-all duration-200 shadow-sm hover:shadow"
            >
              Hire Talent Now
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden p-2 text-slate-700 hover:bg-slate-100 rounded-lg transition-colors"
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* 3. Mega Menu Dropdown */}
        {megaMenuOpen && (
          <div
            ref={megaMenuRef}
            onMouseLeave={() => setMegaMenuOpen(false)}
            className="hidden md:block absolute left-6 right-6 top-[72px] bg-white border border-slate-200 rounded-2xl shadow-xl p-8 grid grid-cols-12 gap-8 animate-fade-in"
            style={{
              animation: 'scale-in 0.2s cubic-bezier(0.16, 1, 0.3, 1) forwards',
              boxShadow: '0 20px 40px rgba(0,0,0,0.08)',
            }}
          >
            {/* Finance & Accounts Column */}
            <div className="col-span-5 border-r border-slate-100 pr-8">
              <h3 className="font-sora font-bold text-xs uppercase tracking-wider text-brand-blue mb-4 flex items-center gap-2">
                <span className="w-1.5 h-3 bg-brand-blue rounded-full" />
                Finance &amp; Accounting
              </h3>
              <div className="space-y-4">
                {financeTalent.map((role) => (
                  <a
                    key={role.name}
                    href="#services"
                    onClick={() => setMegaMenuOpen(false)}
                    className="block group hover:bg-slate-50 p-2.5 rounded-xl transition-all"
                  >
                    <div className="font-bold text-sm text-slate-800 group-hover:text-brand-blue flex items-center gap-1">
                      {role.name}
                    </div>
                    <div className="text-xs text-slate-500 mt-0.5">{role.desc}</div>
                  </a>
                ))}
              </div>
            </div>

            {/* Virtual Assistants & Outsourcing Column */}
            <div className="col-span-5 pr-4">
              <h3 className="font-sora font-bold text-xs uppercase tracking-wider text-brand-gold mb-4 flex items-center gap-2">
                <span className="w-1.5 h-3 bg-brand-gold rounded-full" />
                Virtual Assistants &amp; Marketing
              </h3>
              <div className="grid grid-cols-1 gap-4">
                {assistantTalent.map((role) => (
                  <a
                    key={role.name}
                    href="#outsourcing"
                    onClick={() => setMegaMenuOpen(false)}
                    className="block group hover:bg-slate-50 p-2.5 rounded-xl transition-all"
                  >
                    <div className="font-bold text-sm text-slate-800 group-hover:text-brand-blue">
                      {role.name}
                    </div>
                    <div className="text-xs text-slate-500 mt-0.5">{role.desc}</div>
                  </a>
                ))}
              </div>
            </div>

            {/* Right Promotional Box */}
            <div className="col-span-2 bg-slate-50 rounded-xl p-5 border border-slate-100 flex flex-col justify-between">
              <div>
                <h4 className="font-sora font-bold text-sm text-slate-900 mb-2">Ready to Scale?</h4>
                <p className="text-xs text-slate-500 leading-[1.6] mb-4">
                  Get a dedicated full-time remote resource or build a complete department.
                </p>
                <div className="space-y-2 text-[11px] text-slate-700 font-semibold">
                  <div className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
                    <span>Pre-Vetted Talent</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
                    <span>1-Month Notice</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
                    <span>Zero Recruitment Fees</span>
                  </div>
                </div>
              </div>
              <a
                href="#contact"
                onClick={() => setMegaMenuOpen(false)}
                className="mt-4 block text-center py-2 bg-slate-900 hover:bg-slate-800 text-white rounded-lg text-xs font-bold transition-colors"
              >
                Get Started
              </a>
            </div>

          </div>
        )}

        {/* 4. Mobile Navigation Drawer */}
        {mobileOpen && (
          <div className="md:hidden border-t border-slate-100 bg-white py-4 px-2 space-y-2 animate-fade-in absolute left-0 right-0 top-16 shadow-lg rounded-b-2xl border border-slate-200">
            <div className="px-4 py-2 font-bold text-xs uppercase tracking-wider text-slate-400">
              Talent Roles
            </div>
            <div className="grid grid-cols-2 gap-1 px-4">
              <a href="#services" onClick={() => setMobileOpen(false)} className="text-xs text-slate-700 py-2 hover:text-brand-blue">
                Accountants
              </a>
              <a href="#services" onClick={() => setMobileOpen(false)} className="text-xs text-slate-700 py-2 hover:text-brand-blue">
                Bookkeepers
              </a>
              <a href="#outsourcing" onClick={() => setMobileOpen(false)} className="text-xs text-slate-700 py-2 hover:text-brand-blue">
                Video Editors
              </a>
              <a href="#outsourcing" onClick={() => setMobileOpen(false)} className="text-xs text-slate-700 py-2 hover:text-brand-blue">
                SEO Specialists
              </a>
              <a href="#outsourcing" onClick={() => setMobileOpen(false)} className="text-xs text-slate-700 py-2 hover:text-brand-blue">
                Amazon Managers
              </a>
              <a href="#outsourcing" onClick={() => setMobileOpen(false)} className="text-xs text-slate-700 py-2 hover:text-brand-blue">
                Marketing Experts
              </a>
            </div>
            <div className="border-t border-slate-100 my-2 pt-2" />
            <a
              href="#why-us"
              onClick={() => setMobileOpen(false)}
              className="block px-4 py-2.5 font-semibold text-sm text-slate-800 hover:bg-slate-50 rounded-lg"
            >
              Why Choose Us
            </a>
            <a
              href="#testimonials"
              onClick={() => setMobileOpen(false)}
              className="block px-4 py-2.5 font-semibold text-sm text-slate-800 hover:bg-slate-50 rounded-lg"
            >
              Testimonials
            </a>
            <a
              href="#contact"
              onClick={() => setMobileOpen(false)}
              className="block px-4 py-2.5 font-semibold text-sm text-slate-800 hover:bg-slate-50 rounded-lg"
            >
              Contact
            </a>
            <div className="px-4 pt-4">
              <a
                href="#contact"
                onClick={() => setMobileOpen(false)}
                className="w-full justify-center inline-flex items-center gap-2 px-5 py-3 bg-brand-blue hover:bg-brand-sky text-white font-bold text-sm rounded-lg transition-colors"
              >
                Hire Talent Now
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
