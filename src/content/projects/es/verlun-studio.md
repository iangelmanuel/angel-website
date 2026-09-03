---
title: "Verlun Studio"
description: "Verlun Studio es mi miniempresa donde ofrezco servicios de potencialización de empresas para la mejora de desarrollo, software, marketing, automatización, comunicación, procesos, marca, redes y organización de un negocio."
publishDate: 2023-12-30
technologies: ["Astro", "TypeScript", "Tailwind CSS", "React"]
githubUrl:
  { url: "https://github.com/iangelmanuel/verlun-website", isPrivate: true }

liveUrl: "https://verlun.com"
image: "../../assets/projects/verlun-studio-project.webp"
featured: true
status: "completed"
---

# Verlun Studio

Verlun Studio es mi miniempresa donde ofrezco servicios de potencialización de empresas para la mejora de desarrollo, software, marketing, automatización, comunicación, procesos, marca, redes y organización de un negocio.

## Funcionalidades Clave

- **Diagnóstico interactivo**: Widgets animados en la página de inicio que muestran problemas reales de presencia digital, comunicación y operaciones (bounce rate, tono de marca inconsistente, hojas de cálculo desactualizadas).
- **Comparativa Agencia vs Freelance vs Verlun**: Tabla que posiciona la propuesta de valor frente a las dos alternativas del mercado.
- **Showcase de casos con métricas reales**: Seis proyectos documentados (Lúdico BQ, Rise Dashboard Manager, GS Construction Group, Fundación Huellitas Felices, Artesana de Luz, iBluewave Technology), cada uno con su resultado cuantificado.
- **Formulario de contacto con integración a WhatsApp**: El envío del formulario redirige a un mensaje prellenado en WhatsApp Business, reduciendo fricción en el primer contacto.
- **Sección de método en 4 pasos**: Diagnóstico → Propuesta → Ejecución → Entrega, explicado de forma visual.
- **Optimización de rendimiento**: Mockups de Lighthouse embebidos en la página mostrando puntuaciones reales de velocidad, SEO y accesibilidad.

## Arquitectura Técnica

- **Framework**: Astro para renderizado estático y máximo rendimiento
- **Componentes interactivos**: React para las piezas que requieren estado (formulario, calendario editorial animado, widgets de dashboard simulado)
- **Estilos**: Tailwind CSS
- **Lenguaje**: TypeScript en todo el proyecto
- [Suposición] **Despliegue**: Probablemente Vercel, dado que tienes ese conector activo — confírmalo si es distinto.

## Retos Únicos

- Construir widgets de UI simulada (dashboard en vivo, calendario editorial, tienda con inventario) que se ven funcionales pero son piezas estáticas de storytelling, no producto real — el reto es que parezcan reales sin generar expectativas falsas.
- Diseñar una tabla comparativa (Agencia / Freelance / Verlun) que sea persuasiva sin caer en el vocabulario prohibido de tu propio manual de marca ("soluciones de vanguardia", etc.).
- Integrar el envío de formulario directo a WhatsApp Business sin backend propio de gestión de leads.
- Mantener la identidad "Cobalto Nocturno" (`#2547FF`, `#0A0A0F`, `#FAFAFA`) consistente en cada componente, incluyendo los mockups embebidos de otros "productos" (dashboard, tienda, calendario).
- Optimización SEO y Core Web Vitals reales, no solo mostrados como mockup — el sitio necesita sostener las métricas que exhibe.

## Diseño y Experiencia de Usuario

La experiencia de usuario de Verlun sigue el principio de "Minimalismo en movimiento": simetría, tipografía Geist, y animaciones sutiles que refuerzan el mensaje sin saturar. Estrategias implementadas:

- **Storytelling basado en problemas reales**: cada sección abre con un "detectado" (bounce rate, redes desconectadas, hojas de cálculo con errores) antes de presentar la solución — genera identificación antes de vender.
- **Prueba social cuantificada**: cada caso de éxito lleva un resultado numérico (+340% en consultas, ×3 en reconocimiento, 80% menos tiempo de gestión).
- **Jerarquía clara de tres pilares**: Presencia Digital, Operaciones Inteligentes, Comunicación y Crecimiento — representados con el mismo peso visual, sin que ninguno domine.
- **Accesibilidad y rendimiento**: mockups de Lighthouse con puntuaciones altas (98 rendimiento, 100 SEO, 95 accesibilidad) usados como prueba, no solo como decoración.
- **CTA de baja fricción**: formulario de 5 campos con conteo visible ("0/5") y salida directa a WhatsApp — reduce el abandono típico de formularios largos.
- **Componentes reutilizables**: los widgets de mockup (dashboard, tienda, calendario) comparten el mismo lenguaje visual aunque representan "productos" distintos, reforzando coherencia de marca.
