import type { Metadata } from 'next'
import AdminShell from './_components/AdminShell'

export const metadata: Metadata = {
  title: 'Admin — FinAccSolutions',
  robots: { index: false, follow: false },
}

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  // Login page renders outside the shell (full-screen standalone)
  return <AdminShell>{children}</AdminShell>
}
