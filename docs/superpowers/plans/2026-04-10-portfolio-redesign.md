# Portfolio Redesign Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Rebuild the portfolio site from Gatsby to Next.js 16 with a dark, cinematic design featuring parallax scroll effects, full-viewport sections, and Framer Motion animations.

**Architecture:** Next.js 16 App Router with static export. Tailwind CSS v4 for styling. Framer Motion for scroll-triggered reveals and parallax. Content stored in typed TypeScript data files. Static assets served from `public/`. Deploys to GitHub Pages as a user site (no basePath).

**Tech Stack:** Next.js 16.2.3, React 19, TypeScript, Tailwind CSS v4, Framer Motion 12, next/font (Google Fonts: Inter, Noto Sans TC, JetBrains Mono)

**Spec:** `docs/superpowers/specs/2026-04-09-portfolio-redesign-design.md`

---

## File Structure

```
/
├── public/
│   ├── avatar.jpeg                    # Profile photo
│   ├── icon.png                       # Favicon
│   ├── .nojekyll                      # Tell GH Pages not to process with Jekyll
│   └── projects/                      # Project screenshots
│       ├── elite-incubator/           # 13 images
│       ├── eslite/                    # 6 images
│       ├── furmap/                    # 6 images
│       ├── ktb-pib/                   # 11 images
│       ├── petio/                     # 5 images
│       └── taischool/                 # 9 images
├── src/
│   ├── app/
│   │   ├── layout.tsx                 # Root layout, fonts, metadata
│   │   ├── page.tsx                   # Main single page (all sections)
│   │   ├── globals.css                # Tailwind + theme tokens + keyframes
│   │   ├── not-found.tsx              # 404 page
│   │   └── work/[slug]/page.tsx       # Project detail page
│   ├── components/
│   │   ├── scroll-reveal.tsx          # Reusable fade-in wrapper (Framer Motion)
│   │   ├── section-label.tsx          # Uppercase section label
│   │   ├── hero.tsx                   # Hero section
│   │   ├── about.tsx                  # About section
│   │   ├── skills.tsx                 # Skills section with categories
│   │   ├── project-card.tsx           # Single project card
│   │   ├── projects.tsx               # Projects grid section
│   │   └── experience.tsx             # Experience timeline
│   └── data/
│       ├── projects.ts                # Project data (title, slug, skills, body, images)
│       ├── skills.ts                  # Skills grouped by category
│       └── experience.ts              # Experience timeline entries
├── next.config.ts                     # Static export config
├── postcss.config.mjs                 # Tailwind v4 PostCSS plugin
├── tsconfig.json                      # TypeScript config
├── package.json
└── .gitignore
```

---

## Task 1: Clean Up Gatsby and Install Next.js

**Files:**
- Delete: All Gatsby source files and config
- Create: `package.json`, `next.config.ts`, `tsconfig.json`, `.gitignore`, `postcss.config.mjs`

- [ ] **Step 1: Stop any running dev servers**

```bash
lsof -ti:8000,3000 2>/dev/null | xargs kill -9 2>/dev/null || true
```

- [ ] **Step 2: Delete Gatsby files, old SCSS, old components, and old pages**

Run each command from the repo root:

```bash
cd /Users/chenbaoheng/Desktop/daskinnyman.github.io
rm -rf node_modules package-lock.json .cache public
rm -f gatsby-browser.js gatsby-config.js gatsby-node.js
rm -rf src/components src/pages src/sass src/typeDefines
```

Do NOT delete: `src/markdowns/` (we still need the images), `src/images/` (avatar), `docs/`, `.git/`, `README.md`.

- [ ] **Step 3: Write new package.json**

Create `package.json`:

```json
{
  "name": "portfolio",
  "version": "2.0.0",
  "private": true,
  "author": "Alex Chen",
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "next lint"
  },
  "dependencies": {
    "next": "16.2.3",
    "react": "19.0.0",
    "react-dom": "19.0.0",
    "framer-motion": "12.38.0"
  },
  "devDependencies": {
    "@types/node": "20.11.0",
    "@types/react": "19.0.0",
    "@types/react-dom": "19.0.0",
    "tailwindcss": "4.2.2",
    "@tailwindcss/postcss": "4.2.2",
    "typescript": "5.4.0"
  }
}
```

- [ ] **Step 4: Write tsconfig.json**

Create `tsconfig.json`:

```json
{
  "compilerOptions": {
    "target": "ES2017",
    "lib": ["dom", "dom.iterable", "esnext"],
    "allowJs": true,
    "skipLibCheck": true,
    "strict": true,
    "noEmit": true,
    "esModuleInterop": true,
    "module": "esnext",
    "moduleResolution": "bundler",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "jsx": "preserve",
    "incremental": true,
    "plugins": [{ "name": "next" }],
    "paths": {
      "@/*": ["./src/*"]
    }
  },
  "include": ["next-env.d.ts", "**/*.ts", "**/*.tsx", ".next/types/**/*.ts"],
  "exclude": ["node_modules"]
}
```

- [ ] **Step 5: Write next.config.ts**

Create `next.config.ts`:

```typescript
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
};

export default nextConfig;
```

Note: `unoptimized: true` is required for static export. `trailingSlash: true` ensures GitHub Pages serves `/work/furmap/index.html` correctly.

- [ ] **Step 6: Write postcss.config.mjs**

Create `postcss.config.mjs`:

```js
const config = {
  plugins: {
    "@tailwindcss/postcss": {},
  },
};

export default config;
```

- [ ] **Step 7: Write .gitignore**

Create `.gitignore`:

```
# dependencies
/node_modules
/.pnp
.pnp.*

# testing
/coverage

# next.js
/.next/
/out/

# production
/build

# misc
.DS_Store
*.pem

# debug
npm-debug.log*
yarn-debug.log*
yarn-error.log*

# env
.env*.local

# typescript
*.tsbuildinfo
next-env.d.ts

# superpowers
.superpowers/
```

- [ ] **Step 8: Install dependencies**

```bash
npm install 2>&1 | tail -20
```

Expected: "added N packages" with no fatal errors. Warnings are fine.

- [ ] **Step 9: Commit**

```bash
git add -A
git commit -m "chore: remove Gatsby setup, scaffold Next.js 16 + Tailwind v4"
```

---

## Task 2: Set Up Global Styles and Theme Tokens

**Files:**
- Create: `src/app/globals.css`

- [ ] **Step 1: Create src/app/globals.css**

Create `src/app/globals.css`:

```css
@import "tailwindcss";

@theme {
  --color-bg: #000000;
  --color-bg-alt: #0a0a0a;
  --color-bg-subtle: #080808;

  --color-surface: rgba(255, 255, 255, 0.03);
  --color-border: rgba(255, 255, 255, 0.06);
  --color-border-hover: rgba(255, 255, 255, 0.12);

  --color-text-primary: #ffffff;
  --color-text-secondary: rgba(255, 255, 255, 0.5);
  --color-text-tertiary: rgba(255, 255, 255, 0.3);
  --color-text-muted: rgba(255, 255, 255, 0.15);

  --color-accent-blue: #0a72ef;
  --color-accent-pink: #de1d8d;
  --color-accent-red: #ff5b4f;

  --font-sans: var(--font-inter), var(--font-noto-sans-tc), system-ui, sans-serif;
  --font-mono: var(--font-jetbrains-mono), ui-monospace, monospace;
}

html,
body {
  background-color: #000000;
  color: #ffffff;
  font-family: var(--font-sans);
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  scroll-behavior: smooth;
}

::selection {
  background-color: rgba(10, 114, 239, 0.3);
  color: #ffffff;
}

/* Hero glow pulse animation */
@keyframes glow-pulse {
  0%, 100% {
    opacity: 0.6;
    transform: scale(1);
  }
  50% {
    opacity: 1;
    transform: scale(1.05);
  }
}

.hero-glow {
  animation: glow-pulse 8s ease-in-out infinite;
}

/* Scroll indicator bounce */
@keyframes scroll-bounce {
  0%, 100% {
    transform: translateY(0);
    opacity: 0.3;
  }
  50% {
    transform: translateY(6px);
    opacity: 0.6;
  }
}

.scroll-indicator {
  animation: scroll-bounce 2s ease-in-out infinite;
}

/* Ensure sections fill viewport on desktop */
.section-full {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

@media (max-width: 768px) {
  .section-full {
    min-height: auto;
    padding-top: 80px;
    padding-bottom: 80px;
  }
}
```

- [ ] **Step 2: Commit**

```bash
git add src/app/globals.css
git commit -m "feat: add Tailwind theme tokens and global styles"
```

---

## Task 3: Migrate Static Assets

**Files:**
- Create: `public/avatar.jpeg`, `public/icon.png`, `public/.nojekyll`
- Create: `public/projects/{slug}/` directories with images from `src/markdowns/{slug}/images/`

- [ ] **Step 1: Create public directory structure and copy avatar + icon**

```bash
mkdir -p public/projects
cp src/images/avatar.jpeg public/avatar.jpeg
cp src/images/icon.png public/icon.png
touch public/.nojekyll
```

- [ ] **Step 2: Copy project images to public/projects/**

```bash
mkdir -p public/projects/furmap
cp src/markdowns/furmap/images/* public/projects/furmap/

mkdir -p public/projects/taischool
cp src/markdowns/taischool/images/* public/projects/taischool/

mkdir -p public/projects/elite-incubator
cp src/markdowns/elite-incubator/images/* public/projects/elite-incubator/

mkdir -p public/projects/petio
cp src/markdowns/petio/images/* public/projects/petio/

mkdir -p public/projects/ktb-pib
cp src/markdowns/ktb-pib/images/* public/projects/ktb-pib/

mkdir -p public/projects/eslite
cp src/markdowns/eslite/images/* public/projects/eslite/
```

- [ ] **Step 3: Verify files copied**

```bash
ls public/projects/furmap/ | wc -l
ls public/projects/taischool/ | wc -l
ls public/projects/elite-incubator/ | wc -l
```

Expected counts: furmap=6, taischool=9, elite-incubator=13.

- [ ] **Step 4: Delete old markdown source now that images are copied**

```bash
rm -rf src/markdowns src/images
```

- [ ] **Step 5: Commit**

```bash
git add public/
git add -u src/
git commit -m "chore: migrate assets to public/, remove old markdowns"
```

---

## Task 4: Create Data Layer - Skills

**Files:**
- Create: `src/data/skills.ts`

- [ ] **Step 1: Create src/data/skills.ts**

Create `src/data/skills.ts`:

```typescript
export type SkillCategory = {
  name: string;
  accentColor: "blue" | "pink" | "red";
  skills: string[];
};

export const skillCategories: SkillCategory[] = [
  {
    name: "Frontend",
    accentColor: "blue",
    skills: [
      "React",
      "React Native",
      "TypeScript",
      "Next.js",
      "Angular",
      "Vue",
      "Ionic",
    ],
  },
  {
    name: "Backend",
    accentColor: "pink",
    skills: ["Nest.js", "Node.js", ".NET Core", "MongoDB"],
  },
  {
    name: "Cloud & Tools",
    accentColor: "red",
    skills: ["Azure", "Firebase", "Figma", "Cloud Functions"],
  },
];
```

- [ ] **Step 2: Commit**

```bash
git add src/data/skills.ts
git commit -m "feat(data): add skills by category"
```

---

## Task 5: Create Data Layer - Experience

**Files:**
- Create: `src/data/experience.ts`

- [ ] **Step 1: Create src/data/experience.ts**

Create `src/data/experience.ts`:

```typescript
export type ExperienceEntry = {
  period: string;
  role: string;
  company: string;
  description: string;
  current?: boolean;
};

// Placeholder entries — replace with real data
export const experience: ExperienceEntry[] = [
  {
    period: "2022 — Present",
    role: "Front-end Engineer",
    company: "XREX",
    description:
      "Building web interfaces and UI/UX for a digital asset platform.",
    current: true,
  },
  {
    period: "2020 — 2022",
    role: "Software Engineer",
    company: "Previous Company",
    description:
      "Full-stack development with React and Node.js on consumer products.",
  },
  {
    period: "2019 — 2020",
    role: "Junior Developer",
    company: "First Company",
    description:
      "Built mobile apps with React Native and delivered client projects.",
  },
];
```

- [ ] **Step 2: Commit**

```bash
git add src/data/experience.ts
git commit -m "feat(data): add experience timeline placeholders"
```

---

## Task 6: Create Data Layer - Projects

**Files:**
- Create: `src/data/projects.ts`

- [ ] **Step 1: Create src/data/projects.ts**

Create `src/data/projects.ts`:

```typescript
export type Project = {
  slug: string;
  name: string;
  order: number;
  skills: string[];
  linkUrl?: string;
  thumb: string;
  thumbGradient: [string, string]; // from, to for background gradient
  intro: string;
  responsibilities: string[];
  techUsed: { name: string; description: string }[];
  screenshots: { src: string; caption: string }[];
};

export const projects: Project[] = [
  {
    slug: "furmap",
    name: "Furmap 毛孩地圖",
    order: 6,
    skills: ["React Native", "Nest.js", "Azure", "MongoDB"],
    linkUrl:
      "https://apps.apple.com/tw/app/%E6%AF%9B%E5%AD%A9%E5%9C%B0%E5%9C%96/id1511108193",
    thumb:
      "https://res.cloudinary.com/daskinnyman/image/upload/v1615386607/Custom_Size_1_duzbnv.png",
    thumbGradient: ["#f59e0b22", "#f59e0b08"],
    intro:
      "Furmap 毛孩地圖是我和幾個大學同學一起利用閒暇之餘開發的寵物資訊整合 App。有鑒於許多寵物相關資訊都散落在臉書的各大寵物社團中，例如：推薦的寵物友善地點、附近的寵物危害事件、寵物走失等。我們希望能夠整合這些資訊減少寵物飼主的負擔，建立一個具備所有資訊的寵物社群。目前已在 Google Play 及 App Store 上架。",
    responsibilities: [
      "從零開始規劃及開發後端及 App 程式，並在後端導入單元測試提高程式碼品質。",
      "使用六角架構將原先存在 controller 中的大量程式碼分別移入 application service 及 domain service 層。",
      "在前端封裝 Axios，並使用 http interceptor 在 request 發送前統一加入後端需要的 header，並統一管理 http response 的錯誤處理。",
    ],
    techUsed: [
      {
        name: "React Native",
        description:
          "作為跨平台 App 開發框架，搭配 Redux 及 React Hook 來建構程式碼。",
      },
      {
        name: "Nest.js",
        description:
          "用於開發後端服務搭配 Passport.js 建立 Sign in with Facebook/Apple 的客製化認證。串接 Firebase Cloud Message 提供後端發送推播的能力，使用 TypeScript 及 Jest 做單元測試，搭配六角架構進行程式架構優化。",
      },
      {
        name: "Azure",
        description:
          "利用 AKS、Azure Cache for Redis 等服務建立可以 Auto scale up/scale out 的後端服務。",
      },
    ],
    screenshots: [
      { src: "/projects/furmap/map.png", caption: "發生的寵物危害件及寵物友善地點會出現在地圖上" },
      { src: "/projects/furmap/nearby-place.png", caption: "寵物友善地點列表" },
      { src: "/projects/furmap/place-detail.png", caption: "寵物友善地點細節" },
      { src: "/projects/furmap/place-photos.png", caption: "寵物友善地點的照片" },
      { src: "/projects/furmap/create-event.png", caption: "發布寵物危害件" },
      { src: "/projects/furmap/me.png", caption: "個人檔案" },
    ],
  },
  {
    slug: "taischool",
    name: "翔泰學校",
    order: 5,
    skills: ["Angular", "RWD Design", ".NET Core"],
    linkUrl: "https://taischool.com",
    thumb:
      "https://res.cloudinary.com/daskinnyman/image/upload/v1584212257/cover_t0fkw8.png",
    thumbGradient: ["#0a72ef22", "#0a72ef08"],
    intro:
      "在學生時期，我常跟朋友一起接外包專案，除了磨練自己的技術以外，也可以接觸到業界的作業流程。翔泰學校是一個以投資理財為主的影音教學網站，在這個專案中我和 UI/UX 設計師一起討論並依照設計規範開發前端網站，也利用 Swagger 作為 API 文件，同時嘗試使用 .NET Core 撰寫 OTP 服務。",
    responsibilities: [
      "使用 Angular 建立網站前端，依照設計稿開發元件及畫面，並串接金流。",
      "使用 .NET 撰寫 OTP (One Time Password) 服務，並提供前端 API 呼叫。",
      "提供使用者網站在手機、平板、iPad Pro 的解析度下能直覺操作的 RWD 設計。",
    ],
    techUsed: [
      {
        name: "Angular",
        description:
          "使用 LazyLoad Module 建立前端畫面及元件，使用 RxJS 串接後端 API 及金流，利用 Router Guard 在前端進行權限驗證並阻擋沒有權限的使用者進入頁面。",
      },
      {
        name: ".NET Core",
        description: "建立 OTP (One Time Password) 服務 API。",
      },
    ],
    screenshots: [
      { src: "/projects/taischool/home.png", caption: "首頁" },
      { src: "/projects/taischool/allvideo.png", caption: "影片列表" },
      { src: "/projects/taischool/notifications.png", caption: "個人通知管理" },
      { src: "/projects/taischool/videopage.png", caption: "影片頁面" },
      { src: "/projects/taischool/homemobile.png", caption: "手機版首頁" },
      { src: "/projects/taischool/menumobile.png", caption: "手機版選單" },
      { src: "/projects/taischool/allvideomobile.png", caption: "手機版影片列表" },
      { src: "/projects/taischool/videopagemobile.png", caption: "手機版影片頁面" },
    ],
  },
  {
    slug: "elite-incubator",
    name: "菁英人才孵化器",
    order: 4,
    skills: ["Vue", "Angular", "Ionic", "Firebase", "Cloud Functions"],
    thumb:
      "https://res.cloudinary.com/daskinnyman/image/upload/c_scale,w_376/v1540028311/app-login_gxgypt.png",
    thumbGradient: ["#10b98122", "#10b98108"],
    intro:
      "在實習期間，我接受實習計畫主管的委託，和同事一起腦力激盪出一個可以提供實習生們紀錄實習生活、提高實習生參與活動意願的 Web App - 菁英人才孵化器。這個 Web App 有兩次迭代：第一版使用 Vue.js 搭配 Firebase Realtime Database 開發，第二版改用 Angular 搭配 Ionic framework 及 Cloud Firestore。",
    responsibilities: [
      "使用 Angular 及 Vue 建立 Mobile Web App，及管理者介面。",
      "將匯入實習生資料的程式包裝成 Cloud Functions。",
      "設計 Mobile Web App 及管理者介面 UI/UX。",
    ],
    techUsed: [
      {
        name: "Vue 2",
        description: "作為第一版的前端開發框架，利用 Vuex 做全局狀態管理。",
      },
      {
        name: "Angular",
        description:
          "搭配 Ionic framework 及 NG-Zorro 加快網站開發速度，使用 Router Guard 在前端進行權限驗證。",
      },
      {
        name: "Firebase",
        description:
          "使用 Authentication 作為登入認證服務簡化開發流程，利用 Realtime Database / Cloud Firestore 作為資料庫，並建立 Cloud Functions 將批次上傳資料的工作包裝為 API。",
      },
    ],
    screenshots: [
      { src: "/projects/elite-incubator/app-login.png", caption: "登入畫面 (v1)" },
      { src: "/projects/elite-incubator/user-ui.png", caption: "首頁 (v1)" },
      { src: "/projects/elite-incubator/skill.png", caption: "使用者技能畫面 (v1)" },
      { src: "/projects/elite-incubator/leave-ui.png", caption: "請假申請 (v1)" },
      { src: "/projects/elite-incubator/admin-ui.png", caption: "管理者介面 (v1)" },
      { src: "/projects/elite-incubator/new-user-ui.PNG", caption: "首頁 (v2)" },
      { src: "/projects/elite-incubator/newforget.png", caption: "補報班申請 (v2)" },
      { src: "/projects/elite-incubator/newpersonal.PNG", caption: "個人頁面 (v2)" },
      { src: "/projects/elite-incubator/newpostdetail.PNG", caption: "發文內容 (v2)" },
    ],
  },
  {
    slug: "Woof",
    name: "Woof",
    order: 3,
    skills: ["React Native", "Firebase"],
    thumb:
      "https://res.cloudinary.com/daskinnyman/image/upload/v1540047389/woof.png",
    thumbGradient: ["#f97316aa", "#f9731622"],
    intro:
      "在學期間與碩士班實驗室同學參加全國移動應用創新競賽獲得佳作的作品，是一款可以利用寵物來交友的社交軟體。除了社交以外也可以藉由紀錄與寵物散步的時間距離做排行，提供地圖功能讓使用者查看附近誰正在與寵物散步，掃描 QR Code 加好友並聊天。",
    responsibilities: [
      "使用 React Native 進行 App 開發，並使用 Firebase Cloud Firestore 撰寫相關資料撈取邏輯及規劃資料欄位。",
      "使用 Scrum 管理專案分工進度，與同學們一起規劃 App 的 User Story、估算 effort point。",
    ],
    techUsed: [
      {
        name: "React Native",
        description:
          "作為跨平台 App 開發框架，搭配 Redux 及 React Hook 來建構程式碼。",
      },
      {
        name: "Firebase",
        description:
          "使用 Cloud Firestore 作為主要資料庫。利用 Realtime Database 的資料監聽功能實作即時收發打招呼訊息的功能。",
      },
    ],
    screenshots: [
      { src: "/projects/petio/app-ui.png", caption: "App 登入畫面" },
      { src: "/projects/petio/chat.png", caption: "聊天功能" },
      { src: "/projects/petio/score.png", caption: "溜寵排行榜" },
      { src: "/projects/petio/map.png", caption: "顯示附近的使用者" },
      { src: "/projects/petio/woof!.png", caption: "收到附近使用者的打招呼訊息" },
    ],
  },
  {
    slug: "ktbPib",
    name: "KTB PIB",
    order: 2,
    skills: ["Angular", "UI/UX", "Ionic"],
    linkUrl:
      "https://apps.apple.com/tw/app/%E4%BA%AC%E5%9F%8E%E8%A1%8C%E5%8B%95%E9%8A%80%E8%A1%8C/id1152332043",
    thumb: "https://customer.ktb.com.tw/new/pic/00/00/01/91-fc1fe6503d4b4266.jpg",
    thumbGradient: ["#7c3aed22", "#7c3aed08"],
    intro:
      "在碩士班期間，我參加了台灣微軟的未來生涯實習計畫，被分派到 Microsoft Consulting Service 部門參與銀行專案。身為技術助理，我與專案成員一起開發個人行動網銀及個人網銀的部分功能。由於具備前端開發及 UI/UX 設計能力，被交付優化現行的行動網銀 UI/UX，並建立前端元件使用規範。後期也協助團隊將 Ionic framework live reload 編譯時間從 600 秒降低至 80 秒。",
    responsibilities: [
      "規劃前端元件使用規範，並統一個人行動網銀設計語言。",
      "使用 Angular 開發個人網銀及行動網銀功能，包含前端畫面切版及業務流程程式撰寫與 API 串接。",
      "排除 Ionic framework live reload 速度過慢的問題，將 600 秒的編譯時間降低至 80 秒。",
    ],
    techUsed: [
      {
        name: "Angular",
        description:
          "搭配 Ionic framework 作為前端組件庫，使用 SCSS 進行部分元件的客製化。",
      },
      {
        name: "Sketch",
        description: "匯出設計出的 UI 設計規範給團隊成員參考。",
      },
    ],
    screenshots: [
      { src: "/projects/ktb-pib/oldfxquery.png", caption: "舊版：外幣匯入匯款查詢" },
      { src: "/projects/ktb-pib/oldtwdsavequery.png", caption: "舊版：台幣開立定存查詢註銷" },
      { src: "/projects/ktb-pib/oldfxsave.png", caption: "舊版：外幣定存變更解約" },
      { src: "/projects/ktb-pib/fxquery.png", caption: "新版：外幣匯入匯款查詢" },
      { src: "/projects/ktb-pib/twdsavequery.png", caption: "新版：台幣開立定存查詢註銷" },
      { src: "/projects/ktb-pib/fxsave.png", caption: "新版：外幣定存變更解約" },
      { src: "/projects/ktb-pib/kyc.png", caption: "投資屬性評量表" },
      { src: "/projects/ktb-pib/fundstop.png", caption: "停損/停利提醒設定" },
      { src: "/projects/ktb-pib/fundnet.png", caption: "淨值提醒設定" },
      { src: "/projects/ktb-pib/fundnotifi.png", caption: "基金通知設定" },
    ],
  },
  {
    slug: "eslite",
    name: "2018 eslite XMAS Card",
    order: 1,
    skills: ["React", "Fabric.js"],
    thumb:
      "https://res.cloudinary.com/daskinnyman/image/upload/v1540030512/eslite.png",
    thumbGradient: ["#ef444422", "#ef444408"],
    intro:
      "2018 Eslite XMAS Card 是我在學生時期和同學與誠品書店合作的專案。誠品書店希望讓任何人使用誠品與合作插畫家陳狐狸的素材製作聖誕賀卡，並分享卡片取得書店優惠券。我們建立了一個 DIY 卡片網站，使用者可以藉由拖曳排放素材位置、移動圖層、更換字體或卡片樣式。活動期間網站使用人次達 1.2 萬人。",
    responsibilities: [
      "專案初始化及相關技術調查。",
      "RWD 設計，確認使用者在手機、平板、電腦螢幕大小都能方便自製聖誕賀卡。",
      "使用 React 及 Fabric.js 建立網站。",
    ],
    techUsed: [
      {
        name: "React",
        description: "用於作為網站的前端框架，並整合 Fabric.js。",
      },
      {
        name: "Fabric.js",
        description: "提供卡片製作功能多樣的 HTML Canvas API，並簡化開發時間。",
      },
    ],
    screenshots: [
      { src: "/projects/eslite/app-ui.png", caption: "首頁" },
      { src: "/projects/eslite/DIY.png", caption: "自製卡片畫面" },
      { src: "/projects/eslite/layering.png", caption: "圖層管理及大小縮放" },
      { src: "/projects/eslite/text-panel.png", caption: "文字選擇器" },
      { src: "/projects/eslite/sticker-panel.png", caption: "素材選擇器" },
    ],
  },
];

// Helper for sorted display (newest first)
export const projectsByOrder = [...projects].sort((a, b) => b.order - a.order);

// Helper for slug lookup
export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}
```

- [ ] **Step 2: Commit**

```bash
git add src/data/projects.ts
git commit -m "feat(data): migrate project content to typed data file"
```

---

## Task 7: Create Root Layout with Fonts

**Files:**
- Create: `src/app/layout.tsx`

- [ ] **Step 1: Create src/app/layout.tsx**

Create `src/app/layout.tsx`:

```tsx
import type { Metadata } from "next";
import { Inter, Noto_Sans_TC, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const notoSansTC = Noto_Sans_TC({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-noto-sans-tc",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Alex Chen — Front-end Engineer",
  description:
    "Alex Chen's portfolio. Front-end engineer building polished web experiences with code and design.",
  icons: {
    icon: "/icon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${notoSansTC.variable} ${jetbrainsMono.variable}`}
    >
      <body className="bg-black text-white antialiased">{children}</body>
    </html>
  );
}
```

- [ ] **Step 2: Verify build compiles**

```bash
npm run build 2>&1 | tail -20
```

Expected: Build completes with no errors. It may warn about missing `src/app/page.tsx` — that's next. Create a minimal placeholder first:

```bash
mkdir -p src/app
```

Create a temporary `src/app/page.tsx` so the build succeeds:

```tsx
export default function Home() {
  return <main>Placeholder</main>;
}
```

Then run:

```bash
npm run build 2>&1 | tail -20
```

Expected: `✓ Compiled successfully` and `Exporting (2/2)`.

- [ ] **Step 3: Commit**

```bash
git add src/app/layout.tsx src/app/page.tsx
git commit -m "feat: add root layout with Google fonts and metadata"
```

---

## Task 8: Create ScrollReveal Component

**Files:**
- Create: `src/components/scroll-reveal.tsx`

- [ ] **Step 1: Create src/components/scroll-reveal.tsx**

Create `src/components/scroll-reveal.tsx`:

```tsx
"use client";

import { motion, type Variants } from "framer-motion";
import type { ReactNode } from "react";

type ScrollRevealProps = {
  children: ReactNode;
  delay?: number;
  direction?: "up" | "left" | "right" | "none";
  className?: string;
  amount?: number;
  duration?: number;
};

const variantsByDirection: Record<string, Variants> = {
  up: {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  },
  left: {
    hidden: { opacity: 0, x: -30 },
    visible: { opacity: 1, x: 0 },
  },
  right: {
    hidden: { opacity: 0, x: 30 },
    visible: { opacity: 1, x: 0 },
  },
  none: {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  },
};

export function ScrollReveal({
  children,
  delay = 0,
  direction = "up",
  className,
  amount = 0.3,
  duration = 0.5,
}: ScrollRevealProps) {
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount }}
      variants={variantsByDirection[direction]}
      transition={{ duration, delay, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}
```

- [ ] **Step 2: Commit**

```bash
git add src/components/scroll-reveal.tsx
git commit -m "feat(components): add ScrollReveal wrapper for Framer Motion fade-ins"
```

---

## Task 9: Create SectionLabel Component

**Files:**
- Create: `src/components/section-label.tsx`

- [ ] **Step 1: Create src/components/section-label.tsx**

Create `src/components/section-label.tsx`:

```tsx
type SectionLabelProps = {
  children: React.ReactNode;
};

export function SectionLabel({ children }: SectionLabelProps) {
  return (
    <div className="text-[11px] font-medium uppercase tracking-[0.2em] text-white/30 mb-3">
      {children}
    </div>
  );
}
```

- [ ] **Step 2: Commit**

```bash
git add src/components/section-label.tsx
git commit -m "feat(components): add SectionLabel for uppercase section headers"
```

---

## Task 10: Create Hero Section

**Files:**
- Create: `src/components/hero.tsx`

- [ ] **Step 1: Create src/components/hero.tsx**

Create `src/components/hero.tsx`:

```tsx
"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  // Parallax: glow shifts down as user scrolls past
  const glowY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const contentY = useTransform(scrollYProgress, [0, 1], ["0%", "-20%"]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section
      ref={ref}
      className="section-full relative overflow-hidden bg-black flex items-center justify-center text-center px-6"
    >
      {/* Radial glow background with parallax */}
      <motion.div
        style={{ y: glowY }}
        className="absolute inset-0 pointer-events-none"
      >
        <div
          className="hero-glow absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 60% 50% at 50% 0%, rgba(10,114,239,0.15) 0%, transparent 70%)",
          }}
        />
      </motion.div>

      {/* Content */}
      <motion.div
        style={{ y: contentY, opacity: contentOpacity }}
        className="relative z-10 max-w-3xl"
      >
        <div className="text-[11px] font-medium uppercase tracking-[0.25em] text-white/40 mb-6 font-mono">
          Front-end Engineer
        </div>
        <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold tracking-[-0.04em] leading-[1.05] mb-6">
          Alex Chen
        </h1>
        <p className="text-lg md:text-xl text-white/50 max-w-xl mx-auto leading-relaxed tracking-[-0.01em]">
          Building polished web experiences with code and design. Currently at XREX.
        </p>
        <div className="mt-10">
          <a
            href="#projects"
            className="inline-flex items-center px-6 py-3 bg-white text-black rounded-lg text-sm font-medium hover:bg-white/90 transition-colors"
          >
            View Projects
          </a>
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <div className="scroll-indicator absolute bottom-10 left-1/2 -translate-x-1/2 text-[11px] uppercase tracking-[0.2em] text-white/30">
        Scroll to explore ↓
      </div>
    </section>
  );
}
```

- [ ] **Step 2: Commit**

```bash
git add src/components/hero.tsx
git commit -m "feat(components): add Hero section with parallax glow and scroll indicator"
```

---

## Task 11: Create About Section

**Files:**
- Create: `src/components/about.tsx`

- [ ] **Step 1: Create src/components/about.tsx**

Create `src/components/about.tsx`:

```tsx
"use client";

import Image from "next/image";
import { ScrollReveal } from "./scroll-reveal";
import { SectionLabel } from "./section-label";

export function About() {
  return (
    <section
      id="about"
      className="section-full relative bg-[#0a0a0a] px-6 md:px-12 py-20"
    >
      <div className="max-w-5xl mx-auto w-full">
        <div className="flex flex-col md:flex-row gap-10 md:gap-16 items-center md:items-start">
          {/* Avatar */}
          <ScrollReveal direction="left" className="shrink-0">
            <div className="w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden ring-2 ring-white/10">
              <Image
                src="/avatar.jpeg"
                alt="Alex Chen"
                width={160}
                height={160}
                className="w-full h-full object-cover"
              />
            </div>
          </ScrollReveal>

          {/* Text */}
          <div className="flex-1 text-center md:text-left">
            <ScrollReveal>
              <SectionLabel>About me</SectionLabel>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-[-0.03em] leading-[1.15] mb-6">
                Engineer who designs.
                <br />
                Designer who codes.
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <p className="text-base md:text-lg text-white/50 leading-relaxed max-w-2xl">
                Three years building web and mobile products. Currently a front-end engineer at XREX, where I combine engineering and UI/UX design to build thoughtful, polished experiences. Outside of work, I use side projects to push my craft further.
              </p>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
```

- [ ] **Step 2: Commit**

```bash
git add src/components/about.tsx
git commit -m "feat(components): add About section with avatar and bio"
```

---

## Task 12: Create Skills Section

**Files:**
- Create: `src/components/skills.tsx`

- [ ] **Step 1: Create src/components/skills.tsx**

Create `src/components/skills.tsx`:

```tsx
"use client";

import { skillCategories, type SkillCategory } from "@/data/skills";
import { ScrollReveal } from "./scroll-reveal";
import { SectionLabel } from "./section-label";

const accentColorMap: Record<SkillCategory["accentColor"], string> = {
  blue: "text-[#0a72ef]",
  pink: "text-[#de1d8d]",
  red: "text-[#ff5b4f]",
};

export function Skills() {
  return (
    <section
      id="skills"
      className="section-full relative bg-[#080808] px-6 md:px-12 py-20 border-t border-white/[0.06]"
    >
      <div className="max-w-5xl mx-auto w-full">
        <ScrollReveal>
          <SectionLabel>Tech Stack</SectionLabel>
        </ScrollReveal>
        <ScrollReveal delay={0.1}>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-[-0.03em] mb-12">
            Tools I work with
          </h2>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {skillCategories.map((category, catIdx) => (
            <ScrollReveal key={category.name} delay={0.15 + catIdx * 0.1}>
              <div>
                <div
                  className={`text-xs font-semibold uppercase tracking-[0.15em] mb-4 ${accentColorMap[category.accentColor]}`}
                >
                  {category.name}
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3.5 py-1.5 bg-white/[0.03] border border-white/[0.08] rounded-full text-[13px] text-white/60"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
```

- [ ] **Step 2: Commit**

```bash
git add src/components/skills.tsx
git commit -m "feat(components): add Skills section with categorized pill tags"
```

---

## Task 13: Create ProjectCard and Projects Section

**Files:**
- Create: `src/components/project-card.tsx`, `src/components/projects.tsx`

- [ ] **Step 1: Create src/components/project-card.tsx**

Create `src/components/project-card.tsx`:

```tsx
"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import type { Project } from "@/data/projects";

type ProjectCardProps = {
  project: Project;
};

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <motion.div
      whileHover={{ y: -4 }}
      transition={{ duration: 0.2, ease: "easeOut" }}
    >
      <Link
        href={`/work/${project.slug}`}
        className="group block bg-white/[0.03] border border-white/[0.06] hover:border-white/[0.12] rounded-xl overflow-hidden transition-colors"
      >
        <div
          className="h-48 relative overflow-hidden"
          style={{
            background: `linear-gradient(135deg, ${project.thumbGradient[0]}, ${project.thumbGradient[1]})`,
          }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={project.thumb}
            alt={project.name}
            className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity"
          />
        </div>
        <div className="p-5">
          <h3 className="text-[17px] font-semibold text-white mb-3 tracking-[-0.01em]">
            {project.name}
          </h3>
          <div className="flex flex-wrap gap-1.5">
            {project.skills.map((skill) => (
              <span
                key={skill}
                className="px-2.5 py-1 bg-[#0a72ef]/10 text-[#0a72ef]/80 text-[11px] rounded-full"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
```

Note: We use a plain `<img>` tag instead of Next.js `<Image>` because some thumbnails are from external domains (Cloudinary, customer.ktb.com.tw). Using `<Image>` with static export requires configuring all external domains, which adds friction for a content-editable portfolio.

- [ ] **Step 2: Create src/components/projects.tsx**

Create `src/components/projects.tsx`:

```tsx
"use client";

import { projectsByOrder } from "@/data/projects";
import { ProjectCard } from "./project-card";
import { ScrollReveal } from "./scroll-reveal";
import { SectionLabel } from "./section-label";

export function Projects() {
  return (
    <section
      id="projects"
      className="section-full relative bg-[#0a0a0a] px-6 md:px-12 py-20 border-t border-white/[0.06]"
    >
      <div className="max-w-6xl mx-auto w-full">
        <ScrollReveal>
          <SectionLabel>Selected Work</SectionLabel>
        </ScrollReveal>
        <ScrollReveal delay={0.1}>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-[-0.03em] mb-12">
            Projects
          </h2>
        </ScrollReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {projectsByOrder.map((project, idx) => (
            <ScrollReveal key={project.slug} delay={0.15 + idx * 0.08}>
              <ProjectCard project={project} />
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
```

- [ ] **Step 3: Commit**

```bash
git add src/components/project-card.tsx src/components/projects.tsx
git commit -m "feat(components): add ProjectCard and Projects grid section"
```

---

## Task 14: Create Experience Section

**Files:**
- Create: `src/components/experience.tsx`

- [ ] **Step 1: Create src/components/experience.tsx**

Create `src/components/experience.tsx`:

```tsx
"use client";

import { experience } from "@/data/experience";
import { ScrollReveal } from "./scroll-reveal";
import { SectionLabel } from "./section-label";

export function Experience() {
  return (
    <section
      id="experience"
      className="section-full relative bg-[#080808] px-6 md:px-12 py-20 border-t border-white/[0.06]"
    >
      <div className="max-w-4xl mx-auto w-full">
        <ScrollReveal>
          <SectionLabel>Career</SectionLabel>
        </ScrollReveal>
        <ScrollReveal delay={0.1}>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-[-0.03em] mb-12">
            Experience
          </h2>
        </ScrollReveal>

        <div className="flex flex-col gap-8">
          {experience.map((entry, idx) => (
            <ScrollReveal
              key={`${entry.company}-${entry.period}`}
              delay={0.15 + idx * 0.1}
              direction={idx % 2 === 0 ? "left" : "right"}
            >
              <div className="flex gap-5 items-start">
                <div
                  className="w-[3px] rounded-full shrink-0 self-stretch"
                  style={{
                    background: entry.current
                      ? "linear-gradient(180deg, #0a72ef, rgba(10,114,239,0.1))"
                      : "linear-gradient(180deg, rgba(255,255,255,0.15), rgba(255,255,255,0.03))",
                  }}
                />
                <div>
                  <div className="text-xs text-white/30 mb-1 font-mono uppercase tracking-wider">
                    {entry.period}
                  </div>
                  <div className="text-lg font-semibold text-white mb-1">
                    {entry.role}
                  </div>
                  <div className="text-sm text-white/40">
                    <span className="text-white/60">{entry.company}</span>
                    {" — "}
                    {entry.description}
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
```

- [ ] **Step 2: Commit**

```bash
git add src/components/experience.tsx
git commit -m "feat(components): add Experience timeline with alternating slide directions"
```

---

## Task 15: Assemble Main Page

**Files:**
- Modify: `src/app/page.tsx`

- [ ] **Step 1: Replace src/app/page.tsx with full assembly**

Replace the placeholder `src/app/page.tsx` contents with:

```tsx
import { Hero } from "@/components/hero";
import { About } from "@/components/about";
import { Skills } from "@/components/skills";
import { Projects } from "@/components/projects";
import { Experience } from "@/components/experience";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <footer className="bg-[#0a0a0a] border-t border-white/[0.06] py-10 text-center">
        <div className="text-[11px] text-white/15 tracking-wider">
          © 2026 Alex Chen
        </div>
      </footer>
    </main>
  );
}
```

- [ ] **Step 2: Run dev server and verify visual output**

```bash
npm run dev 2>&1 &
sleep 8
curl -s -o /dev/null -w "%{http_code}" http://localhost:3000/
echo ""
```

Expected: `200`.

- [ ] **Step 3: Stop dev server and run production build**

```bash
lsof -ti:3000 | xargs kill -9 2>/dev/null
npm run build 2>&1 | tail -30
```

Expected: `✓ Compiled successfully`, `✓ Generating static pages`, and `Exporting`. No errors. The `out/` directory should contain `index.html`.

- [ ] **Step 4: Commit**

```bash
git add src/app/page.tsx
git commit -m "feat: assemble main page with all 5 sections"
```

---

## Task 16: Create Project Detail Pages

**Files:**
- Create: `src/app/work/[slug]/page.tsx`

- [ ] **Step 1: Create src/app/work/[slug]/page.tsx**

Create `src/app/work/[slug]/page.tsx`:

```tsx
import Link from "next/link";
import { notFound } from "next/navigation";
import { projects, getProjectBySlug } from "@/data/projects";

// Static export: generate all slugs at build time
export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return { title: "Not Found" };
  return {
    title: `${project.name} — Alex Chen`,
    description: project.intro.slice(0, 160),
  };
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-black text-white">
      {/* Sticky back button */}
      <div className="sticky top-0 z-50 backdrop-blur-md bg-black/70 border-b border-white/[0.06]">
        <div className="max-w-3xl mx-auto px-6 py-4">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm text-white/60 hover:text-white transition-colors"
          >
            <span>←</span>
            <span>Back</span>
          </Link>
        </div>
      </div>

      {/* Header */}
      <div className="max-w-3xl mx-auto px-6 pt-16 pb-12">
        <h1 className="text-4xl md:text-5xl font-bold tracking-[-0.03em] mb-6">
          {project.name}
        </h1>
        <div className="flex flex-wrap gap-2 mb-6">
          {project.skills.map((skill) => (
            <span
              key={skill}
              className="px-3 py-1 bg-[#0a72ef]/10 text-[#0a72ef]/80 text-xs rounded-full"
            >
              {skill}
            </span>
          ))}
        </div>
        {project.linkUrl && (
          <a
            href={project.linkUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-white/[0.06] hover:bg-white/[0.1] border border-white/[0.12] rounded-lg text-sm font-medium transition-colors"
          >
            作品連結
            <span>↗</span>
          </a>
        )}
      </div>

      {/* Content */}
      <div className="max-w-3xl mx-auto px-6 pb-20">
        <p className="text-base md:text-lg text-white/60 leading-relaxed mb-12">
          {project.intro}
        </p>

        <section className="mb-12">
          <h2 className="text-xl font-semibold mb-4 tracking-tight">負責</h2>
          <ol className="list-decimal list-outside ml-5 space-y-3 text-white/60 leading-relaxed">
            {project.responsibilities.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ol>
        </section>

        <section className="mb-12">
          <h2 className="text-xl font-semibold mb-4 tracking-tight">使用技術</h2>
          <div className="space-y-4">
            {project.techUsed.map((tech) => (
              <div
                key={tech.name}
                className="border-l-2 border-white/[0.08] pl-4"
              >
                <div className="text-white font-semibold mb-1">{tech.name}</div>
                <div className="text-white/50 text-sm leading-relaxed">
                  {tech.description}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-6 tracking-tight">作品截圖</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {project.screenshots.map((shot) => (
              <figure
                key={shot.src}
                className="rounded-lg overflow-hidden border border-white/[0.06] bg-white/[0.02]"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={shot.src}
                  alt={shot.caption}
                  className="w-full h-auto"
                />
                <figcaption className="px-4 py-3 text-xs text-white/40">
                  {shot.caption}
                </figcaption>
              </figure>
            ))}
          </div>
        </section>
      </div>

      <footer className="border-t border-white/[0.06] py-10 text-center">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm text-white/60 hover:text-white transition-colors"
        >
          <span>←</span>
          <span>Back to portfolio</span>
        </Link>
      </footer>
    </main>
  );
}
```

- [ ] **Step 2: Run build to verify all project pages generate**

```bash
npm run build 2>&1 | tail -30
```

Expected: Sees `/work/furmap`, `/work/taischool`, `/work/elite-incubator`, `/work/Woof`, `/work/ktbPib`, `/work/eslite` in the output pages list.

- [ ] **Step 3: Commit**

```bash
git add src/app/work/[slug]/page.tsx
git commit -m "feat: add project detail pages with static generation"
```

---

## Task 17: Create 404 Page

**Files:**
- Create: `src/app/not-found.tsx`

- [ ] **Step 1: Create src/app/not-found.tsx**

Create `src/app/not-found.tsx`:

```tsx
import Link from "next/link";

export default function NotFound() {
  return (
    <main className="min-h-screen bg-black text-white flex flex-col items-center justify-center px-6 text-center">
      <div className="text-[11px] font-medium uppercase tracking-[0.25em] text-white/30 mb-4 font-mono">
        404
      </div>
      <h1 className="text-4xl md:text-5xl font-bold tracking-[-0.03em] mb-4">
        Page not found
      </h1>
      <p className="text-white/50 mb-8 max-w-md">
        The page you're looking for doesn't exist or has been moved.
      </p>
      <Link
        href="/"
        className="inline-flex items-center px-6 py-3 bg-white text-black rounded-lg text-sm font-medium hover:bg-white/90 transition-colors"
      >
        Go home
      </Link>
    </main>
  );
}
```

- [ ] **Step 2: Commit**

```bash
git add src/app/not-found.tsx
git commit -m "feat: add 404 not-found page"
```

---

## Task 18: Final Build Verification and Visual Check

**Files:**
- Verify: Full site builds and renders correctly

- [ ] **Step 1: Clean build**

```bash
rm -rf .next out
npm run build 2>&1 | tee /tmp/build.log | tail -40
```

Expected output should include:
- `✓ Compiled successfully`
- `✓ Collecting page data`
- `✓ Generating static pages`
- A page listing showing `/`, `/404`, `/work/furmap`, `/work/taischool`, `/work/elite-incubator`, `/work/Woof`, `/work/ktbPib`, `/work/eslite`
- `✓ Exporting`

If the build fails, read `/tmp/build.log` carefully for the error and fix it before proceeding.

- [ ] **Step 2: Verify output directory**

```bash
ls out/
ls out/work/
```

Expected in `out/`: `index.html`, `404.html`, `avatar.jpeg`, `icon.png`, `projects/`, `work/`, `_next/`.
Expected in `out/work/`: `furmap/`, `taischool/`, `elite-incubator/`, `Woof/`, `ktbPib/`, `eslite/`.

- [ ] **Step 3: Verify .nojekyll is in output**

```bash
ls out/.nojekyll
```

Expected: file exists (this tells GitHub Pages not to process with Jekyll).

- [ ] **Step 4: Start dev server and verify site loads**

```bash
npm run dev 2>&1 &
sleep 10
curl -s -o /dev/null -w "Main page: %{http_code}\n" http://localhost:3000/
curl -s -o /dev/null -w "Furmap page: %{http_code}\n" http://localhost:3000/work/furmap/
curl -s -o /dev/null -w "404 page: %{http_code}\n" http://localhost:3000/not-a-real-page/
```

Expected: `200` for main and Furmap pages, `404` for the nonexistent page.

- [ ] **Step 5: Stop dev server**

```bash
lsof -ti:3000 | xargs kill -9 2>/dev/null
```

- [ ] **Step 6: Final commit**

```bash
git status
```

If anything is uncommitted, commit it:

```bash
git add -A
git commit -m "chore: final build verification passing"
```

---

## Post-Implementation Notes

**Manual GitHub Pages deployment:** The site builds to `out/`. For GitHub Pages user sites (`daskinnyman.github.io`), the content of `out/` needs to be pushed to the `main` branch root. Options:

1. **GitHub Actions workflow** (not included in this plan): Add `.github/workflows/deploy.yml` to build on push and deploy the `out/` directory.
2. **Manual copy**: Copy `out/` contents to the repo root after building.
3. **Separate deployment branch**: Use `gh-pages` branch with `out/` as its content.

Choose the approach after implementation is verified.

**Content customization:** The user will update:
- Experience entries in `src/data/experience.ts`
- Bio text in `src/components/about.tsx`
- Hero tagline in `src/components/hero.tsx`

**Known trade-offs:**
- Thumbnail images use `<img>` instead of `<Image>` because of mixed external domains. Acceptable for a portfolio of this size.
- Scroll snap omitted from initial implementation — 100vh sections with free scroll give the best parallax fidelity. Can be added later via `scroll-snap-type: y proximity` on `html` if desired.
- Bootstrap classes in original markdown (`col-md-3`, `row d-flex`) are stripped; screenshots now render in a Tailwind grid.
