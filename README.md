# ZYNOTIXX – Futuristic Digital Agency Landing Page

High-end, dark, cyber-style agency site for the ZYNOTIXX brand.  
Built as a single-page static site with HTML, CSS, and vanilla JavaScript – ready for GitHub Pages.

## Features

- Opening **cannon blast** animation with flying money particles
- Dark **hexagon-inspired digital background** with subtle motion
- Bold ZYNOTIXX hero with dual-color branding (`ZYNOTI` white glow, `XX` red neon)
- Vertical **service icons** on both sides
- Scroll-triggered **metallic sphere** that flies diagonally to reveal each section
- Sections:
  - **Hero**
  - **Our Services**
  - **Client Reviews**
  - **Contact / CTA**
- Micro-interactions, hover glows, soft gradients, and responsive layout

## File structure

- `index.html` – main page markup
- `styles.css` – layout, typography, colors, animations
- `script.js` – opening FX, scroll sphere, smooth scrolling, demo form behavior

## How to run locally

1. Open the folder:
   - On Windows, navigate to `c:\Users\Alsa\zynotixx`.
2. Double-click `index.html` to open it in your browser.
3. For the best experience (and to avoid caching issues), use a lightweight local server such as:
   - VS Code + **Live Server** extension, or
   - `npx serve` from a terminal inside the folder.

## How to put this on GitHub Pages

1. Create a new repository on GitHub (e.g. `zynotixx-agency`).
2. In this folder (`c:\Users\Alsa\zynotixx`), run:
   - `git init`
   - `git remote add origin https://github.com/<your-username>/zynotixx-agency.git`
   - `git add .`
   - `git commit -m "Initial ZYNOTIXX landing page"`
   - `git push -u origin main`
3. On GitHub:
   - Go to **Settings → Pages**.
   - Under **Build and deployment**, select **Deploy from a branch**.
   - Choose branch `main` and folder `/root`.
   - Save – GitHub will build and give you a public URL.

## Customization tips

- Update **copy** and **metrics** directly in `index.html`.
- Tweak colors, glow intensity, and spacing in `styles.css` (`:root` variables).
- Hook up the contact form in `script.js` to your backend, email service, or tools when you’re ready.

