# Daksha Real Estate

Premium real estate website and admin dashboard for Mumbai and Navi Mumbai properties.

## Stack

Next.js 15 App Router, TypeScript, Tailwind CSS, shadcn-style UI primitives, Supabase, PostgreSQL, Prisma ORM, NextAuth, React Hook Form, Zod, and Vercel.

## Features

- Public pages: Home, sale listings, rent listings, property details, SEO location pages, About, Contact, Schedule A Visit, Privacy Policy, Terms.
- Property details with photos, price, overview, amenities, Google Maps, similar properties, WhatsApp inquiry with property ID, and serious-buyer locked content.
- Lead forms for general inquiry, property unlock, and schedule visit.
- Admin dashboard sections for properties, media, leads, locations, homepage content, testimonials, FAQ, and consultant profile.
- Translation-ready architecture through central content/data modules and route-level metadata.
- Prisma schema, SQL migration, seed data, Vercel config, and Supabase configuration notes.

## Local Setup

1. Install dependencies:

```bash
npm install
```

2. Copy environment variables:

```bash
cp .env.example .env
```

3. Add Supabase database URLs, Supabase keys, NextAuth secret, and admin credentials.

4. Generate Prisma client:

```bash
npm run db:generate
```

5. Apply migrations and seed:

```bash
npm run db:migrate
npm run db:seed
```

6. Start development:

```bash
npm run dev
```

## Deployment Guide

1. Connect this GitHub repository to Vercel.
2. Add all variables from `.env.example` in Vercel Project Settings.
3. Connect Supabase Postgres using the pooled `DATABASE_URL` and direct `DIRECT_URL`.
4. Deploy. Vercel uses `prisma generate && next build` from `vercel.json`.
5. Run migrations against Supabase from local or CI:

```bash
npm run db:migrate
npm run db:seed
```

## Supabase Configuration

- Use Supabase Postgres for Prisma.
- Use Supabase Storage buckets for property images, videos, brochures, floor plans, and consultant profile image.
- Keep `SUPABASE_SERVICE_ROLE_KEY` server-only in Vercel.
- Forms write leads through `/api/leads`; admin export reads through Prisma.

## Admin

Set:

- `ADMIN_EMAIL`
- `ADMIN_PASSWORD`
- `NEXTAUTH_SECRET`
- `NEXTAUTH_URL`

Then open `/admin`.
