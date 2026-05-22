'use client'

import { Star, CheckCircle, TrendingUp, Award } from 'lucide-react'
import SectionHeader from '@/components/ui/SectionHeader'
import AnimateIn from '@/components/ui/AnimateIn'

const testimonials = [
  {
    name: 'Sarah Jenkins',
    role: 'CEO, Brightpath Media',
    text: "Scaling our video editing department used to take months of recruitment and high agency fees. With Fin-Acc's pre-vetted editors, we onboarded 3 specialists in 6 days. Our production volume doubled.",
    initials: 'SJ',
  },
  {
    name: 'Marcus Chen',
    role: 'Founder, Chen & Associates',
    text: 'We outsourced our entire daily bookkeeping and AP/AR operations to their QuickBooks team. The accuracy has been 100%, and we save over $45,000 annually compared to an in-house hire.',
    initials: 'MC',
  },
  {
    name: 'David K. Larson',
    role: 'Operations Director, NexaShop',
    text: 'Their Amazon Store Managers are stellar. They took over PPC tracking, listing optimization, and supplier logistics from day one. Weekly revenue is up 22% with zero onboarding friction.',
    initials: 'DL',
  },
]

const caseStudies = [
  {
    title: 'NexaShop E-Commerce Scale',
    metric: '+284%',
    desc: 'Organic traffic growth and search visibility achieved in 6 months using dedicated remote SEO and content experts.',
    tags: ['Amazon PPC', 'SEO Specialists'],
  },
  {
    title: 'CoreCapital Accounting Audit',
    metric: '72%',
    desc: 'Reduction in annual financial operations costs achieved by transitioning day-to-day books to remote accountants.',
    tags: ['Bookkeepers', 'ERP Integration'],
  },
]

export default function Testimonials() {
  return (
    <section id="testimonials" className="bg-slate-50 border-t border-b border-slate-200/60 py-16 lg:py-20">
      <div className="max-w-content mx-auto px-6">
        
        {/* Testimonials Block */}
        <AnimateIn direction="up">
          <SectionHeader
            label="Client Success"
            title="What Clients Say"
            subtitle="Read real reviews from fast-growing businesses that scale their departments with us."
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
