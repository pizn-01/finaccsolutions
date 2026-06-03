'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import { createClient } from '@/lib/supabase/client'
import {
  LayoutDashboard, FileText, MessageSquare, Inbox,
  LogOut, Menu, X, ChevronRight,
} from 'lucide-react'

const navItems = [
  { href: '/admin',             label: 'Dashboard',    icon: LayoutDashboard, exact: true  },
  { href: '/admin/blog',        label: 'Blog Posts',   icon: FileText                      },
  { href: '/admin/testimonials',label: 'Testimonials', icon: MessageSquare                 },
  { href: '/admin/leads',       label: 'Leads',        icon: Inbox                         },
]

export default function AdminShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  const router   = useRouter()
  const supabase = createClient()
  const [mobileOpen, setMobileOpen] = useState(false)

  // Login page is full-screen — no sidebar
  if (pathname === '/admin/login') {
    return <>{children}</>
  }

  async function handleLogout() {
    await supabase.auth.signOut()
    router.push('/admin/login')
    router.refresh()
  }

  function isActive(item: typeof navItems[0]) {
    return item.exact ? pathname === item.href : pathname.startsWith(item.href)
  }

  const Sidebar = () => (
    <aside className="flex flex-col h-full bg-brand-navy border-r border-white/5 w-64 shrink-0">
      {/* Logo */}
      <div className="px-5 py-5 border-b border-white/5">
        <Link href="/admin" className="flex items-center gap-2.5">
          <div
            className="w-11 h-11 bg-no-repeat flex-shrink-0"
            style={{ backgroundImage: 'url(/Logo.png)', backgroundSize: '427%', backgroundPosition: '13.4% 50.6%' }}
          />
          <div>
            <div className="font-sora font-bold text-white text-sm leading-tight">
              FinAcc<span className="text-brand-sky">Solutions</span>
            </div>
            <div className="text-[10px] text-slate-500 font-dm-sans uppercase tracking-widest">Admin Panel</div>
          </div>
        </Link>
      </div>

      {/* Nav */}
      <nav className="flex-1 px-3 py-4 space-y-0.5 overflow-y-auto">
        {navItems.map(item => {
          const Icon = item.icon
          const active = isActive(item)
          return (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setMobileOpen(false)}
              className={`flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium font-dm-sans transition-all duration-200 group ${
                active
                  ? 'bg-brand-blue text-white'
                  : 'text-slate-400 hover:text-white hover:bg-white/5'
              }`}
            >
              <Icon className={`w-4 h-4 shrink-0 ${active ? 'text-white' : 'text-slate-500 group-hover:text-slate-300'}`} />
              <span className="flex-1">{item.label}</span>
              {active && <ChevronRight className="w-3.5 h-3.5 opacity-60" />}
            </Link>
          )
        })}
      </nav>

      {/* Footer */}
      <div className="px-3 py-4 border-t border-white/5">
        <Link
          href="/"
          target="_blank"
          className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm text-slate-400 hover:text-white hover:bg-white/5 transition-all font-dm-sans mb-1"
        >
          <span className="w-4 h-4 text-slate-500">↗</span>
          View Site
        </Link>
        <button
          onClick={handleLogout}
          className="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm text-slate-400 hover:text-red-400 hover:bg-red-500/5 transition-all font-dm-sans"
        >
          <LogOut className="w-4 h-4" />
          Sign Out
        </button>
      </div>
    </aside>
  )

  return (
    <div className="flex h-screen bg-slate-50 overflow-hidden">
      {/* Desktop sidebar */}
      <div className="hidden lg:flex flex-col">
        <Sidebar />
      </div>

      {/* Mobile sidebar overlay */}
      {mobileOpen && (
        <div className="lg:hidden fixed inset-0 z-50 flex">
          <div className="flex flex-col w-64">
            <Sidebar />
          </div>
          <div className="flex-1 bg-black/50" onClick={() => setMobileOpen(false)} />
        </div>
      )}

      {/* Main area */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Mobile top bar */}
        <div className="lg:hidden flex items-center gap-3 px-4 py-3 bg-brand-navy border-b border-white/5">
          <button onClick={() => setMobileOpen(!mobileOpen)} className="text-white p-1">
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
          <div className="flex items-center gap-2">
            <div
              className="w-9 h-9 bg-no-repeat flex-shrink-0"
              style={{ backgroundImage: 'url(/Logo.png)', backgroundSize: '427%', backgroundPosition: '13.4% 50.6%' }}
            />
            <span className="font-sora font-bold text-white text-sm">
              FinAcc<span className="text-brand-sky">Solutions</span>
              <span className="text-slate-500 font-normal text-xs ml-2">Admin</span>
            </span>
          </div>
        </div>

        {/* Page content */}
        <main className="flex-1 overflow-y-auto">
          {children}
        </main>
      </div>
    </div>
  )
}
