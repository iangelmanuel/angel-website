# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

## [1.9.0] - 2026-09-26

### Added

- New project entry **May-O (Experimental)** (ES/EN `.yml` + `may-o-project.webp` cover): an AI assistant chat that brings together multiple AI models, listens and talks back. Built with Next.js, TypeScript, Tailwind CSS, React and OpenRouter; public repo and live demo at `may-o.vercel.app`, marked as `featured`.

### Changed

- Moved the route map from `src/const/routes.ts` to `src/config/routes.ts`, alongside `site.ts`; contents unchanged. Imports updated in `TopMenu.astro`, `BlogPostCard.astro`, `PostDetail.astro`, `About.astro`, `src/libs/alternate-url.ts`, `src/libs/design.ts` and `src/pages/sitemap.xml.ts`.
- Solis CRM renamed from "Solis CRM (Beta)" to "Solis CRM (Experimental)" in both languages.
- Card accent rotation in `src/libs/card-accent.ts` now starts with `blue` and drops `pink`: `blue`, `violet`, `cyan`, `green`, `orange`.
- Discord entry in `SITE.social` now points to the "Friends Developers" server invite (`discord.gg/mYHsVjWqdJ`) instead of the placeholder `angelmanuel` link.
- README: the website link now points to `https://angeldm.dev`, and the "Hecho por Angel DM" footer links there too.

### Removed

- Removed `src/const/routes.ts`, superseded by `src/config/routes.ts`.
- Removed the background-options comment from `LinksLayout.astro`.

## [1.8.0] - 2026-09-16

### Added

- New standalone `/links` page in its own feature (`src/features/links/`): a link-in-bio for the social accounts, Spanish-only and locked to the TERMINAL design. It deliberately bypasses `Layout.astro` — `LinksLayout.astro` ships its own `<html>`, head and SEO, with no TopMenu, Footer, Toaster, i18n or site-wide JSON-LD.
- Animated ASCII plasma background for `/links` (`PlasmaFieldBackground.astro`), rendered on a 2D canvas with no external library: three crossing sine waves drive a 13-symbol density ramp (`. : ~ ; ! + ? = * % # & @`), colored from the theme tokens. Clicking (or tapping) fires an expanding shockwave that fades over 1.4s and returns the field to its normal rhythm. Runs at 20fps (14fps under 640px), caps `devicePixelRatio` at 1.5, batches draws into 5 color buckets, pauses when the tab is hidden and renders a single static frame under `prefers-reduced-motion`.
- Second background kept as an alternative (`CodeGridBackground.astro`): radar-style pulses that light up cells of a code grid. Swapping backgrounds is a one-line import change in `LinksLayout.astro`.
- Brand colors per social network on the `/links` cards, plus 4 new local icons (`instagram`, `youtube`, `discord`, `mail`) in the same style as the existing ones — Lucide no longer ships brand marks.
- Blog post SEO: `article:*` Open Graph meta (published time, author, section, one tag per entry), `twitter:image:alt`, the post cover as `og:image` with its real dimensions, and a `BlogPosting` JSON-LD (`blogPostingLd` in `src/libs/seo.ts`) wired to the existing `#organization`/`#website` nodes.
- `<slot name="jsonld" />` in `Layout.astro`, so a page can inject its own structured data into `<head>`.

### Changed

- `projects` collection migrated from `.md` to `.yml`: the markdown bodies were never rendered anywhere, so the frontmatter is now the whole file. Loader pattern updated in `src/content.config.ts`; the schema is unchanged.
- `SITE.social` restructured from a map of URLs into a map of objects (`label`, `handle`, `url`, `icon`, `color`), making it the single source for `/links`. Consumers updated: `Footer.astro`, `Hero.astro` and the `sameAs` arrays in `src/libs/seo.ts`.
- `sitemap.xml` now lists every non-draft blog post in both languages (with the post's publish date as `lastmod`) plus `/en`; previously it only listed `/`.
- `/links` tuned for mobile: safe-area insets for notched devices, `:active` feedback on the link rows (there is no hover on touch), per-row `backdrop-filter` disabled under 640px, and a lower frame rate on small screens.
- Prose peak color swapped from pink to the theme's `--orange`, the only warm token, so the densest glyphs actually contrast against the blue/cyan/green levels.
- FORMAL prose `h2` no longer draws a rule underneath it.
- FORMAL hero badge (years of experience) dropped its border; it is now a solid pill.
- The navbar logo always sits on a black background, in every theme and design.
- Dependencies updated and pinned to exact versions: `astro` 7.3.2, `@astrojs/react` 6.0.5, `@astrojs/vercel` 11.0.10, `react`/`react-dom` 19.3.0, `@types/react`/`@types/react-dom` 19.3.0, `lucide-react` 1.46.0, `react-hook-form` 7.88.0, `resend` 6.28.0, `eslint` 10.10.0, `typescript-eslint` 8.70.0, `prettier-plugin-astro` 1.0.0 (its major bump reformatted the `.astro` files repo-wide). `typescript` stays on `6.0.3` — 7.x still breaks `astro check`, as noted in 1.3.1.

### Fixed

- Fixed the `prettier:check` CI job failing: `.prettierrc` declared `importOrder`, `importOrderSeparation` and `importOrderSortSpecifiers`, options belonging to `@trivago/prettier-plugin-sort-imports`, a plugin that was never installed. Prettier emitted three warnings per file (hundreds of lines of log noise) and the job then failed on 4 genuinely unformatted files. Removed the dead options and formatted the repo.
- Fixed an ESLint `prefer-const` error in `CodeGridBackground.astro`.

### Removed

- Removed `src/features/links/const/links.ts`; the link data now lives in `SITE.social`.
- Removed the six `src/content/projects/**/*.md` files, superseded by their `.yml` equivalents.

## [1.7.0] - 2026-09-15

### Added

- New **blog feature** in its own `src/features/blog/` directory: `components/BlogPostCard.astro`, `sections/Blog.astro` (landing preview) and `sections/PostDetail.astro` (full article), imported by the pages rather than living inside the landing feature.
- New `blog` content collection (`src/content/blog/{es,en}/*.md`) with `title`, `description`, `publishDate`, `image` (optional, cover for the landing card only), `tags` (optional) and `draft` (default `false`). Drafts are excluded from both the landing list and static path generation.
- Blog section on the landing page, between Projects and Contact: the 3 most recent non-draft posts for the active language, hidden entirely when there are none. A single post is pushed to the right column of the 2-column grid.
- Post detail route `src/pages/[...route]/blog/[slug].astro`: `getStaticPaths` crosses locale × design × post, so every post is generated for the 4 route variants (`/blog/…`, `/en/blog/…`, `/formal/blog/…`, `/en/formal/blog/…`). Posts share the same slug across languages so the language toggle keeps working on detail pages.
- `blog` entry in `src/const/routes.ts` (`/blog` and `/formal/blog`), plus slug-preserving support in `getAlternateDesignUrl` — switching TERMINAL ↔ FORMAL from a post now stays on that post instead of falling back to the home page.
- New `ui.blog` i18n namespace (`badge`, `title`, `readMore`, `backToHome`).
- Full prose typography system (`.prose-content`) for both designs, covering every markdown format a post can use: `h2`–`h5`, bold, italics, underline, links, ordered/unordered/nested lists, task lists, blockquotes, a `.note` callout (raw HTML block, no extra plugin), tables, inline code, fenced code blocks (Shiki highlighting, built into Astro), images and horizontal rules.
- Starlight-style heading anchors: a client script (`astro:page-load`) appends a `#` link to every `h2`–`h5` of the rendered markdown, revealed on hover and pinning the section hash on click, with `scroll-margin-top` so the jump clears the navbar.
- New `docs/` directory with `docs/blog.md`: file and asset conventions, frontmatter reference table, and every supported markdown format for writing a post.
- First blog post, "De estudiar negocios a convertirme en desarrollador Full Stack" (ES/EN), with its assets in a per-post folder (`src/content/assets/blog/<slug>/`).

### Changed

- FORMAL light mode: `--muted-foreground` darkened from `oklch(0.556 0 0)` to `oklch(0.42 0 0)` — descriptions and body copy were nearly illegible against white. Applies project-wide through the token (`body-text`, `card-text`, `card-meta`, `stat-label`, prose…), leaving dark mode untouched.
- TERMINAL light mode: `--muted-foreground` lightened from `oklch(0.42 0.015 285)` to `oklch(0.5 0.015 285)`, since at `0.42` descriptions read almost the same color as the near-black titles.
- Prose polish pass in both designs: larger headings with more vertical rhythm (`h2` now `lg`/`xl` in TERMINAL and `xl`/`2xl` in FORMAL, with a rule underneath and a `>` prefix in TERMINAL), blockquotes that are actually visible (accent left bar + surface background instead of faint dim italics), table headers with real contrast plus zebra rows and hover, dashed `hr` with wider spacing, offset shadow on code blocks, and a `.note` callout styled distinctly from blockquotes.
- Resized `midudev.webp` from 6048×4944 (1.3 MB) to 1600×1308 (198 KB) — Astro re-encodes images but does not downscale them, so oversized sources ship as-is.

## [1.6.0] - 2026-09-15

### Added

- New "Experience" subsection in About, rendered above Education: a left-border timeline list (accent-colored bar for the current position) backed by a new `experience` content collection (`src/content/experience/{es,en}/*.yml`) with `title`, `companyUrl` (optional), `position`, `logo`, `order`, `startDate`, `endDate` (optional), `isCurrent`, and `location` (optional). Company name links out to `companyUrl` when present, plain text otherwise.
- New `education` content collection (`src/content/education/{es,en}/*.yml`), replacing the hardcoded `ui.about.education.list` array: `academy`, `degree`, `year`, `logo`, `order`, and `courses`. Both collections sort by an explicit `order: number` field.
- New `src/content/assets/experience/` and `src/content/assets/education/` directories holding the collections' `logo` images (via the `image()` schema helper), migrated from `public/img/academy-logo/`.
- Restored the connected vertical timeline (rail + dot per entry) for the Education list.

### Changed

- Restructured `src/modules/portfolio` into feature-scoped `src/features/{landing,certificates}` directories — each holds only the sections/components/hooks/actions/const/types it uses. Code shared by both features was promoted to top-level `src/`: `card-accent.ts` → `src/libs/`, and `portfolio.css`/`terminal.css`/`formal.css` → new `src/styles/`.
- `src/actions/index.ts` (Astro's required actions entrypoint) now imports its handler from `@/features/landing/actions/send-contact-email` instead of a local `./email/` subfolder.
- Education entries in About now render as a compact card (logo, academy, degree, year chip, course count) instead of the previous stats-grid + timeline-dot layout.

### Removed

- Removed the Education stats summary (courses completed / hours completed / certifications) from the About section.
- Removed `public/img/academy-logo/`, superseded by `src/content/assets/education/`.
- Removed the old `src/hooks/` directory (only held the now-relocated `use-contact-form.ts`).

## [1.5.3] - 2026-09-13

### Changed

- Replaced the `angel.library` project cover image (`src/content/assets/projects/angel-library-project.webp`) again.
- Replaced the Solis CRM project cover image and renamed it from `solis-crm-whatsapp-project.webp` to `solis-crm-project.webp`; updated the `image` field in both `src/content/projects/es/solis-crm.md` and `src/content/projects/en/solis-crm.md`.
- Reordered the card accent rotation in `src/modules/portfolio/libs/card-accent.ts` to start with `violet` instead of `cyan` (`violet`, `cyan`, `green`, `pink`, `orange`), so the first project and certificate cards now render violet and the second cyan.

### Removed

- Removed `src/content/assets/projects/solis-crm-whatsapp-project.webp`, superseded by `solis-crm-project.webp`.

## [1.5.2] - 2026-09-08

### Added

- Added `public/img/angel-website.webp`, a single hero screenshot of the TERMINAL design, replacing the previous two-image (TERMINAL + FORMAL) README banner.

### Changed

- Rewrote `README.md` from scratch: single-image cover, one-sentence value proposition, "Qué es"/"Stack"/"Empezar"/"Añadir un proyecto"/"Licencias"/"Autor" sections, and a scripts table — trimmed from ~305 to ~140 lines and dropped all decorative emoji except the closing star.
- Switched the version badges (Astro, React, Tailwind CSS, TypeScript, GSAP) from `for-the-badge` pills with full semver to flat-style badges showing only the major version, and added a flat MIT license badge linking to `LICENSE`.

### Removed

- Removed `public/img/angel-website-1.webp` and `public/img/angel-website-2.webp`, superseded by the single `angel-website.webp` banner.

## [1.5.1] - 2026-09-07

### Changed

- Replaced the `angel.library` project cover image (`src/content/assets/projects/angel-library-project.webp`).

## [1.5.0] - 2026-09-02

### Added

- Added three new project entries (ES/EN content + `.webp` cover images): `angel.library` (personal technical knowledge base, Astro/TypeScript/Tailwind/React), `Solis CRM (Beta)` (multi-tenant WhatsApp CRM, Next.js/Prisma/PostgreSQL/OpenRouter), and `Verlun Studio` (business-services site, Astro/TypeScript/Tailwind/React).
- Added `"paused"` and `"beta"` to the `projects` collection's `status` enum (`src/content.config.ts`) to support Solis CRM's beta state.

### Changed

- `Project.astro` now caps the technologies chip row at 4 badges, with the remainder collapsed into a trailing `+N` badge — matching the overflow pattern already used on certificate skill chips.

### Removed

- Removed seven completed project entries (ES/EN content + cover images) superseded by the three added above: Artesana de Luz, Business Concept, GS Construction Group, Fundación Huellitas Felices, iBluewave Technology, Lúdico BQ, and Rise Dashboard Manager.

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

- **Current version**: 1.9.0
- **Node.js**: >= 24.19.0
- **pnpm**: >= 11.17.0
- **Browsers**: Modern browsers (Chrome 90+, Firefox 88+, Safari 14+, Edge 90+)
- **Astro**: 7.3.2
- **Tailwind CSS**: v4.3.3
