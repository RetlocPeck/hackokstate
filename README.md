# Hack OKState '25 Website

A modern, minimalist website for Oklahoma State University's premier hackathon event.

## Features

- **Responsive Design**: Fully responsive design that works on all devices
- **Modern UI**: Clean, minimalist interface using Oklahoma State's orange and black color scheme
- **Interactive Animations**: Smooth animations and transitions using Framer Motion
- **Registration System**: Complete registration form with validation
- **Event Information**: Detailed information about the hackathon including schedule, tracks, and FAQs

## Tech Stack

- **Next.js 15**: React framework with App Router
- **TypeScript**: Type-safe development
- **Tailwind CSS v4**: Modern CSS framework with custom OSU theme
- **Framer Motion**: Animation library
- **Lucide React**: Icon library

## Getting Started

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Run the development server:**
   ```bash
   npm run dev
   ```

3. **Open your browser:**
   Navigate to [http://localhost:3000](http://localhost:3000)

## Project Structure

```
src/
├── app/
│   ├── globals.css          # Global styles with OSU theme
│   ├── layout.tsx           # Root layout with header/footer
│   ├── page.tsx             # Homepage
│   ├── info/
│   │   └── page.tsx         # Event information page
│   └── register/
│       └── page.tsx         # Registration form page
└── components/
    ├── Header.tsx           # Navigation header
    └── Footer.tsx           # Site footer
```

## Color Scheme

The website uses Oklahoma State University's official colors:
- **Primary Orange**: #FF6600
- **Orange Light**: #FF8533
- **Orange Dark**: #CC5200
- **Black**: #000000
- **Gray Dark**: #1a1a1a
- **Gray Light**: #f5f5f5

## Pages

### Homepage (`/`)
- Hero section with event overview
- Feature highlights
- Statistics section
- Call-to-action for registration

### Event Info (`/info`)
- Event details (date, time, location)
- Competition tracks and prizes
- Schedule of events
- Amenities and services
- Frequently asked questions

### Registration (`/register`)
- Comprehensive registration form
- Form validation
- Success confirmation
- File upload for resumes

## Deployment

The website is ready for deployment on any platform that supports Next.js:

### Vercel (Recommended)
```bash
npm run build
```

### Other Platforms
Ensure your platform supports:
- Node.js 18+
- Next.js 15
- Static file serving

## Customization

To customize the website for future events:

1. **Update colors** in `src/app/globals.css`
2. **Modify content** in the respective page files
3. **Update metadata** in `src/app/layout.tsx`
4. **Change images** in the `public/` directory

## License

This project is open source and available under the MIT License.