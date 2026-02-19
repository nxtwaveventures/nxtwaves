# NxtWaves — Clinical Intelligence UI

A minimal, production-ready React landing page for NxtWaves — a recruiter-paid platform delivering precision-vetted talent in AI, Healthcare and Engineering.

## Features
- Accessible, minimalist "Clinical Intelligence" design
- SEO: `react-helmet` + Schema.org JSON-LD (Service + offers + contactPoint)
- Responsive Bento-grid (3 pillar cards)
- Tailwind CSS with a custom `rounded-custom-24` radius
- Framer Motion micro-animations and Lucide icons
- Pre-configured for Vercel deployment

## Quick start
1. Install
   npm install

2. Dev server
   npm run dev

3. Production build
   npm run build

4. Preview production build locally
   npm run preview

## Code quality & deploy
- CI: GitHub Actions workflow (`.github/workflows/ci.yml`) runs `npm ci` + `npm run build` on pushes and PRs to `main`.
- Vercel: connect the GitHub repository to Vercel — build command `npm run build`, output directory `dist` (or use `vercel.json`).

## Deployment to Vercel (short)
1. Push repo to GitHub.
2. Sign in to Vercel and "Import Project" → select the repo.
3. Set Framework Preset to "Vite" (Vercel usually auto-detects).
4. Build command: `npm run build` — Output directory: `dist`.
5. Add your custom domain in Vercel Dashboard → follow DNS instructions.

## (Cloudflare instructions removed)
Cloudflare Pages / Wrangler instructions were removed from this repository to avoid deployment conflicts with Vercel. If you need Cloudflare guidance later, I can add it back.

## Notes before publishing
- Update `package.json.repository.url` to point to your GitHub repo.
- Replace placeholder social URLs in `src/App.jsx` with real profiles.
- Consider adding OG images and more JSON-LD entries (Organization, JobPosting) if you publish jobs.

## Maintainer
- NxtWaves — frontend scaffold for marketing & lead capture
