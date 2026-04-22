<p align="center">
  <img src="https://readme-typing-svg.demolab.com?font=Outfit&weight=800&size=40&duration=3000&pause=1000&color=06B6D4&center=true&vCenter=true&multiline=true&width=600&height=80&lines=SHLOK+PATEL;Interactive+Digital+System" alt="Typing SVG" />
</p>

<p align="center">
  <a href="#-tech-stack"><img src="https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react&logoColor=black" /></a>
  <a href="#-tech-stack"><img src="https://img.shields.io/badge/Three.js-r182-000000?style=for-the-badge&logo=three.js&logoColor=white" /></a>
  <a href="#-tech-stack"><img src="https://img.shields.io/badge/Framer_Motion-12-FF0055?style=for-the-badge&logo=framer&logoColor=white" /></a>
  <a href="#-tech-stack"><img src="https://img.shields.io/badge/TailwindCSS-3.4-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white" /></a>
  <a href="#-tech-stack"><img src="https://img.shields.io/badge/Vite-7-646CFF?style=for-the-badge&logo=vite&logoColor=white" /></a>
</p>

<p align="center">
  <em>A high-performance, award-quality portfolio engineered as a living digital system.<br/>
  Glassmorphic UI · 3D Skill Orbit · Real-time GitHub & LeetCode Integration · Mobile-First</em>
</p>

---

## ✨ Features

| Feature | Description |
|---|---|
| 🎯 **3D Technical Orbit** | Interactive Three.js skill showcase with glass cubes orbiting in 3D space |
| 🧊 **Glassmorphism Design** | Unified frosted-glass aesthetic across all cards, modals, and overlays |
| ⚡ **60fps Animations** | Framer Motion powered transitions with mobile-specific performance throttling |
| 📊 **Live Data Feeds** | Real-time GitHub repository stats and LeetCode problem-solving metrics |
| 📱 **Mobile-First** | Fully responsive with adaptive 3D rendering, touch-optimized navigation dock |
| 🛡️ **Production Security** | Helmet.js headers, rate limiting, and server-side caching |
| 🎨 **Premium Typography** | Google Fonts (Outfit + Inter) with per-letter animated text reveals |
| 🚀 **Optimized Build** | Smart chunk splitting (Three.js, Framer Motion, React separated) |
| 💌 **Contact System** | Nodemailer-powered email form with confetti feedback |
| 🔍 **SEO Ready** | OpenGraph, Twitter Cards, meta tags, robots.txt |

---

## 🏗️ Architecture

```
portfolio/
├── api/
│   └── index.js              # Express backend (GitHub, LeetCode, Contact APIs)
├── public/
│   ├── resume/               # Downloadable CV
│   └── robots.txt            # SEO crawler config
├── src/
│   ├── components/
│   │   ├── DigitalPulseLoader.jsx   # Animated loading sequence
│   │   ├── Dock.jsx                 # Floating navigation bar
│   │   ├── ErrorBoundary.jsx        # Graceful crash recovery
│   │   ├── HeroSystem.jsx           # React Three Fiber 3D hero
│   │   ├── LiveStats.jsx            # GitHub & LeetCode live feeds
│   │   ├── Magnetic.jsx             # Magnetic hover interaction
│   │   ├── SkillsOrbit3D.jsx        # 3D orbital skill showcase
│   │   ├── SkillCube.jsx            # Individual glass skill cube
│   │   ├── SmoothScroll.jsx         # Lenis smooth scrolling
│   │   ├── SpotlightCard.jsx        # Mouse-tracking spotlight card
│   │   └── TextReveal.jsx           # Per-character text animation
│   ├── pages/
│   │   ├── Home.jsx        # Hero + 3D scene + live stats
│   │   ├── Projects.jsx    # Filtered project grid
│   │   ├── Skills.jsx      # 3D orbit + repo filtering
│   │   ├── About.jsx       # Bio + education + stack
│   │   ├── Contact.jsx     # Email form + info cards
│   │   └── NotFound.jsx    # Custom 404 page
│   ├── data/
│   │   └── projectData.js  # Skill definitions & icon mappings
│   ├── App.jsx             # Root layout + routing
│   ├── main.jsx            # Entry point + ErrorBoundary
│   └── global.css          # Design system tokens
├── index.html              # SEO meta + Google Fonts
├── vite.config.js          # Build optimization + API proxy
├── tailwind.config.js      # Theme extensions
└── package.json
```

---

## 🚀 Quick Start

```bash
# Clone
git clone https://github.com/LAN-SHLOK/portfolio.git
cd portfolio

# Install dependencies
npm install

# Start development server
npm run dev
```

### Environment Variables

Create a `.env` file in the root:

```env
# Email (Contact Form)
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-app-password

# GitHub (Optional - increases API rate limit)
GITHUB_TOKEN=your-github-token
```

### Backend Server

```bash
# In a separate terminal
cd api
node index.js
```

---

## 🛠️ Tech Stack

### Frontend
- **React 19** — UI framework
- **Vite 7** — Build tool & dev server
- **Three.js + R3F** — 3D rendering engine
- **Framer Motion** — Animation library
- **TailwindCSS** — Utility-first styling
- **Lenis** — Smooth scroll engine
- **Lucide React** — Icon system

### Backend
- **Express** — API server
- **Helmet** — Security headers
- **express-rate-limit** — Spam protection
- **node-cache** — Server-side response caching
- **Nodemailer** — Email delivery
- **Axios** — HTTP client for GitHub/LeetCode APIs

---

## 📦 Build & Deploy

```bash
# Production build
npm run build

# Preview production build
npm run preview
```

### Vercel Deployment

This project is configured for **Vercel** out of the box:
- `vercel.json` handles API routing
- Serverless functions in `/api` auto-deploy
- Static assets served from `/dist`

---

## 🎨 Design Philosophy

> **"Every pixel is intentional. Every animation has purpose."**

This portfolio follows the **Controlled Digital System** design language:

- **Glassmorphism** as the primary visual style
- **Monochrome + Cyan** accent palette
- **Interaction restraint** — magnetic effects limited to primary CTAs only
- **Mobile simplification** — 3D effects auto-adapt to device capabilities
- **Performance budget** — all animations target 60fps on mid-range devices

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

<p align="center">
  <strong>Designed & Engineered by Shlok Patel</strong><br/>
  <sub>IIT Madras · LJIET · Full-Stack & AI</sub>
</p>

<p align="center">
  <a href="https://github.com/LAN-SHLOK">
    <img src="https://img.shields.io/badge/GitHub-LAN--SHLOK-181717?style=flat-square&logo=github" />
  </a>
</p>
