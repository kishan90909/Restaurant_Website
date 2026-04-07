# 🎨 RDX Fast Food - Component Guide

## Visual Layout Preview

```
┌─────────────────────────────────────────────────────────────┐
│                    NAVBAR (Sticky)                          │
│  RDX Fast Food    Home About Menu Gallery Contact [Order]  │
└─────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────┐
│                      HERO SECTION                           │
│                                                             │
│              Fresh. Fast. Flavorful.                        │
│     Your favorite rolls, shakes & fast food in town.       │
│                                                             │
│         [View Menu]    [Order Now]                         │
│                                                             │
└─────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────┐
│                     ABOUT SECTION                           │
│                                                             │
│  ┌──────────┐ ┌──────────┐ ┌──────────┐ ┌──────────┐     │
│  │ Affordable│ │  Fresh   │ │Made with │ │  Youth   │     │
│  │  Prices   │ │Ingredient│ │   Love   │ │ Friendly │     │
│  └──────────┘ └──────────┘ └──────────┘ └──────────┘     │
└─────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────┐
│                      MENU SECTION                           │
│                                                             │
│  [Chef's Special] [Rolls] [Shakes] [Mojito] [Momos]...    │
│                                                             │
│  ┌──────────┐ ┌──────────┐ ┌──────────┐                  │
│  │ RDX      │ │ Loaded   │ │  Mega    │                  │
│  │ Special  │ │  Fries   │ │  Combo   │                  │
│  │ Burger   │ │          │ │          │                  │
│  │ ₹120     │ │  ₹100    │ │  ₹250    │                  │
│  └──────────┘ └──────────┘ └──────────┘                  │
│                                                             │
│           [Order Your Favorites Now]                        │
└─────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────┐
│                    GALLERY SECTION                          │
│                                                             │
│  ┌────────┐ ┌────────┐ ┌────────┐                        │
│  │ Burger │ │ Rolls  │ │ Shakes │                        │
│  └────────┘ └────────┘ └────────┘                        │
│  ┌────────┐ ┌────────┐ ┌────────┐                        │
│  │ Momos  │ │ Pizza  │ │ Fries  │                        │
│  └────────┘ └────────┘ └────────┘                        │
└─────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────┐
│                   CONTACT SECTION                           │
│                                                             │
│  ┌──────────────────┐  ┌──────────────────┐              │
│  │ 📍 Address       │  │                  │              │
│  │ 🕐 Hours         │  │   Google Maps    │              │
│  │                  │  │                  │              │
│  │ [📞 Call Now]    │  │                  │              │
│  │ [💬 WhatsApp]    │  │                  │              │
│  └──────────────────┘  └──────────────────┘              │
└─────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────┐
│                      FOOTER                                 │
│  RDX Fast Food  |  Quick Links  |  Follow Us               │
│  © 2024 RDX Fast Food. All rights reserved.                │
└─────────────────────────────────────────────────────────────┘

                                              ┌──────────┐
                                              │ WhatsApp │ (Floating)
                                              └──────────┘
```

## Component Breakdown

### 1. Navbar.jsx (66 lines)
- Sticky navigation
- Mobile hamburger menu
- Smooth scroll links
- Order Now CTA button

### 2. Hero.jsx (52 lines)
- Full-screen landing
- Gradient text effect
- Two CTA buttons
- Animated entrance
- Bounce arrow indicator

### 3. About.jsx (38 lines)
- Business description
- 4 feature cards with icons
- Hover scale effects
- Grid layout

### 4. Menu.jsx (144 lines)
- 13 category tabs
- 47 menu items
- Interactive category switching
- Bestseller badges
- Chef's Special badges
- Hover animations
- Order CTA at bottom

### 5. Gallery.jsx (43 lines)
- 6 food images
- Hover zoom effect
- Overlay with text
- Responsive grid

### 6. Contact.jsx (65 lines)
- Address card
- Opening hours card
- Call button
- WhatsApp button
- Google Maps iframe

### 7. Footer.jsx (48 lines)
- Business branding
- Quick links
- Social media icons
- Copyright notice

### 8. WhatsAppButton.jsx (17 lines)
- Fixed position
- Floating bottom-right
- Pulse animation
- Direct WhatsApp link

## Color Palette

```
Primary:    #FF4500  ████  Orange-Red
Secondary:  #DC143C  ████  Crimson
Dark:       #0a0a0a  ████  Black
Gray-900:   #111827  ████  Dark Gray
Gray-800:   #1f2937  ████  Medium Gray
Gray-400:   #9ca3af  ████  Light Gray
White:      #ffffff  ████  White
```

## Typography

- Headings: Bold, Large (4xl-7xl)
- Body: Regular, Medium (base-lg)
- Buttons: Semibold, Medium (base-lg)
- Menu Items: Semibold (xl)
- Prices: Bold (2xl)

## Animations

- Fade-in on hero load
- Bounce arrow
- Hover scale (1.05x)
- Hover zoom on images (1.1x)
- Smooth color transitions
- Pulse on WhatsApp button

## Responsive Breakpoints

- Mobile: < 640px (sm)
- Tablet: 640px - 1024px (md-lg)
- Desktop: > 1024px (xl)

## File Sizes

- Total Lines: 527
- Components: 473 lines
- Styles: 19 lines
- Config: 35 lines

## Performance

- Fast loading (Vite)
- Lazy image loading
- Optimized bundle
- Minimal dependencies
- Tree-shaking enabled

## Browser Support

✓ Chrome (latest)
✓ Firefox (latest)
✓ Safari (latest)
✓ Edge (latest)
✓ Mobile browsers

## Accessibility

- Semantic HTML
- ARIA labels
- Keyboard navigation
- Focus states
- Alt text on images
- Contrast ratios met
