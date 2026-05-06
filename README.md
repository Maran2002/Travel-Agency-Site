# TamilSoul — Discover the Soul of Tamil Nadu

A premium travel landing page for Tamil Nadu, India — built with cinematic scroll animations, interactive cultural exploration, and a rich modern design system.

---

## About

TamilSoul is a fully animated, single-page travel website showcasing Tamil Nadu's temples, hills, coastline, heritage, and cuisine. It is designed to feel like a luxury travel brand — with GSAP-powered horizontal scroll, Framer Motion tab transitions, infinite marquee testimonials, and a multi-step booking guide.

**Live sections:**
- Hero with GSAP scroll-triggered text reveal
- Destinations — GSAP horizontal scroll (desktop) / vertical grid (mobile)
- Experiences — 5-tab cultural explorer with animated pill navigation
- Tour Packages — 4 curated Tamil Nadu tours
- Moments — masonry photo gallery with staggered entrance
- Captured Memories — traveler photo reviews
- Testimonials — GSAP infinite dual-row marquee
- Booking Guide — 4-step interactive booking flow with dynamic image panel
- CTA — parallax Ken Burns call-to-action

---
## Live Link

**Vercel**
- [Live Link](https://travel-agency-site-sepia.vercel.app/)

---

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | [Next.js 16.2](https://nextjs.org) — App Router |
| UI | [React 19](https://react.dev) |
| Styling | [Tailwind CSS v4](https://tailwindcss.com) |
| Scroll Animations | [GSAP 3](https://gsap.com) + ScrollTrigger |
| UI Animations | [Framer Motion 12](https://www.framer.com/motion/) |
| Language | TypeScript 5 |
| Fonts | Playfair Display (headings), Inter (body) via `next/font/google` |
| Images | [picsum.photos](https://picsum.photos) — seed-based deterministic placeholders |

---

## Design Tokens

| Token | Value | Usage |
|---|---|---|
| Brand Saffron | `#E8703A` | Primary CTA, accents |
| Maroon | `#8B1A1A` | Deep accent |
| Warm Dark | `#1A1209` | Footer background |
| Ivory Cream | `#FAF5EC` | Section backgrounds |

---

## Project Structure

```
app/
├── components/
│   ├── Navbar.tsx
│   ├── HeroSection.tsx
│   ├── DestinationsSection.tsx
│   ├── ExperiencesSection.tsx
│   ├── ToursSection.tsx
│   ├── MomentsSection.tsx
│   ├── CaptureSection.tsx
│   ├── TestimonialsSection.tsx
│   ├── BookingSection.tsx
│   ├── CTASection.tsx
│   └── Footer.tsx
├── globals.css         # Design tokens (@theme)
├── layout.tsx          # Root layout + fonts
└── page.tsx            # Page composition
```

---

## How to Run

**Prerequisites:** Node.js 18+

```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

```bash
# Production build
npm run build
npm start

# Lint
npm run lint
```

---

## Author

**Elamaran A**
- Email: elamaranvikki@gmail.com

---


