# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

### Added

- Astro Content Collections for projects and certificates management
- Comprehensive certificate system with multilingual support (ES/EN)
- shadcn/ui components integration for better UI consistency
- Enhanced theme system with persistence and navigation sync
- Content organization with dedicated collections for scalability

### Changed

- Improved theme toggle system for better persistence across navigation
- Enhanced project structure with organized content collections
- Updated to Tailwind CSS v4 with custom variants and improved theming

### Fixed

- Theme persistence issues during Astro transitions navigation
- FOUC (Flash of Unstyled Content) on initial page load
- Theme synchronization across different pages and navigation states

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
