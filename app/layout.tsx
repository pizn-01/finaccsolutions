import type { Metadata } from 'next'
import { Sora, DM_Sans } from 'next/font/google'
import './globals.css'

const sora = Sora({
  subsets: ['latin'],
  weight: ['600', '700'],
  variable: '--font-sora',
  display: 'swap',
})

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  variable: '--font-dm-sans',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'FinAccSolutions | Precision. Integrity. Growth.',
  description:
    'Flexible finance and accounting solutions delivered by experienced professionals and virtual assistants tailored to your business needs.',
  openGraph: {
    title: 'FinAccSolutions | Precision. Integrity. Growth.',
    description:
      'Flexible finance and accounting solutions delivered by experienced professionals and virtual assistants tailored to your business needs.',
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
      <body className="antialiased bg-white text-brand-navy">
        {children}
      </body>
    </html>
  )
}
