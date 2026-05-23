import { type ButtonHTMLAttributes, forwardRef } from 'react'

type Variant = 'primary' | 'secondary' | 'outline' | 'gold'
type Size = 'sm' | 'md' | 'lg'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant
  size?: Size
}

const variantClasses: Record<Variant, string> = {
  primary:
    'bg-brand-blue text-white hover:bg-brand-sky focus-visible:ring-brand-blue shadow-[0_4px_12px_rgba(27,79,216,0.2)] hover:shadow-[0_6px_20px_rgba(27,79,216,0.3)] hover:-translate-y-0.5 active:translate-y-0',
  secondary:
    'bg-white border border-brand-border text-brand-navy hover:border-brand-blue hover:text-brand-blue focus-visible:ring-brand-blue hover:-translate-y-0.5 active:translate-y-0',
  outline:
    'border border-white/20 text-white bg-transparent hover:bg-white/10 hover:border-white focus-visible:ring-white hover:-translate-y-0.5 active:translate-y-0',
  gold:
    'bg-brand-gold text-brand-navy hover:bg-amber-500 font-bold focus-visible:ring-brand-gold shadow-[0_4px_12px_rgba(245,158,11,0.2)] hover:shadow-[0_6px_20px_rgba(245,158,11,0.3)] hover:-translate-y-0.5 active:translate-y-0',
}

const sizeClasses: Record<Size, string> = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-6 py-3.5 text-base',
  lg: 'px-8 py-4 text-base sm:text-lg',
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = 'primary', size = 'md', className = '', children, style, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={`
          inline-flex items-center justify-center font-semibold rounded-xl
          transition-all duration-300 focus-visible:outline-none focus-visible:ring-2
          focus-visible:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed select-none
          ${variantClasses[variant]}
          ${sizeClasses[size]}
          ${className}
        `}
        style={{
          transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)',
          ...style
        }}
        {...props}
      >
        {children}
      </button>
    )
  }
)

Button.displayName = 'Button'

export default Button
