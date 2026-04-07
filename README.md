# RDX Fast Food - Professional Business Website

A modern, mobile-friendly website for RDX Fast Food café built with React.js and Tailwind CSS.

## Features

✅ Fully responsive design  
✅ Modern dark theme (Black/Red/Orange)  
✅ Smooth scroll animations  
✅ Interactive menu with categories  
✅ Floating WhatsApp button  
✅ Google Maps integration  
✅ Fast loading & optimized  
✅ SEO friendly  

## Tech Stack

- React.js 18
- Vite (Build tool)
- Tailwind CSS
- React Icons

## Setup Instructions

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation

1. **Install dependencies:**
```bash
npm install
```

2. **Run development server:**
```bash
npm run dev
```

3. **Open browser:**
Navigate to `http://localhost:5173`

### Build for Production

```bash
npm run build
```

The production files will be in the `dist/` folder.

## Deployment to Vercel

### Method 1: Using Vercel CLI

1. **Install Vercel CLI:**
```bash
npm install -g vercel
```

2. **Deploy:**
```bash
vercel
```

3. **Follow prompts and deploy to production:**
```bash
vercel --prod
```

### Method 2: Using Vercel Dashboard

1. Push code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Click "New Project"
4. Import your GitHub repository
5. Vercel auto-detects Vite settings
6. Click "Deploy"

## GitHub Commands

```bash
# Initialize git (if not already)
git init

# Add all files
git add .

# Commit changes
git commit -m "Initial commit: RDX Fast Food website"

# Add remote repository
git remote add origin YOUR_GITHUB_REPO_URL

# Push to GitHub
git push -u origin main
```

## Customization

### Update Contact Information

Edit `src/components/Contact.jsx`:
- Phone number
- WhatsApp number
- Address
- Google Maps embed URL

### Update Menu Items

Edit `src/components/Menu.jsx`:
- Add/remove categories
- Update prices
- Mark bestsellers

### Change Colors

Edit `tailwind.config.js`:
```js
colors: {
  primary: '#FF4500',    // Orange-red
  secondary: '#DC143C',  // Crimson
  dark: '#0a0a0a',      // Black
}
```

## Folder Structure

```
rdx-fast-food/
├── public/
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── Menu.jsx
│   │   ├── Gallery.jsx
│   │   ├── Contact.jsx
│   │   ├── Footer.jsx
│   │   └── WhatsAppButton.jsx
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── package.json
├── tailwind.config.js
├── vite.config.js
└── README.md
```

## Performance Optimization

- Lazy loading images
- Optimized bundle size
- Fast Vite build system
- Minimal dependencies

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

## License

© 2024 RDX Fast Food. All rights reserved.

## Support

For issues or questions, contact the developer.
