import type { Metadata } from 'next'
import { Sora, DM_Sans } from 'next/font/google'
import './globals.css'
import SmoothScroll from '@/components/layout/SmoothScroll'

const sora = Sora({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
  variable: '--font-sora',
  display: 'swap',
})

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-dm-sans',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Fin-Acc Solutions | Finance, Accounting & Remote Talent',
  description:
    'Elite finance & accounting services combined with hassle-free manpower outsourcing. Pre-vetted remote professionals ready to scale your business.',
  openGraph: {
    title: 'Fin-Acc Solutions | Finance, Accounting & Remote Talent',
    description:
      'Elite finance & accounting services combined with hassle-free manpower outsourcing. Pre-vetted remote professionals ready to scale your business.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${sora.variable} ${dmSans.variable} scroll-smooth`}>
      <body className="antialiased">
        <SmoothScroll>
          {children}
        </SmoothScroll>
      </body>
    </html>
  )
}
