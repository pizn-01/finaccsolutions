import type { Metadata } from 'next'
import { Inter, Open_Sans } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '600', '700', '800'],
  variable: '--font-sora',
  display: 'swap',
})

const openSans = Open_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-dm-sans',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Fin-Acc Solutions | Enterprise Remote Hiring & Finance Outsourcing',
  description:
    'Hire elite remote accountants, virtual assistants, bookkeepers, and marketing professionals. Scale your business instantly with pre-vetted niche talent.',
  openGraph: {
    title: 'Fin-Acc Solutions | Enterprise Remote Hiring & Finance Outsourcing',
    description:
      'Hire elite remote accountants, virtual assistants, bookkeepers, and marketing professionals. Scale your business instantly with pre-vetted niche talent.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${openSans.variable} scroll-smooth`}>
      <body className="antialiased bg-white text-slate-800">
        {children}
      </body>
    </html>
  )
}
