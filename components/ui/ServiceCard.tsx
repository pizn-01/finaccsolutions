import { type LucideIcon } from 'lucide-react'

interface ServiceCardProps {
  icon: LucideIcon
  title: string
  description: string
  variant?: 'default' | 'dashed'
}

export default function ServiceCard({
  icon: Icon,
  title,
  description,
  variant = 'default',
}: ServiceCardProps) {
  return (
    <div
      className={`
        group h-full p-8 rounded-2xl
        ${
          variant === 'default'
            ? 'bg-white border border-[#E8ECF4] shadow-card-light hover:shadow-card-light-hover hover:border-brand-blue/50'
            : 'bg-white border-2 border-dashed border-brand-blue/25 hover:border-brand-blue/60 hover:shadow-card-light'
        }
      `}
      style={{
        transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
        willChange: 'transform, border-color, box-shadow',
      }}
      // Use inline hover styles to ensure we translate precisely -4px on hover
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = 'translateY(-4px)'
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = 'translateY(0)'
      }}
    >
      <div
        className="inline-flex items-center justify-center w-12 h-12 rounded-xl mb-6 bg-brand-blue/10 border border-brand-blue/10 transition-all duration-300 group-hover:bg-brand-blue/20 group-hover:shadow-[0_0_20px_rgba(27,79,216,0.3)] group-hover:scale-105"
        style={{ transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)' }}
      >
        <Icon className="w-6 h-6 text-brand-blue transition-transform duration-300 group-hover:scale-110" aria-hidden="true" />
      </div>
      <h3 className="font-sora font-semibold text-brand-navy text-[1.25rem] leading-snug mb-3">
        {title}
      </h3>
      <p className="text-brand-muted text-sm leading-[1.7]">{description}</p>
    </div>
  )
}
