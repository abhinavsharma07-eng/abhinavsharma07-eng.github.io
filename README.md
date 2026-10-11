# Abhinav Sharma — Developer Portfolio

[![Live Site](https://img.shields.io/badge/Live_Site-abhinavsharma07--eng.github.io-2563eb?style=for-the-badge&logo=googlechrome&logoColor=white)](https://abhinavsharma07-eng.github.io/)
[![React 19](https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-8-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg?style=for-the-badge)](LICENSE)

Welcome to the official source code for my personal developer portfolio: **[abhinavsharma07-eng.github.io](https://abhinavsharma07-eng.github.io/)**.

A clean, responsive single-page application engineered with **React 19**, **Vite**, and **pure CSS3 design tokens**. It serves as my interactive digital resume, highlighting my projects, education, technical skills, and competitive programming progress.

---

## ✨ Features

- 🌓 **Adaptive Light & Dark Theme**
  - Seamless toggle with persistent state saved in `localStorage`.
  - Zero-FOUC (Flash of Unstyled Content) pre-render script with automatic system (`prefers-color-scheme`) preference detection.
  - Native browser address bar theme synchronization via `<meta name="theme-color">`.
- 📱 **Fully Responsive & Touch-Friendly**
  - Responsive design across mobile, tablet, and widescreen desktop displays (fluid break at 960px).
  - Mobile slide-out drawer navigation with frosted glass backdrop blur and accessible 44px touch targets.
  - Interactive hovering animations and indicator bars consistent across desktop and mobile menus.
  - Mobile-optimized floating technology badges ("C", "Python", "Java", "React", "DSA") floating naturally around the hero section.
- 📊 **Live Competitive Programming & Activity Stats**
  - **LeetCode:** Real-time stats fetched via custom React hook tracking Easy, Medium, Hard, and total solved problem counts.
  - **GitHub Contributions:** Live interactive contribution graph embedding dynamically styled for both light and dark themes.
  - **HackerRank:** Direct integration highlighting verified problem-solving and algorithmic badges.
- 💼 **Project Showcase & Experience Timeline**
  - Featured engineering projects including **Bookit** (Console-based Taxi Booking System in Java) and classic **Tic-Tac-Toe** in C.
  - Clean educational timeline detailing Bachelor of Engineering in Computer Science & Engineering (B.E. CSE).
- ⚡ **Ultra-Fast & Lightweight**
  - Pure CSS3 custom design tokens — zero heavy UI component library overhead.
  - Sub-second build and instant Hot Module Replacement (HMR) powered by Vite.

---

## 🛠️ Tech Stack

| Category | Technologies |
| :--- | :--- |
| **Frontend Core** | [React 19](https://react.dev/), JSX, ES Modules |
| **Build & Tooling** | [Vite 8](https://vitejs.dev/), [ESLint 10](https://eslint.org/) |
| **Styling** | Pure CSS3 (CSS Variables, Flexbox, CSS Grid, Glassmorphism backdrop-filter) |
| **Icons & Media** | SVG Vector Icons, Dynamic GitHub Chart SVGs |
| **CI / CD & Hosting** | [GitHub Actions](https://github.com/features/actions), [GitHub Pages](https://pages.github.com/) |

---

## 📁 Project Structure

```text
abhinavsharma07-eng.github.io/
├── .github/
│   └── workflows/
│       └── deploy.yml          # GitHub Actions automated build & Pages deployment
├── public/
│   └── vite.svg                # Favicon and public assets
├── src/
│   ├── assets/                 # Profile images & project media
│   ├── App.jsx                 # Core application layout, Navbar, Hero, Stats, & Projects
│   ├── index.css               # Design tokens, light/dark themes, media queries, animations
│   └── main.jsx                # React root entry point
├── index.html                  # HTML5 shell with zero-FOUC script & viewport meta tags
├── package.json                # Project dependencies & npm scripts
├── vite.config.js              # Vite configuration with base path for GitHub Pages
└── README.md                   # Project documentation
```

---

## 💻 Local Development

Follow these steps to run the portfolio on your local machine:

### Prerequisites
- [Node.js](https://nodejs.org/) (version 18 or newer recommended)
- `npm` or `pnpm` / `yarn`

### Setup

1. **Clone the repository:**
   ```bash
   git clone https://github.com/abhinavsharma07-eng/abhinavsharma07-eng.github.io.git
   cd abhinavsharma07-eng.github.io
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the local development server:**
   ```bash
   npm run dev
   ```

4. **Open your browser:**
   Navigate to [http://localhost:5173](http://localhost:5173) to see the live site with active hot reloading.

### Available Scripts

- `npm run dev` — Starts the Vite development server with HMR.
- `npm run build` — Compiles and minifies assets into the `dist/` directory for production.
- `npm run lint` — Runs ESLint across all `.js` and `.jsx` files.
- `npm run preview` — Locally previews the production build.

---

## ⚙️ Deployment & CI/CD

The website is continuously deployed to **GitHub Pages** using GitHub Actions:

- Every push to the `main` branch triggers `.github/workflows/deploy.yml`.
- The workflow installs dependencies, runs `npm run build`, and publishes the output `dist` bundle directly to GitHub Pages.
- Configured with `base: '/'` in `vite.config.js` for the root `username.github.io` domain architecture.

---

## 📬 Contact & Connect

- 🌐 **Live Website:** [abhinavsharma07-eng.github.io](https://abhinavsharma07-eng.github.io/)
- 💼 **LinkedIn:** [abhinavsharma07-eng](https://www.linkedin.com/in/abhinavsharma07-eng/)
- 💻 **GitHub:** [@abhinavsharma07-eng](https://github.com/abhinavsharma07-eng)
- 🧠 **LeetCode:** [abhinav_sharma_07](https://leetcode.com/u/abhinav_sharma_07/)
- 🏆 **HackerRank:** [_abhinav__07](https://www.hackerrank.com/profile/_abhinav__07)
- 📧 **Email:** [abhinav.query07@gmail.com](mailto:abhinav.query07@gmail.com)

---

## 📄 License

This project is open-source and available under the [MIT License](LICENSE).
