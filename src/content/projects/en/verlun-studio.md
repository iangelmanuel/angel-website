---
title: "Verlun Studio"
description: "Verlun Studio is my small business where I offer business enhancement services focused on improving development, software, marketing, automation, communication, processes, branding, social media, and business organization."
publishDate: 2025-01-01
technologies: ["Astro", "TypeScript", "Tailwind CSS", "React"]
githubUrl:
  { url: "https://github.com/iangelmanuel/verlun-website", isPrivate: true }

liveUrl: "https://verlun.com"
image: "../../assets/projects/verlun-studio-project.webp"
featured: true
status: "completed"
---

# Verlun Studio

Verlun Studio is my small business where I offer business enhancement services focused on improving development, software, marketing, automation, communication, processes, branding, social media, and business organization.

## Key Features

- **Interactive diagnosis**: Animated widgets on the homepage that showcase real problems related to digital presence, communication, and operations (bounce rate, inconsistent brand tone, outdated spreadsheets).

- **Agency vs Freelance vs Verlun comparison**: A table that positions the value proposition against the two alternatives in the market.

- **Showcase of cases with real metrics**: Six documented projects (Lúdico BQ, Rise Dashboard Manager, GS Construction Group, Fundación Huellitas Felices, Artesana de Luz, iBluewave Technology), each with its quantified result.

- **Contact form with WhatsApp integration**: Submitting the form redirects to a pre-filled message in WhatsApp Business, reducing friction during the first contact.

- **4-step method section**: Diagnosis → Proposal → Execution → Delivery, explained visually.

- **Performance optimization**: Embedded Lighthouse mockups on the page showing real speed, SEO, and accessibility scores.

## Technical Architecture

- **Framework**: Astro for static rendering and maximum performance

- **Interactive components**: React for pieces that require state (form, animated editorial calendar, simulated dashboard widgets)

- **Styling**: Tailwind CSS

- **Language**: TypeScript throughout the project

- [Assumption] **Deployment**: Probably Vercel, given that you have that connector active — confirm if it is different.

## Unique Challenges

- Building simulated UI widgets (live dashboard, editorial calendar, inventory store) that look functional but are static storytelling pieces, not real products — the challenge is making them feel real without creating false expectations.

- Designing a comparison table (Agency / Freelance / Verlun) that is persuasive without falling into the prohibited vocabulary from your own brand manual ("cutting-edge solutions," etc.).

- Integrating direct form submission to WhatsApp Business without a dedicated lead management backend.

- Maintaining the "Cobalto Nocturno" identity (`#2547FF`, `#0A0A0F`, `#FAFAFA`) consistently across every component, including embedded mockups of other "products" (dashboard, store, calendar).

- SEO optimization and real Core Web Vitals, not just displaying them as mockups — the site needs to sustain the metrics it showcases.

## Design and User Experience

Verlun's user experience follows the principle of "Minimalism in Motion": symmetry, Geist typography, and subtle animations that reinforce the message without overwhelming the user. Implemented strategies:

- **Storytelling based on real problems**: each section opens with a "detected" issue (bounce rate, disconnected social media, spreadsheets with errors) before presenting the solution — creating identification before selling.

- **Quantified social proof**: each success case includes a numerical result (+340% in inquiries, ×3 in recognition, 80% less management time).

- **Clear hierarchy of three pillars**: Digital Presence, Intelligent Operations, Communication and Growth — represented with equal visual weight, without any one of them dominating.

- **Accessibility and performance**: Lighthouse mockups with high scores (98 performance, 100 SEO, 95 accessibility) used as proof, not just decoration.

- **Low-friction CTA**: 5-field form with a visible counter ("0/5") and direct exit to WhatsApp — reducing the typical abandonment of long forms.

- **Reusable components**: The mockup widgets (dashboard, store, calendar) share the same visual language even though they represent different "products," reinforcing brand consistency.
