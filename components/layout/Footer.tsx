import { Linkedin, Twitter } from 'lucide-react'

const serviceLinks = ['Bookkeeping', 'Financial Statements', 'Outsourced Finance', 'ERP Integration']
const outsourcingLinks = ['Video Editors', 'SEO Specialists', 'Amazon Managers', 'Marketing Experts', 'Social Media', 'Custom Roles']
const companyLinks = ['About', 'Careers', 'Contact', 'Privacy Policy']

export default function Footer() {
  return (
    <footer className="bg-brand-deep-navy border-t border-white/5">
      <div className="max-w-content mx-auto px-6 py-16 lg:py-20">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12 mb-14">

          {/* Brand */}
          <div className="col-span-2 lg:col-span-1">
            <a
              href="#"
              className="font-sora font-bold text-xl text-white block mb-3 hover:text-brand-sky transition-colors duration-300"
              style={{ letterSpacing: '-0.02em' }}
            >
              Fin-Acc Solutions
            </a>
            <p className="text-slate-400 text-sm leading-[1.7] mb-6">
              Elite finance expertise meets effortless global talent — all under one roof.
            </p>
            <div className="flex items-center gap-3">
              <a
                href="#"
                aria-label="LinkedIn"
                className="w-9 h-9 rounded-lg flex items-center justify-center text-slate-500 hover:text-white hover:bg-brand-blue/30 transition-all duration-200"
                style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.08)' }}
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href="#"
                aria-label="Twitter / X"
                className="w-9 h-9 rounded-lg flex items-center justify-center text-slate-500 hover:text-white hover:bg-brand-blue/30 transition-all duration-200"
                style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.08)' }}
              >
                <Twitter className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3
              className="font-sora font-semibold text-white text-xs uppercase mb-5"
              style={{ letterSpacing: '0.1em' }}
            >
              Services
            </h3>
            <ul className="space-y-3">
              {serviceLinks.map(link => (
                <li key={link}>
                  <a href="#services" className="text-slate-500 text-sm hover:text-slate-200 transition-colors duration-200">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Outsourcing */}
          <div>
            <h3
              className="font-sora font-semibold text-white text-xs uppercase mb-5"
              style={{ letterSpacing: '0.1em' }}
            >
              Outsourcing
            </h3>
            <ul className="space-y-3">
              {outsourcingLinks.map(link => (
                <li key={link}>
                  <a href="#outsourcing" className="text-slate-500 text-sm hover:text-slate-200 transition-colors duration-200">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3
              className="font-sora font-semibold text-white text-xs uppercase mb-5"
              style={{ letterSpacing: '0.1em' }}
            >
              Company
            </h3>
            <ul className="space-y-3">
              {companyLinks.map(link => (
                <li key={link}>
                  <a href="#contact" className="text-slate-500 text-sm hover:text-slate-200 transition-colors duration-200">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-white/5 pt-8 text-center">
          <p className="text-slate-600 text-sm">
            © 2025 Fin-Acc Solutions. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
