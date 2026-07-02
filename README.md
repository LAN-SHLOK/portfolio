<div align="center">

#  SHLOK PATEL

### Interactive Digital System

[![React](https://img.shields.io/badge/React-19-61DAFB?style=flat-square&logo=react&logoColor=black)](https://react.dev)
[![Three.js](https://img.shields.io/badge/Three.js-r182-000?style=flat-square&logo=three.js)](https://threejs.org)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-12-FF0055?style=flat-square&logo=framer)](https://www.framer.com/motion/)
[![TailwindCSS](https://img.shields.io/badge/Tailwind-3.4-06B6D4?style=flat-square&logo=tailwindcss&logoColor=white)](https://tailwindcss.com)
[![Vite](https://img.shields.io/badge/Vite-7-646CFF?style=flat-square&logo=vite&logoColor=white)](https://vite.dev)

*A high-performance portfolio engineered as a living digital system.*

---

</div>

##  What Makes This Different

This isn't a template. It's a **custom-built interactive system** where every animation has purpose and every pixel is intentional.

- **3D Technical Orbit** — Skills rendered as glass cubes orbiting in Three.js space. Click to filter projects.
- **Live Data Feeds** — GitHub repos and LeetCode stats pulled in real-time through a secure Express backend.
- **60fps Mobile** — Adaptive rendering automatically simplifies 3D on mobile devices.
- **Zero Interaction Overload** — Magnetic effects restricted to primary CTA only. Subtle > flashy.

---

## 🏛️ Architecture

```
src/
├── components/
│   ├── DigitalPulseLoader    # Boot sequence with orbital rings
│   ├── Dock                  # Floating nav bar (thumb-friendly)
│   ├── ErrorBoundary         # Graceful crash recovery
│   ├── HeroSystem            # R3F 3D hero scene
│   ├── LiveStats             # GitHub + LeetCode live feeds
│   ├── SkillsOrbit3D         # Interactive 3D skill showcase
│   ├── SkillCube             # Individual glass cube
│   └── TextReveal            # Per-character animation
├── pages/
│   ├── Home                  # Hero + stats
│   ├── Projects              # Filtered project grid
│   ├── Skills                # 3D orbit + repo filtering
│   ├── About                 # Bio + Specialized CVs
│   ├── Contact               # Email form
│   └── NotFound              # Custom 404
└── api/
    └── index.js              # Express (GitHub, LeetCode, Email)
```

### System Workflow
```mermaid
graph TD
    User([User / Browser])
    
    subgraph Frontend [React / Vite Frontend]
        Router[React Router]
        Pages["Home, About, Projects, Skills"]
        3D[Three.js / React Three Fiber Orbit]
        CV[Specialized CV Downloads]
    end
    
    subgraph SecurityLayer [Vercel Security & Gateway]
        RateLimit[IP Rate Limiting]
        Helmet[Helmet.js Headers]
        Sanitizer[XSS Sanitizer & Payload Limiter]
        CORS[Strict CORS]
    end

    subgraph Backend [Express Serverless API]
        Cache["NodeCache - 1hr TTL"]
        ContactAPI["/api/contact"]
        GithubAPI["/api/github, /api/repos"]
        LeetcodeAPI["/api/leetcode"]
    end
    
    subgraph External [External Services]
        Github[GitHub API]
        Leetcode[LeetCode GraphQL]
        Email[Gmail SMTP]
    end
    
    User -->|Visits Site| Router
    Router --> Pages
    Pages --> 3D
    Pages --> CV
    
    Pages -->|API Requests| SecurityLayer
    
    SecurityLayer -->|Validated| Backend
    
    ContactAPI -->|Nodemailer| Email
    
    GithubAPI -->|Fetch / Cache| Github
    LeetcodeAPI -->|Fetch / Cache| Leetcode
```

---

##  Setup

```bash
git clone https://github.com/LAN-SHLOK/portfolio.git
cd portfolio
npm install
npm run dev
```

#### Environment Variables

Create `.env` in root:

```env
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-app-password
GITHUB_TOKEN=your-token          # optional, increases rate limit
```

---

##  Backend

| Feature | Implementation |
|---|---|
| Security | Helmet.js HTTP headers |
| Rate Limiting | 100 req/15min (general), 5/hr (contact) |
| Caching | NodeCache with 1hr TTL |
| Email | Nodemailer via Gmail |

---

##  Build

```bash
npm run build      # Production bundle
npm run preview    # Preview locally
```

**Chunk splitting** is configured — Three.js, Framer Motion, and React ship as separate cached bundles.

Deploys to **Vercel** with zero config. Serverless functions in `/api` auto-deploy.

---

##  Design Rules

| Rule | Detail |
|---|---|
| Primary Style | Glassmorphism |
| Palette | Monochrome + Cyan accent (`#06b6d4`) |
| Typography | Outfit (headings) + Inter (body) |
| Animations | CSS-first, JS only when 3D is required |
| Mobile | Auto-simplify 3D, disable magnetic effects |
| Performance | 60fps budget on mid-range devices |

---

<div align="center">

**Built by Shlok Patel** · IIT Madras · LJIET

[![GitHub](https://img.shields.io/badge/GitHub-LAN--SHLOK-181717?style=flat-square&logo=github)](https://github.com/LAN-SHLOK)

</div>
