/*
README.md

Project: IELTS Institute — Home Page (React + Tailwind CSS)

What's included in this single-file deliverable:
- A production-ready React component (App.jsx) that implements a modern, responsive homepage for a fictional IELTS Institute.
- All UI is written with Tailwind utility classes (no external UI library required).
- Inline SVG icons and Unsplash placeholder images are used for visual polish.

Features
- Navbar (logo + menu links + CTA)
- Hero section (headline, sub-text, CTA button, hero image)
- 4 Feature cards (Speaking Practice, Mock Tests, AI Band Score, Personalized Feedback)
- Student testimonials (3 short reviews)
- Footer (links + contact info + simple newsletter form)
- Fully responsive layout (mobile-first)

How to use
1) Create a React project (Vite recommended):
   npm create vite@latest ielts-homepage -- --template react
   cd ielts-homepage

2) Install Tailwind CSS (official steps):
   npm install -D tailwindcss postcss autoprefixer
   npx tailwindcss init -p

   Replace tailwind.config.cjs content with (or add):
   module.exports = {
     content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
     theme: { extend: {} },
     plugins: [],
   }

   Add to src/index.css:
   @tailwind base;
   @tailwind components;
   @tailwind utilities;

3) Replace src/App.jsx with the code below, and import './index.css' in src/main.jsx.

4) Run the dev server:
   npm install
   npm run dev

Design notes
- Mobile-first responsive layout using Tailwind breakpoints.
- Soft gradients, rounded cards, and drop shadows for a modern, professional appearance.
- Simple, clear hierarchy: strong hero headline, short feature cards, social proof via testimonials.

GitHub repo (deliverable instruction)
- I can't directly create a GitHub repo from here. To publish this project to GitHub, run:

  git init
  git add .
  git commit -m "Initial commit: IELTS homepage"
  gh repo create your-username/ielts-homepage --public --source=. --remote=origin
  git push -u origin main

Replace "your-username" with your GitHub username. If you don't have GitHub CLI, create a repo on github.com and follow the commands it shows.

----
Below is the React component — paste this into src/App.jsx (or keep as-is if you created the Vite project).
*/

import React from 'react'

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 text-gray-800">
      <Navbar />
      <main className="container mx-auto px-6 lg:px-8">
        <Hero />
        <Features />
        <Testimonials />
      </main>
      <Footer />
    </div>
  )
}

function Navbar() {
  return (
    <header className="py-6">
      <div className="flex items-center justify-between container mx-auto px-4 lg:px-8">
        <a href="#" className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-indigo-500 to-pink-500 flex items-center justify-center text-white font-bold">IE</div>
          <div>
            <div className="font-semibold">IELTS Institute</div>
            <div className="text-xs text-gray-500">Achieve your target band</div>
          </div>
        </a>

        <nav className="hidden md:flex items-center gap-6">
          <a href="#features" className="text-sm hover:text-indigo-600">Features</a>
          <a href="#testimonials" className="text-sm hover:text-indigo-600">Testimonials</a>
          <a href="#courses" className="text-sm hover:text-indigo-600">Courses</a>
          <a href="#pricing" className="text-sm hover:text-indigo-600">Pricing</a>
        </nav>

        <div className="flex items-center gap-3">
          <a href="#contact" className="hidden md:inline-block px-4 py-2 border rounded-md text-sm">Contact</a>
          <a href="#signup" className="inline-block px-4 py-2 bg-indigo-600 text-white rounded-md shadow hover:bg-indigo-700 text-sm">Book Trial</a>

          <button className="md:hidden p-2 rounded-md border">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  )
}

function Hero() {
  return (
    <section className="mt-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
      <div className="lg:col-span-7">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight">Crack IELTS with confidence — personalized coaching that delivers results</h1>
        <p className="mt-4 text-gray-600 max-w-xl">Live speaking practice, realistic mock tests, and an AI-powered band predictor to help you focus on what matters. Flexible batches and expert tutors.</p>

        <div className="mt-6 flex flex-col sm:flex-row gap-3">
          <a href="#signup" className="inline-flex items-center gap-2 bg-indigo-600 text-white px-5 py-3 rounded-md shadow hover:bg-indigo-700">
            Book a Free Trial
n          </a>
          <a href="#features" className="inline-flex items-center gap-2 px-5 py-3 rounded-md border text-sm hover:bg-gray-100">Explore Features</a>
        </div>

        <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-4 sm:max-w-xs">
          <Stat label="Avg Band" value="7.2"/>
          <Stat label="Students" value="1.2K+"/>
          <Stat label="Pass Rate" value="92%"/>
          <Stat label="Mock Tests" value="100+"/>
        </div>
      </div>

      <div className="lg:col-span-5">
        <div className="relative w-full rounded-2xl overflow-hidden shadow-xl bg-white">
          <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1600&auto=format&fit=crop&ixlib=rb-4.0.3&s=abc" alt="students studying" className="w-full h-64 sm:h-80 object-cover" />
          <div className="absolute bottom-4 left-4 bg-white/80 backdrop-blur rounded-lg p-4 shadow-md">
            <div className="text-sm font-semibold">Next batch starts</div>
            <div className="text-xs text-gray-600">Oct 5, 2025 • Limited seats</div>
          </div>
        </div>
      </div>
    </section>
  )
}

function Stat({ label, value }){
  return (
    <div className="bg-white rounded-lg p-3 flex flex-col items-start shadow">
      <div className="text-lg font-bold">{value}</div>
      <div className="text-xs text-gray-500">{label}</div>
    </div>
  )
}

function Features() {
  const items = [
    {
      title: 'Speaking Practice',
      desc: 'Small-group and 1:1 speaking sessions focused on fluency & coherence.',
      icon: speakingIcon()
    },
    {
      title: 'Mock Tests',
      desc: 'Real exam-like mock tests with detailed answer scripts and timing.',
      icon: mockIcon()
    },
    {
      title: 'AI Band Predictor',
      desc: 'Instant band estimation from your writing & speaking samples using ML.',
      icon: aiIcon()
    },
    {
      title: 'Personalized Feedback',
      desc: 'Actionable feedback and study plans based on your performance.',
      icon: feedbackIcon()
    }
  ]

  return (
    <section id="features" className="mt-12">
      <h2 className="text-2xl font-bold">What we offer</h2>
      <p className="mt-2 text-gray-600 max-w-2xl">Everything you need to improve your band score — structured lessons, practice, and tech to track your progress.</p>

      <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {items.map((it) => (
          <div key={it.title} className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition">
            <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-indigo-50 text-indigo-600">{it.icon}</div>
            <h3 className="mt-4 font-semibold">{it.title}</h3>
            <p className="mt-2 text-sm text-gray-600">{it.desc}</p>
            <a href="#" className="mt-4 inline-block text-sm font-medium text-indigo-600">Learn more →</a>
          </div>
        ))}
      </div>
    </section>
  )
}

function Testimonials(){
  const reviews = [
    {name: 'Aisha K.', text: 'I improved from 6.0 to 7.5 in 3 months. Tutors are supportive and the mock tests are accurate.'},
    {name: 'Ravi P.', text: 'The AI band predictor helped me focus on weaker areas — writing scores improved fast.'},
    {name: 'Sara L.', text: 'Loved the speaking groups. Regular feedback and clear action points.'}
  ]

  return (
    <section id="testimonials" className="mt-12 pb-12">
      <h2 className="text-2xl font-bold">Student Testimonials</h2>
      <p className="mt-2 text-gray-600 max-w-2xl">Real stories from students who hit their target band.</p>

      <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-4">
        {reviews.map((r, idx) => (
          <blockquote key={idx} className="bg-white p-4 rounded-lg shadow-sm">
            <p className="text-sm text-gray-700">“{r.text}”</p>
            <div className="mt-3 text-xs text-gray-500">— {r.name}</div>
          </blockquote>
        ))}
      </div>
    </section>
  )
}

function Footer(){
  return (
    <footer className="mt-12 bg-indigo-900 text-white">
      <div className="container mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-3 gap-6">
        <div>
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center font-bold">IE</div>
            <div>
              <div className="font-semibold">IELTS Institute</div>
              <div className="text-sm text-indigo-200">Your path to the target band</div>
            </div>
          </div>

          <p className="mt-4 text-sm text-indigo-200 max-w-sm">Contact us for batch details, corporate training, and tailored study plans.</p>
        </div>

        <div>
          <div className="font-semibold">Quick Links</div>
          <ul className="mt-3 text-sm text-indigo-200 space-y-2">
            <li><a href="#" className="hover:underline">Courses</a></li>
            <li><a href="#" className="hover:underline">Mock Tests</a></li>
            <li><a href="#" className="hover:underline">Pricing</a></li>
            <li><a href="#" className="hover:underline">Privacy</a></li>
          </ul>
        </div>

        <div>
          <div className="font-semibold">Get in touch</div>
          <div className="mt-3 text-sm text-indigo-200">hello@ieltsinstitute.example</div>
          <div className="text-sm text-indigo-200 mt-2">+91 98765 43210</div>

          <form className="mt-4 flex gap-2">
            <input className="flex-1 rounded-md px-3 py-2 text-indigo-900" placeholder="Your email" />
            <button className="px-4 py-2 rounded-md bg-yellow-400 text-indigo-900 font-semibold">Join</button>
          </form>
        </div>
      </div>

      <div className="bg-indigo-800 text-indigo-100 text-sm py-3">
        <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
          <div>© {new Date().getFullYear()} IELTS Institute — All rights reserved</div>
          <div className="mt-2 md:mt-0">Made with ❤️ • Designed for clarity</div>
        </div>
      </div>
    </footer>
  )
}

/* Inline icon helpers */
function speakingIcon(){
  return (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M8 10h.01M12 10h.01M16 10h.01M9 16h6M4 6h16M4 6v6a8 8 0 108 8v-2" />
    </svg>
  )
}

function mockIcon(){
  return (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 12h6M9 16h6M5 6h14M5 10h14" />
    </svg>
  )
}

function aiIcon(){
  return (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 11c1.657 0 3-1.343 3-3S13.657 5 12 5 9 6.343 9 8s1.343 3 3 3z" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19 21v-2a4 4 0 00-4-4H9a4 4 0 00-4 4v2" />
    </svg>
  )
}

function feedbackIcon(){
  return (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M7 8h10M7 12h6M7 16h4M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  )
}
