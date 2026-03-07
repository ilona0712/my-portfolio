# Personal Portfolio — Ilona Chamoun

A personal portfolio website built with React, TypeScript, and Vite. Features a neon dark mode design with anime.js animations, showcasing my projects, technical skills, and professional background as a Software Engineering student at USJ Beirut.

[![TypeScript](https://img.shields.io/badge/TypeScript-97%25-3178C6?style=flat-square&logo=typescript)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-build-646CFF?style=flat-square&logo=vite)](https://vitejs.dev/)
[![anime.js](https://img.shields.io/badge/anime.js-3.2.2-FF6B9D?style=flat-square)](https://animejs.com/)
[![License](https://img.shields.io/github/license/ilona0712/my-portfolio?style=flat-square)](./LICENSE)

---

## Overview

A fully responsive single-page application with a custom neon dark mode aesthetic. Built with a navy-to-black background and neon cyan, green, and pink accents. Features scroll-triggered entrance animations, a glitch effect on the hero name, animated skill bars, a live particle canvas background, and a custom cursor — all orchestrated with anime.js.

---

## Sections

- **Hero** — Animated entrance with glitch effect, stat counters, and particle background
- **Expertise** — Four cards covering ML, backend, full-stack, and embedded systems
- **Projects** — Highlighted work with category filters and neon hover effects
- **Skills** — Animated skill bars and chip cloud by category
- **Experience** — Timeline layout for internship history
- **About** — Background, education, values, and languages
- **Contact** — Direct links and availability panel

### Featured Projects
- **NUMŪ National Analytics Dashboard** — Government policy monitoring platform for Lebanon's Ministry of IT & AI (Code for Lebanon × USJ Hackathon finalist)
- **ATM Failure Prediction System** — ML pipeline for predictive maintenance across 250+ machines at Bank Byblos
- **Embedded Sound Tracking System** — 7-microphone array with real-time directional audio detection

---

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | React + TypeScript |
| Build Tool | Vite |
| Styling | Tailwind CSS + custom CSS variables |
| Routing | React Router |
| Animations | anime.js v3.2.2 |
| Fonts | Syne (display) · Space Grotesk (body) · Syne Mono |
| Package Manager | npm |

---

## Getting Started

### Prerequisites

- Node.js v18+
- npm

### Installation

```bash
git clone https://github.com/ilona0712/my-portfolio.git
cd my-portfolio
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### Build for production

```bash
npm run build
npm run preview
```

---

## Project Structure

```
my-portfolio/
├── src/
│   ├── app/
│   │   └── App.tsx             # Router + ScrollToTop
│   ├── components/
│   │   ├── Header.tsx          # Nav + custom cursor + particle canvas
│   │   └── Footer.tsx
│   ├── pages/
│   │   ├── Home.tsx            # Hero, expertise cards, featured projects
│   │   ├── About.tsx           # Story, timeline, skills, languages
│   │   ├── Projects.tsx        # Full project grid with category filter
│   │   ├── ProjectDetail.tsx   # Individual project page
│   │   └── Contact.tsx         # Contact links + availability panel
│   ├── data/
│   │   └── projects.ts         # All project data — edit here to add projects
│   ├── styles/
│   │   ├── index.css           # Entry — imports all style files
│   │   ├── fonts.css           # Google Fonts import
│   │   ├── tailwind.css        # Tailwind setup
│   │   └── theme.css           # CSS variables, base styles, animations
│   └── main.tsx                # App entry point
├── index.html                  # Loads anime.js from CDN
├── vite.config.ts
└── package.json
```

---

## Customization

All design tokens live in `src/styles/theme.css` under `:root`. To change the color palette, edit these variables and the entire site updates:

```css
--neon-cyan:   #00ffe0;
--neon-green:  #39ff8f;
--neon-pink:   #ff2d78;
--neon-yellow: #f5e642;
--neon-blue:   #4d9fff;
```

To add a new project, add an entry to `src/data/projects.ts` — it will automatically appear in the grid and get a detail page.

---

## Author

**Ilona Chamoun**
Software Engineering Student — Université Saint-Joseph de Beyrouth (USJ)
[chamounilona@gmail.com](mailto:chamounilona@gmail.com) · [github.com/ilona0712](https://github.com/ilona0712) · [LinkedIn](https://linkedin.com/in/ilona-chamoun-808295360)
