# Deployment Guide - RDX Fast Food Website

## Quick Start

```bash
# Install dependencies
npm install

# Run locally
npm run dev

# Build for production
npm run build
```

## Deploy to Vercel (Recommended)

### Option 1: Vercel CLI (Fastest)

```bash
# Install Vercel CLI globally
npm install -g vercel

# Login to Vercel
vercel login

# Deploy to preview
vercel

# Deploy to production
vercel --prod
```

### Option 2: GitHub + Vercel (Automated)

1. **Push to GitHub:**
```bash
git init
git add .
git commit -m "RDX Fast Food website"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/rdx-fast-food.git
git push -u origin main
```

2. **Connect to Vercel:**
- Go to https://vercel.com/new
- Import your GitHub repository
- Framework Preset: Vite
- Click "Deploy"

3. **Automatic Deployments:**
- Every push to `main` branch auto-deploys
- Pull requests get preview URLs

## Deploy to Netlify

```bash
# Install Netlify CLI
npm install -g netlify-cli

# Build the project
npm run build

# Deploy
netlify deploy --prod --dir=dist
```

## Deploy to GitHub Pages

1. **Install gh-pages:**
```bash
npm install --save-dev gh-pages
```

2. **Update package.json:**
```json
{
  "homepage": "https://YOUR_USERNAME.github.io/rdx-fast-food",
  "scripts": {
    "predeploy": "npm run build",
    "deploy": "gh-pages -d dist"
  }
}
```

3. **Update vite.config.js:**
```js
export default defineConfig({
  plugins: [react()],
  base: '/rdx-fast-food/'
})
```

4. **Deploy:**
```bash
npm run deploy
```

## Custom Domain Setup (Vercel)

1. Go to your project on Vercel
2. Settings → Domains
3. Add your domain (e.g., rdxfastfood.com)
4. Update DNS records as instructed
5. SSL certificate auto-generated

## Environment Variables

If you add API keys or secrets:

1. Create `.env` file (already in .gitignore)
2. Add variables: `VITE_API_KEY=your_key`
3. Access in code: `import.meta.env.VITE_API_KEY`
4. Add to Vercel: Settings → Environment Variables

## Performance Checklist

✅ Images optimized  
✅ Code minified (automatic with Vite)  
✅ Lazy loading enabled  
✅ Gzip compression (automatic on Vercel)  
✅ CDN delivery (automatic on Vercel)  

## Post-Deployment

1. Test on mobile devices
2. Check Google PageSpeed Insights
3. Verify all links work
4. Test contact forms/buttons
5. Update Google Maps with real location

## Troubleshooting

**Build fails:**
- Check Node.js version (v16+)
- Delete `node_modules` and reinstall
- Clear cache: `npm cache clean --force`

**Blank page after deploy:**
- Check browser console for errors
- Verify `base` path in vite.config.js
- Check if all imports are correct

**Slow loading:**
- Optimize images (use WebP format)
- Enable caching headers
- Use Vercel's image optimization

## Monitoring

- Vercel Analytics: Built-in performance monitoring
- Google Analytics: Add tracking code to index.html
- Vercel Speed Insights: Enable in project settings

## Updates

To update the live site:

```bash
# Make changes
# Test locally
npm run dev

# Commit and push (auto-deploys on Vercel)
git add .
git commit -m "Update menu prices"
git push

# Or deploy directly with Vercel CLI
vercel --prod
```

## Support

For deployment issues:
- Vercel Docs: https://vercel.com/docs
- Vite Docs: https://vitejs.dev/guide/
- React Docs: https://react.dev/
