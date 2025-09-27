# IELTS Institute — Home Page (React + Tailwind CSS)

A modern, responsive single-page homepage for a fictional IELTS coaching institute.
Built as a small React + Tailwind project you can run locally with Vite.

## What you get
- Navbar, Hero, Features, Testimonials, Footer
- Tailwind utility-first styling
- Responsive layout (mobile-first)

## Setup (quick)
1. Create project (if you want to start from scratch, or just use these files):
```bash
# clone or copy files into a directory, then:
npm install
npm run dev
```

2. Tailwind setup (if you want to enable Tailwind fully):
```bash
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
# ensure tailwind.config.cjs content matches:
# content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}']
# then import Tailwind directives in src/index.css (already included)
```

## Design notes
- Mobile-first responsive design with Tailwind.
- Soft gradients, rounded cards, and shadows for a professional look.
- Emphasis on clear hierarchy: strong hero headline, features, then social proof.

## Publish to GitHub
```bash
git init
git add .
git commit -m "Initial commit: IELTS homepage"
# create repo on GitHub and push, or use gh CLI:
# gh repo create your-username/ielts-homepage --public --source=. --remote=origin
# git push -u origin main
```

