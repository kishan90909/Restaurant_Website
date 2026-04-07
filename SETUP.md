# RDX Fast Food Website - Complete Setup Guide

## 📁 Project Structure

```
rdx-fast-food/
├── src/
│   ├── components/
│   │   ├── Navbar.jsx          # Sticky navigation with mobile menu
│   │   ├── Hero.jsx            # Landing section with CTAs
│   │   ├── About.jsx           # Business info & features
│   │   ├── Menu.jsx            # Interactive categorized menu
│   │   ├── Gallery.jsx         # Food image gallery
│   │   ├── Contact.jsx         # Contact info & map
│   │   ├── Footer.jsx          # Footer with social links
│   │   └── WhatsAppButton.jsx  # Floating WhatsApp button
│   ├── App.jsx                 # Main app component
│   ├── main.jsx                # React entry point
│   └── index.css               # Global styles + Tailwind
├── public/                     # Static assets
├── index.html                  # HTML entry point
├── package.json                # Dependencies
├── tailwind.config.js          # Tailwind configuration
├── vite.config.js              # Vite build config
├── postcss.config.js           # PostCSS config
├── .gitignore                  # Git ignore rules
├── README.md                   # Documentation
└── DEPLOYMENT.md               # Deployment guide

```

## 🚀 Quick Start (5 Minutes)

### Step 1: Install Dependencies

```bash
cd /Users/puneetkumargarg/Downloads/FI3
npm install
```

### Step 2: Run Development Server

```bash
npm run dev
```

Open browser: http://localhost:5173

### Step 3: Build for Production

```bash
npm run build
```

## 📱 Customization Guide

### Update Contact Information

**File:** `src/components/Contact.jsx`

```jsx
// Update phone number
<a href="tel:+919876543210">

// Update WhatsApp number
<a href="https://wa.me/919876543210">

// Update address
<p className="text-gray-400">Your actual address here</p>

// Update Google Maps (use your provided link)
<iframe src="YOUR_GOOGLE_MAPS_EMBED_URL" />
```

**File:** `src/components/WhatsAppButton.jsx`

```jsx
// Update WhatsApp number
<a href="https://wa.me/919876543210">
```

### Update Menu Items & Prices

**File:** `src/components/Menu.jsx`

```jsx
const menuData = {
  "Category Name": [
    { name: "Item Name", price: "₹99", bestseller: true },
    { name: "Another Item", price: "₹149" },
  ],
}
```

### Change Color Scheme

**File:** `tailwind.config.js`

```js
colors: {
  primary: '#FF4500',    // Main orange-red
  secondary: '#DC143C',  // Accent crimson
  dark: '#0a0a0a',      // Background black
}
```

### Update Business Name/Logo

**File:** `src/components/Navbar.jsx` & `src/components/Footer.jsx`

```jsx
<span className="text-primary">RDX</span> Fast Food
```

## 🌐 Deployment Options

### Option 1: Vercel (Recommended - Free & Fast)

**Using Vercel CLI:**

```bash
# Install Vercel CLI
npm install -g vercel

# Login
vercel login

# Deploy
vercel

# Deploy to production
vercel --prod
```

**Using Vercel Dashboard:**

1. Push code to GitHub (see commands below)
2. Go to https://vercel.com/new
3. Import your GitHub repository
4. Click "Deploy" (auto-detects Vite)
5. Done! Get your live URL

### Option 2: Netlify

```bash
# Install Netlify CLI
npm install -g netlify-cli

# Build
npm run build

# Deploy
netlify deploy --prod --dir=dist
```

### Option 3: GitHub Pages

```bash
# Install gh-pages
npm install --save-dev gh-pages

# Add to package.json scripts:
"deploy": "gh-pages -d dist"

# Deploy
npm run deploy
```

## 📤 GitHub Commands

```bash
# Initialize git
git init

# Add all files
git add .

# Commit
git commit -m "Initial commit: RDX Fast Food website"

# Create main branch
git branch -M main

# Add remote (replace with your repo URL)
git remote add origin https://github.com/YOUR_USERNAME/rdx-fast-food.git

# Push to GitHub
git push -u origin main
```

## ✅ Pre-Launch Checklist

- [ ] Update phone numbers in Contact.jsx and WhatsAppButton.jsx
- [ ] Update Google Maps embed URL with actual location
- [ ] Update address in Contact section
- [ ] Review menu items and prices
- [ ] Add real food images (optional)
- [ ] Update social media links in Footer.jsx
- [ ] Test on mobile devices
- [ ] Test all buttons and links
- [ ] Run `npm run build` successfully

## 🎨 Features Included

✅ Responsive design (mobile-first)  
✅ Dark modern theme (black/red/orange)  
✅ Sticky navigation bar  
✅ Smooth scroll animations  
✅ Interactive menu with categories  
✅ Bestseller & Chef's Special badges  
✅ Image gallery with hover effects  
✅ Google Maps integration  
✅ Floating WhatsApp button  
✅ Call & WhatsApp CTAs  
✅ Social media links  
✅ Fast loading (Vite)  
✅ SEO optimized  

## 🔧 Troubleshooting

**Port already in use:**
```bash
# Kill process on port 5173
lsof -ti:5173 | xargs kill -9

# Or use different port
npm run dev -- --port 3000
```

**Build errors:**
```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install
```

**Images not loading:**
- Check image URLs in Gallery.jsx
- Ensure images are in public/ folder
- Use absolute paths for local images

## 📊 Performance Tips

- Images are lazy-loaded automatically
- Vite optimizes bundle size
- Tailwind purges unused CSS
- Deploy on Vercel for CDN benefits

## 🎯 Next Steps After Deployment

1. **Add Google Analytics:**
   - Get tracking ID from Google Analytics
   - Add script to index.html

2. **Enable Vercel Analytics:**
   - Go to project settings on Vercel
   - Enable Analytics & Speed Insights

3. **Custom Domain:**
   - Purchase domain (e.g., rdxfastfood.com)
   - Add to Vercel: Settings → Domains
   - Update DNS records

4. **SEO Optimization:**
   - Add meta descriptions
   - Create sitemap.xml
   - Submit to Google Search Console

## 💡 Pitch Points for Business Owner

✅ **Professional Online Presence** - Modern, attractive website  
✅ **Mobile-Friendly** - 70% of customers browse on phones  
✅ **Easy Ordering** - One-click call/WhatsApp buttons  
✅ **Menu Showcase** - Clear, organized menu display  
✅ **Location Integration** - Google Maps for easy navigation  
✅ **Fast Loading** - Optimized for quick access  
✅ **Zero Maintenance** - Auto-deployed, no manual updates needed  
✅ **Free Hosting** - Vercel provides free hosting forever  
✅ **Scalable** - Can add online ordering, reviews, etc.  

## 📞 Support

For technical issues:
- Vite Docs: https://vitejs.dev
- React Docs: https://react.dev
- Tailwind Docs: https://tailwindcss.com

## 📝 License

© 2024 RDX Fast Food. All rights reserved.
