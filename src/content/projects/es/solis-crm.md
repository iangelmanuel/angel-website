---
title: "Solis CRM (Beta)"
description: "Solis CRM WhatsApp es un sistema de gestión de clientes (CRM) multi-tenant que centraliza la bandeja de WhatsApp, automatiza flujos de conversación con IA y sincroniza leads, deals y tickets en un solo lugar. Diseñado para equipos que gestionan ventas y soporte por WhatsApp a escala."
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

Solis es un CRM SaaS multi-tenant construido para empresas que venden y dan soporte por WhatsApp. Unifica bandeja de entrada, gestión de leads/deals, tickets, automatización y respuestas con IA en un solo panel, sin depender de hojas de cálculo ni de WhatsApp Business app suelto.

## Funcionalidades Clave

- **Bandeja de WhatsApp unificada**: conversaciones en tiempo real con historial completo, notas internas, adjuntos multimedia (vía Cloudinary) y asignación de agentes.
- **Doble transporte de WhatsApp**: integración oficial con Meta Cloud API (webhooks firmados con HMAC-SHA256) y un puente Baileys/WhatsApp Web por código QR como alternativa mientras se completa la verificación de negocio de Meta.
- **Respuestas con IA**: motor de IA (OpenRouter) que agrupa ráfagas de mensajes entrantes, clasifica intención y genera respuesta automática, con reglas de handoff a humano por patrones de urgencia en español.
- **CRM completo**: contactos, leads con pipeline visual de deals (drag & drop), tickets de soporte y calendario, todo con soft-delete y scoping estricto por empresa.
- **Automatización visual**: constructor de flujos tipo diagrama (@xyflow/react) con generación de flujos asistida por IA, aplanados y ejecutados por un motor propio.
- **Roles y permisos granulares**: RBAC con cinco roles (Super Admin, Owner, Manager, Agent, Viewer) y overrides por usuario.
- **Facturación integrada**: planes con límites de uso (usuarios, contactos, canales, solicitudes de IA, automatizaciones, almacenamiento) enforced vía Stripe.
- **Panel de analítica**: métricas de conversaciones, conversión de leads y uso de IA por equipo.

## Arquitectura Técnica

- **Framework**: Next.js 16 (App Router) con React 19, TypeScript en todo el proyecto.
- **Multi-tenancy**: cada tabla lleva `companyId`; doble mecanismo de aislamiento — scoping manual en server actions y un `$extends` de Prisma que inyecta `companyId` automáticamente en todas las queries.
- **Base de datos**: PostgreSQL vía Prisma 7 con adaptador `@prisma/adapter-pg`, cliente generado fuera de `node_modules`.
- **Auth**: NextAuth v5 (beta) con estrategia JWT, proveedor Google opcional; verificación server-side en cada request contra la fila del usuario (revoca sesión si fue desactivado o soft-deleted).
- **WhatsApp**: registro de proveedores por canal (`channel-service`), con Meta Cloud API como transporte objetivo a largo plazo y Baileys como puente temporal solo viable en proceso Node persistente (no serverless).
- **IA**: cliente sobre OpenRouter con debounce de ráfagas, clasificación de intención y métricas de uso por plan.
- **Estilos**: Tailwind CSS 4 con tokens de diseño propios (tema oscuro "obsidian", acento azul), animaciones con Framer Motion.
- **Pagos**: Stripe con webhooks propios y enforcement de límites por plan.
- **Despliegue**: Vercel (`output: standalone`), con Baileys marcado como paquete externo de servidor porque Turbopack no puede empaquetarlo.

## Retos Únicos

- Sostener **dos transportes de WhatsApp en paralelo** (Cloud API oficial y Baileys no oficial) detrás de la misma interfaz de proveedor, sin que el resto del código sepa cuál está activo en cada canal.
- Diseñar el aislamiento multi-tenant para que sea imposible de saltarse por accidente: cualquier query nueva contra una tabla de tenant debe pasar por scoping manual o automático, sin excepción.
- Manejar Baileys, que exige un proceso Node de larga duración (sesión de socket viva), en un stack pensado por defecto para serverless — resuelto con guards explícitos que fallan limpio en entornos sin soporte.
- Construir el motor de IA para que agrupe mensajes en ráfaga antes de responder (evitar contestar mensaje por mensaje) y aun así reconocer patrones de urgencia que deben ir directo a un humano.
- Validar firmas de webhook de Meta (HMAC-SHA256 sobre el cuerpo crudo) y devolver siempre 200 para evitar tormentas de reintento, incluso cuando el handler interno falla.

## Diseño y Experiencia de Usuario

Solis usa un tema oscuro tipo "obsidian" (fondo casi negro, acento azul funcional) pensado para que los agentes pasen horas en la bandeja sin fatiga visual. Decisiones clave:

- **Bandeja como centro de gravedad**: todo el flujo de trabajo (leads, tickets, automatización) es accesible desde la misma vista de conversación, sin saltos de contexto.
- **Estados claros por conversación**: chats cerrados quedan en modo solo lectura, evitando respuestas accidentales fuera de la ventana de servicio de 24h de Meta.
- **Feedback en tiempo real**: animaciones cortas (Framer Motion) para nuevos mensajes, cambios de estado y drag & drop en el pipeline de deals.
- **Automatización visual antes que configuración por formularios**: el constructor de flujos usa un canvas tipo diagrama para que reglas de negocio complejas sean legibles de un vistazo.
- **Idioma consistente**: toda la interfaz y mensajes de error están en español, coherente con el mercado objetivo.
