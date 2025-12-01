# Portfolio Website

A modern portfolio website built with React, TypeScript, Vite, Tailwind CSS, and Three.js.

## Features

- ⚡ Built with Vite for fast development and optimized builds
- ⚛️ React 19 with TypeScript for type-safe development
- 🎨 Tailwind CSS for modern, responsive styling
- 🎭 Three.js animations with React Three Fiber
- 🔀 React Router for seamless navigation
- 📱 Fully responsive design
- 🚀 Automated deployment to GitHub Pages

## Pages

- **Home**: Landing page with an interactive Three.js animation
- **About**: Information about skills and background
- **Projects**: Portfolio of projects with filtering
- **Project Detail**: Detailed view of individual projects

## Getting Started

### Prerequisites

- Node.js 20 or higher
- npm

### Installation

1. Clone the repository:
```bash
git clone https://github.com/bentaylorhk/bentaylorhk.github.io.git
cd bentaylorhk.github.io
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

The site will be available at `http://localhost:5173/`

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint

## Deployment

This site is automatically deployed to GitHub Pages when changes are pushed to the `main` branch. The deployment workflow is configured in `.github/workflows/deploy.yml`.

To deploy manually:
1. Build the project: `npm run build`
2. The built files will be in the `dist` directory
3. GitHub Actions will automatically deploy to GitHub Pages

## Tech Stack

- **React** - UI library
- **TypeScript** - Type safety
- **Vite** - Build tool
- **Tailwind CSS** - Styling
- **Three.js** - 3D animations
- **React Router** - Routing
- **React Three Fiber** - React renderer for Three.js
- **React Three Drei** - Helpers for React Three Fiber

## License

MIT
