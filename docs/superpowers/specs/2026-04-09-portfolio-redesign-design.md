# Portfolio Redesign — Full Rebuild

## Overview

Complete rebuild of Alex Chen's developer portfolio from Gatsby 5 to Next.js 16 with Framer Motion. Dark, cinematic aesthetic with full-page scroll-snapped sections and subtle parallax effects. Design inspired by the Vercel design system from [VoltAgent/awesome-design-md](https://github.com/VoltAgent/awesome-design-md), adapted to a dark theme.

## Stack

- **Framework**: Next.js 16 (App Router, static export for GitHub Pages)
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion (`useScroll`, `useTransform`, `whileInView`)
- **Fonts**: Inter (Latin) + Noto Sans TC (CJK) via Google Fonts, JetBrains Mono for tech labels
- **Content**: TypeScript data files (no markdown/GraphQL)
- **Deployment**: Static export → GitHub Pages

## Design Tokens

### Colors

| Token | Value | Usage |
|-------|-------|-------|
| Background | `#000000` / `#0a0a0a` | Page background, alternating sections |
| Surface | `rgba(255,255,255,0.03)` | Card backgrounds |
| Border | `rgba(255,255,255,0.06)` | Section dividers, card borders |
| Border Hover | `rgba(255,255,255,0.12)` | Card hover state |
| Text Primary | `#ffffff` | Headings, names |
| Text Secondary | `rgba(255,255,255,0.5)` | Body text, descriptions |
| Text Tertiary | `rgba(255,255,255,0.3)` | Labels, dates, muted text |
| Text Muted | `rgba(255,255,255,0.15)` | Scroll indicator, copyright |
| Accent Blue | `#0a72ef` | Frontend skills category, timeline accent, hero glow |
| Accent Pink | `#de1d8d` | Backend skills category |
| Accent Red | `#ff5b4f` | Cloud/Tools skills category |
| Accent Pill BG | `rgba(10,114,239,0.1)` | Skill badge backgrounds |
| Accent Pill Text | `rgba(10,114,239,0.8)` | Skill badge text |
| CTA Primary BG | `#ffffff` | Primary button background |
| CTA Primary Text | `#000000` | Primary button text |
| CTA Ghost Border | `rgba(255,255,255,0.15)` | Ghost button border |

### Typography

| Role | Font | Size | Weight | Letter Spacing |
|------|------|------|--------|----------------|
| Display (hero name) | Inter | 56px | 700 | -3px |
| Section heading | Inter | 28-32px | 600 | -1.5px |
| Section label | Inter | 11px | 500 | 3px, uppercase |
| Body | Inter | 15px | 400 | normal |
| Card title | Inter | 16-17px | 600 | normal |
| Skill pill | Inter | 13px | 400 | normal |
| Caption/date | Inter | 12px | 400 | normal |
| Tech label | JetBrains Mono | 12px | 500 | 1px, uppercase |

### Spacing

- Section padding: 48px horizontal on desktop, 20px on mobile
- Card gap: 20px
- Pill gap: 6-8px
- Section vertical padding: full viewport (100vh per section)

### Border Radius

- Cards: 12px
- Buttons: 8px
- Skill pills: 9999px (full pill)
- Avatar: 50% (circle)

## Page Structure

### Main Page (Single Page, 5 Sections)

All sections are scroll-snapped to fill the viewport.

#### 1. Hero

- Centered layout
- Label: "Front-end Engineer" (uppercase, tertiary text)
- Name: "Alex Chen" (56px display)
- Tagline: one-liner about what you do (secondary text)
- One CTA: "View Projects" (primary white button, scrolls to Projects section)
- Background: subtle radial gradient glow (Accent Blue at ~8% opacity) at top center
- Scroll indicator: "Scroll to explore ↓" with gentle bounce animation
- Blue glow pulses gently (CSS keyframe, 8s loop)
- No entrance animation on first load — content visible immediately

#### 2. About

- Split layout: avatar (120px circle) on left, text on right
- Label: "ABOUT ME"
- Heading: short punchy tagline (e.g., "Engineer who designs. Designer who codes.")
- Body: concise bio rewritten from existing content, keeping XREX and key facts
- Content derived from existing `aboutMe.tsx` bio, rewritten for impact

#### 3. Skills

- Label: "TECH STACK"
- Heading: "Tools I work with"
- Three category columns, each with its own accent color:
  - **Frontend** (Blue): React, React Native, TypeScript, Next.js, Angular, Vue
  - **Backend** (Pink): Nest.js, Node.js, .NET Core, MongoDB
  - **Cloud & Tools** (Red): Azure, Firebase, Figma
- Skills displayed as pill badges
- Skills pulled from existing project markdown frontmatter

#### 4. Projects

- Label: "SELECTED WORK"
- Heading: "Projects"
- 3-column grid on desktop, 1 column on mobile
- Each card: gradient-tinted thumbnail area, project name, skill pills
- Cards link to `/work/[slug]` detail pages
- Hover: border brightens, subtle scale up

Projects from existing content:
1. Furmap (React Native, NestJS, Azure, MongoDB)
2. Taischool (Angular, .NET Core, PJND Design)
3. Elite Incubator (Vue, Angular, Ionic, Firebase, Cloud Functions)
4. Woof/Petio (React Native, Firebase)
5. KTB PIB (Angular, UI/UX, Ionic)
6. 2018 eslite XMAS Card (React, Fabricjs)

#### 5. Experience

- Label: "CAREER"
- Heading: "Experience"
- Vertical timeline with gradient accent bars on the left
- Each entry: dates, role title, company + one-line description
- Placeholder entries that Alex will replace with real data:
  - "2022 — Present / Front-end Engineer / XREX"
  - "2020 — 2022 / Previous Role / Company"
  - "2019 — 2020 / Junior Developer / Company"

### Project Detail Pages (`/work/[slug]`)

- Dark background, same aesthetic
- Sticky back button top-left
- Header: title (40px), skill pills, optional external link button
- Content: max-width 800px centered
  - Intro paragraph
  - "What I did" — responsibilities list
  - "Tech used" — brief explanations
  - Screenshots in responsive grid with rounded corners and shadow-border
- No parallax on detail pages — clean reading layout
- Content migrated from existing markdown files into TypeScript data objects

## Animation Spec

### Scroll Snap

- Container: `scroll-snap-type: y mandatory`
- Each section: `scroll-snap-align: start`, `min-height: 100vh`

### Parallax

- Implemented via Framer Motion `useScroll` + `useTransform`
- Background elements shift at 0.3-0.5x scroll speed relative to content
- Hero radial glow shifts position as user scrolls past

### Scroll-Triggered Reveals (`whileInView`)

| Element | Animation | Duration | Delay |
|---------|-----------|----------|-------|
| Section label | Fade in + slide up 20px | 0.5s | 0ms |
| Section heading | Fade in + slide up 20px | 0.5s | 100ms |
| Body text | Fade in | 0.5s | 200ms |
| Cards / pills | Stagger fade in | 0.5s each | 80ms between items |
| Timeline entries | Fade in + slide from alternating sides | 0.6s | 100ms between |

- All animations: `ease-out` easing
- `whileInView` with `once: true` (animate only on first appearance)
- `viewport: { amount: 0.3 }` (trigger when 30% visible)

### Hero-Specific

- No entrance animation — name and tagline visible immediately
- Blue radial glow: CSS `@keyframes` pulse, 8s loop, subtle opacity shift (0.06-0.10)
- Scroll indicator: CSS bounce animation, 2s loop

### Card Hover

- Scale: `1.02` on hover
- Border: brightens from `0.06` to `0.12` opacity
- Transition: 0.2s ease

## Responsive Behavior

| Breakpoint | Key Changes |
|-----------|-------------|
| Desktop (>1024px) | Full layout as designed, 3-column project grid |
| Tablet (768-1024px) | 2-column project grid, reduce heading sizes |
| Mobile (<768px) | Single column, stacked about section (avatar above text), reduced padding, hamburger not needed (single page) |

## Content Strategy

- All project data stored in `src/data/projects.ts` as typed objects
- Experience data in `src/data/experience.ts` with placeholder entries
- Skills in `src/data/skills.ts` organized by category
- About text as a simple string constant
- No CMS, no markdown, no GraphQL — just TypeScript files

## What Gets Deleted

- All Gatsby files: `gatsby-config.js`, `gatsby-node.js`, `gatsby-browser.js`
- All markdown files in `src/markdowns/`
- All SASS files in `src/sass/`
- All current components in `src/components/`
- All current pages in `src/pages/`
- `package.json` dependencies reset for Next.js
- Avatar image from `src/images/` moved to `public/`
- Project thumbnails remain as external Cloudinary URLs
- Project screenshot images from `src/markdowns/*/images/` moved to `public/projects/`

## Deployment

- `next.config.ts`: `output: 'export'` for static generation
- Output to `out/` directory
- GitHub Pages serves from the repo (may need `.nojekyll` file and `basePath` config if using project pages)
