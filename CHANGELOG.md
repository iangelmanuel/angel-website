# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

## [1.1.0] - 2026-08-23

### Added

- Added official GitHub, LinkedIn, and X SVG logos through `astro-icon`.
- Added `astro check` and a modern ESLint configuration for project validation.
- Added "Universidad Autónoma del Caribe" (International Business and Finance) as a new education entry in the About section, in both languages.
- Added a stats summary (courses completed, hours completed, certifications) to the About > Education subsection, sourced from `siteInfo.certificates`.
- Added section `Badge` labels to the About, Projects, and Contact sections for consistent visual hierarchy.
- Added `contact.lede` translation to introduce the Contact section.
- Added `education.heading` and `education.coursesLabel` translations for the redesigned Education subsection.

### Updated

- Updated dependencies to Astro 7.2.1, React 19.2.8, Tailwind CSS 4.3.3, TypeScript 6.0.3, and the latest compatible versions of the remaining packages.
- Migrated Content Collections to `src/content.config.ts` with Astro loaders.
- Updated README and runtime requirements for Node.js 22.12.0 or newer.

### Changed

- Replaced deprecated Lucide social placeholders with local brand SVGs.
- Removed the project availability status from the Hero, contact section, translations, types, and site configuration.
- Updated path references in `TopMenu.astro` to correctly import global styles.
- Redesigned the About section: education entries now render as a connected timeline with cards, and skills/technologies are now displayed as label/value rows instead of badge pills.
- Redesigned the Contact section: replaced the two-card layout (contact info card + form card) with a centered form and an inline contact-info row (email, phone, location) beneath it; removed the "response time" block.
- Redesigned the Projects section: added a section badge and switched the section background to `bg-zinc-50` / `dark:bg-zinc-900/20`.
- Updated `Project.astro` so the GitHub Public/Private badge itself links to the repository (with the GitHub icon) instead of a separate "Code" button; the live demo button is now full width.
- Updated `ContactForm.tsx` submit button to a centered, pill-shaped (`rounded-full`) style.
- Updated the default `Badge` variant to use a solid black/white background (`bg-black dark:bg-white`) instead of the primary color.
- Updated `Hero.astro` social icons to be foreground-colored by default with a muted hover state, and removed the `secondary` variant from the years-of-experience badge.
- Swapped the `skillsAndTechnologies.badge` and `.title` copy in both languages.
- Reduced `yearsOfExperience` from 4 to 3 in `src/const/site-info.ts`.

### Removed

- Removed unused translation fields and their types: `seo.image`, `seo.siteUrl`, `nav.skills`, `nav.experience`, `nav.blog`, `nav.certifications`, `projects.github`, and `contact.responseTime`.

### Fixed

- Fixed the vulnerability in the version of `marked` package by updating to the latest secure version.
- Corrected the contact phone number in `src/const/site-info.ts` to `+57 317 611 5270`.

## [1.0.3] - 2025-08-18

### Added

- Adding new library `astro-icons` for better icon management
- New `astro-icons` component for consistent icon usage across the site
- Created `src/icons/logo-1.svg` and `src/icons/logo-2.svg` for logo icons
- Added `README.md` to include new icons directory structure
- Uploaded two cv files where one is `cv-angel-dm.pdf` and the other is `cv-angel-dm-en.pdf` for the language selection
- Added functionality to handle CV downloads in both languages

### Changed

- Updated favicon to use `src/icons/logo-1.svg`
- Updated `TopMenu.astro` to use the new `astro-icons` component for logo icons
- Improved icon loading performance by using `astro-icons` component
- Updated `TopMenu.astro` to use the new `astro-icons` component for navigation icons
- Changed font family to use `Nunito-VariableFont.woff2` in global styles

### Fixed

- Fix `Seo.astro` to preload the correct font file
- Fixed `TopMenu.astro` to ensure the logo icon is displayed correctly

## [1.0.2] - 2025-08-17

### Added

- Add env variables documentation in `SECURITY.md` and `README.md`
- Add new translations for `actionsResponses` in i18n files with type safety

### Changed

- Date formatting utility for Spanish (Colombia) in `src/lib/date-formatter.ts`
- Updated `README.md` to reflect new date formatting utility
- Added actionsResponses to i18n files for better multilingual support in server actions
- Moved project screenshots from `public/img/projects` to `src/content/assets/projects` and updated README structure accordingly
- Change project's image paths to use `src/content/assets/projects` with `<Image />` astro component to better perform image optimization

### Fixed

- Fixed date formatting in project and certificate pages
- Fixed `README.md` links redirection issues
- Fixed minor typos in documentation
- Added missing image in `README.md`
- Fixed navigation issues with translations

## [1.0.1] - 2025-08-16

### Added

- Content Collections system for managing projects and certificates
- 11 comprehensive certification entries in both Spanish and English
- shadcn/ui component library integration
- Enhanced multilingual certificate display
- Improved theme system with localStorage persistence
- Better content organization and type safety

### Changed

- Migrated from manual content management to Astro Content Collections
- Enhanced theme toggle with better persistence across navigation
- Improved project structure with dedicated content directories
- Updated documentation to reflect new architecture

### Fixed

- Theme persistence during page navigation
- Content consistency between languages
- Type safety improvements across the application

## [1.0.0] - 2025-08-06

### Added

- Complete portfolio website implementation
- Astro 5.12.6 with React 19.1.1 integration
- Tailwind CSS 4.1.11 for modern styling
- TypeScript for type safety
- GSAP for professional animations
- Responsive navigation with mobile menu
- Multi-language support (ES/EN)
- Contact form functionality
- Projects portfolio section
- Professional About section
- Skills showcase
- Dark/light theme system
- Apple-inspired glassmorphism design
- SEO optimization
- Performance optimizations
- Accessibility features

### Technical Features

- Astro Islands for selective hydration
- Modern CSS with custom properties
- Optimized images and assets
- Tree-shaking for minimal bundle size
- Progressive loading
- Cross-browser compatibility

---

## How to Update

1. Check the [releases page](https://github.com/iAngelManuel/angel-website/releases) for new versions
2. Read the changelog to understand what changed
3. Update your dependencies: `pnpm update`
4. Check for any breaking changes in Content Collections schema
5. Test the theme system and content loading
6. Update your deployment if everything works correctly

## Version Support

- **Current version**: 1.1.0
- **Node.js**: >= 22.12.0
- **pnpm**: >= 7.1.0
- **Browsers**: Modern browsers (Chrome 90+, Firefox 88+, Safari 14+, Edge 90+)
- **Astro**: 7.2.1
- **Tailwind CSS**: v4.3.3
