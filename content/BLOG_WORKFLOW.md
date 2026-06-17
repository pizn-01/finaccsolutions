# FinAccSolutions — Blog Content Workflow
### How to create and publish blog posts using Claude AI

---

## Overview

This document gives you everything you need to create professional, SEO-ready blog posts for FinAccSolutions using Claude AI — no writing experience required.

**The process takes about 5 minutes per post:**
1. Open Claude AI → paste the System Prompt once
2. Ask Claude to write a post on your chosen topic
3. Copy each output field into the admin panel
4. Upload a featured image
5. Publish (or save as draft)

---

## Step 1 — Set up Claude AI

1. Go to **claude.ai** and sign in (or create a free account)
2. Start a **new conversation**
3. Copy and paste the entire block below as your first message — this sets the context for Claude:

---

### SYSTEM PROMPT (paste this first, every new session)

```
You are a professional finance and accounting content writer for FinAccSolutions — a virtual accounting and finance outsourcing firm based in Karachi, Pakistan, serving clients globally (30+ countries). The firm is staffed by Big 4-trained accountants certified in IFRS and US GAAP.

SERVICES:
- Bookkeeping
- Payroll Services
- Budgeting & Forecasting
- Fundraising Support (financial models for startups)
- Group Consolidation (IFRS 10)
- Tax Records & Compliance
- Virtual CFO
- Offshore Finance Professionals (talent outsourcing)

TARGET AUDIENCE:
- SME owners and founders who lack in-house finance teams
- Startups preparing for fundraising
- Mid-market companies with international subsidiaries
- UK, US, UAE, and Australia-based businesses looking to outsource

BRAND VOICE:
- Expert but accessible — explain technical concepts clearly without dumbing them down
- Confident and trustworthy — the reader should feel they are getting advice from a seasoned CFO
- No fluff — every paragraph earns its place
- No excessive jargon — always define acronyms on first use (e.g. "International Financial Reporting Standards (IFRS)")

BLOG FORMAT RULES:
- Use H2 (##) for main sections, H3 (###) for subsections — never H1 inside the article
- Use **bold** for key terms on first mention
- Use bullet lists for 3+ parallel items
- Use > blockquotes for key takeaways or important warnings
- Keep paragraphs to 3-5 sentences max
- End every post with a CTA section titled "## Ready to Simplify Your Finances?" that invites the reader to book a free consultation at FinAccSolutions

SEO RULES:
- The primary keyword should appear in the title, the first paragraph, and at least 2 headings
- Meta excerpt should be 140-160 characters, include the primary keyword, and end with a soft CTA
- Tags should be 3-6 lowercase keywords relevant to the post (comma-separated)

OUTPUT FORMAT — always return your blog post in this exact structure:

---
TITLE: [Post title — include primary keyword, 50-65 characters]

SLUG: [url-friendly version: lowercase, hyphens only, no special chars]

TAGS: [tag1, tag2, tag3, tag4]

EXCERPT: [140-160 character meta description with primary keyword and soft CTA]

READ TIME: [X minutes — calculate as word count ÷ 200, minimum 1]
---

CONTENT:
[Full markdown article body starting with an intro paragraph — no H1, no repeating the title]

---

When I give you a topic, generate the complete blog post in this format. If I give you a topic + audience + goal, tailor accordingly. Always ask if anything is unclear before writing.
```

---

## Step 2 — Request a blog post

After pasting the system prompt, send a message like one of these examples:

**Simple request:**
> Write a blog post about why small businesses should outsource their bookkeeping.

**Targeted request (recommended):**
> Write a blog post targeting UK-based startup founders who are preparing for a Series A. Topic: how to build investor-ready financial models. Primary keyword: "investor-ready financial model". Goal: generate leads for our Fundraising Support service.

**Series request:**
> Write a 4-part blog series on group consolidation under IFRS 10 — one post per step. Start with Part 1: what group consolidation is and when it's required.

---

## Step 3 — Copy into the Admin Panel

Go to **finaccsolutions.com/admin/blog/new**

Map each field from Claude's output to the form:

| Claude Output | Admin Field | Notes |
|---|---|---|
| `TITLE:` | **Title** | Copy exactly |
| `SLUG:` | **Slug** | Auto-fills from title — only override if Claude's slug is better |
| `TAGS:` | **Tags** | Paste comma-separated list |
| `EXCERPT:` | **Excerpt** | Paste as-is |
| `CONTENT:` | **Content** | Paste the full markdown block |
| `READ TIME:` | Calculated automatically | Admin panel calculates this — you can ignore it |

**Status:** Set to **Draft** to review first, then switch to **Published** when ready.

---

## Step 4 — Featured Image

The admin panel has an image upload field. For each blog post you'll want a relevant image.

**Free image sources (no attribution required):**
- [unsplash.com](https://unsplash.com) — search terms like "accounting", "finance", "business meeting", "spreadsheet"
- [pexels.com](https://pexels.com) — same search terms

**Image guidelines:**
- Minimum size: 1200 × 630 px (landscape)
- Format: JPG or WebP preferred
- Max file size: 5 MB

---

## Step 5 — Review checklist before publishing

Before hitting Publish, quickly check:

- [ ] Title reads naturally and includes the keyword
- [ ] Excerpt is between 140–160 characters
- [ ] Content starts with an intro paragraph (not a heading)
- [ ] CTA section at the end links to `/#contact`
- [ ] Tags look relevant (3–6 tags)
- [ ] Featured image uploaded
- [ ] You've read through for any factual errors

---

## Topic Ideas to Get Started

Use these if you're not sure what to write first:

| Topic | Target Audience | Service to Promote |
|---|---|---|
| 5 signs your startup needs a virtual CFO | Startup founders | Virtual CFO |
| What is IFRS 10 group consolidation and do you need it? | Mid-market companies | Group Consolidation |
| How to run payroll for a remote team across multiple countries | SME owners | Payroll Services |
| Bookkeeping vs accounting: what's the difference and which do you need? | New business owners | Bookkeeping |
| How to prepare a financial model for Series A investors | Pre-Series A startups | Fundraising Support |
| The hidden costs of doing your own bookkeeping | Solopreneurs | Bookkeeping |
| IFRS vs US GAAP: which applies to your business? | International companies | Tax & Compliance |
| How outsourced accounting saves SMEs 20+ hours per month | SME owners | All services |

---

## Tips for best results

- **Be specific** — the more context you give Claude (audience, goal, keyword), the better the post
- **Iterate** — ask Claude to "make the intro more punchy" or "add a section on X" after the first draft
- **Batch content** — ask for 3–5 posts in one session while the context is warm
- **Review facts** — Claude may occasionally give approximate figures; always verify any statistics before publishing
- **Publish consistently** — even 1–2 posts per month builds meaningful SEO traction over 6 months

---

*Maintained by FinAccSolutions. Last updated June 2026.*
