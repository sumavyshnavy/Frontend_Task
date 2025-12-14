Frontend Engineer Interview Task

This project recreates the provided UI screens of a student learning app using React, TypeScript, Vite, and Tailwind CSS, focusing on mobile-first design, clean component structure, and pixel-close layouts.

Tech Stack

React + TypeScript

Vite

Tailwind CSS (v4)

React Router DOM

Screens Implemented

Home Screen – Dashboard with XP progress, actions, story carousels, and bottom navigation

Now Playing Screen – Audio story player with artwork, controls, and progress

Custom Quiz Screen – Topic selection and difficulty selection flow

All screens are designed with phone-like proportions to match the provided screenshots.

Routing

The app uses React Router for navigation between screens:

/ → Home

/now-playing → Now Playing (Audio Story Player)

/quiz → Craft Custom Quiz

Routing is handled in App.tsx.

Folder Structure
src/
├─ components/     // Reusable UI components
├─ pages/          // Home, NowPlaying, CustomQuiz screens
├─ assets/         // Images used in UI
├─ App.tsx         // App layout + routing
├─ main.tsx        // Entry point
└─ index.css       // Tailwind v4 setup

How to Run Locally
npm install
npm run dev


Then open the URL shown in the terminal (usually http://localhost:5173).

Assumptions

Images are locally stored assets (PNG/JPG) instead of remote URLs.

Interactions (play, next, quiz generation) are UI-level only, not backend-powered.

Mobile-first accuracy is prioritized; larger screens degrade gracefully.

Live Demo

Deployed using Vercel / Netlify
👉 (Add your live link here)

Notes

This project focuses on UI accuracy, clean Tailwind usage, component decomposition, and realistic frontend structure, as expected in a frontend engineering interview task.
