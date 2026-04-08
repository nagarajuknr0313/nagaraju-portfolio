# Nagaraju's Personal Portfolio Website

A modern, responsive portfolio website built with **React**, **Vite**, and **Tailwind CSS**. Features smooth animations, dark mode, and is optimized for fast performance and SEO.

## 🌟 Features

- ✨ **Modern Design** - Clean, contemporary UI with smooth animations
- 🌓 **Dark/Light Mode** - Toggle between themes with persistent storage
- ⚡ **Lightning Fast** - Built with Vite for optimal performance
- 📱 **Fully Responsive** - Mobile-first design approach
- 🎨 **Tailwind CSS** - Beautiful, utility-first styling
- 🎬 **Framer Motion** - Smooth, professional animations
- 🔍 **SEO Friendly** - Optimized for search engines
- ♿ **Accessible** - WCAG compliant components
- 📦 **Reusable Components** - Well-organized, DRY code structure

## 📋 Sections

1. **Hero** - Welcome section with CTA buttons
2. **About** - Personal introduction and highlights
3. **Projects** - Showcase of AI and web projects with filtering
4. **Skills** - Categorized skills with proficiency levels
5. **Experience** - Work experience and education timeline
6. **Contact** - Email contact form and social links
7. **Footer** - Quick navigation and attribution

## 🛠️ Tech Stack

- **Frontend Framework:** React 18
- **Build Tool:** Vite
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion
- **Icons:** Lucide React
- **Deployment:** Vercel / Netlify (Free)

## 📁 Project Structure

```
portfolio-site/
├── src/
│   ├── components/
│   │   ├── common/
│   │   │   ├── SectionTitle.jsx
│   │   │   ├── ProjectCard.jsx
│   │   │   ├── SkillCategory.jsx
│   │   │   └── TimelineItem.jsx
│   │   ├── About.jsx
│   │   ├── Contact.jsx
│   │   ├── Experience.jsx
│   │   ├── Footer.jsx
│   │   ├── Hero.jsx
│   │   ├── Navigation.jsx
│   │   ├── Projects.jsx
│   │   └── Skills.jsx
│   ├── App.jsx
│   ├── App.css
│   ├── index.css
│   └── main.jsx
├── index.html
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
├── package.json
├── .gitignore
└── README.md
```

## 🚀 Quick Start

### 1. Local Setup

#### Prerequisites
- Node.js 16+ and npm (or yarn/pnpm)
- Git

#### Installation Steps

```bash
# 1. Clone or download the project
cd portfolio-site

# 2. Install dependencies
npm install

# 3. Start development server
npm run dev
```

The site will open at `http://localhost:5173`

### 2. Customize Your Content

Edit these files to personalize your portfolio:

- **`src/App.jsx`** - Main app configuration
- **`src/components/Hero.jsx`** - Name, title, and social links
- **`src/components/About.jsx`** - About section content
- **`src/components/Projects.jsx`** - Your projects
- **`src/components/Skills.jsx`** - Skills and proficiencies
- **`src/components/Experience.jsx`** - Work experience and education
- **`src/components/Contact.jsx`** - Email and contact info
- **`index.html`** - Meta tags and page title

### 3. Build for Production

```bash
# Create optimized production build
npm run build

# Preview production build
npm run preview
```

The build output will be in the `dist/` folder.

---

## 📤 Deployment Guide

### ✨ FREE Deployment Options

Choose one of the following platforms:

---

## **Option 1: Vercel (Recommended - Easiest)**

[Vercel](https://vercel.com) is the creator of Next.js and offers the best integration with Vite projects.

### Step-by-Step:

#### 1. **Push Code to GitHub**

```bash
# Initialize git (if not already done)
git init

# Add all files
git add .

# Create initial commit
git commit -m "Initial portfolio setup"

# Create a new repository on GitHub at github.com/new
# Then push to GitHub
git remote add origin https://github.com/YOUR_USERNAME/portfolio-site.git
git branch -M main
git push -u origin main
```

#### 2. **Connect Vercel to GitHub**

1. Go to [vercel.com](https://vercel.com)
2. Click **"Sign Up"** → Choose **"Continue with GitHub"**
3. Authorize Vercel with your GitHub account
4. Click **"New Project"**
5. Find and select your **"portfolio-site"** repository
6. Vercel will auto-detect Vite settings (no configuration needed!)
7. Click **"Deploy"** ✓

Your site is now live! You'll get a URL like: `https://portfolio-site.vercel.app`

#### 3. **Update After Changes**

Simply push changes to GitHub:

```bash
# Make changes to your code
git add .
git commit -m "Update portfolio"
git push origin main
```

Vercel will automatically redeploy! 🚀

#### 4. **Add Custom Domain (Optional)**

1. In Vercel Dashboard → Your Project → Settings → Domains
2. Add your domain (e.g., `yourname.com`)
3. Follow DNS instructions from your domain registrar

---

## **Option 2: Netlify**

[Netlify](https://netlify.com) offers easy deployment with drag-and-drop or GitHub integration.

### Method A: GitHub Integration (Recommended)

#### 1. **Push to GitHub** (Same as above)

```bash
git init
git add .
git commit -m "Initial portfolio setup"
git remote add origin https://github.com/YOUR_USERNAME/portfolio-site.git
git branch -M main
git push -u origin main
```

#### 2. **Deploy on Netlify**

1. Go to [netlify.com](https://netlify.com)
2. Click **"Sign Up"** → Choose **"Sign up with GitHub"**
3. Click **"New site from Git"**
4. Select **"GitHub"** as your Git provider
5. Find and select **"portfolio-site"** repository
6. Configure build settings:
   - **Build command:** `npm run build`
   - **Publish directory:** `dist`
7. Click **"Deploy site"** ✓

Your site is now live!

#### 3. **Automatic Deployments**

```bash
# Any push to main branch triggers automatic deployment
git push origin main
```

### Method B: Drag & Drop (Quick, No Git)

1. Build locally first:
   ```bash
   npm run build
   ```

2. Go to [netlify.com/drop](https://netlify.com/drop)
3. Drag and drop the **`dist/`** folder
4. Your site is live instantly!

---

## **Option 3: GitHub Pages (Free, No Backend)**

### Step-by-Step:

#### 1. **Create GitHub Repository**

Go to [github.com/new](https://github.com/new)
- Repository name: `portfolio-site`
- Make it **Public**
- Click **"Create repository"**

#### 2. **Push Code**

```bash
git init
git add .
git commit -m "Initial portfolio"
git remote add origin https://github.com/YOUR_USERNAME/portfolio-site.git
git branch -M main
git push -u origin main
```

#### 3. **Configure Vite for GitHub Pages**

Edit `vite.config.js`:

```javascript
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/portfolio-site/', // <- Add this line
  plugins: [react()],
  server: {
    port: 5173,
    host: true
  }
})
```

Update `package.json`:

```json
{
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview",
    "deploy": "npm run build && git add dist -f && git commit -m 'Deploy' && git push"
  }
}
```

#### 4. **Build and Deploy**

```bash
npm run build
git add dist -f
git commit -m "Build dist folder"
git push origin main
```

#### 5. **Enable GitHub Pages**

1. Go to your repository → **Settings**
2. Scroll to **"Pages"**
3. Under **"Source"**, select **"Deploy from a branch"**
4. Select **"main"** branch and **"/root"** folder
5. Click **"Save"**

Your site will be available at: `https://YOUR_USERNAME.github.io/portfolio-site/`

---

## 🌐 Connect a Custom Domain (Optional)

### For All Platforms:

1. **Buy a domain** (e.g., [namecheap.com](https://namecheap.com), [godaddy.com](https://godaddy.com))
2. **Point domain to your platform:**
   - **Vercel:** Settings → Domains → Add custom domain
   - **Netlify:** Site settings → Domain management → Add domain
   - **GitHub Pages:** Add `CNAME` file with your domain

Example `CNAME` file:
```
yourname.com
```

---

## 🔧 Environment Variables (If Needed)

Create a `.env` file in the root:

```env
VITE_FORMSPREE_ID=your_formspree_id
VITE_API_URL=https://your-api.com
```

Access in React:

```javascript
const formspreeId = import.meta.env.VITE_FORMSPREE_ID;
```

---

## 📝 Setup Contact Form

The contact form uses **Formspree** for free email submissions.

### Setup Steps:

1. Go to [formspree.io](https://formspree.io)
2. Sign up (free)
3. Create a new form
4. Get your **Form ID**
5. Update `src/components/Contact.jsx`:

```javascript
// Replace 'YOUR_FORM_ID' with your actual ID
const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
  // ... rest of code
});
```

---

## 🎨 Customization

### Change Colors

Edit `tailwind.config.js`:

```javascript
theme: {
  extend: {
    colors: {
      primary: {
        500: '#0ea5e9', // Change these values
        600: '#0284c7',
      }
    }
  }
}
```

### Change Fonts

Edit `src/App.css`:

```css
@import url('https://fonts.googleapis.com/css2?family=YourFont:wght@400;700&display=swap');

* {
  font-family: 'YourFont', sans-serif;
}
```

---

## ✅ Optimization Tips

- **Images:** Use optimized formats (WebP, AVIF)
- **SEO:** Update meta tags in `index.html`
- **Performance:** Lighthouse checks (Chrome DevTools)
- **Analytics:** Add Google Analytics to `index.html`

---

## 📱 Testing Responsive Design

Use browser DevTools (F12):
- Chrome DevTools
- Firefox Developer Tools
- Safari Web Inspector

Or test on real devices using:
```bash
npm run dev
# Access from local IP: http://192.168.x.x:5173
```

---

## 🐛 Troubleshooting

### Port 5173 Already in Use
```bash
npm run dev -- --port 3000
```

### Build Errors
```bash
rm -rf node_modules package-lock.json
npm install
npm run build
```

### Deployment Issues
- Check `npm run preview` locally first
- Verify `dist/` folder exists
- Ensure all files are committed to git

---

## 📚 Resources

- [React Documentation](https://react.dev)
- [Vite Guide](https://vitejs.dev)
- [Tailwind CSS](https://tailwindcss.com)
- [Framer Motion](https://www.framer.com/motion)
- [Lucide Icons](https://lucide.dev)

---

## 📄 License

This project is open source and free to use.

---

## 🤝 Support

- Check the code comments for guidance
- Visit [documentation](https://react.dev) for framework help
- Review component files for examples

---

## 🎉 Next Steps

1. ✅ Customize content
2. ✅ Test locally (`npm run dev`)
3. ✅ Deploy to Vercel/Netlify
4. ✅ Add custom domain
5. ✅ Share with the world!

---

**Happy building! 🚀**

Made with ❤️ by Nagaraju Kommanaboyina
