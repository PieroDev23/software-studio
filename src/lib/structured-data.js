import { absoluteUrl, siteConfig } from "@/lib/site-config";

export function getHomeStructuredData(locale, copy) {
  const localeUrl = absoluteUrl(`/${locale}`);

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": `${siteConfig.url}/#organization`,
        name: siteConfig.name,
        url: siteConfig.url,
        description: copy.description,
        address: {
          "@type": "PostalAddress",
          addressLocality: "Lima",
          addressCountry: "PE",
        },
        areaServed: "Worldwide",
        knowsAbout: copy.expertise,
      },
      {
        "@type": "ProfessionalService",
        "@id": `${siteConfig.url}/#studio`,
        name: siteConfig.name,
        url: localeUrl,
        description: copy.description,
        provider: { "@id": `${siteConfig.url}/#organization` },
        areaServed: "Worldwide",
        serviceType: copy.expertise,
      },
      {
        "@type": "WebSite",
        "@id": `${siteConfig.url}/#website`,
        url: siteConfig.url,
        name: siteConfig.name,
        publisher: { "@id": `${siteConfig.url}/#organization` },
        inLanguage: locale,
      },
    ],
  };
}

export function getCaseStudyStructuredData(study, locale, labels) {
  const pageUrl = absoluteUrl(`/${locale}/work/${study.slug}`);

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: labels.home,
            item: absoluteUrl(`/${locale}`),
          },
          {
            "@type": "ListItem",
            position: 2,
            name: labels.work,
            item: `${absoluteUrl(`/${locale}`)}#selected-work`,
          },
          {
            "@type": "ListItem",
            position: 3,
            name: study.client,
            item: pageUrl,
          },
        ],
      },
      {
        "@type": "CreativeWork",
        "@id": `${pageUrl}#case-study`,
        url: pageUrl,
        name: `${study.client}: ${study.title}`,
        headline: study.title,
        description: study.description,
        inLanguage: locale,
        creator: { "@id": `${siteConfig.url}/#organization` },
        about: study.service,
      },
    ],
  };
}
