'use client'

import { useState, useEffect, type FormEvent } from 'react'
import { Mail, Clock, MapPin, Loader2, CheckCircle2 } from 'lucide-react'
import SectionHeader from '@/components/ui/SectionHeader'
import AnimateIn from '@/components/ui/AnimateIn'
import Button from '@/components/ui/Button'

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

const inputClasses =
  'w-full px-4 py-3.5 rounded-xl border border-brand-border bg-white text-brand-navy placeholder:text-brand-muted/70 text-sm transition-all duration-300 input-focus'

export default function ContactForm() {
  const [form, setForm] = useState<FormState>(initialForm)
  const [isLoading, setIsLoading] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  // Listen for the custom "select-role" event to pre-populate form options & message
  useEffect(() => {
    const handleSelectRole = (e: Event) => {
      const customEvent = e as CustomEvent<{ service: string; role: string }>
      if (!customEvent.detail) return
      const { service, role } = customEvent.detail

      let formattedMessage = ''
      if (service === 'Virtual Finance Talent') {
        formattedMessage = `Hi, I am interested in hiring a remote ${role}. Please provide more details on how we can get started.`
      } else {
        formattedMessage = `Hi, I am interested in your ${role} services. Please provide more details on how we can get started.`
      }

      setForm((prev) => ({
        ...prev,
        serviceNeeded: service,
        message: formattedMessage,
      }))

      const contactSection = document.getElementById('contact')
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: 'smooth' })
      }
    }

    window.addEventListener('select-role', handleSelectRole)
    return () => {
      window.removeEventListener('select-role', handleSelectRole)
    }
  }, [])

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setIsLoading(true)

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name:    form.fullName,
          email:   form.businessEmail,
          company: form.companyName,
          service: form.serviceNeeded,
          message: form.message,
        }),
      })

      if (res.ok) {
        setSubmitted(true)
      } else {
        alert('Something went wrong. Please email us directly at contact@finaccsolutions.com')
      }
    } catch (err) {
      console.error('Form submission error:', err)
      alert('Something went wrong. Please email us directly at contact@finaccsolutions.com')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <section id="contact" className="bg-white py-20 lg:py-[120px] relative">
      <div className="max-w-content mx-auto px-6">
        
        {/* Section Header */}
        <AnimateIn direction="up">
          <SectionHeader
            label="GET IN TOUCH"
            title="Let's Talk About Your Numbers"
            subtitle="No hard sell. Just a straightforward conversation about where you are and how we can help."
            align="center"
          />
        </AnimateIn>

        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Form */}
          <div className="lg:col-span-7">
            {submitted ? (
              <div
                className="bg-brand-slate border border-brand-border rounded-2xl p-8 lg:p-12 text-center flex flex-col items-center justify-center select-none"
                style={{
                  animation: 'scale-in 0.4s cubic-bezier(0.16, 1, 0.3, 1) forwards',
                }}
              >
                <div className="w-16 h-16 bg-emerald-50 rounded-full flex items-center justify-center border border-emerald-100 mb-6 text-emerald-500">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="font-sora font-semibold text-2xl text-brand-navy mb-3">
                  Message Sent!
                </h3>
                <p className="text-brand-muted text-sm font-dm-sans leading-relaxed max-w-sm mb-8">
                  Thanks! We&apos;ll be in touch within 24 hours.
                </p>
                <button
                  onClick={() => {
                    setSubmitted(false)
                    setForm(initialForm)
                  }}
                  className="text-brand-blue font-semibold text-sm hover:underline cursor-pointer"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="bg-white border border-brand-border rounded-2xl shadow-[0_4px_24px_rgba(10,22,40,0.06)] p-8 lg:p-10 space-y-6"
                noValidate
              >
                <div className="grid sm:grid-cols-2 gap-6">
                  {/* Full Name */}
                  <div className="space-y-2">
                    <label htmlFor="fullName" className="block text-xs font-semibold uppercase tracking-wider text-brand-navy/80">
                      Full Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="fullName"
                      type="text"
                      required
                      value={form.fullName}
                      onChange={(e) => setForm({ ...form, fullName: e.target.value })}
                      placeholder="Jane Smith"
                      className={inputClasses}
                    />
                  </div>

                  {/* Business Email */}
                  <div className="space-y-2">
                    <label htmlFor="businessEmail" className="block text-xs font-semibold uppercase tracking-wider text-brand-navy/80">
                      Business Email <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="businessEmail"
                      type="email"
                      required
                      value={form.businessEmail}
                      onChange={(e) => setForm({ ...form, businessEmail: e.target.value })}
                      placeholder="jane@company.com"
                      className={inputClasses}
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-6">
                  {/* Company Name */}
                  <div className="space-y-2">
                    <label htmlFor="companyName" className="block text-xs font-semibold uppercase tracking-wider text-brand-navy/80">
                      Company Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="companyName"
                      type="text"
                      required
                      value={form.companyName}
                      onChange={(e) => setForm({ ...form, companyName: e.target.value })}
                      placeholder="Acme Corp"
                      className={inputClasses}
                    />
                  </div>

                  {/* Service Needed */}
                  <div className="space-y-2">
                    <label htmlFor="serviceNeeded" className="block text-xs font-semibold uppercase tracking-wider text-brand-navy/80">
                      Service Needed <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <select
                        id="serviceNeeded"
                        required
                        value={form.serviceNeeded}
                        onChange={(e) => setForm({ ...form, serviceNeeded: e.target.value })}
                        className={`${inputClasses} appearance-none cursor-pointer pr-10`}
                      >
                        <option value="" disabled>Select a service...</option>
                        <option value="Bookkeeping">Bookkeeping</option>
                        <option value="Payroll Services">Payroll Services</option>
                        <option value="Budgeting & Forecasting">Budgeting &amp; Forecasting</option>
                        <option value="Fundraising Support">Fundraising Support</option>
                        <option value="Group Consolidation">Group Consolidation</option>
                        <option value="Tax Records & Compliance">Tax Records &amp; Compliance</option>
                        <option value="Virtual Finance Talent">Virtual Finance Talent</option>
                        <option value="Not Sure Yet">Not Sure Yet</option>
                      </select>
                      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-brand-muted">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Message */}
                <div className="space-y-2">
                  <label htmlFor="message" className="block text-xs font-semibold uppercase tracking-wider text-brand-navy/80">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    placeholder="Tell us about your business and what you need help with..."
                    className={`${inputClasses} resize-none`}
                  />
                </div>

                {/* Submit Button */}
                <Button
                  type="submit"
                  disabled={isLoading}
                  variant="primary"
                  className="w-full py-4 text-base gap-2"
                >
                  {isLoading ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" />
                      Sending…
                    </>
                  ) : (
                    <>
                      Book Your Free Consultation
                      <span>→</span>
                    </>
                  )}
                </Button>
              </form>
            )}
          </div>

          {/* Right Column: Contact Info Sidebar (Desktop Only) */}
          <div className="hidden lg:block lg:col-span-5 space-y-8 pl-8 lg:border-l border-brand-border">
            <h3 className="font-sora font-semibold text-lg text-brand-navy mb-4">Contact Information</h3>
            
            <div className="space-y-6">
              {/* Mail */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg flex items-center justify-center bg-brand-blue/10 text-brand-blue flex-shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-dm-sans font-semibold text-brand-navy text-sm">Email Us</h4>
                  <a href="mailto:contact@finaccsolutions.com" className="text-brand-muted hover:text-brand-blue text-sm transition-colors">
                    contact@finaccsolutions.com
                  </a>
                </div>
              </div>

              {/* Hours */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg flex items-center justify-center bg-brand-blue/10 text-brand-blue flex-shrink-0">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-dm-sans font-semibold text-brand-navy text-sm">Office Hours</h4>
                  <p className="text-brand-muted text-sm">Mon–Fri, 9am–6pm PKT</p>
                </div>
              </div>

              {/* MapPin */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg flex items-center justify-center bg-brand-blue/10 text-brand-blue flex-shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-dm-sans font-semibold text-brand-navy text-sm">Location</h4>
                  <p className="text-brand-muted text-sm">Karachi, Pakistan · Remote-First</p>
                </div>
              </div>
            </div>

            {/* Quick Response Banner */}
            <div className="bg-brand-slate border border-brand-border p-6 rounded-2xl shadow-sm">
              <h4 className="font-sora font-semibold text-sm text-brand-navy mb-2">Book a Free 30-Minute Call</h4>
              <p className="text-xs text-brand-muted leading-relaxed font-dm-sans">
                Our senior advisors will connect with you to review your bookkeeping, consolidation, or outsourcing needs and map out a customized action plan.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
