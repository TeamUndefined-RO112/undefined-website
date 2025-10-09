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
- **Images**: Store in `public/img/` with subdirectories (`home/`, `members/`, `parts/`)
