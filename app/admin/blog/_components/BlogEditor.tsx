'use client'

import { useState, useRef } from 'react'
import { useRouter } from 'next/navigation'
import { createClient } from '@/lib/supabase/client'
import { Loader2, Eye, Edit3, Save, ArrowLeft, UploadCloud, X, ImageIcon } from 'lucide-react'
import Link from 'next/link'
import type { BlogPost } from '@/lib/supabase/types'

function slugify(text: string) {
  return text
    .toLowerCase()
    .replace(/[^\w\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .trim()
}

function estimateReadTime(content: string) {
  const words = content.split(/\s+/).length
  return Math.max(1, Math.ceil(words / 200))
}

interface BlogEditorProps {
  post?: BlogPost
}

export default function BlogEditor({ post }: BlogEditorProps) {
  const router = useRouter()
  const supabase = createClient()
  const isEditing = !!post

  const [title, setTitle]               = useState(post?.title ?? '')
  const [slug, setSlug]                 = useState(post?.slug ?? '')
  const [excerpt, setExcerpt]           = useState(post?.excerpt ?? '')
  const [content, setContent]           = useState(post?.content ?? '')
  const [featuredImage, setFeaturedImage] = useState(post?.featured_image ?? '')
  const [tags, setTags]                 = useState(post?.tags?.join(', ') ?? '')
  const [status, setStatus]             = useState<'draft' | 'published'>(post?.status ?? 'draft')
  const [activeTab, setActiveTab]       = useState<'write' | 'preview'>('write')
  const [saving, setSaving]             = useState(false)
  const [uploading, setUploading]       = useState(false)
  const [error, setError]               = useState<string | null>(null)
  const fileInputRef                    = useRef<HTMLInputElement>(null)

  async function handleImageUpload(file: File) {
    console.log('handleImageUpload called', file.name, file.type, file.size)
    if (!file.type.startsWith('image/')) { setError('Please select an image file.'); return }
    if (file.size > 5 * 1024 * 1024) { setError('Image must be under 5 MB.'); return }
    setUploading(true)
    setError(null)
    try {
      const ext = file.name.split('.').pop()
      const path = `featured/${Date.now()}.${ext}`
      console.log('uploading to path:', path)
      const { data: uploadData, error: uploadError } = await supabase.storage.from('blog-images').upload(path, file, { upsert: true })
      console.log('upload result:', { uploadData, uploadError })
      if (uploadError) { setError(`Upload failed: ${uploadError.message}`); setUploading(false); return }
      const { data } = supabase.storage.from('blog-images').getPublicUrl(path)
      console.log('public url:', data.publicUrl)
      setFeaturedImage(data.publicUrl)
    } catch (err) {
      console.error('Unexpected upload error:', err)
      setError('Upload failed unexpectedly. Check console for details.')
    }
    setUploading(false)
  }

  function handleTitleChange(value: string) {
    setTitle(value)
    if (!isEditing || !post?.slug) {
      setSlug(slugify(value))
    }
  }

  async function handleSave(e: React.FormEvent) {
    e.preventDefault()
    if (!title || !slug) { setError('Title and slug are required.'); return }
    setSaving(true)
    setError(null)

    const payload = {
      title,
      slug,
      excerpt: excerpt || null,
      content: content || null,
      featured_image: featuredImage || null,
      tags: tags ? tags.split(',').map(t => t.trim()).filter(Boolean) : null,
      read_time: estimateReadTime(content),
      status,
      published_at: status === 'published' ? (post?.published_at ?? new Date().toISOString()) : null,
    }

    const { error: dbError } = isEditing
      ? await supabase.from('blog_posts').update(payload).eq('id', post.id)
      : await supabase.from('blog_posts').insert(payload)

    if (dbError) {
      setError(dbError.message)
      setSaving(false)
      return
    }

    router.push('/admin/blog')
    router.refresh()
  }

  const inputCls = 'w-full px-4 py-3 rounded-xl border border-brand-border bg-white text-brand-navy text-sm placeholder:text-brand-muted/60 focus:outline-none focus:border-brand-blue transition-colors'

  return (
    <div className="p-6 lg:p-8 max-w-4xl">
      {/* Header */}
      <div className="flex items-center gap-3 mb-6">
        <Link href="/admin/blog" className="p-2 rounded-xl hover:bg-brand-border transition-colors">
          <ArrowLeft className="w-4 h-4 text-brand-muted" />
        </Link>
        <div>
          <h1 className="font-sora font-bold text-xl text-brand-navy">
            {isEditing ? 'Edit Post' : 'New Post'}
          </h1>
          <p className="text-brand-muted text-xs font-dm-sans">
            {isEditing ? `Editing: ${post.title}` : 'Write and publish a new blog article'}
          </p>
        </div>
      </div>

      {error && (
        <div className="mb-4 p-3 rounded-xl bg-red-50 border border-red-200 text-red-600 text-sm font-dm-sans">
          {error}
        </div>
      )}

      <form onSubmit={handleSave} className="space-y-5">
        <div className="grid sm:grid-cols-2 gap-5">
          {/* Title */}
          <div className="sm:col-span-2 space-y-1.5">
            <label className="block text-xs font-semibold uppercase tracking-wider text-brand-muted">Title *</label>
            <input
              type="text"
              required
              value={title}
              onChange={e => handleTitleChange(e.target.value)}
              placeholder="e.g. The Complete Guide to Group Consolidation"
              className={inputCls}
            />
          </div>

          {/* Slug */}
          <div className="space-y-1.5">
            <label className="block text-xs font-semibold uppercase tracking-wider text-brand-muted">Slug *</label>
            <input
              type="text"
              required
              value={slug}
              onChange={e => setSlug(e.target.value)}
              placeholder="complete-guide-group-consolidation"
              className={`${inputCls} font-mono text-xs`}
            />
            <p className="text-[11px] text-brand-muted font-dm-sans">finaccsolutions.com/blog/{slug || '…'}</p>
          </div>

          {/* Tags */}
          <div className="space-y-1.5">
            <label className="block text-xs font-semibold uppercase tracking-wider text-brand-muted">Tags</label>
            <input
              type="text"
              value={tags}
              onChange={e => setTags(e.target.value)}
              placeholder="IFRS, Bookkeeping, Startup Finance"
              className={inputCls}
            />
            <p className="text-[11px] text-brand-muted font-dm-sans">Comma-separated</p>
          </div>

          {/* Excerpt */}
          <div className="sm:col-span-2 space-y-1.5">
            <label className="block text-xs font-semibold uppercase tracking-wider text-brand-muted">Excerpt</label>
            <textarea
              rows={2}
              value={excerpt}
              onChange={e => setExcerpt(e.target.value)}
              placeholder="Short description shown on the blog listing page and in search results…"
              className={`${inputCls} resize-none`}
            />
          </div>

          {/* Featured Image */}
          <div className="sm:col-span-2 space-y-1.5">
            <label className="block text-xs font-semibold uppercase tracking-wider text-brand-muted">Featured Image</label>
            <input
              ref={fileInputRef}
              type="file"
              accept="image/*"
              className="hidden"
              onChange={e => { const f = e.target.files?.[0]; if (f) handleImageUpload(f) }}
            />
            {featuredImage ? (
              <div className="relative rounded-xl overflow-hidden border border-brand-border group">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={featuredImage} alt="Featured" className="w-full h-48 object-cover" />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-3">
                  <button
                    type="button"
                    onClick={() => fileInputRef.current?.click()}
                    className="flex items-center gap-1.5 px-3 py-2 bg-white text-brand-navy rounded-lg text-xs font-semibold hover:bg-brand-slate transition-colors"
                  >
                    <UploadCloud className="w-3.5 h-3.5" /> Replace
                  </button>
                  <button
                    type="button"
                    onClick={() => setFeaturedImage('')}
                    className="flex items-center gap-1.5 px-3 py-2 bg-red-500 text-white rounded-lg text-xs font-semibold hover:bg-red-600 transition-colors"
                  >
                    <X className="w-3.5 h-3.5" /> Remove
                  </button>
                </div>
              </div>
            ) : (
              <button
                type="button"
                onClick={() => fileInputRef.current?.click()}
                disabled={uploading}
                className="w-full h-36 rounded-xl border-2 border-dashed border-brand-border hover:border-brand-blue bg-white hover:bg-brand-slate/50 transition-all flex flex-col items-center justify-center gap-2 text-brand-muted hover:text-brand-blue disabled:opacity-60"
              >
                {uploading
                  ? <><Loader2 className="w-6 h-6 animate-spin" /><span className="text-xs font-dm-sans font-medium">Uploading…</span></>
                  : <><UploadCloud className="w-6 h-6" /><span className="text-xs font-dm-sans font-medium">Click to upload image</span><span className="text-[11px]">PNG, JPG, WebP — max 5 MB</span></>
                }
              </button>
            )}
          </div>
        </div>

        {/* Content Editor */}
        <div className="space-y-1.5">
          <div className="flex items-center justify-between">
            <label className="block text-xs font-semibold uppercase tracking-wider text-brand-muted">Content (Markdown)</label>
            <div className="flex rounded-lg border border-brand-border overflow-hidden text-xs">
              <button
                type="button"
                onClick={() => setActiveTab('write')}
                className={`flex items-center gap-1.5 px-3 py-1.5 font-dm-sans font-medium transition-colors ${
                  activeTab === 'write' ? 'bg-brand-blue text-white' : 'bg-white text-brand-muted hover:text-brand-navy'
                }`}
              >
                <Edit3 className="w-3 h-3" /> Write
              </button>
              <button
                type="button"
                onClick={() => setActiveTab('preview')}
                className={`flex items-center gap-1.5 px-3 py-1.5 font-dm-sans font-medium transition-colors ${
                  activeTab === 'preview' ? 'bg-brand-blue text-white' : 'bg-white text-brand-muted hover:text-brand-navy'
                }`}
              >
                <Eye className="w-3 h-3" /> Preview
              </button>
            </div>
          </div>

          {activeTab === 'write' ? (
            <textarea
              rows={20}
              value={content}
              onChange={e => setContent(e.target.value)}
              placeholder={`## Introduction\n\nStart writing your article here. Full Markdown supported.\n\n**Bold text**, *italic text*, [links](https://example.com)\n\n## Section Heading\n\nYour content...`}
              className={`${inputCls} resize-y font-mono text-xs leading-relaxed`}
            />
          ) : (
            <div
              className="min-h-[480px] p-5 rounded-xl border border-brand-border bg-white prose prose-sm max-w-none text-brand-navy font-dm-sans"
              dangerouslySetInnerHTML={{
                __html: content
                  ? content
                      .replace(/^### (.+)$/gm, '<h3 class="text-base font-bold text-brand-navy mt-4 mb-2">$1</h3>')
                      .replace(/^## (.+)$/gm, '<h2 class="text-lg font-bold text-brand-navy mt-6 mb-3">$1</h2>')
                      .replace(/^# (.+)$/gm, '<h1 class="text-xl font-bold text-brand-navy mt-6 mb-3">$1</h1>')
                      .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
                      .replace(/\*(.+?)\*/g, '<em>$1</em>')
                      .replace(/\[(.+?)\]\((.+?)\)/g, '<a href="$2" class="text-brand-blue hover:underline">$1</a>')
                      .replace(/^- (.+)$/gm, '<li class="ml-4 list-disc">$1</li>')
                      .replace(/\n\n/g, '</p><p class="mb-3 text-sm leading-relaxed">')
                      .replace(/^/, '<p class="mb-3 text-sm leading-relaxed">')
                      .replace(/$/, '</p>')
                  : '<p class="text-brand-muted text-sm italic">Nothing to preview yet. Switch to Write and add some content.</p>',
              }}
            />
          )}
          {content && (
            <p className="text-[11px] text-brand-muted font-dm-sans text-right">
              ~{estimateReadTime(content)} min read · {content.split(/\s+/).length} words
            </p>
          )}
        </div>

        {/* Footer: Status + Save */}
        <div className="flex items-center justify-between pt-2 border-t border-brand-border">
          <div className="flex items-center gap-3">
            <span className="text-xs font-semibold uppercase tracking-wider text-brand-muted">Status:</span>
            <div className="flex rounded-lg border border-brand-border overflow-hidden text-xs">
              {(['draft', 'published'] as const).map(s => (
                <button
                  key={s}
                  type="button"
                  onClick={() => setStatus(s)}
                  className={`px-3 py-1.5 font-dm-sans font-medium capitalize transition-colors ${
                    status === s
                      ? s === 'published' ? 'bg-emerald-500 text-white' : 'bg-amber-500 text-white'
                      : 'bg-white text-brand-muted hover:text-brand-navy'
                  }`}
                >
                  {s}
                </button>
              ))}
            </div>
          </div>

          <button
            type="submit"
            disabled={saving}
            className="flex items-center gap-2 px-5 py-2.5 bg-brand-blue hover:bg-brand-sky text-white rounded-xl text-sm font-semibold transition-colors disabled:opacity-60"
          >
            {saving ? <Loader2 className="w-4 h-4 animate-spin" /> : <Save className="w-4 h-4" />}
            {saving ? 'Saving…' : isEditing ? 'Save Changes' : 'Create Post'}
          </button>
        </div>
      </form>
    </div>
  )
}
