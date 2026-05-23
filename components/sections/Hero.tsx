'use client'

import { useState, useEffect } from 'react'
import { ArrowRight, Star, TrendingUp, Users, DollarSign, Percent } from 'lucide-react'
import Button from '@/components/ui/Button'

// Easing: easeOutCubic
const easeOutCubic = (t: number) => 1 - Math.pow(1 - t, 3)

function useCounter(target: number, duration: number = 2000, trigger: boolean) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!trigger) return
    let startTimestamp: number | null = null

    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp
      const progress = timestamp - startTimestamp
      const t = Math.min(progress / duration, 1)
      const easedT = easeOutCubic(t)
      setCount(easedT * target)
      if (t < 1) {
        window.requestAnimationFrame(step)
      }
    }

    window.requestAnimationFrame(step)
  }, [target, duration, trigger])

  return count
}

export default function Hero() {
  const [animate, setAnimate] = useState(false)

  useEffect(() => {
    // Start page load stagger animations
    setAnimate(true)
  }, [])

  const countRevenue = useCounter(284500, 2000, animate)
  const countProfit = useCounter(91200, 2000, animate)
  const countRatio = useCounter(32.1, 2000, animate)
  const countClients = useCounter(142, 2000, animate)

  const headlineWords = ['Accounting', '&', 'Finance,', 'Done', 'Right']

  return (
    <section className="relative bg-brand-navy min-h-screen pt-36 pb-20 flex flex-col justify-between overflow-hidden">
      {/* ── Background Ambient Glows & Dot Texture ── */}
      <div className="absolute inset-0 bg-dot-grid pointer-events-none" />
      
      {/* Left brand-blue radial glow */}
      <div
        className="absolute w-[60vw] h-[60vw] max-w-[800px] max-h-[800px] left-[-10%] top-[10%] rounded-full bg-brand-blue/30 blur-[130px] pointer-events-none animate-pulse-glow"
        style={{ willChange: 'transform, opacity' }}
      />
      {/* Right brand-gold radial glow */}
      <div
        className="absolute w-[50vw] h-[50vw] max-w-[600px] max-h-[600px] right-[-10%] bottom-[10%] rounded-full bg-brand-gold/15 blur-[120px] pointer-events-none animate-pulse-glow"
        style={{
          animationDelay: '3s',
          willChange: 'transform, opacity',
        }}
      />

      <div className="max-w-content mx-auto px-6 w-full flex-grow flex items-center relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center w-full">
          
          {/* ── Left Column: Value Prop & CTAs ── */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            {/* Eyebrow Label */}
            <span
              className={`inline-block text-brand-gold font-dm-sans font-medium text-[0.72rem] uppercase tracking-[0.12em] mb-5 transition-all duration-700 ${
                animate ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
            >
              PRECISION · INTEGRITY · GROWTH
            </span>

            {/* H1 Title Staggered */}
            <h1
              className="font-sora font-bold text-white leading-[1.1] mb-6 flex flex-wrap gap-x-3 gap-y-1"
              style={{
                fontSize: 'clamp(2.8rem, 5.5vw, 5rem)',
                letterSpacing: '-0.02em',
              }}
            >
              {headlineWords.map((word, idx) => (
                <span
                  key={idx}
                  className={`inline-block transition-all duration-800 transform ${
                    animate ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
                  }`}
                  style={{
                    transitionDelay: `${0.2 + idx * 0.1}s`,
                    transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)',
                  }}
                >
                  {word}
                </span>
              ))}
            </h1>

            {/* Subheadline */}
            <p
              className={`text-slate-300 text-base sm:text-lg leading-[1.7] mb-8 max-w-[580px] font-dm-sans transition-all duration-1000 ${
                animate ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
              style={{
                transitionDelay: '0.6s',
                transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)',
              }}
            >
              Flexible finance and accounting solutions — delivered by experienced professionals and virtual assistants tailored to your business needs.
            </p>

            {/* Single Large CTA */}
            <div
              className={`transition-all duration-700 ${
                animate ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
              style={{
                transitionDelay: '0.8s',
                transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)',
              }}
            >
              <a href="#contact">
                <Button variant="primary" size="lg" className="gap-2.5">
                  Get a Free Consultation
                  <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
                </Button>
              </a>
            </div>
          </div>

          {/* ── Right Column: Glassmorphism Dashboard ── */}
          <div
            className={`lg:col-span-5 flex justify-center lg:justify-end transition-all transform duration-[900ms] ${
              animate ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'
            }`}
            style={{
              transitionDelay: '0.5s',
              transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)',
            }}
          >
            {/* Dashboard Card with Glassmorphism */}
            <div
              className="w-full max-w-[460px] rounded-3xl p-6 relative overflow-hidden select-none"
              style={{
                background: 'rgba(255, 255, 255, 0.05)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                backdropFilter: 'blur(12px)',
                boxShadow: '0 24px 60px rgba(0, 0, 0, 0.4)',
              }}
            >
              {/* Header */}
              <div className="flex items-center justify-between mb-6 pb-4 border-b border-white/10">
                <div>
                  <span className="text-[10px] uppercase tracking-widest text-brand-gold font-dm-sans font-bold">LIVE PLATFORM OVERVIEW</span>
                  <h3 className="font-sora font-semibold text-white text-base">Financial Dashboard</h3>
                </div>
                <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                  Synced
                </div>
              </div>

              {/* KPI Grid */}
              <div className="grid grid-cols-2 gap-4 mb-6">
                {/* Tile 1 */}
                <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/5">
                  <div className="flex items-center gap-2 text-slate-400 text-[11px] font-dm-sans mb-1">
                    <DollarSign className="w-3.5 h-3.5 text-brand-blue" />
                    Monthly Revenue
                  </div>
                  <div className="font-sora font-bold text-white text-lg sm:text-xl">
                    ${Math.round(countRevenue).toLocaleString()}
                  </div>
                </div>

                {/* Tile 2 */}
                <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/5">
                  <div className="flex items-center gap-2 text-slate-400 text-[11px] font-dm-sans mb-1">
                    <TrendingUp className="w-3.5 h-3.5 text-emerald-400" />
                    Net Profit
                  </div>
                  <div className="font-sora font-bold text-white text-lg sm:text-xl">
                    ${Math.round(countProfit).toLocaleString()}
                  </div>
                </div>

                {/* Tile 3 */}
                <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/5">
                  <div className="flex items-center gap-2 text-slate-400 text-[11px] font-dm-sans mb-1">
                    <Percent className="w-3.5 h-3.5 text-brand-gold" />
                    Cost Ratio
                  </div>
                  <div className="font-sora font-bold text-white text-lg sm:text-xl">
                    {countRatio.toFixed(1)}%
                  </div>
                </div>

                {/* Tile 4 */}
                <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/5">
                  <div className="flex items-center gap-2 text-slate-400 text-[11px] font-dm-sans mb-1">
                    <Users className="w-3.5 h-3.5 text-brand-sky" />
                    Active Clients
                  </div>
                  <div className="font-sora font-bold text-white text-lg sm:text-xl">
                    {Math.round(countClients)}
                  </div>
                </div>
              </div>

              {/* Chart Mock */}
              <div className="bg-white/[0.02] border border-white/5 p-4 rounded-2xl">
                <div className="flex justify-between items-center mb-4">
                  <span className="text-xs font-semibold text-slate-300">Weekly Profit Margin</span>
                  <span className="text-[10px] text-brand-gold font-bold">TARGET: 35%+</span>
                </div>
                <div className="h-24 flex items-end gap-3.5 pt-4">
                  {[40, 60, 45, 90, 75, 85, 100].map((h, i) => (
                    <div key={i} className="flex-1 flex flex-col items-center h-full justify-end group">
                      <div
                        className="w-full bg-gradient-to-t from-brand-blue/40 to-brand-blue rounded-t-sm transition-all duration-[1200ms] ease-out origin-bottom"
                        style={{
                          height: animate ? `${h}%` : '0%',
                          transitionDelay: `${0.6 + i * 0.08}s`,
                        }}
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* ── Bottom Section: Trust Bar ── */}
      <div className="max-w-content mx-auto px-6 w-full mt-16 relative z-10">
        <div
          className={`border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-6 text-center md:text-left transition-all duration-700 ${
            animate ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
          style={{
            transitionDelay: '1.0s',
            transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)',
          }}
        >
          {/* Stat 1 */}
          <div
            className={`flex flex-col gap-1 transition-all duration-500 transform ${
              animate ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
            style={{ transitionDelay: '1.0s' }}
          >
            <div className="flex items-center justify-center md:justify-start gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-3.5 h-3.5 fill-brand-gold text-brand-gold" />
              ))}
            </div>
            <p className="font-sora font-semibold text-white text-sm">Big 4 &amp; Big 10 Expertise</p>
            <p className="text-xs text-slate-400 font-dm-sans">Trained professionals only</p>
          </div>

          <div className="hidden md:block w-px h-10 bg-white/10" />

          {/* Stat 2 */}
          <div
            className={`flex flex-col gap-1 transition-all duration-500 transform ${
              animate ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
            style={{ transitionDelay: '1.15s' }}
          >
            <p className="font-sora font-semibold text-white text-sm">IFRS &amp; US GAAP Certified</p>
            <p className="text-xs text-slate-400 font-dm-sans">Accurate global standards compliance</p>
          </div>

          <div className="hidden md:block w-px h-10 bg-white/10" />

          {/* Stat 3 */}
          <div
            className={`flex flex-col gap-1 transition-all duration-500 transform ${
              animate ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
            style={{ transitionDelay: '1.3s' }}
          >
            <p className="font-sora font-semibold text-white text-sm">30+ Countries Served</p>
            <p className="text-xs text-slate-400 font-dm-sans">International reporting experience</p>
          </div>
        </div>
      </div>
    </section>
  )
}
