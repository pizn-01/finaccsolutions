'use client'

import { UserCheck, UserCog, Award, CheckCircle2, Globe, Flag, Network, ArrowRight } from 'lucide-react'
import SectionHeader from '@/components/ui/SectionHeader'
import AnimateIn from '@/components/ui/AnimateIn'
import Button from '@/components/ui/Button'

const uspItems = [
  'Significant cost savings vs. local hiring',
  'Pre-vetted & qualified professionals',
  'Part-time, full-time, or project-based',
  'Fast onboarding — resources ready within days',
  'Confidentiality & data security guaranteed',
]

const tiers = [
  {
    tier: 'JUNIOR',
    role: 'Bookkeeper VA',
    ideal: 'Data entry, bank reconciliations, basic reporting',
    tag: 'From Day One',
    icon: UserCheck,
    accentColor: '#3B82F6', // brand-sky
    bgAccent: 'bg-brand-sky/10 text-brand-sky border-brand-sky/20',
    popular: false,
  },
  {
    tier: 'MID-LEVEL',
    role: 'Staff Accountant',
    ideal: 'Full-cycle bookkeeping, payroll support, month-end close',
    tag: 'Best Value',
    icon: UserCog,
    accentColor: '#1B4FD8', // brand-blue
    bgAccent: 'bg-brand-blue/10 text-brand-blue border-brand-blue/20',
    popular: true,
  },
  {
    tier: 'SENIOR',
    role: 'Senior Accountant / Team Lead',
    ideal: 'Review, reporting, supervision, complex accounts',
    tag: 'Enterprise Grade',
    icon: Award,
    accentColor: '#F59E0B', // brand-gold
    bgAccent: 'bg-brand-gold/10 text-brand-gold border-brand-gold/20',
    popular: false,
  },
]

export default function VATalent() {
  const handleSelectTier = (roleName: string) => {
    window.dispatchEvent(
      new CustomEvent('select-role', {
        detail: { service: 'Virtual Finance Talent', role: roleName },
      })
    )
  }

  return (
    <section id="talent" className="bg-white py-20 lg:py-[120px] relative overflow-hidden">
      <div className="max-w-content mx-auto px-6">
        
        {/* Section Header */}
        <AnimateIn direction="up">
          <SectionHeader
            label="VIRTUAL TALENT"
            title="The Right Finance Professional, At the Right Cost"
            subtitle="Pre-vetted virtual accountants and bookkeepers — from junior to senior — with Big 4 and Big 10 backgrounds, IFRS & US GAAP expertise, ready to integrate with your team."
            align="center"
          />
        </AnimateIn>

        {/* USP Banner */}
        <AnimateIn direction="up" delay={0.1}>
          <div className="bg-brand-blue text-white rounded-3xl p-6 lg:p-8 mb-16 shadow-lg relative overflow-hidden">
            <div className="absolute inset-0 bg-dot-grid opacity-20 pointer-events-none" />
            <div className="relative z-10 flex flex-wrap justify-center lg:justify-between items-center gap-6">
              {uspItems.map((usp, idx) => (
                <div key={idx} className="flex items-center gap-2.5 text-xs sm:text-sm font-semibold">
                  <CheckCircle2 className="w-5 h-5 text-brand-gold flex-shrink-0" />
                  <span>{usp}</span>
                </div>
              ))}
            </div>
          </div>
        </AnimateIn>

        {/* 3-Tier Visual Ladder (Stacked Horizontal Cards) */}
        <div className="space-y-6 max-w-4xl mx-auto mb-20">
          {tiers.map((t, index) => {
            const Icon = t.icon
            return (
              <AnimateIn
                key={t.role}
                direction="up"
                delay={index * 0.1}
                className="w-full"
              >
                <div
                  onClick={() => handleSelectTier(t.role)}
                  className={`group relative rounded-2xl p-6 lg:p-8 border bg-white flex flex-col md:flex-row md:items-center justify-between gap-6 cursor-pointer select-none transition-all duration-300 ${
                    t.popular
                      ? 'border-brand-blue shadow-[0_12px_40px_rgba(27,79,216,0.12)] scale-[1.02]'
                      : 'border-brand-border shadow-[0_4px_24px_rgba(10,22,40,0.06)] hover:shadow-[0_12px_32px_rgba(10,22,40,0.1)] hover:-translate-y-0.5 hover:border-brand-blue/40'
                  }`}
                  style={{
                    willChange: 'transform, box-shadow, border-color',
                  }}
                >
                  {/* Highlight for Popular Tier */}
                  {t.popular && (
                    <span className="absolute top-0 right-8 -translate-y-1/2 bg-brand-gold text-brand-navy font-dm-sans font-bold text-[10px] uppercase tracking-wider px-3.5 py-1 rounded-full shadow-sm">
                      Most Popular
                    </span>
                  )}

                  {/* Left: Icon and Details */}
                  <div className="flex items-start gap-5">
                    {/* Icon container: 48x48px, rounded-xl */}
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 ${t.bgAccent}`}>
                      <Icon className="w-5.5 h-5.5" />
                    </div>

                    <div className="space-y-1">
                      <div className="flex items-center gap-3">
                        <span className="text-[10px] uppercase font-dm-sans font-bold tracking-widest text-brand-muted">
                          {t.tier} LEVEL
                        </span>
                        <span className="w-1 h-1 rounded-full bg-brand-border" />
                        <span className="text-xs font-semibold text-brand-gold uppercase tracking-wider">
                          {t.tag}
                        </span>
                      </div>
                      <h3 className="font-sora font-semibold text-xl text-brand-navy group-hover:text-brand-blue transition-colors duration-200">
                        {t.role}
                      </h3>
                      <p className="text-brand-muted text-sm font-dm-sans">
                        Ideal for: <strong className="text-brand-navy/80">{t.ideal}</strong>
                      </p>
                    </div>
                  </div>

                  {/* Right: CTA Arrow */}
                  <div className="flex items-center gap-2 text-brand-blue font-semibold text-sm group-hover:text-brand-sky transition-colors flex-shrink-0">
                    <span>Select Role</span>
                    <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </div>
                </div>
              </AnimateIn>
            )
          })}
        </div>

        {/* 3-Column Specialisms Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 border-t border-brand-border pt-16">
          {/* Col 1 */}
          <AnimateIn direction="up" delay={0.1}>
            <div className="flex gap-4">
              <div className="w-10 h-10 rounded-lg flex items-center justify-center bg-brand-blue/10 text-brand-blue flex-shrink-0">
                <Globe className="w-5 h-5" />
              </div>
              <div className="space-y-1">
                <h4 className="font-sora font-semibold text-base text-brand-navy">IFRS Specialists</h4>
                <p className="text-brand-muted text-sm font-dm-sans leading-relaxed">
                  Experienced across multiple jurisdictions for international businesses.
                </p>
              </div>
            </div>
          </AnimateIn>

          {/* Col 2 */}
          <AnimateIn direction="up" delay={0.2}>
            <div className="flex gap-4">
              <div className="w-10 h-10 rounded-lg flex items-center justify-center bg-brand-blue/10 text-brand-blue flex-shrink-0">
                <Flag className="w-5 h-5" />
              </div>
              <div className="space-y-1">
                <h4 className="font-sora font-semibold text-base text-brand-navy">US GAAP Professionals</h4>
                <p className="text-brand-muted text-sm font-dm-sans leading-relaxed">
                  Suited for businesses with American clients, investors, or subsidiaries.
                </p>
              </div>
            </div>
          </AnimateIn>

          {/* Col 3 */}
          <AnimateIn direction="up" delay={0.3}>
            <div className="flex gap-4">
              <div className="w-10 h-10 rounded-lg flex items-center justify-center bg-brand-blue/10 text-brand-blue flex-shrink-0">
                <Network className="w-5 h-5" />
              </div>
              <div className="space-y-1">
                <h4 className="font-sora font-semibold text-base text-brand-navy">Consolidation Specialists</h4>
                <p className="text-brand-muted text-sm font-dm-sans leading-relaxed">
                  Hands-on experience across leading ERP and consolidation platforms.
                </p>
              </div>
            </div>
          </AnimateIn>
        </div>

      </div>
    </section>
  )
}
