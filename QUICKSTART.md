# 🚀 QUICK START - RDX Fast Food Website

## ⚡ Get Running in 2 Minutes

```bash
# 1. Navigate to project
cd /Users/puneetkumargarg/Downloads/FI3

# 2. Install dependencies (takes ~1 minute)
npm install

# 3. Start development server
npm run dev

# 4. Open browser
# Visit: http://localhost:5173
```

## 📦 What's Included

✅ **8 React Components** - Navbar, Hero, About, Menu, Gallery, Contact, Footer, WhatsApp Button  
✅ **47 Menu Items** - Organized in 13 categories  
✅ **Fully Responsive** - Mobile, tablet, desktop  
✅ **Dark Theme** - Black/Red/Orange color scheme  
✅ **Animations** - Smooth hover effects and transitions  
✅ **Documentation** - Complete setup and deployment guides  

## 🎯 Key Files to Customize

### 1. Contact Information
**File:** `src/components/Contact.jsx` & `src/components/WhatsAppButton.jsx`
- Update phone: `+919876543210`
- Update WhatsApp: `+919876543210`
- Update address
- Update Google Maps URL

### 2. Menu Items & Prices
**File:** `src/components/Menu.jsx`
- Edit menuData object
- Add/remove items
- Update prices

### 3. Colors
**File:** `tailwind.config.js`
```js
colors: {
  primary: '#FF4500',    // Orange-red
  secondary: '#DC143C',  // Crimson
}
```

## 🌐 Deploy to Vercel (Free)

```bash
# Install Vercel CLI
npm install -g vercel

# Deploy
vercel

# Production
vercel --prod
```

**Result:** Get live URL in 2 minutes!

## 📂 Project Structure

```
FI3/
├── src/
│   ├── components/      # All React components
│   ├── App.jsx          # Main app
│   ├── main.jsx         # Entry point
│   └── index.css        # Global styles
├── public/              # Static assets
├── index.html           # HTML template
├── package.json         # Dependencies
├── tailwind.config.js   # Tailwind config
└── vite.config.js       # Vite config
```

## 🔥 Features

- **Sticky Navbar** with mobile menu
- **Hero Section** with gradient text
- **About Section** with 4 feature cards
- **Interactive Menu** with category tabs
- **Gallery** with 6 food images
- **Contact Section** with Google Maps
- **Footer** with social links
- **Floating WhatsApp** button

## 📱 Test Checklist

- [ ] Desktop view (1920px)
- [ ] Tablet view (768px)
- [ ] Mobile view (375px)
- [ ] All buttons work
- [ ] Menu categories switch
- [ ] Smooth scrolling
- [ ] WhatsApp opens
- [ ] Call button works

## 🎨 Color Scheme

- **Primary:** #FF4500 (Orange-Red)
- **Secondary:** #DC143C (Crimson)
- **Background:** #0a0a0a (Black)
- **Text:** White/Gray

## 📖 Documentation

- **README.md** - Project overview
- **SETUP.md** - Detailed setup guide
- **DEPLOYMENT.md** - Deployment instructions
- **PROJECT_SUMMARY.md** - Complete project details
- **CHECKLIST.md** - Pre-launch checklist

## 🆘 Troubleshooting

**Port in use?**
```bash
npm run dev -- --port 3000
```

**Build fails?**
```bash
rm -rf node_modules package-lock.json
npm install
```

**Need help?**
- Check SETUP.md for detailed instructions
- Check CHECKLIST.md for common issues

## 🎉 Ready to Launch!

1. ✅ All files created
2. ✅ Components built
3. ✅ Menu populated
4. ✅ Responsive design
5. ✅ Documentation complete

**Next:** Run `npm install` and start customizing!

---

**Built with:** React 18 + Vite + Tailwind CSS  
**Time to deploy:** 15 minutes  
**Hosting cost:** $0 (Vercel free tier)
