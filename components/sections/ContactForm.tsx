'use client'

import { useState, type FormEvent } from 'react'
import { Mail, Clock, MapPin, Send, Loader2, CheckCircle2 } from 'lucide-react'
import SectionHeader from '@/components/ui/SectionHeader'
import AnimateIn from '@/components/ui/AnimateIn'

interface FormState {
  fullName: string
  businessEmail: string
  companyName: string
  serviceNeeded: string
  message: string
}

const initialForm: FormState = {
  fullName: '',
  businessEmail: '',
  companyName: '',
  serviceNeeded: '',
  message: '',
}

const contactInfo = [
  { icon: Mail,   label: 'Email Us',    value: 'hello@finaccsolutions.com' },
  { icon: Clock,  label: 'Office Hours', value: 'Mon–Fri, 9am–6pm PKT' },
  { icon: MapPin, label: 'Location',    value: 'Karachi, Pakistan (Remote-First)' },
]

const inputBase =
  'w-full px-4 py-3.5 rounded-xl border border-slate-200 bg-white text-brand-navy placeholder:text-slate-400 text-sm transition-colors duration-200 input-focus'

export default function ContactForm() {
  const [form, setForm] = useState<FormState>(initialForm)
  const [isLoading, setIsLoading] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setIsLoading(true)
    setTimeout(() => {
      setIsLoading(false)
      setSubmitted(true)
    }, 1500)
  }

  return (
    <section id="contact" className="py-20 lg:py-[120px]" style={{ backgroundColor: '#F4F6FA' }}>
      <div className="max-w-content mx-auto px-6">
        <AnimateIn direction="up">
          <SectionHeader
            label="Get In Touch"
            title="Let's Start a Conversation"
            subtitle="Tell us what you need — we'll respond within 1 business day."
          />
        </AnimateIn>

        <div className="grid lg:grid-cols-5 gap-12 lg:gap-16">

          {/* Form */}
          <AnimateIn direction="left" delay={0.1} className="lg:col-span-3">
            {submitted ? (
              <div
                className="flex flex-col items-center justify-center text-center py-20 px-8 bg-white rounded-2xl border border-[#E8ECF4] shadow-card-light"
                style={{ animation: 'scale-in 0.5s cubic-bezier(0.16, 1, 0.3, 1) forwards' }}
              >
                <div className="w-16 h-16 bg-emerald-50 rounded-full flex items-center justify-center mb-5 border border-emerald-100">
                  <CheckCircle2 className="w-8 h-8 text-emerald-500" aria-hidden="true" />
                </div>
                <h3
                  className="font-sora font-bold text-2xl text-brand-navy mb-2"
                  style={{ letterSpacing: '-0.01em' }}
                >
                  Message Sent!
                </h3>
                <p className="text-brand-muted mb-6">
                  Thanks! We&apos;ll be in touch within 24 hours.
                </p>
                <button
                  onClick={() => { setSubmitted(false); setForm(initialForm) }}
                  className="text-brand-blue text-sm font-semibold hover:underline"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="bg-white rounded-2xl border border-[#E8ECF4] shadow-card-light p-8 lg:p-10 space-y-5"
                noValidate
              >
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="fullName" className="block text-sm font-semibold text-brand-navy mb-1.5">
                      Full Name <span className="text-red-400">*</span>
                    </label>
                    <input
                      id="fullName"
                      type="text"
                      required
                      value={form.fullName}
                      onChange={e => setForm({ ...form, fullName: e.target.value })}
                      placeholder="Jane Smith"
                      className={inputBase}
                    />
                  </div>
                  <div>
                    <label htmlFor="businessEmail" className="block text-sm font-semibold text-brand-navy mb-1.5">
                      Business Email <span className="text-red-400">*</span>
                    </label>
                    <input
                      id="businessEmail"
                      type="email"
                      required
                      value={form.businessEmail}
                      onChange={e => setForm({ ...form, businessEmail: e.target.value })}
                      placeholder="jane@company.com"
                      className={inputBase}
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="companyName" className="block text-sm font-semibold text-brand-navy mb-1.5">
                    Company Name <span className="text-red-400">*</span>
                  </label>
                  <input
                    id="companyName"
                    type="text"
                    required
                    value={form.companyName}
                    onChange={e => setForm({ ...form, companyName: e.target.value })}
                    placeholder="Acme Corp"
                    className={inputBase}
                  />
                </div>

                <div>
                  <label htmlFor="serviceNeeded" className="block text-sm font-semibold text-brand-navy mb-1.5">
                    Service Needed <span className="text-red-400">*</span>
                  </label>
                  <div className="relative">
                    <select
                      id="serviceNeeded"
                      required
                      value={form.serviceNeeded}
                      onChange={e => setForm({ ...form, serviceNeeded: e.target.value })}
                      className={`${inputBase} appearance-none cursor-pointer pr-10`}
                    >
                      <option value="" disabled>Select a service...</option>
                      <option value="finance">Finance &amp; Accounting</option>
                      <option value="manpower">Manpower Outsourcing</option>
                      <option value="both">Both</option>
                      <option value="unsure">Not Sure Yet</option>
                    </select>
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-brand-muted">
                      <svg className="w-4 h-4 text-brand-muted" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-brand-navy mb-1.5">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    value={form.message}
                    onChange={e => setForm({ ...form, message: e.target.value })}
                    placeholder="Tell us about your business and what you're looking for..."
                    className={`${inputBase} resize-none`}
                  />
                </div>

                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full py-4 bg-brand-blue text-white font-semibold text-base rounded-xl hover:bg-brand-sky transition-colors duration-200 flex items-center justify-center gap-2.5 disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {isLoading ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" aria-hidden="true" />
                      Sending…
                    </>
                  ) : (
                    <>
                      Send Message
                      <Send className="w-4 h-4" aria-hidden="true" />
                    </>
                  )}
                </button>
              </form>
            )}
          </AnimateIn>

          {/* Contact info sidebar */}
          <AnimateIn direction="right" delay={0.2} className="lg:col-span-2 flex flex-col justify-center gap-7">
            {contactInfo.map(({ icon: Icon, label, value }) => (
              <div key={label} className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-brand-blue/8 rounded-xl flex items-center justify-center" style={{ background: 'rgba(27,79,216,0.08)' }}>
                  <Icon className="w-5 h-5 text-brand-blue" aria-hidden="true" />
                </div>
                <div>
                  <p className="font-sora font-semibold text-brand-navy text-sm">{label}</p>
                  <p className="text-brand-muted text-sm mt-0.5">{value}</p>
                </div>
              </div>
            ))}

            <div
              className="p-7 rounded-2xl mt-2"
              style={{
                background: 'linear-gradient(135deg, #0A1628 0%, #1B4FD8 100%)',
                boxShadow: '0 8px 32px rgba(27,79,216,0.25)',
              }}
            >
              <p className="font-sora font-bold text-white text-lg mb-2" style={{ letterSpacing: '-0.01em' }}>
                Quick Response Guaranteed
              </p>
              <p className="text-slate-300 text-sm leading-[1.7]">
                Our team reviews every inquiry personally and responds within 1 business day —
                often much sooner.
              </p>
            </div>
          </AnimateIn>

        </div>
      </div>
    </section>
  )
}
