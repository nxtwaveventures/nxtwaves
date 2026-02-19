/**
 * App.jsx — Production React application for NxtWaves.in
 *
 * Description:
 * - Single-file, production-ready React app (Vite + Tailwind + Framer Motion).
 * - Minimalist "Clinical Intelligence" aesthetic with glassmorphism cards.
 * - SEO-ready: <Helmet> meta + Schema.org JSON-LD (Service + offers + contactPoint).
 *
 * Accessibility & conventions:
 * - Includes a visible `skip to content` link and ARIA labels for interactive elements.
 * - Uses `rounded-custom-24` for consistent 24px radii across UI.
 * - Cards are content-forward (black text) with subtle sunlight background.
 *
 * Build / Deploy:
 * - Local dev: `npm run dev`  |  Production build: `npm run build`
 * - Deploy: push to GitHub → connect repository in Vercel → set custom domain
 *
 * Author: NxtWaves
 * Last modified: 2026-02-19
 */

import React from 'react';
import { Helmet } from 'react-helmet';
import { Cpu, Stethoscope, HardDrive, CheckCircle, Users, Linkedin, Instagram, Facebook, Twitter } from 'lucide-react';
import { motion } from 'framer-motion';

const LD_JSON = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "NxtWaves.in",
  "description": "NxtWaves.in is a premier recruiter-paid platform providing precision-vetted talent in AI, specialized medicine, and physical engineering.",
  "url": "https://nxtwaves.in",
  "provider": {
    "@type": "Organization",
    "name": "NxtWaves",
    "sameAs": [
      "https://www.linkedin.com",
      "https://www.instagram.com",
      "https://www.facebook.com",
      "https://www.twitter.com"
    ],
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+919663495817",
      "contactType": "customer service",
      "areaServed": "IN",
      "availableLanguage": ["en"]
    }
  },
  "serviceType": "Specialized Manpower Recruitment",
  "offers": [
    {
      "@type": "Offer",
      "name": "AI/ML Talent",
      "description": "LLM engineers, Computer Vision specialists, AI Engineers",
      "price": "Varies",
      "priceCurrency": "INR"
    },
    {
      "@type": "Offer",
      "name": "Specialized Healthcare",
      "description": "Board-certified surgeons, specialized nurses",
      "price": "Varies",
      "priceCurrency": "INR"
    },
    {
      "@type": "Offer",
      "name": "Physical Engineering",
      "description": "Robotics, Mechatronics, and Infrastructure engineers",
      "price": "Varies",
      "priceCurrency": "INR"
    }
  ]
};

export default function App() {
  return (
    <div className="min-h-screen bg-sun-gradient text-clinical-text antialiased">
      <a href="#main" className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-white/90 text-clinical-text px-3 py-2 rounded-md shadow-sm">Skip to content</a>
      <Helmet>
        <title>NxtWaves | Specialized Manpower for AI, Healthcare & Engineering</title>
        <meta name="description" content="NxtWaves.in is a premier recruiter-paid platform providing precision-vetted talent in AI, specialized medicine, and physical engineering." />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(LD_JSON) }} />
      </Helmet>

      {/* Header */}
      <header className="sticky top-0 z-40 bg-clinical-bg/95 backdrop-blur-sm border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="text-lg md:text-xl font-semibold tracking-tight">NxtWaves.in</div>
            <div className="text-sm text-gray-500">#hireforhappiness</div>
          </div>

          <div className="flex items-center gap-3">
            <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="p-2 rounded-full hover:bg-white/30 transition">
              <Linkedin className="w-4 h-4 text-clinical-text" />
            </a>
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="p-2 rounded-full hover:bg-white/30 transition">
              <Instagram className="w-4 h-4 text-clinical-text" />
            </a>
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="p-2 rounded-full hover:bg-white/30 transition">
              <Facebook className="w-4 h-4 text-clinical-text" />
            </a>
            <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="p-2 rounded-full hover:bg-white/30 transition">
              <Twitter className="w-4 h-4 text-clinical-text" />
            </a>
          </div>
        </div>
      </header>

      <main id="main" className="max-w-6xl mx-auto px-6 py-12">
        {/* Hero */}
        <motion.section initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <h1 className="text-4xl md:text-6xl font-light tracking-tighter leading-tight">We hire the right candidate for you</h1>
          <p className="mt-4 text-lg text-gray-600 max-w-3xl"><span className="font-semibold text-clinical-text">Human-first. Culture-aligned hires.</span></p>
        </motion.section>

        {/* Bento Grid — simplified to three equal pillars */}
        <section className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Pillar 1 — AI Talent */}
          <motion.article className="bg-white/70 backdrop-blur-sm border border-gray-100/20 p-6 rounded-custom-24 shadow-sm flex flex-col justify-between hover:-translate-y-2 transition-transform" whileHover={{ y: -3 }}>
            <div className="flex items-start gap-4">
              <div className="p-3 bg-white/10 rounded-lg border border-gray-100/10 border-l-4 border-indigo-pulse/60">
                <Cpu className="text-clinical-text" size={28} />
              </div>
              <div>
                <h3 className="text-xl font-semibold">AI Talent</h3>
                <p className="mt-2 text-clinical-text">Representative roles we place in the AI sector.</p>
                <ul className="mt-4 space-y-2 text-sm text-clinical-text">
                  <li className="flex items-center gap-2"><CheckCircle className="text-clinical-text" size={14} /> Data Scientist</li>
                  <li className="flex items-center gap-2"><CheckCircle className="text-clinical-text" size={14} /> AI Engineer</li>
                  <li className="flex items-center gap-2"><CheckCircle className="text-clinical-text" size={14} /> Forward Deployed Eng.</li>
                </ul>
              </div>
            </div>
            <div className="mt-6">
              <a href="https://wa.me/919663495817?text=Hi%20NxtWaves%2C%20I%27m%20interested%20in%20hiring%20AI%20Talent" target="_blank" rel="noopener noreferrer" aria-label="Hire AI Talent on WhatsApp" className="w-full inline-flex items-center justify-center gap-2 bg-clinical-text text-white px-4 py-2 rounded-custom-24 text-sm font-medium shadow-sm">Hire AI Talent</a>
            </div>
          </motion.article>

          {/* Pillar 2 — Healthcare */}
          <motion.article className="bg-white/70 backdrop-blur-sm border border-gray-100/20 p-6 rounded-custom-24 shadow-sm flex flex-col justify-between hover:-translate-y-2 transition-transform" whileHover={{ y: -3 }}>
            <div className="flex items-start gap-4">
              <div className="p-3 bg-white/10 rounded-lg border border-gray-100/10 border-l-4 border-teal-600/60">
                <Stethoscope className="text-clinical-text" size={28} />
              </div>
              <div>
                <h3 className="text-xl font-semibold">Healthcare</h3>
                <p className="mt-2 text-clinical-text">Representative clinical roles we source and verify.</p>
                <ul className="mt-4 space-y-2 text-sm text-clinical-text">
                  <li className="flex items-center gap-2"><CheckCircle className="text-clinical-text" size={14} /> Anesthesiologist</li>
                  <li className="flex items-center gap-2"><CheckCircle className="text-clinical-text" size={14} /> Specialized Surgeon</li>
                  <li className="flex items-center gap-2"><CheckCircle className="text-clinical-text" size={14} /> Nurse Practitioner</li>
                </ul>
              </div>
            </div>
            <div className="mt-6">
              <a href="https://wa.me/919663495817?text=Hi%20NxtWaves%2C%20I%27m%20interested%20in%20hiring%20Healthcare%20Talent" target="_blank" rel="noopener noreferrer" aria-label="Hire Healthcare Talent on WhatsApp" className="w-full inline-flex items-center justify-center gap-2 bg-clinical-text text-white px-4 py-2 rounded-custom-24 text-sm font-medium shadow-sm">Hire Healthcare Talent</a>
            </div>
          </motion.article>

          {/* Pillar 3 — Physical Engineering */}
          <motion.article className="bg-white/70 backdrop-blur-sm border border-gray-100/20 p-6 rounded-custom-24 shadow-sm flex flex-col justify-between hover:-translate-y-2 transition-transform" whileHover={{ y: -3 }}>
            <div className="flex items-start gap-4">
              <div className="p-3 bg-white/10 rounded-lg border border-gray-100/10 border-l-4 border-slate-600/60">
                <HardDrive className="text-clinical-text" size={28} />
              </div>
              <div>
                <h3 className="text-xl font-semibold">Physical Engineering</h3>
                <p className="mt-2 text-clinical-text">Representative engineering roles we staff for industrial programs.</p>
                <ul className="mt-4 space-y-2 text-sm text-clinical-text">
                  <li className="flex items-center gap-2"><CheckCircle className="text-clinical-text" size={14} /> Aerospace Engineer</li>
                  <li className="flex items-center gap-2"><CheckCircle className="text-clinical-text" size={14} /> Electrical Power Eng.</li>
                  <li className="flex items-center gap-2"><CheckCircle className="text-clinical-text" size={14} /> Biomedical Engineer</li>
                </ul>
              </div>
            </div>
            <div className="mt-6">
              <a href="https://wa.me/919663495817?text=Hi%20NxtWaves%2C%20I%27m%20interested%20in%20hiring%20Engineering%20Talent" target="_blank" rel="noopener noreferrer" aria-label="Hire Engineering Talent on WhatsApp" className="w-full inline-flex items-center justify-center gap-2 bg-clinical-text text-white px-4 py-2 rounded-custom-24 text-sm font-medium shadow-sm">Hire Engineering Talent</a>
            </div>
          </motion.article>
        </section>

        {/* Precision Fit + Revenue Model */}
        <section className="mt-12 grid grid-cols-1 gap-6 items-start">

        </section>

        {/* Footer */}
        <footer className="mt-12 text-sm text-clinical-text border-t border-gray-100 py-6 flex flex-col md:flex-row justify-between items-center gap-3">
          <div className="flex items-center gap-6 text-sm text-clinical-text">
            <div>GSTIN: <strong>29CISPS6890N1ZR</strong></div>

            <div className="inline-flex items-center gap-2 text-sm text-clinical-text"><CheckCircle className="text-green-500" size={14} /> GST Registered</div>
            <div className="inline-flex items-center gap-2 text-sm text-clinical-text"><CheckCircle className="text-green-500" size={14} /> MSME Verified</div>
          </div>
          <div className="text-clinical-text">DPDP Act 2026 Compliant</div>
          <div className="text-xs text-clinical-text">© {new Date().getFullYear()} NxtWaves.in — Recruiter-paid · Privacy-first</div>
        </footer>
      </main>

    </div>
  );
}
