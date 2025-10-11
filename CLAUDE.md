# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is the Team Undefined FTC (FIRST Tech Challenge) robotics team website, built with Astro and Svelte. The site showcases team members, sponsors, parts, and provides information about the team and FTC competitions. It is deployed to GitHub Pages via GitHub Actions.

## Tech Stack

- **Framework**: Astro v2.10.15 (static site generator)
- **UI Components**: Svelte v3.55.1
- **Styling**: TailwindCSS v3.2.4
- **Carousel**: Siema v1.5.1
- **Icons**: svelte-feather-icons v4.0.0

## Development Commands

```bash
# Start development server
npm run dev
# or
npm start

# Build for production
npm run build

# Preview production build
npm run preview
```

## Architecture

### Page Structure
- Pages are in `src/pages/` as `.astro` files
- Main layout wrapper: `src/layouts/Layout.astro` (includes Navbar, Footer, and analytics)
- Routes:
  - `/` - Homepage with carousel, team intro, and FTC info
  - `/team` - Team members page
  - `/team/apply` - Application page
  - `/team/sponsors` - Sponsors page
  - `/contact` - Contact page

### Components
All Svelte components are in `src/components/`:
- **Navbar.svelte**: Fixed top navigation (takes `url` prop for active state)
- **Carousel.svelte**: Image carousel using Siema library (autoplay, navigation, dots)
- **Footer.svelte**: Site footer
- **Member.svelte**: Team member card display
- **Sponsor.svelte**: Sponsor display component
- Various utility components: Button, Title, TextBox, Content, etc.

### Data Management
Team data is stored in JSON files in `src/components/`:
- `members.json` - Team members organized by year (2024, 2023, 2021, 2020, 2018)
- `sponsors.json` - Sponsor information
- `parts.json` - Robot parts catalog
- `fieldParts.json` - Field parts catalog

Each member object contains: `src`, `name`, `department`, `desc`

### Styling
- Global styles: `src/styles/base.css`
- Tailwind config: `tailwind.config.cjs`
  - Custom color variables defined via CSS custom properties (--color-default, --color-orange, etc.)
  - Custom spacing: `carousel` = calc(100vh - 3.5rem)
  - Font: 'Noto Sans'
- Tailwind base styles are disabled in Astro config to allow custom base styles

### Analytics
The site includes both Google Tag Manager (GTM-W5C9V9LJ) and Google Analytics (G-1SSFYESKRS) configured in `Layout.astro`.

## Deployment

The site deploys automatically to GitHub Pages when pushing to the `main` branch via `.github/workflows/deploy.yml`. The workflow uses the official Astro GitHub Action (`withastro/action@v0`).

Site URL: https://team-undefined.ro

## Configuration

- `astro.config.mjs`: Svelte and Tailwind integrations configured, site URL set to https://team-undefined.ro
- `svelte.config.js`: Default Svelte configuration (if it exists)
- Tailwind applies custom base styles configured in `base.css`

## Adding New Content

- **New team member**: Add to `src/components/members.json` under the appropriate year with image path, name, department, and description
- **New sponsor**: Add to `src/components/sponsors.json`
- **New carousel image**: Add image to `public/img/home/` and reference in `Carousel.svelte`
- **Images**: Store in `public/img/` with subdirectories (`home/`, `members/`, `parts/`, `gallery/`, `robots/`, `sponsor/`)

## Design System

### Colors
- **Primary Green**: `rgb(81, 146, 89)` or `#519259` - Used for accents, borders, glows
- **Dark Background**: `rgb(10, 10, 10)` to `rgb(18, 18, 18)` - Main background gradient
- **Card Background**: `rgb(24, 24, 24)` - Component backgrounds
- **White**: `rgb(255, 255, 255)` - Text and contrast elements

### Typography
- **Headers**: `font-family: 'Orbitron', monospace` with `font-weight: 700-900` and `text-transform: uppercase`
- **Body Text**: `font-family: 'Rajdhani', sans-serif` with `font-weight: 400-600`
- Letter-spacing typically `0.05em` for headers

### Robotic Aesthetic Patterns
1. **Clip-path corners** for futuristic look:
   ```css
   clip-path: polygon(0 0, calc(100% - 15px) 0, 100% 15px, 100% 100%, 15px 100%, 0 calc(100% - 15px));
   ```
2. **Glow effects** using green color with box-shadow and text-shadow
3. **Gradient borders** with green accents
4. **Card hover effects**: transform translateY, border-color change, and box-shadow
5. **Smooth transitions**: typically `0.3s ease` for interactions

## Animated Elements

### Robot Walker (Wall-E Style)
- **Location**: `Layout.astro` (appears on all pages)
- **ID**: `#robotWalker`
- **Behavior**:
  - Walks across bottom of screen (20px from bottom)
  - Green color scheme with tracks, antenna, blinking eyes
  - Changes direction randomly every 20-40 seconds
  - Walks at 30s linear animation speed
  - Can be "beamed" by UFO (turns white with flashing police lights)
- **CSS**: All animations in `src/styles/base.css` under `.robot-walker` classes

### Quadcopter Drone
- **Location**: Home page only (`src/pages/index.astro`)
- **ID**: `#quadcopter`
- **Behavior**:
  - Flies across screen in curved Bezier path
  - 4 spinning propellers, blinking light indicator
  - Flies every 30-90 seconds
  - Flight duration: 8-12 seconds
  - Random start/end positions and curved path
  - Hover/tilt animation (2s ease-in-out)
- **CSS**: Animations in `base.css` under `.quadcopter` classes

### UFO (Flying Saucer)
- **Location**: Home page only (`src/pages/index.astro`)
- **ID**: `#ufo`
- **Behavior**:
  - Flies independently from quadcopter (can appear simultaneously)
  - Flies every 10-30 seconds
  - Flight duration: 8-12 seconds
  - Wobble animation (3s ease-in-out with rotation)
  - Dome, 4 pulsing lights (0.5s alternating animation)
- **Tractor Beam Feature**:
  - Thin 2px green beam extends 3000px downward
  - Activates automatically when UFO within 100px horizontal of robot walker
  - Beam lasts exactly 3 seconds
  - **Robot Effect**: Turns white with flashing blue/red police lights
    - Left eye: Blue (#0066ff), 0.3s pulse
    - Right eye: Red (#ff0000), 0.3s pulse offset by 0.15s
    - Body glows white with 0.2s pulse
    - Returns to normal after 3 seconds
- **CSS**: Animations in `base.css` under `.ufo` classes

## Recent Updates (Session Notes)

### Sponsors Page Improvements
- **Benefit Cards**: Icons now inline with titles (flexbox layout) to save vertical space
  - Icon div moved inside `h4.benefit-title` element
  - Icons: 40px × 40px with 12px right margin
  - Two sections: "Why Your Sponsorship Matters" (6 cards) + "What You Get" (6 cards)
- **Dual CTA Buttons**:
  - Primary: "Contact Us" → `/contact`
  - Secondary: "Too complicated - Donate instead!" → `/donate`
- **Equipment Donation Cards**: 3D printer and laser cutter with product links
- **Top Sponsor Section**: WAMGROUP Romania highlighted with gold title
- **Image Styling**: NO drop shadows on any sponsor or equipment images

### Robots Page
- Countdown to robot reveal: January 9, 2025, 3:00 PM EET (Europe/Bucharest)
- Social media follow section positioned AFTER countdown
- Gallery section prepared (commented code with examples in `/public/img/robots/README.md`)

### About Us
- Team photo updated to `/img/gallery/team2024.png`
- FTC Core Values section included

### Home Page
- Rotating punchy texts synced with carousel (4s intervals)
- Dual CTA buttons: "Become a Sponsor" + "Join Our Team"
- All three flying animations: robot walker, quadcopter, UFO with beam interaction

## File Modification Best Practices
1. Always use **Read** tool before editing files
2. Use **Edit** tool for existing files (never Write on existing files)
3. Only use **Write** for creating new files
4. Preserve exact indentation from file content (ignore line number prefixes when reading)
5. When removing CSS properties like drop-shadow, remove the entire line including the property

## Common Tasks

### Adding Benefit Cards to Sponsors Page
1. Structure: Icon div goes INSIDE `h4.benefit-title` for inline layout
2. Use flexbox: `display: flex; align-items: center;`
3. Icon sizing: 40px × 40px, margin-right: 12px
4. Title: Orbitron font, 1.2rem, uppercase, white color
5. Description: Rajdhani font, 1rem, rgba(255,255,255,0.85)

### Adding New Animations
1. Define `@keyframes` in `src/styles/base.css`
2. Apply animation to element class
3. Use `ease-in-out` or `cubic-bezier(0.25, 0.46, 0.45, 0.94)` for smooth motion
4. Typical durations:
   - Interactions: 0.2-0.3s
   - Ambient effects: 2-4s
   - Flight animations: 8-12s

### Managing Flying Object Interactions
- Quadcopter and UFO are independent, can fly simultaneously
- UFO beam detection uses `getBoundingClientRect()` in animation loop
- Robot police light effect requires `!important` to override default eye animations
- All flying objects use same Bezier curve calculation for smooth curved paths

## Known Technical Details
- Carousel uses Siema library (external dependency)
- Robot walker appears on ALL pages (in Layout.astro)
- Quadcopter and UFO only on home page (index.astro)
- UFO beam activates once per flight when aligned with robot
- Police light animation: left eye = blue, right eye = red, alternating with 0.15s offset
- Dev server typically runs on custom port 9919: `npm run dev -- --port 9919`
