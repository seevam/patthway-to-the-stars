# Path to the Stars 🌟

> Educational platform for young astronomers - Learn about space, build telescopes, and discover the universe through interactive lessons.

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 📋 Project Overview

**Target Audience:** Children ages 8-14, Parents, Teachers
**Core Mission:** Combine space education with hands-on telescope building

### Key Features

- 🌟 **Interactive Learning** - Age-appropriate astronomy lessons with 3 skill levels
- 🎮 **Gamified Experience** - Quizzes, challenges, and achievement badges
- 🔭 **DIY Telescope Kit** - Step-by-step building guides with video tutorials
- 👥 **Safe Community** - Moderated sharing and discussion features
- 📅 **Real-Time Sky Guide** - Tonight's sky predictions and celestial events
- 🏆 **Achievement System** - Track progress and unlock badges

## 🛠 Tech Stack

- **Framework:** React 19 + Vite
- **Routing:** React Router v6
- **Animations:** Framer Motion
- **Icons:** React Icons
- **Styling:** CSS Modules with CSS Variables

## 📁 Project Structure

```
src/
├── components/
│   ├── common/          # Reusable components (Button, Card, Navigation, Footer)
│   ├── home/            # Homepage sections (Hero, Features, Pathways, Pricing, FAQ)
│   ├── learning/        # Learning page components
│   ├── community/       # Community features
│   └── telescope/       # Telescope building guide
├── pages/               # Page components
├── styles/              # Global styles and CSS variables
├── data/                # Static data files
├── hooks/               # Custom React hooks
├── contexts/            # React contexts
└── utils/               # Utility functions
```

## 🎨 Design System

### Color Palette

- **Primary Blue:** `#4fc3f7`
- **Primary Purple:** `#9c27b0`
- **Background Dark:** `#0c0c1e`, `#1a1a3e`, `#2d2d5e`
- **Gradients:** `linear-gradient(45deg, #4fc3f7, #9c27b0)`

### Typography

- **Font Family:** Segoe UI, sans-serif
- **Headings:** Bold with gradient effects
- **Body:** 1rem base size, 1.6 line height

## 🚀 Deployment to Vercel

### Option 1: Using Vercel CLI

1. Install Vercel CLI:
```bash
npm i -g vercel
```

2. Deploy:
```bash
vercel
```

### Option 2: GitHub Integration (Recommended)

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Click "Import Project"
4. Select your GitHub repository
5. Vercel will auto-detect Vite and deploy!

The `vercel.json` file is already configured for proper routing.

## 📄 Available Scripts

- `npm run dev` - Start development server at http://localhost:5173
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint

## 🎯 Current Status

### ✅ Completed

- [x] Project setup with React + Vite
- [x] Global styles and design system
- [x] Common components (Button, Card, Navigation, Footer)
- [x] Complete homepage with all sections
- [x] React Router setup with all pages
- [x] Responsive design for mobile/tablet/desktop
- [x] Smooth animations with Framer Motion

### 🔄 Coming Soon

- [ ] Interactive learning content with lessons
- [ ] Telescope building guide with videos
- [ ] Virtual space exploration features
- [ ] Community features with moderation
- [ ] User authentication system
- [ ] Progress tracking and achievements

## 📝 License

MIT License

---

Made with ❤️ for young astronomers everywhere
