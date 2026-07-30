import { caseStudySlugs } from "@/lib/case-studies";
import { absoluteUrl, siteConfig } from "@/lib/site-config";

function languageAlternates(path = "") {
  return {
    en: absoluteUrl(`/en${path}`),
    es: absoluteUrl(`/es${path}`),
    "x-default": absoluteUrl(`/en${path}`),
  };
}

export default function sitemap() {
  const homepages = siteConfig.locales.map((locale) => ({
    url: absoluteUrl(`/${locale}`),
    changeFrequency: "monthly",
    priority: 1,
    alternates: { languages: languageAlternates() },
  }));

  const caseStudies = caseStudySlugs.flatMap((slug) =>
    siteConfig.locales.map((locale) => ({
      url: absoluteUrl(`/${locale}/work/${slug}`),
      changeFrequency: "yearly",
      priority: 0.8,
      alternates: {
        languages: languageAlternates(`/work/${slug}`),
      },
    })),
  );

  return [...homepages, ...caseStudies];
}
