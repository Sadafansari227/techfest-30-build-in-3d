# TECHFEST // 30 — 3D Interactive Web Command Center

Official web development submission for the **Techfest IIT Bombay Campus Ambassador — "Build in 3D"** task.

![Techfest 30](https://img.shields.io/badge/TECHFEST-IIT_BOMBAY-00f0ff?style=for-the-badge&logo=react)
![3D Experience](https://img.shields.io/badge/3D_ENGINE-THREE.JS_--_R3F-8a2be2?style=for-the-badge)
![License](https://img.shields.io/badge/BUILD-SUCCESSFUL-00d2ff?style=for-the-badge)

---

## ⚡ Concept & Vision

**TECHFEST // 30** is a futuristic 3D web experience designed as a technological command center representing **Techfest IIT Bombay**, Asia's largest science and technology festival celebrating 30 years of innovation.

The application places the visitor directly inside a sci-fi digital environment with an interactive procedural 3D core that continuously evolves, morphs, and reorganizes as the user scrolls down the page.

---

## 🚀 Key Features & 3D Interactions

1. **Interactive 3D Hero Scene**:
   - Procedural technological core consisting of concentric rotating torus rings, wireframe inner spheres, glowing energy orbs, and orbiting satellite nodes.
   - Mouse parallax tilting and smooth camera rig response.
2. **Interactive 3D Technological Core**:
   - Floating 3D badges (`AI`, `ROBOTICS`, `SPACE`, `CYBER`, `ENGINEERING`, `INNOVATION`) attached to 3D spatial anchors via `@react-three/drei`.
3. **Scroll-Linked 3D Morphing**:
   - Smooth 5-stage geometric transformation as the user scrolls:
     - **Phase 1**: Compact Technological Core & Orbiting Rings.
     - **Phase 2**: Ring Expansion & Spatial Separation.
     - **Phase 3**: Robotic Exoskeleton Frame & Hydraulic Joint Nodes.
     - **Phase 4**: Quantum Network Matrix & Interconnected Nodes.
     - **Phase 5**: Converged 30th Edition Glowing Techfest 3D Emblem.
4. **3D Interactive Domain Cards**:
   - 3D tilt perspective cards for AI, Robotics, Cyber Tech, and Future Engineering with cursor light reflection and glassmorphic panels.
5. **Procedural Particle Universe**:
   - 1,200+ particle cloud with additive blending, reacting to cursor movement and scroll velocity without frame drops.
6. **Innovation Journey Vertical Timeline**:
   - 5-stage interactive stepper: `IDEA ➔ CREATE ➔ BUILD ➔ COMPETE ➔ IMPACT`.
7. **Dramatic Final 3D CTA**:
   - Full-screen dramatic statement with interactive celebration burst effect.
8. **Futuristic HUD UI & Scanlines**:
   - Glassmorphic panels, HUD coordinates telemetry, custom crosshair cursor, mobile navigation drawer, and WebGL error boundary fallback.

---

## 🛠️ Tech Stack

- **Frontend Framework**: React (Vite)
- **3D Graphics Engine**: Three.js
- **React 3D Renderer**: `@react-three/fiber`
- **3D Helpers & HTML Overlay**: `@react-three/drei`
- **UI Animations**: Framer Motion
- **Icons & Telemetry**: Lucide React
- **Confetti Celebration**: Canvas Confetti
- **Styling**: Vanilla CSS3 Design System with Neon CSS Tokens, Glassmorphism, and Cyber Grid effects
- **Typography**: Google Fonts (Orbitron, Inter, Share Tech Mono)

---

## 📦 Installation & Local Setup

### Prerequisites
- Node.js (v18+ recommended)
- npm or yarn

### 1. Clone & Install Dependencies
```bash
npm install --legacy-peer-deps
```

### 2. Start Local Development Server
```bash
npm run dev
```
Open your browser and navigate to `http://localhost:5173` (or the URL output by Vite).

### 3. Build for Production
```bash
npm run build
```

---

## 📁 Project Structure

```
├── public/
├── src/
│   ├── components/
│   │   ├── CanvasContainer.jsx      # WebGL Canvas wrapper & WebGL Error Boundary
│   │   ├── CustomCursor.jsx         # Futuristic crosshair cursor
│   │   ├── DomainCard.jsx           # 3D tilt hover cards
│   │   ├── LoadingScreen.jsx        # Futuristic initialization loader
│   │   ├── Navbar.jsx               # Minimal sci-fi navigation bar
│   │   └── ScrollProgress.jsx       # Telemetry right-hand HUD indicator
│   ├── sections/
│   │   ├── CoreSection.jsx          # Section 2: Technology Core
│   │   ├── DomainsSection.jsx       # Section 4: Innovation Domains
│   │   ├── FinalCtaSection.jsx      # Section 7: Final 3D CTA
│   │   ├── Footer.jsx               # Cyberpunk Command Footer
│   │   ├── HeroSection.jsx          # Section 1: 3D Hero
│   │   ├── ParticleSection.jsx      # Section 5: Particle Universe
│   │   ├── TimelineSection.jsx      # Section 6: Innovation Journey
│   │   └── TransformationSection.jsx# Section 3: Scroll Transformation breakdown
│   ├── styles/
│   │   └── index.css                # Futuristic design system tokens & glassmorphism
│   ├── three/
│   │   ├── FloatingGeometries.jsx   # Sci-fi floating background artifacts
│   │   ├── MainScene.jsx            # Main R3F scene composition & lights
│   │   ├── ParticleField.jsx        # Optimized 3D particle universe
│   │   ├── ScrollTransformObjects.jsx# Scroll-linked morphing 3D geometry
│   │   └── TechCore.jsx             # Procedural 3D core & floating labels
│   ├── App.jsx                      # App root assembly
│   └── main.jsx                     # Vite entry point
├── index.html                       # Fonts & meta headers
├── package.json
└── README.md
```

---

## 🏷️ Official Branding & Disclaimers

This project is created strictly as an official submission for the **Techfest IIT Bombay Campus Ambassador — "Build in 3D"** web development task.
All textual branding uses official designations:
- **TECHFEST**
- **IIT BOMBAY**
- **30 YEARS OF INNOVATION**

---

## 📤 Git Commands to Push to GitHub

To publish this project to your GitHub repository, run the following commands in your terminal:

```bash
# 1. Initialize Git repository
git init

# 2. Add all project files
git add .

# 3. Create initial commit
git commit -m "feat: complete Techfest 30 3D web experience for Campus Ambassador task"

# 4. Rename main branch
git branch -M main

# 5. Link your GitHub remote repository (replace with your repo URL)
git remote add origin https://github.com/YOUR_USERNAME/techfest-30-build-in-3d.git

# 6. Push to GitHub
git push -u origin main
```
