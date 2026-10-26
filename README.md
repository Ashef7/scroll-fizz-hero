# Itz Fizz — Scroll-Driven Hero

A responsive React hero concept built with Vite, Tailwind CSS and GSAP ScrollTrigger.

## Features
- Full-screen hero with a staggered intro animation.
- Stats animate in one by one.
- Custom inline SVG sports car illustration (no separate image download required).
- Scroll-linked car movement, rotation and scale using GSAP ScrollTrigger.
- Responsive mobile layout and a second story section.
- GitHub Pages deployment workflow.

## Requirements
Install Node.js 22 LTS (or a Vite-compatible supported version) and Git.

## Run locally on Windows
Open PowerShell in this project folder:

```powershell
npm install
npm run dev
```

Open the local URL printed by Vite, usually `http://localhost:5173/`.

To test the production build:

```powershell
npm run build
npm run preview
```

## Deploy to GitHub Pages
1. Create a GitHub repository named `scroll-fizz-hero`.
2. Ensure `vite.config.js` has `base: '/scroll-fizz-hero/'`. If you use a different repository name, change the base to `'/YOUR-REPOSITORY-NAME/'`.
3. In PowerShell, from this project folder:

```powershell
git init
git add .
git commit -m "Build scroll-driven hero animation"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/scroll-fizz-hero.git
git push -u origin main
```

Replace `YOUR-USERNAME` with your GitHub username. If Git says a remote already exists, use `git remote set-url origin https://github.com/YOUR-USERNAME/scroll-fizz-hero.git`.

4. On GitHub, open **Settings → Pages** and set the source to **GitHub Actions**.
5. Open the **Actions** tab and wait for the workflow to finish successfully.
6. Your site should be available at `https://YOUR-USERNAME.github.io/scroll-fizz-hero/`.

## Animation notes
The intro uses a GSAP timeline. ScrollTrigger uses `scrub` so the car transforms follow scroll progress rather than playing as a timed autoplay animation. The car is a custom inline SVG, so the project does not depend on an external car image URL.
