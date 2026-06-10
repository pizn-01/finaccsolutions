'use client'

import { Linkedin, Mail, Instagram } from 'lucide-react'

function XLogo({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.737-8.835L1.254 2.25H8.08l4.258 5.63 5.907-5.63Zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  )
}

const servicesLinks = [
  { name: 'Bookkeeping', href: '/services/bookkeeping' },
  { name: 'Payroll Services', href: '/services/payroll' },
  { name: 'Budgeting & Forecasting', href: '/services/budgeting-forecasting' },
  { name: 'Fundraising Support', href: '/services/fundraising-support' },
  { name: 'Group Consolidation', href: '/services/group-consolidation' },
  { name: 'Tax Records & Compliance', href: '/services/tax-compliance' },
]

const talentLinks = [
  { name: 'Offshore Finance Professionals', href: '/talent' },
  { name: 'Senior Bookkeepers', href: '/talent' },
  { name: 'Management Accountants', href: '/talent' },
  { name: 'Financial Analysts', href: '/talent' },
  { name: 'IFRS Specialists', href: '/talent' },
  { name: 'Virtual CFO', href: '/talent' },
]

const companyLinks = [
  { name: 'Why FinAccSolutions', href: '/why-us' },
  { name: 'Technology', href: '/technology' },
  { name: 'Contact', href: '/contact' },
  { name: 'Privacy Policy', href: '/privacy-policy' },
]

export default function Footer() {
  return (
    <footer className="bg-brand-navy-2 text-slate-400 pt-16 pb-8 border-t border-white/5 relative overflow-hidden select-none">
      <div className="max-w-content mx-auto px-6 relative z-10">
        
        {/* Main Footer Directory */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-12 pb-12 border-b border-white/5">
          
          {/* Column 1: Brand Wordmark */}
          <div className="lg:col-span-3 space-y-4">
            <a href="/" className="flex items-center gap-2">
              <div
                className="w-16 h-16 bg-no-repeat flex-shrink-0"
                style={{ backgroundImage: 'url(/Logo.png)', backgroundSize: '500%', backgroundPosition: '5% 50%' }}
                aria-hidden="true"
              />
              <span className="font-sora font-bold text-xl text-white tracking-tight">
                FinAcc<span className="text-brand-sky font-semibold">Solutions</span>
              </span>
            </a>
            <p className="text-slate-400 font-dm-sans text-sm font-semibold tracking-wide">
              Precision. Integrity. Growth.
            </p>
            <div className="flex items-center gap-2 text-slate-400 text-sm font-dm-sans">
              <Mail className="w-4 h-4 text-brand-sky" />
              <a href="mailto:contact@finaccsolutions.com" className="hover:text-brand-blue transition-colors">
                contact@finaccsolutions.com
              </a>
            </div>

            {/* Social Icons */}
            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://www.linkedin.com/company/126584188/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center text-slate-400 hover:bg-brand-blue hover:text-white transition-all duration-300"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href="https://x.com/finaccsolutions"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center text-slate-400 hover:bg-brand-blue hover:text-white transition-all duration-300"
                aria-label="X (formerly Twitter)"
              >
                <XLogo className="w-4 h-4" />
              </a>
              <a
                href="https://www.instagram.com/fin_accsolutions/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center text-slate-400 hover:bg-brand-blue hover:text-white transition-all duration-300"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Column 2: Services */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="font-sora font-semibold text-xs text-white uppercase tracking-wider">Services</h4>
            <ul className="space-y-2.5">
              {servicesLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-xs font-dm-sans hover:text-white transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Talent */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="font-sora font-semibold text-xs text-white uppercase tracking-wider">Talent</h4>
            <ul className="space-y-2.5">
              {talentLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-xs font-dm-sans hover:text-white transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Company */}
          <div className="lg:col-span-3 space-y-6">
            <div className="space-y-4">
              <h4 className="font-sora font-semibold text-xs text-white uppercase tracking-wider">Company</h4>
              <ul className="space-y-2.5">
                {companyLinks.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-xs font-dm-sans hover:text-white transition-colors duration-200"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left text-xs font-dm-sans">
          <p>© 2026 FinAccSolutions. All rights reserved.  ·  Precision. Integrity. Growth.</p>
          <div className="flex items-center gap-4">
            <a href="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</a>
          </div>
        </div>

      </div>
    </footer>
  )
}
