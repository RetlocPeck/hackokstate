# Hack OKState '25 Website

A modern, fully responsive website for Oklahoma State University's premier hackathon event featuring sleek animations, comprehensive event information, and seamless mobile experience.

## 🚀 Features

### 🎨 **Design & User Experience**
- **Fully Responsive Design**: Optimized for all devices from mobile to desktop
- **Modern UI/UX**: Clean, minimalist interface using Oklahoma State's official orange and black branding
- **Smooth Animations**: Beautiful transitions and scroll-triggered animations using Framer Motion
- **Mobile-First Approach**: Comprehensive mobile optimization with touch-friendly interactions
- **Accessibility**: Proper ARIA labels, semantic HTML, and keyboard navigation support

### 🌐 **Core Pages & Features**
- **Homepage**: Hero section, event highlights, Discord integration, and dual CTAs
- **Event Information**: Comprehensive details, schedule, prizes, amenities, and FAQ
- **Team Page**: Dynamic team member cards with social media integration and image fallbacks
- **Sponsors Page**: Sponsor showcase, sponsorship tiers, add-ons, and partnership information
- **Navigation**: Responsive header with mobile menu and persistent footer

### 🔗 **Integrations**
- **Discord Community**: Prominent Discord buttons across all pages (https://discord.gg/NkrYgaUnAN)
- **External Registration**: Google Forms integration for event registration
- **Social Media**: Team member social profiles with conditional rendering
- **Analytics**: Vercel Analytics integration for traffic monitoring
- **Contact**: Direct email links and sponsorship packet downloads

### 🛡️ **Technical Excellence**
- **Type Safety**: Full TypeScript implementation with strict type checking
- **Performance**: Next.js 15 with App Router and Turbopack for fast builds
- **SEO Optimized**: Complete metadata, Open Graph, and Twitter Card support
- **Hydration Safe**: Resolved all SSR/client hydration mismatches
- **Error Handling**: Graceful image fallbacks and robust error boundaries

## 🛠️ Tech Stack

- **Framework**: Next.js 15.5.2 with App Router
- **Language**: TypeScript 5+ with strict configuration
- **Styling**: Tailwind CSS v4 with custom OSU theme variables
- **Animations**: Framer Motion 12.23.12 for complex interactions
- **Icons**: Lucide React for consistent iconography
- **Analytics**: Vercel Analytics for performance monitoring
- **Development**: ESLint 9 with Next.js configuration

## 📱 Mobile Optimization

The website has been thoroughly optimized for mobile devices with:

- **Responsive Typography**: Scales from `text-3xl` on mobile to `text-7xl` on desktop
- **Touch-Friendly Buttons**: Full-width buttons on mobile with appropriate touch targets
- **Optimized Spacing**: Reduced padding and margins for mobile (`py-12 sm:py-16 md:py-20`)
- **Mobile Grid Layouts**: `sm:grid-cols-2` breakpoints for optimal content display
- **Conditional Social Icons**: Only display social media links when provided
- **Team Card Consistency**: `min-h-[400px]` ensures uniform card sizing regardless of content length

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. **Clone the repository:**
   ```bash
   git clone [repository-url]
   cd hackokstate
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Run the development server:**
   ```bash
   npm run dev
   ```

4. **Open your browser:**
   Navigate to [http://localhost:3000](http://localhost:3000)

### Development Commands

```bash
# Development with Turbopack (faster)
npm run dev

# Production build with Turbopack
npm run build

# Start production server
npm start

# Lint code
npm run lint
```

## 📁 Project Structure

```
hackokstate/
├── src/
│   ├── app/
│   │   ├── globals.css           # Global styles with OSU color variables
│   │   ├── layout.tsx            # Root layout with metadata and analytics
│   │   ├── page.tsx              # Homepage with hero, features, and CTA
│   │   ├── info/
│   │   │   └── page.tsx          # Event details, schedule, prizes, FAQ
│   │   ├── sponsors/
│   │   │   └── page.tsx          # Sponsors, tiers, addons, contact
│   │   └── team/
│   │       └── page.tsx          # Team member cards and join CTA
│   ├── components/
│   │   ├── Header.tsx            # Responsive navigation with mobile menu
│   │   └── Footer.tsx            # Footer with social links and quick nav
│   └── data/
│       ├── sponsors.ts           # Sponsor data with TypeScript interfaces
│       └── team.ts               # Team member data with social profiles
├── public/
│   ├── hackokstate icon.ico     # Favicon and app icons
│   ├── og-image.png              # Open Graph image
│   ├── prospectus_packet.pdf     # Sponsorship information packet
│   └── team/
│       └── colter.jpg            # Team member photos
├── package.json                  # Dependencies and scripts
├── tsconfig.json                 # TypeScript configuration
├── next.config.ts                # Next.js configuration
└── README.md                     # This file
```

## 🎨 Design System

### Color Palette
The website uses Oklahoma State University's official brand colors:

```css
--osu-orange: #FF6600          /* Primary brand color */
--osu-orange-light: #FF8533    /* Hover states and accents */
--osu-orange-dark: #CC5200     /* Active states */
--osu-black: #000000           /* Text and contrasts */
--osu-gray-dark: #1a1a1a       /* Secondary text */
--osu-gray-light: #f5f5f5      /* Backgrounds and subtle elements */
```

### Typography
- **Font Family**: Inter (Google Fonts) with system fallbacks
- **Mobile Scale**: `text-3xl` → `text-4xl` → `text-5xl`
- **Desktop Scale**: `text-5xl` → `text-6xl` → `text-7xl`
- **Responsive**: All text scales appropriately across breakpoints

### Responsive Breakpoints
```css
sm: 640px    /* Small tablets */
md: 768px    /* Medium tablets */
lg: 1024px   /* Small laptops */
xl: 1280px   /* Large screens */
```

## 📄 Pages Overview

### 🏠 Homepage (`/`)
- **Hero Section**: Event branding, date, location, and primary CTAs
- **Feature Highlights**: 24-hour format, participant count, prizes, skill levels
- **Call-to-Action**: Registration and Discord community links
- **Key Features**: Discord integration, responsive design, smooth animations

### ℹ️ Info Page (`/info`)
- **Event Details**: Date, time, location, and duration information
- **Prize Categories**: Competition tracks with descriptions and prizes
- **Schedule**: Complete 24-hour event timeline
- **Amenities**: Food, WiFi, workspace details
- **FAQ**: Comprehensive answers to common questions

### 👥 Team Page (`/team`)
- **Team Members**: Dynamic cards with photos, roles, and bios
- **Social Integration**: Conditional rendering of GitHub, LinkedIn, Instagram
- **Image Fallbacks**: Initials-based placeholders for missing photos
- **Join CTA**: Email contact for potential team members

### 🤝 Sponsors Page (`/sponsors`)
- **Current Sponsors**: Grid of existing partners with placeholder opportunities
- **Sponsorship Tiers**: Platinum, Gold, Silver, Bronze with detailed benefits
- **Add-on Options**: Tech talks, challenges, meal sponsorships
- **Contact Information**: Email and sponsorship packet download

## 🔧 Customization Guide

### For Future Events

1. **Update Event Details:**
   ```typescript
   // src/app/layout.tsx - Update metadata
   export const metadata: Metadata = {
     title: "Hack OKState '26 | Oklahoma State University Hackathon",
     description: "Join us for Hack OKState '26...",
   }
   ```

2. **Modify Colors:**
   ```css
   /* src/app/globals.css */
   :root {
     --osu-orange: #your-primary-color;
     --osu-orange-dark: #your-secondary-color;
   }
   ```

3. **Update Team Members:**
   ```typescript
   // src/data/team.ts
   export const teamData: TeamMember[] = [
     {
       name: "New Organizer",
       role: "Event Director",
       bio: "Description...",
       image: "/team/new-photo.jpg",
       github: "https://github.com/username",
       // ... other social links
     }
   ]
   ```

4. **Add New Sponsors:**
   ```typescript
   // src/data/sponsors.ts
   export const sponsorsData: Sponsor[] = [
     {
       name: "Company Name",
       tier: "Gold",
       logo: "/sponsors/company-logo.png",
       website: "https://company.com",
       description: "Company description"
     }
   ]
   ```

## 🚀 Deployment

### Vercel (Recommended)

1. **Connect Repository:**
   - Link your GitHub repository to Vercel
   - Automatic deployments on push to main branch

2. **Environment Variables:**
   ```bash
   NODE_ENV=production
   ```

3. **Build Command:**
   ```bash
   npm run build
   ```

### Other Platforms

Ensure your hosting platform supports:
- Node.js 18+
- Next.js 15 App Router
- Static file serving
- Environment variable configuration

### Build Output
- Static pages are generated at build time
- Images and assets are optimized automatically
- CSS is minified and vendor-prefixed

## 🔍 SEO & Analytics

### Built-in SEO Features
- **Meta Tags**: Complete title, description, keywords
- **Open Graph**: Social media sharing optimization
- **Twitter Cards**: Enhanced Twitter link previews
- **Structured Data**: Semantic HTML markup
- **Sitemap**: Automatic generation via Next.js

### Analytics Integration
- **Vercel Analytics**: Built-in performance and visitor tracking
- **Privacy-Focused**: No personal data collection
- **Performance Metrics**: Core Web Vitals monitoring

## 🐛 Troubleshooting

### Common Issues

1. **Hydration Errors:**
   - All hydration mismatches have been resolved
   - Animations now depend only on `mounted` state

2. **Missing Images:**
   - Team member photos fall back to initials
   - Sponsor logos show placeholder text
   - All images include proper alt attributes

3. **Mobile Responsiveness:**
   - All sections tested on various screen sizes
   - Touch targets meet accessibility guidelines
   - Text scales appropriately across breakpoints

### Development Tips

- Use `npm run dev` with Turbopack for faster development
- Check browser console for any remaining issues
- Test on actual mobile devices when possible
- Validate HTML and accessibility with browser tools

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

### Code Standards
- Use TypeScript for all new code
- Follow existing component patterns
- Ensure mobile responsiveness
- Test across different browsers
- Maintain accessibility standards

## 📞 Contact

- **Email**: hackokstate@okstate.edu
- **Discord**: https://discord.gg/NkrYgaUnAN
- **Website**: https://hackokstate.com

## 📄 License

This project is open source and available under the MIT License.

---

**Built with ❤️ by the Hack OKState team at Oklahoma State University**