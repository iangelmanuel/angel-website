# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

## [1.4.0] - 2026-09-01

### Added

- Added `public/img/logo.webp`, a new pixel-art brand mark, as `SITE.seo.image` — now the single source of truth for the site's favicon, apple-touch-icon, manifest icon, navbar logo, and Open Graph/JSON-LD image.
- Self-hosted `public/fonts/JetBrainsMono-Variable.woff2` (latin subset) for the TERMINAL design's body copy, preloaded via `PreloadFont.astro`.
- Added `public/img/angel-website-1.webp` and `public/img/angel-website-2.webp` as the new README banners, showing the current TERMINAL and FORMAL designs.

### Changed

- `src/components/seo/BaseHead.astro`, `src/pages/manifest.webmanifest.ts`, and `src/libs/seo.ts` (`organizationLd`, `professionalServiceLd`) now all read the site logo from `SITE.seo.image` instead of a separate/hardcoded path.
- `src/components/shared/TopMenu.astro`: navbar brand mark switched from the `astro-icon` `logo-1` SVG to an `<img>` sourced from `SITE.seo.image`, matching the new logo.
- TERMINAL design's JetBrains Mono now loads from the self-hosted woff2 above instead of the Google Fonts stylesheet, dropping the `fonts.googleapis.com`/`fonts.gstatic.com` preconnects and external request.
- Rewrote `README.md` to match the current codebase: dual TERMINAL/FORMAL design system and routing, unified `src/i18n/ui.ts` translation tree, `SITE` config as the single source of business/SEO data, JSON-LD/`robots.txt`/`sitemap.xml`/manifest generation, the real `src/` directory structure (`modules/portfolio`, `config`, `libs`, `hooks`), current dependency versions, and updated scripts/CI table. Replaced the outdated shadcn/ui-era stack description and file tree.

### Removed

- Removed `public/favicon.svg`, `public/img/logo-ad.png`, and `public/img/portfolio-project.png`, superseded by `logo.webp`; no remaining references.
- Removed the dead `SITE.seo.logo` field and its usages — the field had been dropped from `src/config/site.ts` without updating `src/libs/seo.ts`, which still referenced it.
- Removed the `hero.webp` banner from the README (file no longer exists in `public/img/`).

### Fixed

- Fixed a broken favicon/app icon: `BaseHead.astro` and `manifest.webmanifest.ts` both referenced `/icon.svg`, a file that never existed in `public/` (a leftover from an incomplete `favicon.svg` → `icon.svg` rename), so the site shipped with no working favicon.

## [1.3.3] - 2026-08-27

### Changed

- Tightened ESLint config: added `@eslint/js`'s recommended rule set, switched `astro.configs["flat/recommended"]` to `astro.configs.recommended`, and turned on `@typescript-eslint/no-explicit-any` and `@typescript-eslint/no-unused-vars` (with `^_` argument/variable ignore patterns) as errors instead of warnings/defaults.
- Added `node_modules/**` to the ESLint `ignores` list alongside `dist/**`, `.astro/**`, and `.vercel/**`.

### Fixed

- Fixed CI failing at the `pnpm/action-setup` step with "Multiple versions of pnpm specified": the workflow pinned `version: 11` while `package.json`'s `packageManager` field pinned `pnpm@11.24.0`. Removed the redundant `version` input from both jobs in `.github/workflows/ci.yml`; the action now resolves the version from `packageManager` alone.
- Fixed mojibake in `package.json`'s `description` field (`bilingüe`, `diseños`, `según`, `presentación` had been double-encoded as UTF-8-read-as-Latin-1 escapes) back to proper UTF-8 characters.

## [1.3.2] - 2026-08-27

### Fixed

- Fixed production builds failing on Vercel: `pnpm-workspace.yaml` had lost `sharp: true` from `allowBuilds`, so pnpm blocked `sharp`'s native-binary install script on a clean install. Astro's `<Image>` component (used by `Project.astro`) needs that binary to optimize images at build time. Worked locally only because a pre-existing `node_modules/sharp` build was already present; a clean clone — like Vercel's — had nothing to fall back on.
- Fixed `.gitignore` excluding the entire `.github/` directory (grouped, incorrectly, under a "dependencies" comment alongside `.vscode/`), which meant `.github/workflows/ci.yml` was never committed and CI never ran on push or PR.

## [1.3.1] - 2026-08-27

### Changed

- Narrowed `ContactForm`'s props to just what it renders: `contact: ContactCopy` (the already-resolved `ui.contact` slice) and `lang: Lang`, instead of the full translation object. `ContactCopy` is derived with `Resolved<typeof ui.contact>`.
- Updated dependencies to their latest compatible versions: `astro` 7.2.9, `@astrojs/react` 6.0.4, `@astrojs/vercel` 11.0.8, `astro-icon` 1.2.0, `lucide-react` 1.34.0, `react-hook-form` 7.86.0, `resend` 6.24.0, `sharp` 0.35.4, `eslint` 10.9.1, `typescript-eslint` 8.68.0.

### Fixed

- Pinned `typescript` back to `6.0.3` after a bump to `7.0.2` silently broke `astro check`: TypeScript's new native compiler doesn't expose the programmatic API `@astrojs/language-server` depends on yet ([tracking issue](https://github.com/withastro/roadmap/discussions/1321)). The build itself (Vite/esbuild) was unaffected — only typechecking failed outright. `6.0.3` is still the latest `6.x` release.

## [1.3.0] - 2026-08-27

### Added

- New `SITE` config object (`src/config/site.ts`) as the single source of business/site metadata: contact info, social links, services, FAQ items, business hours, legal pages, and full SEO defaults (keywords, Open Graph image, Twitter card, geo, theme color).
- JSON-LD structured data on every page: `Organization`, `WebSite`, `ProfessionalService`, `Service`, and `FAQPage` schemas, generated per-locale from `SITE` via `src/libs/seo.ts` and injected through a new `<JsonLd>` component.
- `src/components/seo/BaseHead.astro`: centralizes `<title>`, meta description, canonical URL, robots directives, Open Graph, and Twitter Card tags, with `title`/`description`/etc. falling back to `SITE.seo` defaults when a page doesn't set them.
- `PreloadFont` component: preloads the correct font (Geist Pixel or Nunito) for the active design, replacing the inline conditional that lived in `Layout.astro`.
- Static SEO/PWA routes: `robots.txt`, `sitemap.xml`, and `manifest.webmanifest`, all sourced from `SITE`.

### Changed

- Consolidated the two-dimensional translation system (language × design) into one file and one resolver: `src/i18n/ui.ts` holds every string once, nested as `{ es, en }` and/or `{ TERMINAL, FORMAL }` wherever it varies, and a single recursive `translate()` walks the tree regardless of shape. Replaces the previous `src/i18n/es.ts` + `en.ts` pair and the per-key `ByDesign` type.
- Replaced the repeated `getDesign(Astro.url)` + `getTranslations(lang)` pair in every section with one `useI18n(Astro)` hook returning `{ t, lang, design }`.
- Renamed `src/types/language.d.ts` → `src/types/i18n.d.ts` and `src/libs/language-path.ts` → `src/libs/alternate-url.ts` (now also home to `getAlternateDesignUrl`, previously in `libs/design.ts`).
- Moved `card-accent.ts` into `src/modules/portfolio/libs/`, alongside the components that use it, instead of a top-level `src/libs/`.

## [1.2.2] - 2026-08-27

### Fixed

- Fixed content collections silently depending on a stale `.astro` cache: the config file lived at `src/content/index.ts`, a path Astro doesn't read (it only recognizes `src/content.config.ts`). A clean install/build produced zero projects or certificates and dropped the `image()` schema helper entirely. Renamed to `src/content.config.ts`; `astro check` went from 37 errors to 0.
- Fixed a type mismatch on `NavItem.label`: `TopMenu` already resolved it to a plain string, but the type still declared it as the bilingual `{ es, en }` shape and `AsideMobileMenu` re-translated it a second time. Narrowed the type to `string` and dropped the redundant translation call.
- Fixed a duplicate `output: "static"` key in `astro.config.mjs` and an invalid `"types": "module"` field in `package.json` (the correct key, `"type"`, was already present).

### Removed

- Removed `src/libs/utils.ts` (`cn()` helper) and its two dependencies, `clsx` and `tailwind-merge` — unused since the shadcn `ui/` wrappers were dropped in 1.2.0.
- Removed three more leftover shadcn dependencies with no remaining import: `@radix-ui/react-label`, `@radix-ui/react-slot`, `class-variance-authority`.
- Removed `tw-animate-css` (dev dependency and its `@import`) — no `animate-*` utility from it was ever used.
- Removed the dead `nav` translation namespace from `src/i18n` (both languages) and its `Nav` type; navigation labels are sourced from `SITE.navigation` instead.
- Removed unused `contact.submit.sending` and `contact.submit.successMessage` translation keys and their type fields; the app renders whatever message the `sendContactEmail` action returns.
- Removed unused CSS: the `.card-headline` and `.media-frame-flush` classes (both design skins), and the `--amber`, `--muted`, `--destructive` color tokens together with their now-orphaned `@theme` mappings (`--color-cyan`, `--color-amber`, `--color-orange`, `--color-pink`, `--color-violet`, `--color-popover`, `--color-popover-foreground`, `--color-muted`, `--color-destructive`, `--radius-sm`).
- Removed five `Layout.astro` pass-through props (`image`, `canonical`, `keywords`, `ogType`, `noindex`) that no page ever set; `BaseHead` already falls back to the same `SITE.seo` defaults, so behavior is unchanged.

## [1.2.1] - 2026-08-25

### Changed

- Updated live URL for the "Artesana de Luz" project to `https://artesanadeluz.vercel.app` in both ES/EN content files.

### Added

- Added TODO comment in `src/config/lib/design.ts` for pending alternate-design URL logic.

## [1.2.0] - 2026-08-25

### Added

- New TERMINAL design (pixel-art / terminal aesthetic), now the site's primary experience at `/` and `/certificates`: Geist Pixel headings, JetBrains Mono body copy, hard-edged (0-radius) surfaces, oklch color tokens, and command-style section headings (`$ ls ./stack`, `cat ./sobre-mi.md`).
- `public/fonts/geist-pixel.woff2` (Geist Pixel, OFL license, from `vercel/geist-font`).
- Dual-design architecture driven entirely by the URL: `src/config/lib/design.ts` resolves `DESIGN` to `"TERMINAL"` or `"FORMAL"` from the path, and `<html data-design>` switches the active skin. One HTML tree, two looks.
- `src/modules/portfolio/`: a single module holding all components, sections, and the shared layout — no per-design duplication of markup.
- Split stylesheets with one shared class vocabulary: `styles/portfolio.css` (design tokens for both + base + structural classes), `styles/terminal.css` and `styles/formal.css` (one skin each). Changing a design means editing exactly one file.
- Design-aware translations in `src/config/i18n`: text that differs between designs is written inline as `{ TERMINAL: "...", FORMAL: "..." }` and read as `t.about.title[DESIGN]`, keeping i18n the single source of truth for all copy.
- New `/formal` and `/formal/certificates` routes (plus `en`/`es` prefixed variants) serving the original shadcn/Nunito design as a formal-presentation alternative.
- macOS-style windowed chrome for the TERMINAL design: a title bar with traffic-light dots on the contact form, and matching mini terminal windows (path + `>`-prompt title) on project and certificate cards.
- Per-card rotating accent colors (cyan, violet, green, pink, orange) for project and certificate cards via `getCardAccent()`.
- Pixel-art card treatment: offset hard-edged border shadow, corner accent squares revealed on hover, and a lighter top-edge highlight border on windowed cards, tuned for light and dark mode.

### Changed

- Replaced the formal/shadcn design as the homepage with the new TERMINAL design; the original design is preserved and now lives at `/formal`.
- Collapsed all page files into `src/pages/[...route]/index.astro` and `src/pages/[...route]/certificates.astro`; two files now generate all 12 routes (language prefix × design), replacing the previous eight.
- Reorganized shared code under `src/config/`: `i18n`, `const/routes.ts` (keyed by `TERMINAL`/`FORMAL`), `lib/design.ts`, `lib/route-params.ts`, `lib/language-path.ts`, `hooks/use-contact-form.ts`, and the shared `Seo`/`ThemeScript`/`sonner` components.
- Sections now read their own translations instead of receiving a `t` prop, removing prop drilling across pages and components.
- Primary accent for the TERMINAL design changed from orange to blue; `$` prompt glyphs render green, section badges stay on the fixed primary accent, and per-card colors supply the remaining variety.
- `.chip` no longer forces `whitespace-nowrap`; long certificate skill names wrap inside the pill instead of overflowing the card.
- Certificate cards no longer use a fixed height; they size to content, matching project cards.
- Removed the redundant `hover:underline` class from the hero description link in `config/i18n`; the TERMINAL design keeps a permanent underline with a hover color change, and the FORMAL design keeps its own CSS-driven hover underline.

### Removed

- Removed the pulsing status-dot indicator next to the logo in the navbar.
- Removed the shadcn `ui/` component wrappers (`badge`, `button`, `card`, `input`, `label`, `textarea`) in favor of the shared semantic class vocabulary; `sonner` is the only remaining shadcn component.
- Removed the `terminal.*` translation namespace, folded into the design-aware keys described above.

### Fixed

- Fixed certificate cards overflowing their window frame when a long skill name or a fixed card height pushed content past the visible border.
- Fixed long project titles (e.g. "Fundación Huellitas Felices") colliding with the Public/Private badge; the title now wraps and the badge no longer shrinks.
- Fixed the "amber" accent looking muddy as a rotating card color and as the contact-form traffic-light dot; added dedicated, theme-fixed macOS red/yellow/green for the dots and dropped amber from the card accent rotation.

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

- **Current version**: 1.4.0
- **Node.js**: >= 22.12.0
- **pnpm**: >= 9.0.0
- **Browsers**: Modern browsers (Chrome 90+, Firefox 88+, Safari 14+, Edge 90+)
- **Astro**: 7.2.1
- **Tailwind CSS**: v4.3.3
