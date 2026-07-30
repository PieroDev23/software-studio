import { notFound } from "next/navigation";

import CaseStudyMotionShell from "@/components/case-study-motion-shell";
import CaseStudyPage from "@/components/case-study-page";
import { caseStudySlugs, getCaseStudy } from "@/lib/case-studies";

export const dynamicParams = false;

export function generateStaticParams() {
  return caseStudySlugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }) {
  const { locale, slug } = await params;
  const study = getCaseStudy(slug, locale);

  if (!study) {
    return {};
  }

  const title = `${study.client}: ${study.title}`;

  return {
    title,
    description: study.description,
    alternates: {
      canonical: `/${locale}/work/${study.slug}`,
      languages: {
        en: `/en/work/${study.slug}`,
        es: `/es/work/${study.slug}`,
      },
    },
    openGraph: {
      type: "article",
      title: `${title} | Manyas`,
      description: study.description,
      siteName: "Manyas",
      locale: locale === "es" ? "es_PE" : "en_US",
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} | Manyas`,
      description: study.description,
    },
  };
}

export default async function WorkPage({ params }) {
  const { locale, slug } = await params;
  const study = getCaseStudy(slug, locale);

  if (!study) {
    notFound();
  }

  return (
    <CaseStudyMotionShell>
      <CaseStudyPage study={study} locale={locale} />
    </CaseStudyMotionShell>
  );
}
