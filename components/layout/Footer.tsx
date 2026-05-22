import { Linkedin, Twitter, Shield, CheckCircle, Award } from 'lucide-react'

const financialServices = [
  { name: 'Bookkeeping & AP/AR', href: '#services' },
  { name: 'Financial Reporting', href: '#services' },
  { name: 'Tax Preparation', href: '#services' },
  { name: 'QuickBooks / Xero Setup', href: '#services' },
]

const manpowerServices = [
  { name: 'Video Editors', href: '#outsourcing' },
  { name: 'SEO Specialists', href: '#outsourcing' },
  { name: 'Amazon Store Managers', href: '#outsourcing' },
  { name: 'Marketing Assistants', href: '#outsourcing' },
  { name: 'Virtual Assistants', href: '#outsourcing' },
]

const companyLinks = [
  { name: 'About Our Agency', href: '#why-choose-us' },
  { name: 'Careers (We\'re hiring)', href: '#why-choose-us' },
  { name: 'Contact Sales', href: '#contact' },
  { name: 'Partnership Program', href: '#contact' },
]

const resourcesLinks = [
  { name: 'Client Case Studies', href: '#testimonials' },
  { name: 'Remote Working Guides', href: '#testimonials' },
  { name: 'FAQ Database', href: '#contact' },
  { name: 'Free Audit Call', href: '#contact' },
]

const legalLinks = [
  { name: 'Privacy Policy', href: '#' },
  { name: 'Terms of Service', href: '#' },
  { name: 'Cookie Policy', href: '#' },
  { name: 'GDPR Compliance', href: '#' },
]

export default function Footer() {
  return (
    <footer className="bg-brand-deep-navy border-t border-slate-800 text-slate-400 text-xs">
      <div className="max-w-content mx-auto px-6 py-16 lg:py-20">
        
        {/* Sitemap Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-10 lg:gap-8 mb-16">
          
          {/* Brand Info */}
          <div className="col-span-2 md:col-span-3 lg:col-span-2">
            <a
              href="#"
              className="font-sora font-extrabold text-xl text-white block mb-4 hover:text-brand-blue transition-colors duration-300"
              style={{ letterSpacing: '-0.02em' }}
            >
              Fin-Acc Solutions
            </a>
            <p className="text-slate-400 text-sm leading-[1.7] mb-6 max-w-sm">
              Enterprise-grade talent outsourcing. We match pre-vetted remote specialists and top financial experts with fast-growing businesses.
            </p>
            
            {/* Social Links */}
            <div className="flex items-center gap-3 mb-6">
              <a
                href="#"
                aria-label="LinkedIn"
                className="w-8 h-8 rounded-lg flex items-center justify-center text-slate-400 hover:text-white hover:bg-brand-blue/20 hover:border-brand-blue/30 transition-all duration-200"
                style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.06)' }}
              >
                <Linkedin className="w-4.5 h-4.5" />
              </a>
              <a
                href="#"
                aria-label="Twitter / X"
                className="w-8 h-8 rounded-lg flex items-center justify-center text-slate-400 hover:text-white hover:bg-brand-blue/20 hover:border-brand-blue/30 transition-all duration-200"
                style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.06)' }}
              >
                <Twitter className="w-4.5 h-4.5" />
              </a>
            </div>
          </div>

          {/* Column 2: Financial Services */}
          <div>
            <h3 className="font-sora font-bold text-white text-[11px] uppercase tracking-wider mb-5">
              Finance & Tax
            </h3>
            <ul className="space-y-3">
              {financialServices.map(link => (
                <li key={link.name}>
                  <a href={link.href} className="hover:text-white transition-colors duration-200 text-slate-400">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Talent Outsourcing */}
          <div>
            <h3 className="font-sora font-bold text-white text-[11px] uppercase tracking-wider mb-5">
              Talent Outsourcing
            </h3>
            <ul className="space-y-3">
              {manpowerServices.map(link => (
                <li key={link.name}>
                  <a href={link.href} className="hover:text-white transition-colors duration-200 text-slate-400">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Company */}
          <div>
            <h3 className="font-sora font-bold text-white text-[11px] uppercase tracking-wider mb-5">
              Company
            </h3>
            <ul className="space-y-3">
              {companyLinks.map(link => (
                <li key={link.name}>
                  <a href={link.href} className="hover:text-white transition-colors duration-200 text-slate-400">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 5: Resources */}
          <div>
            <h3 className="font-sora font-bold text-white text-[11px] uppercase tracking-wider mb-5">
              Resources
            </h3>
            <ul className="space-y-3">
              {resourcesLinks.map(link => (
                <li key={link.name}>
                  <a href={link.href} className="hover:text-white transition-colors duration-200 text-slate-400">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* Certification Seals & Bottom Bar */}
        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex flex-wrap items-center justify-center gap-4 text-[10px] text-slate-500">
            <div className="flex items-center gap-1.5 px-3 py-1 bg-white/[0.02] border border-white/[0.05] rounded-md">
              <Shield className="w-3.5 h-3.5 text-brand-blue" />
              <span>ISO 27001 Certified</span>
            </div>
            <div className="flex items-center gap-1.5 px-3 py-1 bg-white/[0.02] border border-white/[0.05] rounded-md">
              <CheckCircle className="w-3.5 h-3.5 text-emerald-500" />
              <span>GDPR Compliant</span>
            </div>
            <div className="flex items-center gap-1.5 px-3 py-1 bg-white/[0.02] border border-white/[0.05] rounded-md">
              <Award className="w-3.5 h-3.5 text-brand-gold" />
              <span>QuickBooks Partner</span>
            </div>
          </div>

          <div className="text-center md:text-right">
            <p className="text-slate-500 text-[11px]">
              © {new Date().getFullYear()} Fin-Acc Solutions. All rights reserved. Built for scale.
            </p>
            <div className="flex gap-4 justify-center md:justify-end mt-2 text-[10px]">
              {legalLinks.map(link => (
                <a key={link.name} href={link.href} className="text-slate-600 hover:text-slate-400 transition-colors">
                  {link.name}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
