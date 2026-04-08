# 🚀 Portfolio Setup & Deployment Quick Guide

## Local Development

### Start Development Server
```bash
npm run dev
```
- Opens at `http://localhost:5173`
- Hot reload enabled - changes appear instantly
- Press `q` to stop the server

### Build for Production
```bash
npm run build
```
- Creates optimized `dist/` folder
- ~50KB gzipped size
- Ready for deployment

### Preview Production Build
```bash
npm run preview
```
- Test `dist/` folder locally
- Use to verify production build works

---

## Customization Checklist

### Must Do (5 minutes):
- [ ] Edit `src/components/Hero.jsx` - Change name & title
- [ ] Edit `src/components/Contact.jsx` - Update email & Formspree ID
- [ ] Edit `index.html` - Update page title in `<title>` tag

### Should Do (15 minutes):
- [ ] Update social media links in `src/components/Hero.jsx`
- [ ] Update GitHub links in projects
- [ ] Update about section in `src/components/About.jsx`

### Nice to Have (30 minutes):
- [ ] Add your photo in `src/components/About.jsx`
- [ ] Update all project details in `src/components/Projects.jsx`
- [ ] Set up Formspree form at https://formspree.io
- [ ] Customize colors in `tailwind.config.js`

---

## 📤 Deployment (Choose ONE)

### FASTEST: Vercel (Recommended)
**Time: 5 minutes | Cost: FREE**

1. Push to GitHub:
```bash
git init
git add .
git commit -m "Initial portfolio"
git remote add origin https://github.com/YOUR_USERNAME/portfolio-site.git
git push -u origin main
```

2. Go to https://vercel.com
3. Sign up with GitHub
4. Click "New Project"
5. Select your repository
6. Click "Deploy" - Done! 🎉

**Site URL:** `https://your-site.vercel.app`
**Updates:** Push to GitHub, Vercel redeploys automatically

---

### Alternative 1: Netlify
**Time: 5 minutes | Cost: FREE**

1. Push to GitHub (same as Vercel)

2. Go to https://netlify.com
3. Sign up with GitHub
4. Click "New site from Git"
5. Select your repository
6. Build command: `npm run build`
7. Publish directory: `dist`
8. Click "Deploy" - Done! 🎉

---

### Alternative 2: GitHub Pages
**Time: 10 minutes | Cost: FREE**

1. Edit `vite.config.js`:
```javascript
export default defineConfig({
  base: '/portfolio-site/',
  // ... rest
})
```

2. Build and deploy:
```bash
npm run build
git add dist -f
git commit -m "Deploy"
git push origin main
```

3. In GitHub repo → Settings → Pages
4. Source: main branch, /root folder
5. Save - Done! 🎉

**Site URL:** `https://YOUR_USERNAME.github.io/portfolio-site/`

---

## 🌍 Custom Domain (ALL PLATFORMS)

1. **Buy domain:** Namecheap, GoDaddy, etc. (~$10/year)
2. **Connect to platform:**
   - Vercel: Settings → Domains → Add custom domain
   - Netlify: Site settings → Domain management → Add domain
   - GitHub Pages: Add CNAME file with domain name

---

## 📧 Setup Contact Form

1. Go to https://formspree.io
2. Sign up (free)
3. Create a new form
4. Get your Form ID (looks like: `f/abc123xyz`)
5. Update `src/components/Contact.jsx`:
```javascript
const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
```

---

## 🎨 Color Customization

Edit `tailwind.config.js` → `theme.extend.colors.primary`

Current:
- 500: `#0ea5e9` (Sky Blue)
- 600: `#0284c7` (Darker Blue)

Change to your preferred colors (HEX codes).

---

## 📊 SEO Tips

1. Update `index.html`:
```html
<meta name="description" content="Your description here">
<title>Your Name | Your Title</title>
```

2. Add Google Analytics (optional):
```html
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'YOUR_GA_ID');
</script>
```

3. Add sitemap & robots.txt in `public/` folder (for advanced SEO)

---

## 🐛 Troubleshooting

| Problem | Solution |
|---------|----------|
| `npm install` fails | Clear cache: `npm cache clean --force` |
| Port 5173 in use | `npm run dev -- --port 3000` |
| Build errors | Delete `node_modules` & reinstall |
| Deploy shows 404 | Verify `base:` in `vite.config.js` |
| Form not working | Check Formspree Form ID is correct |

---

## 📱 Test Before Deploy

```bash
# 1. Build locally
npm run build

# 2. Preview
npm run preview

# 3. Test on mobile
# Visit: http://YOUR_LOCAL_IP:4173
```

---

## 🔐 Environment Variables

Create `.env` file (NOT .env.example):
```env
VITE_FORMSPREE_ID=f/your_form_id
VITE_CONTACT_EMAIL=your@email.com
```

---

## 📱 Responsive Testing

In Chrome DevTools (F12):
- Toggle device toolbar (Ctrl+Shift+M)
- Test on iPhone, iPad, Android

Or use browser extensions:
- Responsive Viewer
- Mobile Simulator

---

## ⚡ Performance Tips

1. **Images:** Use compressed images (TinyPNG, Squoosh)
2. **Lighthouse:** Check Chrome DevTools → Lighthouse
3. **Bundle Size:** `npm run build` shows size
4. **Lazy Load:** Images load on scroll

Current: **~50KB gzipped** ✨

---

## ✅ Pre-Deployment Checklist

- [ ] All content updated (name, title, projects)
- [ ] Formspree form set up
- [ ] Social links updated
- [ ] `npm run build` works
- [ ] `npm run preview` looks good
- [ ] Pushed to GitHub
- [ ] Deployed to Vercel/Netlify
- [ ] Site loads without errors
- [ ] Mobile responsive

---

## 🚀 Next: Share Your Portfolio!

1. Add to GitHub profile README
2. Share on LinkedIn, Twitter, etc.
3. Include in resume/CV
4. Send to recruiters/clients

---

## 📚 Resources

- [Vite Docs](https://vitejs.dev/)
- [React Docs](https://react.dev/)
- [Tailwind Docs](https://tailwindcss.com/)
- [Framer Motion](https://www.framer.com/motion/)
- [Formspree Help](https://formspree.io/help/)
- [Vercel Docs](https://vercel.com/docs)
- [Netlify Docs](https://docs.netlify.com/)

---

**Good luck! 🎉**

If you get stuck, check the README.md for more detailed instructions.
