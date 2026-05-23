import { type LucideIcon, CheckCircle2 } from 'lucide-react'

interface ServiceCardProps {
  icon: LucideIcon
  title: string
  tagline: string
  bullets: string[]
  onClick?: () => void
}

export default function ServiceCard({
  icon: Icon,
  title,
  tagline,
  bullets,
  onClick,
}: ServiceCardProps) {
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (onClick && (e.key === 'Enter' || e.key === ' ')) {
      e.preventDefault()
      onClick()
    }
  }

  return (
    <div
      role={onClick ? 'button' : undefined}
      tabIndex={onClick ? 0 : undefined}
      onClick={onClick}
      onKeyDown={onClick ? handleKeyDown : undefined}
      className={`group bg-white border border-brand-border p-8 rounded-2xl shadow-[0_4px_24px_rgba(10,22,40,0.08)] hover:shadow-[0_12px_40px_rgba(10,22,40,0.14)] hover:-translate-y-1 hover:border-brand-blue flex flex-col justify-between h-full select-none ${
        onClick ? 'cursor-pointer' : ''
      }`}
      style={{
        transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
        willChange: 'transform, box-shadow, border-color',
      }}
    >
      <div>
        {/* Icon Container: 48x48px, rounded-xl, bg at 10% opacity of brand-blue */}
        <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-brand-blue/10 text-brand-blue mb-6 group-hover:bg-brand-blue group-hover:text-white transition-colors duration-300">
          <Icon className="w-5 h-5" aria-hidden="true" />
        </div>

        {/* Title */}
        <h3 className="font-sora font-semibold text-lg text-brand-navy mb-1 group-hover:text-brand-blue transition-colors duration-300">
          {title}
        </h3>

        {/* Tagline */}
        <p className="text-brand-gold italic text-sm mb-5 font-dm-sans">{tagline}</p>

        {/* Bullet List */}
        <ul className="space-y-3">
          {bullets.map((bullet, idx) => (
            <li key={idx} className="flex items-start gap-2.5 text-brand-muted text-sm leading-relaxed">
              <CheckCircle2 className="w-4 h-4 text-brand-blue/60 mt-0.5 flex-shrink-0" />
              <span>{bullet}</span>
            </li>
          ))}
        </ul>
      </div>

      {onClick && (
        <div className="mt-8 pt-4 border-t border-brand-border flex items-center justify-between text-xs font-bold text-brand-blue uppercase tracking-wider group-hover:text-brand-sky transition-colors">
          <span>Inquire About Service</span>
          <span className="text-sm">→</span>
        </div>
      )}
    </div>
  )
}
