import { createServerClient } from '@/lib/supabase/server'
import Link from 'next/link'
import { FileText, Inbox, MessageSquare, Plus, ArrowRight } from 'lucide-react'

async function getStats() {
  try {
    const supabase = createServerClient()
    const [posts, leads, testimonials] = await Promise.all([
      supabase.from('blog_posts').select('status'),
      supabase.from('contact_leads').select('status'),
      supabase.from('testimonials').select('is_active'),
    ])
    return {
      postsTotal:     posts.data?.length ?? 0,
      postsPublished: posts.data?.filter(p => p.status === 'published').length ?? 0,
      postsDraft:     posts.data?.filter(p => p.status === 'draft').length ?? 0,
      leadsTotal:     leads.data?.length ?? 0,
      leadsNew:       leads.data?.filter(l => l.status === 'new').length ?? 0,
      testimonialsTotal: testimonials.data?.length ?? 0,
    }
  } catch {
    return { postsTotal: 0, postsPublished: 0, postsDraft: 0, leadsTotal: 0, leadsNew: 0, testimonialsTotal: 0 }
  }
}

export default async function AdminDashboard() {
  const stats = await getStats()

  const statCards = [
    {
      label: 'Blog Posts',
      value: stats.postsTotal,
      sub: `${stats.postsPublished} published · ${stats.postsDraft} draft`,
      icon: FileText,
      color: 'bg-brand-blue/10 text-brand-blue',
      href: '/admin/blog',
    },
    {
      label: 'Contact Leads',
      value: stats.leadsTotal,
      sub: stats.leadsNew > 0 ? `${stats.leadsNew} new — needs attention` : 'All leads reviewed',
      icon: Inbox,
      color: stats.leadsNew > 0 ? 'bg-amber-500/10 text-amber-500' : 'bg-emerald-500/10 text-emerald-500',
      href: '/admin/leads',
    },
    {
      label: 'Testimonials',
      value: stats.testimonialsTotal,
      sub: 'Active on the homepage',
      icon: MessageSquare,
      color: 'bg-purple-500/10 text-purple-500',
      href: '/admin/testimonials',
    },
  ]

  const quickActions = [
    { label: 'Write New Post',      href: '/admin/blog/new',       icon: Plus   },
    { label: 'View All Leads',      href: '/admin/leads',          icon: Inbox  },
    { label: 'Manage Testimonials', href: '/admin/testimonials',   icon: MessageSquare },
  ]

  return (
    <div className="p-6 lg:p-8 max-w-5xl">
      {/* Header */}
      <div className="mb-8">
        <h1 className="font-sora font-bold text-2xl text-brand-navy mb-1">Dashboard</h1>
        <p className="text-brand-muted text-sm font-dm-sans">Welcome back. Here&apos;s what&apos;s happening.</p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mb-8">
        {statCards.map(card => {
          const Icon = card.icon
          return (
            <Link
              key={card.label}
              href={card.href}
              className="bg-white border border-brand-border rounded-2xl p-5 hover:shadow-md hover:border-brand-blue/30 transition-all group"
            >
              <div className="flex items-start justify-between mb-3">
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${card.color}`}>
                  <Icon className="w-5 h-5" />
                </div>
                <ArrowRight className="w-4 h-4 text-slate-300 group-hover:text-brand-blue transition-colors" />
              </div>
              <div className="font-sora font-bold text-3xl text-brand-navy mb-1">{card.value}</div>
              <div className="font-dm-sans font-semibold text-sm text-brand-navy mb-0.5">{card.label}</div>
              <div className="font-dm-sans text-xs text-brand-muted">{card.sub}</div>
            </Link>
          )
        })}
      </div>

      {/* Quick Actions */}
      <div className="bg-white border border-brand-border rounded-2xl p-5">
        <h2 className="font-sora font-semibold text-sm text-brand-navy mb-4">Quick Actions</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          {quickActions.map(action => {
            const Icon = action.icon
            return (
              <Link
                key={action.label}
                href={action.href}
                className="flex items-center gap-3 px-4 py-3 rounded-xl border border-brand-border hover:border-brand-blue hover:bg-brand-blue/5 transition-all group"
              >
                <Icon className="w-4 h-4 text-brand-muted group-hover:text-brand-blue transition-colors" />
                <span className="font-dm-sans text-sm font-medium text-brand-navy group-hover:text-brand-blue transition-colors">
                  {action.label}
                </span>
              </Link>
            )
          })}
        </div>
      </div>
    </div>
  )
}
