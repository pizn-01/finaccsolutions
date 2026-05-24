-- ─────────────────────────────────────────────────────────────────
-- FinAccSolutions — Supabase Database Schema
-- Run this in your Supabase project → SQL Editor → New Query
-- ─────────────────────────────────────────────────────────────────

-- ── Blog Posts ───────────────────────────────────────────────────
CREATE TABLE IF NOT EXISTS blog_posts (
  id            UUID        DEFAULT gen_random_uuid() PRIMARY KEY,
  title         TEXT        NOT NULL,
  slug          TEXT        UNIQUE NOT NULL,
  excerpt       TEXT,
  content       TEXT,
  featured_image TEXT,
  status        TEXT        DEFAULT 'draft' CHECK (status IN ('draft', 'published')),
  tags          TEXT[],
  read_time     INTEGER,
  published_at  TIMESTAMPTZ,
  created_at    TIMESTAMPTZ DEFAULT NOW(),
  updated_at    TIMESTAMPTZ DEFAULT NOW()
);

-- ── Testimonials ─────────────────────────────────────────────────
CREATE TABLE IF NOT EXISTS testimonials (
  id          UUID        DEFAULT gen_random_uuid() PRIMARY KEY,
  name        TEXT        NOT NULL,
  role        TEXT        NOT NULL,
  text        TEXT        NOT NULL,
  initials    TEXT        NOT NULL,
  is_active   BOOLEAN     DEFAULT true,
  sort_order  INTEGER     DEFAULT 0,
  created_at  TIMESTAMPTZ DEFAULT NOW()
);

-- ── Case Studies ─────────────────────────────────────────────────
CREATE TABLE IF NOT EXISTS case_studies (
  id          UUID        DEFAULT gen_random_uuid() PRIMARY KEY,
  title       TEXT        NOT NULL,
  metric      TEXT        NOT NULL,
  description TEXT        NOT NULL,
  tags        TEXT[],
  is_active   BOOLEAN     DEFAULT true,
  sort_order  INTEGER     DEFAULT 0,
  created_at  TIMESTAMPTZ DEFAULT NOW()
);

-- ── Contact Leads ────────────────────────────────────────────────
CREATE TABLE IF NOT EXISTS contact_leads (
  id              UUID        DEFAULT gen_random_uuid() PRIMARY KEY,
  full_name       TEXT        NOT NULL,
  business_email  TEXT        NOT NULL,
  company_name    TEXT        NOT NULL,
  service_needed  TEXT,
  message         TEXT,
  status          TEXT        DEFAULT 'new' CHECK (status IN ('new', 'contacted', 'qualified', 'closed')),
  notes           TEXT,
  created_at      TIMESTAMPTZ DEFAULT NOW()
);

-- ── Row Level Security ───────────────────────────────────────────
ALTER TABLE blog_posts    ENABLE ROW LEVEL SECURITY;
ALTER TABLE testimonials  ENABLE ROW LEVEL SECURITY;
ALTER TABLE case_studies  ENABLE ROW LEVEL SECURITY;
ALTER TABLE contact_leads ENABLE ROW LEVEL SECURITY;

-- Blog: public reads published; authenticated full access
CREATE POLICY "Public read published posts"
  ON blog_posts FOR SELECT TO anon
  USING (status = 'published');

CREATE POLICY "Auth manage posts"
  ON blog_posts FOR ALL TO authenticated
  USING (true) WITH CHECK (true);

-- Testimonials: public reads active; authenticated full access
CREATE POLICY "Public read active testimonials"
  ON testimonials FOR SELECT TO anon
  USING (is_active = true);

CREATE POLICY "Auth manage testimonials"
  ON testimonials FOR ALL TO authenticated
  USING (true) WITH CHECK (true);

-- Case studies: public reads active; authenticated full access
CREATE POLICY "Public read active case studies"
  ON case_studies FOR SELECT TO anon
  USING (is_active = true);

CREATE POLICY "Auth manage case studies"
  ON case_studies FOR ALL TO authenticated
  USING (true) WITH CHECK (true);

-- Leads: anon can INSERT (contact form); authenticated can do everything
CREATE POLICY "Anyone can submit a lead"
  ON contact_leads FOR INSERT TO anon
  WITH CHECK (true);

CREATE POLICY "Auth manage leads"
  ON contact_leads FOR ALL TO authenticated
  USING (true) WITH CHECK (true);

-- ── Auto-update updated_at on blog_posts ────────────────────────
CREATE OR REPLACE FUNCTION update_updated_at()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER blog_posts_updated_at
  BEFORE UPDATE ON blog_posts
  FOR EACH ROW EXECUTE FUNCTION update_updated_at();

-- ── Seed: default testimonials ───────────────────────────────────
INSERT INTO testimonials (name, role, text, initials, sort_order) VALUES
(
  'James Morrison',
  'CFO, Northgate Holdings',
  'We had 7 legal entities across 4 currencies and were spending nearly 3 weeks every quarter on consolidation. FinAccSolutions took over our IFRS 10 group consolidation using LucaNet and cut our close cycle from 21 days down to 5. The accuracy has been flawless — our auditors specifically commented on the quality of the intercompany eliminations.',
  'JM',
  1
),
(
  'Sarah Al-Rashid',
  'Founder, Verdana Capital',
  'We needed an investor-ready three-statement model before our Series A — fast. The team delivered a full DCF, comparables analysis, and pitch deck financial slides in 4 days. Our lead investor called out the quality of the model. We closed our $2.1M round two months later.',
  'SA',
  2
),
(
  'David Chen',
  'Operations Director, Pacific Rim Logistics',
  'We outsourced our bookkeeping and payroll to FinAccSolutions 18 months ago and haven''t looked back. Reconciliation lands on the 3rd of every month without fail, payroll runs on time every cycle, and we''ve reduced our finance overhead by over $38,000 annually versus our previous in-house setup.',
  'DC',
  3
);

-- ── Seed: default case studies ───────────────────────────────────
INSERT INTO case_studies (title, metric, description, tags, sort_order) VALUES
(
  'Multi-Entity IFRS Consolidation',
  '78%',
  'Reduction in quarterly close cycle — from 21 days to 5 days — for a 7-entity holding group across 4 currencies, delivered under IFRS 10 using LucaNet.',
  ARRAY['Group Consolidation', 'IFRS 10'],
  1
),
(
  'Series A Fundraising Support',
  '$2.1M',
  'Seed round closed after FinAccSolutions built an investor-ready financial model, DCF valuation, and pitch deck financial slides in under a week.',
  ARRAY['Financial Modelling', 'Fundraising Support'],
  2
);
