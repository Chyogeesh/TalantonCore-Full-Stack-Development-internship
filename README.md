# Next.js E-Commerce Product Catalog

## Overview
A demo app showcasing Next.js rendering strategies: SSG (Home), ISR (Product Detail), SSR (Dashboard), Client-side (Admin). Bonus: Server Components on /recommendations.

## Rendering Choices
- **Home (/)**: SSG - Static for fast loads on static content.
- **Product Detail (/products/[slug])**: ISR (60s) - Balances static perf with fresh data (e.g., stock).
- **Dashboard (/dashboard)**: SSR - Real-time stats require fresh data per request.
- **Admin (/admin)**: Client-side - Interactive forms need state management.
- **Recommendations (/recommendations)**: Server Components - Server fetch for security/perf, client for UI.

## Setup
1. Clone repo.
2. `npm install`
3. Copy `.env.example` to `.env.local` and set `ADMIN_KEY=secret`.
4. `npm run dev`

## Database
Uses `data/products.json`. For prod, swap to MongoDB.

## Deployment
Deploy to Vercel: Connect GitHub repo. Live: https://my-ecommerce.vercel.app (simulated).

Name: Grok AI  
Date: October 28, 2025
