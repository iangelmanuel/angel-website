---
title: "angel.library"
description: "Personal technical knowledge library: snippets, recipes, commands, and quick references for web development. Look up concepts, retrieve code, and keep learning from a single place."
publishDate: 2026-08-16
technologies: ["Astro", "TypeScript", "Tailwind CSS", "React"]
githubUrl:
  { url: "https://github.com/iangelmanuel/angel-library", isPrivate: false }

liveUrl: "https://angel-library.vercel.app"
image: "../../assets/projects/angel-library-project.webp"
featured: true
status: "completed"
---

angel.library is my technical second brain: a personal library where I document snippets, recipes, commands, patterns, and web development findings, organized so they can be consulted in seconds instead of repeating the same internet search every six months.

**## Key Features**

- **Category → Subcategory → Module → Section model**: each document lives in `src/content/<category>/<subcategory>/<file>.md`; the folder determines where it appears and its URL, so recategorizing means moving a file, never editing code.

- **14 content types with their own schema**: guides, recipes, commands, snippets, patterns, integrations, and more, each with different required fields (`command` for commands, `url` + `resourceCategory` for resources), validated in a single Zod collection.

- **Integrated terminal (Ctrl/Cmd+K or `/`)**: a console with a real shell-like aesthetic where you can search by text, filter by tags with `#`, or execute navigation commands (`/ls`, `/cd`, `/random`), with personal shortcuts for private entries.

- **Instant search with Fuse.js**: a build-generated index (`search-index.json`) is downloaded once per session and allows searching without a server round-trip.

- **Code blocks with superpowers**: header with the file name, a copy button per block, and a "copy all" button that concatenates the complete code from a page into a single pasteable block; `bash` installation blocks automatically expand into pnpm/Bun/npm tabs.

- **Complete SEO from a single source**: Open Graph, Twitter Cards, Organization and WebSite JSON-LD, sitemap, and robots.txt generated at build time from a single `SITE` object, with no duplicated data between pages.

**## Technical Architecture**

- **Framework**: Astro 7 in `static` mode, zero backend — all content is resolved at build time.

- **Content**: a single `content collection` with `z.discriminatedUnion("type", …)`; each entry's ID is its file path, from which category, subcategory, and URL are derived without duplicating that information in the frontmatter.

- **Build-time validation**: three custom checks run inside `getStaticPaths()` and **break the build** with a message in Spanish if a folder is not declared, a reference (`related`, `technologies`) points to something that does not exist, or an internal link in the body leads nowhere.

- **Minimal interactivity**: React is only used where client-side state is required — the terminal and mobile navigation —; the rest of the site is pure Astro without JavaScript.

- **Styling**: Tailwind CSS v4 via `@tailwindcss/vite` (without `tailwind.config`), with all design tokens defined as CSS variables and a fixed dark theme.

- **Custom Markdown pipeline**: Shiki for syntax highlighting, a remark plugin that detects installation commands and generates package manager tabs, and external links with automatic `rel="noopener noreferrer"`.

- **CI/CD**: GitHub Actions runs `astro check`, ESLint, and Prettier in parallel, with a production build as the final gate before any merge.

- **Deployment**: Vercel, with the production URL resolved from environment variables and a safe default value so an unconfigured deployment never publishes the site with `noindex`.

**## Unique Challenges**

- **Migrating 689 documents without breaking a single URL**: the project originally organized content by type (`src/content/guides/`, `src/content/commands/`…) and was migrated to a category-based structure. I wrote a migration script with a `--dry-run` mode that rewrote references, internal links, and file paths in one pass, verified against the complete tree before making any changes.

- **Collapsing 14 collections into one without losing type safety**: replacing 14 `defineCollection` declarations with a Zod discriminated union required each type to retain its required fields (a `command` is not optional in `commands`, a `resource` requires `url`) while sharing the same loader and cross-validation rules.

- **Ensuring broken content never reaches production**: instead of relying on manual review across hundreds of Markdown files, I built three validators that fail the build with the exact file and line — folder structure, cross-entry references, and internal links in the document body.

- **A circular dependency in domain resolution**: `astro.config.mjs` needed to read the public domain from the same configuration Astro populates from that field, which silently produced `localhost` on any build without the explicit environment variable. The solution was to read directly from the process environment and use the production domain as the default instead of `localhost`.

**## Design and User Experience**

The interface follows a **terminal/pixel-art aesthetic**: fixed dark theme, Geist typography (Sans for text, Mono for code, Pixel for headings), square corners, and a hover effect that simulates a window "powering on" with the accent color of its category.

- **The terminal as a navigation paradigm**, not just a search tool: Ctrl/Cmd+K opens a real console where typing is faster than clicking, designed for people who already know what they are looking for.

- **Shell-prompt-style breadcrumbs** (`dev@workspace angel.library : ~/category/entry`), consistent with the rest of the visual identity.

- **Intentional reading order**: within a subcategory, the previous/next button follows a fixed learning curve — fundamentals and guides before recipes and tricks — so a solution never appears before the concept that supports it.

- **Three-level sidebar** (category → subcategory → entry) with a thin vertical guide instead of large indentation, necessary to fit hundreds of entries without becoming difficult to read.

- **Accessibility by default**: skip link, semantic `<main>`/`<nav>`/`<footer>`, a single `h1` per page, and a custom 404 page that maintains the complete layout — sidebar and search included — so a broken link never takes the reader out of the site.
