---
title: "Solis CRM (Beta)"
description: "Solis CRM WhatsApp is a multi-tenant customer relationship management (CRM) system that centralizes the WhatsApp inbox, automates AI-powered conversation flows, and syncs leads, deals, and tickets in one place. Designed for teams managing sales and support through WhatsApp at scale."
publishDate: 2026-07-19
technologies:
  [
    "Next.js",
    "React",
    "TypeScript",
    "Tailwind CSS",
    "Prisma",
    "PostgreSQL",
    "Vercel",
    "OpenRouter",
    "Baileys",
    "Zod",
    "NextAuth.js",
    "Stripe",
    "Cloudinary",
    "Framer Motion",
    "Recharts",
    "dnd kit",
    "XYFlow"
  ]
githubUrl:
  { url: "https://github.com/iangelmanuel/solis-crm-whatsapp", isPrivate: true }

liveUrl: "https://solis-crm-whatsapp.vercel.app"
image: "../../assets/projects/solis-crm-whatsapp-project.webp"
featured: true
status: "beta"
---

# Solis CRM WhatsApp

Solis is a multi-tenant SaaS CRM built for businesses that sell and provide support through WhatsApp. It unifies the inbox, lead/deal management, tickets, automation, and AI-powered responses in a single dashboard, without relying on spreadsheets or a standalone WhatsApp Business app.

## Key Features

- **Unified WhatsApp inbox**: Real-time conversations with complete history, internal notes, multimedia attachments (via Cloudinary), and agent assignment.

- **Dual WhatsApp transport**: Official integration with Meta Cloud API (HMAC-SHA256 signed webhooks) and a Baileys/WhatsApp Web bridge using a QR code as an alternative while Meta business verification is being completed.

- **AI-powered responses**: AI engine (OpenRouter) that groups bursts of incoming messages, classifies intent, and generates automatic responses, with human handoff rules based on urgency patterns in Spanish.

- **Full CRM**: Contacts, leads with a visual deal pipeline (drag & drop), support tickets, and calendar, all with soft-delete and strict company scoping.

- **Visual automation**: Flow builder using a diagram-based interface (@xyflow/react) with AI-assisted flow generation, flattened and executed by a custom engine.

- **Granular roles and permissions**: RBAC with five roles (Super Admin, Owner, Manager, Agent, Viewer) and per-user overrides.

- **Integrated billing**: Plans with usage limits (users, contacts, channels, AI requests, automations, storage) enforced through Stripe.

- **Analytics dashboard**: Conversation metrics, lead conversion, and AI usage metrics by team.

## Technical Architecture

- **Framework**: Next.js 16 (App Router) with React 19, TypeScript throughout the project.

- **Multi-tenancy**: Every table includes `companyId`; dual isolation mechanism — manual scoping in server actions and a Prisma `$extends` that automatically injects `companyId` into all queries.

- **Database**: PostgreSQL via Prisma 7 with the `@prisma/adapter-pg` adapter, with the generated client located outside `node_modules`.

- **Auth**: NextAuth v5 (beta) with JWT strategy, optional Google provider; server-side verification on every request against the user's database row (revoking the session if the user was disabled or soft-deleted).

- **WhatsApp**: Provider registration per channel (`channel-service`), with Meta Cloud API as the long-term target transport and Baileys as a temporary bridge only viable in a persistent Node process (not serverless).

- **AI**: OpenRouter-based client with burst debouncing, intent classification, and usage metrics by plan.

- **Styling**: Tailwind CSS 4 with custom design tokens (dark "obsidian" theme, blue accent), with animations powered by Framer Motion.

- **Payments**: Stripe with custom webhooks and plan-based limit enforcement.

- **Deployment**: Vercel (`output: standalone`), with Baileys marked as an external server package because Turbopack cannot bundle it.

## Unique Challenges

- Maintaining **two WhatsApp transports in parallel** (official Cloud API and unofficial Baileys) behind the same provider interface, without the rest of the codebase needing to know which one is active for each channel.

- Designing multi-tenant isolation so that it is impossible to accidentally bypass: every new query against a tenant-scoped table must go through manual or automatic scoping, without exception.

- Handling Baileys, which requires a long-running Node process (a persistent socket session), within a stack designed by default for serverless — resolved with explicit guards that fail cleanly in unsupported environments.

- Building the AI engine to group burst messages before responding (avoiding replies to each message individually) while still recognizing urgency patterns that must be routed directly to a human.

- Validating Meta webhook signatures (HMAC-SHA256 over the raw request body) and always returning 200 to prevent retry storms, even when the internal handler fails.

## Design and User Experience

Solis uses an "obsidian"-style dark theme (almost-black background, functional blue accent) designed for agents to spend hours in the inbox without visual fatigue. Key decisions:

- **Inbox as the center of gravity**: the entire workflow (leads, tickets, automation) is accessible from the same conversation view, without context switching.

- **Clear conversation states**: closed chats remain in read-only mode, preventing accidental replies outside Meta's 24-hour service window.

- **Real-time feedback**: short animations (Framer Motion) for new messages, status changes, and drag & drop interactions in the deal pipeline.

- **Visual automation before form-based configuration**: the flow builder uses a diagram-style canvas so complex business rules are readable at a glance.

- **Consistent language**: the entire interface and error messages are in Spanish, aligned with the target market.
