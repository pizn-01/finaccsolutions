export interface BlogPost {
  id: string
  title: string
  slug: string
  excerpt: string | null
  content: string | null
  featured_image: string | null
  status: 'draft' | 'published'
  tags: string[] | null
  read_time: number | null
  published_at: string | null
  created_at: string
  updated_at: string
}

export interface Testimonial {
  id: string
  name: string
  role: string
  text: string
  initials: string
  is_active: boolean
  sort_order: number
  created_at: string
}

export interface CaseStudy {
  id: string
  title: string
  metric: string
  description: string
  tags: string[] | null
  is_active: boolean
  sort_order: number
  created_at: string
}

export interface ContactLead {
  id: string
  full_name: string
  business_email: string
  company_name: string
  service_needed: string | null
  message: string | null
  status: 'new' | 'contacted' | 'qualified' | 'closed'
  notes: string | null
  created_at: string
}
