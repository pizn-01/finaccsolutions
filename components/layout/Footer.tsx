'use client'

import { Linkedin, Twitter, Mail, Shield, CheckCircle, Award } from 'lucide-react'

const servicesLinks = [
  { name: 'Bookkeeping', href: '#services' },
  { name: 'Payroll Services', href: '#services' },
  { name: 'Budgeting & Forecasting', href: '#services' },
  { name: 'Fundraising Support', href: '#services' },
  { name: 'Group Consolidation', href: '#services' },
  { name: 'Tax Records & Compliance', href: '#services' },
]

const talentLinks = [
  { name: 'Virtual Finance Professionals', href: '#talent' },
  { name: 'Bookkeeper VAs', href: '#talent' },
  { name: 'Staff Accountants', href: '#talent' },
  { name: 'Senior Accountants', href: '#talent' },
  { name: 'IFRS Specialists', href: '#talent' },
  { name: 'US GAAP Professionals', href: '#talent' },
]

const companyLinks = [
  { name: 'About Us', href: '#why-us' },
  { name: 'Careers', href: '#' },
  { name: 'Contact', href: '#contact' },
  { name: 'Privacy Policy', href: '#' },
]

export default function Footer() {
  return (
    <footer className="bg-brand-navy-2 text-slate-400 pt-16 pb-8 border-t border-white/5 relative overflow-hidden select-none">
      <div className="max-w-content mx-auto px-6 relative z-10">
        
        {/* Main Footer Directory */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-12 pb-12 border-b border-white/5">
          
          {/* Column 1: Brand Wordmark */}
          <div className="lg:col-span-3 space-y-4">
            <a href="#" className="font-sora font-bold text-xl text-white tracking-tight flex items-center gap-1.5">
              <span className="w-7 h-7 rounded bg-brand-blue text-white flex items-center justify-center font-extrabold text-sm">F</span>
              <span>
                FinAcc<span className="text-brand-sky font-semibold">Solutions</span>
              </span>
            </a>
            <p className="text-slate-400 font-dm-sans text-sm font-semibold tracking-wide">
              Precision. Integrity. Growth.
            </p>
            <div className="flex items-center gap-2 text-slate-400 text-sm font-dm-sans">
              <Mail className="w-4 h-4 text-brand-sky" />
              <a href="mailto:hello@finaccsolutions.com" className="hover:text-brand-blue transition-colors">
                hello@finaccsolutions.com
              </a>
            </div>

            {/* Social Icons */}
            <div className="flex items-center gap-3 pt-2">
              <a
                href="#"
                className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center text-slate-400 hover:bg-brand-blue hover:text-white transition-all duration-300"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center text-slate-400 hover:bg-brand-blue hover:text-white transition-all duration-300"
                aria-label="Twitter"
              >
                <Twitter className="w-4 h-4" />
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

            {/* Trust Logos / Compliance Badges */}
            <div className="space-y-3 pt-2">
              <div className="flex items-center gap-2 text-[10px] text-slate-400 font-semibold tracking-wider uppercase">
                <Shield className="w-3.5 h-3.5 text-brand-gold" />
                <span>ISO 27001 Secure</span>
              </div>
              <div className="flex items-center gap-2 text-[10px] text-slate-400 font-semibold tracking-wider uppercase">
                <CheckCircle className="w-3.5 h-3.5 text-brand-gold" />
                <span>GDPR Compliant</span>
              </div>
              <div className="flex items-center gap-2 text-[10px] text-slate-400 font-semibold tracking-wider uppercase">
                <Award className="w-3.5 h-3.5 text-brand-gold" />
                <span>QuickBooks Partner</span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left text-xs font-dm-sans">
          <p>© 2025 FinAccSolutions. All rights reserved.  ·  Precision. Integrity. Growth.</p>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <span className="text-white/10">•</span>
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
          </div>
        </div>

      </div>
    </footer>
  )
}
