# 🎯 Sehera Promotional Apparels

> A modern, fast, and responsive website for Sehera Promotional Apparels - showcasing products, services, and client work with an intuitive user experience.

[![React](https://img.shields.io/badge/React-18-blue?logo=react)](https://react.dev)
[![Vite](https://img.shields.io/badge/Vite-Latest-purple?logo=vite)](https://vitejs.dev)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-3-blue?logo=tailwindcss)](https://tailwindcss.com)

## ✨ Features

- 🚀 **Lightning Fast** - Built with Vite for instant HMR and optimized builds
- 🎨 **Beautiful UI** - Styled with Tailwind CSS for a modern, clean design
- 📱 **Fully Responsive** - Works seamlessly on desktop, tablet, and mobile
- 🎬 **Smooth Animations** - Interactive animations with Framer Motion
- 📍 **Easy Navigation** - React Router for smooth page transitions
- 🎯 **SEO Friendly** - Clean, semantic HTML structure
- ⚡ **Optimized Performance** - Lazy loading and code splitting

## 📋 Pages & Sections

- **Home** - Landing page with hero section and highlights
- **About** - Company information and story
- **Products** - Showcase of promotional apparels
- **Services** - Services offered by the company
- **Our Work** - Gallery of completed projects
- **Clients** - Client testimonials and logos
- **Contact** - Contact form and information

## 🛠️ Tech Stack

| Technology | Purpose |
|-----------|---------|
| **React** | UI library for building components |
| **Vite** | Fast build tool and dev server |
| **Tailwind CSS** | Utility-first CSS framework |
| **React Router** | Client-side routing |
| **Framer Motion** | Animation library |
| **React Icons** | Beautiful icon library |

## 📦 Prerequisites

Before you begin, ensure you have the following installed:
- **Node.js** (v14 or higher)
- **npm** (comes with Node.js)

Check your versions:
```bash
node --version
npm --version
```

## 🚀 Getting Started

### 1. Clone the Repository
```bash
git clone https://github.com/justtnikiyaa/Sehera-Promotional-Apparels.git
cd Sehera-Promotional-Apparels
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Start Development Server
```bash
npm run dev
```
The site will be available at `http://localhost:5173` (or another port if 5173 is in use)

### 4. Build for Production
```bash
npm run build
```
Creates an optimized production build in the `dist` folder

### 5. Preview Production Build
```bash
npm run preview
```
Preview the production build locally

## 📁 Project Structure

```
src/
├── components/
│   ├── common/           # Reusable components (BrandLogo, ImageCard, etc.)
│   └── layout/           # Layout components (Navbar, Footer, MainLayout)
├── pages/                # Page components (Home, About, Products, etc.)
├── data/                 # Static data (siteData.js, galleryData.js)
├── styles/               # Global styles
├── App.jsx               # Main app component
└── main.jsx              # Entry point

public/
└── gallery/              # Image assets

dist/                    # Production build (generated)
```

## 🎨 Customization

### Modify Colors & Branding
Edit `tailwind.config.js` to customize the color scheme

### Update Brand Logo
Replace the logo file in `public/` or modify the BrandLogo component

### Add New Pages
1. Create a new file in `src/pages/`
2. Add the route in your router configuration
3. Update navigation links in `src/data/siteData.js`

## 🚀 Deployment

Ready to deploy? Here are some popular options:

- **Vercel** (Recommended for Vite projects): `npm i -g vercel && vercel`
- **Netlify**: Drag and drop the `dist` folder
- **GitHub Pages**: Configure for static site deployment
- **AWS S3 + CloudFront**: For large-scale deployments

## 📝 Available Scripts

```bash
npm run dev       # Start development server
npm run build     # Build for production
npm run preview   # Preview production build locally
npm run lint      # Lint code (if configured)
```

## 🤝 Contributing

Found a bug or have a feature request? 
- Open an issue or submit a pull request
- We welcome all contributions!

## 📄 License

This project is open source and available under the MIT License.

## 📧 Support

For questions or support, contact: support@seherapromo.com

---

**Made with ❤️ by Sehera Promotional Apparels**
