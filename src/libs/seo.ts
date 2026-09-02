import { FAQ_ITEMS, SERVICES, SITE } from "@/config/site"
import { createT, DEFAULT_LANG } from "@/i18n"

import type { Lang } from "@/types/i18n"

const SITE_URL = SITE.seo.url
const OG_URL = new URL(SITE.seo.image, SITE_URL).href

const areaServed = () =>
  SITE.seo.areaServed.map((a) => ({ "@type": a.type, name: a.name }))

export function organizationLd(lang: Lang = DEFAULT_LANG) {
  const t = createT(lang)

  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${SITE_URL}#organization`,
    name: SITE.info.name,
    legalName: SITE.info.legalName,
    url: SITE_URL,
    logo: OG_URL,
    image: OG_URL,
    description: t(SITE.seo.description),
    slogan: SITE.info.slogan ? t(SITE.info.slogan) : null,
    foundingDate: String(SITE.info.founded),
    founder: SITE.info.founders.map((f) => ({
      "@type": "Person",
      name: f.name,
      jobTitle: f.role
    })),
    address: {
      "@type": "PostalAddress",
      addressLocality: SITE.location.city,
      addressCountry: SITE.location.countryCode
    },
    areaServed: areaServed(),
    contactPoint: [
      {
        "@type": "ContactPoint",
        contactType: "customer support",
        email: SITE.contact.email,
        telephone: SITE.contact.whatsapp(),
        availableLanguage: SITE.seo.languages,
        areaServed: [SITE.location.countryCode, SITE.seo.contactRegion]
      }
    ],
    sameAs: Object.values(SITE.social),
    knowsAbout: SITE.seo.keywords
  } as const
}

export function webSiteLd(lang: Lang = DEFAULT_LANG) {
  const t = createT(lang)

  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE_URL}#website`,
    url: SITE_URL,
    name: SITE.info.name,
    description: t(SITE.seo.description),
    inLanguage: SITE.seo.locale,
    publisher: { "@id": `${SITE_URL}#organization` }
  } as const
}

export function professionalServiceLd() {
  return {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": `${SITE_URL}#business`,
    name: SITE.info.name,
    image: OG_URL,
    url: SITE_URL,
    telephone: SITE.contact.whatsapp(),
    email: SITE.contact.email,
    priceRange: SITE.seo.priceRange,
    address: {
      "@type": "PostalAddress",
      addressLocality: SITE.location.city,
      addressCountry: SITE.location.countryCode
    },
    areaServed: areaServed(),
    parentOrganization: { "@id": `${SITE_URL}#organization` }
  } as const
}

export function servicesLd(lang: Lang = DEFAULT_LANG) {
  const t = createT(lang)

  return SERVICES.map((s) => ({
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${SITE_URL}#service-${s.id}`,
    name: t(s.h3),
    serviceType: t(s.eyebrow),
    description: t(s.body),
    provider: { "@id": `${SITE_URL}#organization` },
    areaServed: areaServed(),
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: t(s.eyebrow),
      itemListElement: s.items.map((item, i) => ({
        "@type": "Offer",
        position: i + 1,
        itemOffered: { "@type": "Service", name: t(item) }
      }))
    }
  }))
}

export function faqLd(lang: Lang = DEFAULT_LANG) {
  const t = createT(lang)

  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "@id": `${SITE_URL}#faq`,
    mainEntity: FAQ_ITEMS.map((item) => ({
      "@type": "Question",
      name: t(item.q),
      acceptedAnswer: { "@type": "Answer", text: t(item.a) }
    }))
  } as const
}
