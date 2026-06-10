import { Star } from 'lucide-react'
import SectionHeader from '@/components/ui/SectionHeader'
import AnimateIn from '@/components/ui/AnimateIn'
import { createServerClient } from '@/lib/supabase/server'
import type { Testimonial, CaseStudy } from '@/lib/supabase/types'

async function getTestimonials(): Promise<Testimonial[]> {
  try {
    const supabase = createServerClient()
    const { data } = await supabase
      .from('testimonials')
      .select('*')
      .eq('is_active', true)
      .order('sort_order', { ascending: true })
    return data ?? []
  } catch {
    return []
  }
}

async function getCaseStudies(): Promise<CaseStudy[]> {
  try {
    const supabase = createServerClient()
    const { data } = await supabase
      .from('case_studies')
      .select('*')
      .eq('is_active', true)
      .order('sort_order', { ascending: true })
    return data ?? []
  } catch {
    return []
  }
}

export default async function Testimonials() {
  const [testimonials, caseStudies] = await Promise.all([
    getTestimonials(),
    getCaseStudies(),
  ])

  if (testimonials.length === 0 && caseStudies.length === 0) return null

  return (
    <section id="testimonials" className="bg-slate-50 border-t border-b border-slate-200/60 py-16 lg:py-20">
      <div className="max-w-content mx-auto px-6">

        {testimonials.length > 0 && (
          <>
            <AnimateIn direction="up">
              <SectionHeader
                label="CLIENT SUCCESS"
                title="Results That Speak for Themselves"
                subtitle="How finance teams and founders have used FinAccSolutions to cut costs, close faster, and raise funding."
              />
            </AnimateIn>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16 lg:mb-20">
              {testimonials.map((t, i) => (
                <AnimateIn key={t.id} direction="up" delay={0.05 * i} className="h-full">
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
          </>
        )}

        {caseStudies.length > 0 && (
          <div className={testimonials.length > 0 ? 'border-t border-slate-200/60 pt-16' : ''}>
            <AnimateIn direction="up">
              <h3 className="font-sora font-extrabold text-slate-900 text-xl md:text-2xl mb-8 text-center" style={{ letterSpacing: '-0.02em' }}>
                Proven B2B Performance
              </h3>
            </AnimateIn>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {caseStudies.map((cs, i) => (
                <AnimateIn key={cs.id} direction="up" delay={0.1 * i}>
                  <div className="bg-white border border-slate-200/80 rounded-xl p-6 shadow-sm flex flex-col sm:flex-row gap-6 hover:border-brand-blue/30 transition-colors">
                    <div className="flex-shrink-0 flex items-center justify-center bg-slate-50 border border-slate-100 rounded-lg w-20 h-20 text-brand-blue text-2xl font-black font-sora">
                      {cs.metric}
                    </div>
                    <div>
                      <div className="flex flex-wrap gap-1.5 mb-2">
                        {(cs.tags ?? []).map(tag => (
                          <span key={tag} className="text-[10px] px-2 py-0.5 bg-slate-100 text-slate-600 font-bold rounded">
                            {tag}
                          </span>
                        ))}
                      </div>
                      <h4 className="font-sora font-bold text-slate-900 text-sm mb-2">{cs.title}</h4>
                      <p className="text-slate-500 text-xs leading-[1.6]">{cs.description}</p>
                    </div>
                  </div>
                </AnimateIn>
              ))}
            </div>
          </div>
        )}

      </div>
    </section>
  )
}
