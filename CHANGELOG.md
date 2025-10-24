# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased] 2025-10-24

### Changed

- Updated dependencies to their latest versions for improved performance and security

## [Unreleased] 2025-10-24

### Changed

- Refactored Server Actions function to improve code readability and maintainability
- Changed HTML structure of the contact form for better accessibility in `src/const/contact-email-html.ts`

## [Unreleased] 2025-10-24

### Fix

- Fixed footer social network links to redirect to correct URLs

## [Unreleased] 2025-10-24

### Added

- Added new project screenshots in `public/img/projects/`
- Added new certificate content in `src/content/certificates/`
- Added new entries in `const/site-info.ts` for the new projects and certificates
- Added new language support for existing content in `src/i18n/en/` and `src/i18n/es/`
- Added new logo of Midudev Academy in `src/img/academy-logo/midudev.svg`

## [Unreleased]

### Added

- Added new project screenshots in `public/img/projects/`
- Added new certificate content in `src/content/certificates/`

### Changed

- Updated `const/site-info.ts` to include new project and certificate entries

## [Unreleased]

### Changed

- Updated Hero section component to correctly reference CV files in `public/docs/` directory
- Enhanced contact form with automatic reset after successful submission

### Fixed

- Fixed CV download paths to match actual file names in `public/docs/`
- Corrected file URLs to use absolute paths with leading slash
- Fixed download filenames to have proper `.pdf` extension

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

- **Current version**: 1.0.1
- **Node.js**: >= 18.0.0
- **pnpm**: >= 8.0.0 (recommended)
- **Browsers**: Modern browsers (Chrome 90+, Firefox 88+, Safari 14+, Edge 90+)
- **Astro**: >= 5.12.6
- **Tailwind CSS**: v4.1.11
