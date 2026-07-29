# Umme-Portfolio

Modern portfolio website for Umme Homaira Saika Afsar, built with React, Vite, Tailwind CSS, and a custom dark-purple visual system.

## Features

- Dark-by-default theme with a light mode toggle
- Purple glow styling and animated hero section
- Responsive sections for experience, education, skills, and achievements
- Modal-based detail views for selected items

## Getting Started

Install dependencies:

```bash
npm install --legacy-peer-deps
```

Run the development server:

```bash
npm run dev
```

Build for production:

```bash
npm run build
```

## Project Structure

- `client/` - React app source and static assets
- `server/` - Production server entry
- `shared/` - Shared constants and code

## Notes

The project uses theme tokens in `client/src/index.css` and a shared theme context in `client/src/contexts/ThemeContext.tsx`.
