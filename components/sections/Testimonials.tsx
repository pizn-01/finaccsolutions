'use client'

import { Star, CheckCircle, TrendingUp, Award } from 'lucide-react'
import SectionHeader from '@/components/ui/SectionHeader'
import AnimateIn from '@/components/ui/AnimateIn'

const testimonials = [
  {
    name: 'James Morrison',
    role: 'CFO, Northgate Holdings',
    text: "We had 7 legal entities across 4 currencies and were spending nearly 3 weeks every quarter on consolidation. FinAccSolutions took over our IFRS 10 group consolidation using LucaNet and cut our close cycle from 21 days down to 5. The accuracy has been flawless — our auditors specifically commented on the quality of the intercompany eliminations.",
    initials: 'JM',
  },
  {
    name: 'Sarah Al-Rashid',
    role: 'Founder, Verdana Capital',
    text: "We needed an investor-ready three-statement model before our Series A — fast. The team delivered a full DCF, comparables analysis, and pitch deck financial slides in 4 days. Our lead investor called out the quality of the model. We closed our $2.1M round two months later.",
    initials: 'SA',
  },
  {
    name: 'David Chen',
    role: 'Operations Director, Pacific Rim Logistics',
    text: "We outsourced our bookkeeping and payroll to FinAccSolutions 18 months ago and haven't looked back. Reconciliation lands on the 3rd of every month without fail, payroll runs on time every cycle, and we've reduced our finance overhead by over $38,000 annually versus our previous in-house setup.",
    initials: 'DC',
  },
]

const caseStudies = [
  {
    title: 'Multi-Entity IFRS Consolidation',
    metric: '78%',
    desc: 'Reduction in quarterly close cycle — from 21 days to 5 days — for a 7-entity holding group across 4 currencies, delivered under IFRS 10 using LucaNet.',
    tags: ['Group Consolidation', 'IFRS 10'],
  },
  {
    title: 'Series A Fundraising Support',
    metric: '$2.1M',
    desc: 'Seed round closed after FinAccSolutions built an investor-ready financial model, DCF valuation, and pitch deck financial slides in under a week.',
    tags: ['Financial Modelling', 'Fundraising Support'],
  },
]

export default function Testimonials() {
  return (
    <section id="testimonials" className="bg-slate-50 border-t border-b border-slate-200/60 py-16 lg:py-20">
      <div className="max-w-content mx-auto px-6">
        
        {/* Testimonials Block */}
        <AnimateIn direction="up">
          <SectionHeader
            label="CLIENT SUCCESS"
            title="Results That Speak for Themselves"
            subtitle="How finance teams and founders have used FinAccSolutions to cut costs, close faster, and raise funding."
          />
        </AnimateIn>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16 lg:mb-20">
          {testimonials.map((t, i) => (
            <AnimateIn key={t.name} direction="up" delay={0.05 * i} className="h-full">
              <div className="bg-white border border-slate-200/80 rounded-xl p-6 shadow-sm flex flex-col justify-between h-full hover:shadow-md transition-shadow">
                <div>
                  <div className="flex gap-1 mb-4 text-amber-500">
                    {[...Array(5)].map((_, idx) => (
                      <Star key={idx} className="w-4 h-4 fill-amber-500" />
                    ))}
                  </div>
                  <p className="text-slate-600 text-xs italic leading-[1.65] mb-6">
                    &ldquo;{t.text}&rdquo;
                  </p>
                </div>
                
                <div className="flex items-center gap-3 border-t border-slate-100 pt-4">
                  <div className="w-8 h-8 rounded-full bg-brand-blue/10 text-brand-blue font-bold text-xs flex items-center justify-center">
                    {t.initials}
                  </div>
                  <div>
                    <h4 className="font-sora font-bold text-slate-800 text-xs">{t.name}</h4>
                    <p className="text-slate-500 text-[10px] font-semibold">{t.role}</p>
                  </div>
                </div>
              </div>
            </AnimateIn>
          ))}
        </div>

        {/* Case Studies Block */}
        <div className="border-t border-slate-200/60 pt-16">
          <AnimateIn direction="up">
            <h3 className="font-sora font-extrabold text-slate-900 text-xl md:text-2xl mb-8 text-center" style={{ letterSpacing: '-0.02em' }}>
              Proven B2B Performance
            </h3>
          </AnimateIn>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {caseStudies.map((cs, i) => (
              <AnimateIn key={cs.title} direction="up" delay={0.1 * i}>
                <div className="bg-white border border-slate-200/80 rounded-xl p-6 shadow-sm flex flex-col sm:flex-row gap-6 hover:border-brand-blue/30 transition-colors">
                  <div className="flex-shrink-0 flex items-center justify-center bg-slate-50 border border-slate-100 rounded-lg w-20 h-20 text-brand-blue text-2xl font-black font-sora">
                    {cs.metric}
                  </div>
                  <div>
                    <div className="flex flex-wrap gap-1.5 mb-2">
                      {cs.tags.map(tag => (
                        <span key={tag} className="text-[10px] px-2 py-0.5 bg-slate-100 text-slate-600 font-bold rounded">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <h4 className="font-sora font-bold text-slate-900 text-sm mb-2">{cs.title}</h4>
                    <p className="text-slate-500 text-xs leading-[1.6]">{cs.desc}</p>
                  </div>
                </div>
              </AnimateIn>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}
