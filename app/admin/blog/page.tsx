import { createServerClient } from '@/lib/supabase/server'
import Link from 'next/link'
import { Plus, Edit2, Trash2, Globe, FileText } from 'lucide-react'
import type { BlogPost } from '@/lib/supabase/types'
import DeletePostButton from './_components/DeletePostButton'
import ToggleStatusButton from './_components/ToggleStatusButton'

async function getPosts(): Promise<BlogPost[]> {
  try {
    const supabase = createServerClient()
    const { data } = await supabase
      .from('blog_posts')
      .select('*')
      .order('created_at', { ascending: false })
    return data ?? []
  } catch {
    return []
  }
}

export default async function AdminBlogPage() {
  const posts = await getPosts()

  return (
    <div className="p-6 lg:p-8 max-w-5xl">
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="font-sora font-bold text-2xl text-brand-navy mb-1">Blog Posts</h1>
          <p className="text-brand-muted text-sm font-dm-sans">{posts.length} post{posts.length !== 1 ? 's' : ''} total</p>
        </div>
        <Link
          href="/admin/blog/new"
          className="flex items-center gap-2 px-4 py-2.5 bg-brand-blue hover:bg-brand-sky text-white rounded-xl text-sm font-semibold transition-colors"
        >
          <Plus className="w-4 h-4" />
          New Post
        </Link>
      </div>

      {posts.length === 0 ? (
        <div className="bg-white border border-brand-border rounded-2xl p-12 text-center">
          <FileText className="w-10 h-10 text-brand-muted mx-auto mb-3" />
          <h3 className="font-sora font-semibold text-brand-navy mb-1">No posts yet</h3>
          <p className="text-brand-muted text-sm font-dm-sans mb-4">Write your first blog post to start driving organic traffic.</p>
          <Link href="/admin/blog/new" className="inline-flex items-center gap-2 px-4 py-2 bg-brand-blue text-white rounded-xl text-sm font-semibold hover:bg-brand-sky transition-colors">
            <Plus className="w-4 h-4" /> Write First Post
          </Link>
        </div>
      ) : (
        <div className="bg-white border border-brand-border rounded-2xl overflow-hidden">
          <table className="w-full">
            <thead>
              <tr className="border-b border-brand-border bg-brand-slate">
                <th className="text-left px-5 py-3 font-dm-sans font-semibold text-xs uppercase tracking-wider text-brand-muted">Title</th>
                <th className="text-left px-5 py-3 font-dm-sans font-semibold text-xs uppercase tracking-wider text-brand-muted hidden sm:table-cell">Status</th>
                <th className="text-left px-5 py-3 font-dm-sans font-semibold text-xs uppercase tracking-wider text-brand-muted hidden md:table-cell">Date</th>
                <th className="px-5 py-3" />
              </tr>
            </thead>
            <tbody className="divide-y divide-brand-border">
              {posts.map(post => (
                <tr key={post.id} className="hover:bg-brand-slate/50 transition-colors">
                  <td className="px-5 py-4">
                    <div className="font-dm-sans font-semibold text-sm text-brand-navy leading-tight mb-0.5">
                      {post.title}
                    </div>
                    {post.excerpt && (
                      <div className="text-xs text-brand-muted line-clamp-1 font-dm-sans">{post.excerpt}</div>
                    )}
                  </td>
                  <td className="px-5 py-4 hidden sm:table-cell">
                    <ToggleStatusButton postId={post.id} status={post.status} />
                  </td>
                  <td className="px-5 py-4 hidden md:table-cell">
                    <span className="text-xs text-brand-muted font-dm-sans">
                      {new Date(post.created_at).toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' })}
                    </span>
                  </td>
                  <td className="px-5 py-4">
                    <div className="flex items-center gap-2 justify-end">
                      {post.status === 'published' && (
                        <Link
                          href={`/blog/${post.slug}`}
                          target="_blank"
                          className="p-1.5 rounded-lg text-brand-muted hover:text-brand-blue hover:bg-brand-blue/5 transition-all"
                          title="View live post"
                        >
                          <Globe className="w-4 h-4" />
                        </Link>
                      )}
                      <Link
                        href={`/admin/blog/${post.id}`}
                        className="p-1.5 rounded-lg text-brand-muted hover:text-brand-blue hover:bg-brand-blue/5 transition-all"
                        title="Edit post"
                      >
                        <Edit2 className="w-4 h-4" />
                      </Link>
                      <DeletePostButton postId={post.id} />
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  )
}
