import { notFound } from "next/navigation";

import CaseStudyMotionShell from "@/components/case-study-motion-shell";
import CaseStudyPage from "@/components/case-study-page";
import { caseStudySlugs, getCaseStudy } from "@/lib/case-studies";

export const dynamicParams = false;

export function generateStaticParams() {
  return caseStudySlugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const study = getCaseStudy(slug);

  if (!study) {
    return {};
  }

  const title = `${study.client} — ${study.title}`;

  return {
    title,
    description: study.description,
    alternates: {
      canonical: `/work/${study.slug}`,
    },
    openGraph: {
      type: "article",
      title: `${title} | Manyas`,
      description: study.description,
      siteName: "Manyas",
      locale: "en_US",
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} | Manyas`,
      description: study.description,
    },
  };
}

export default async function WorkPage({ params }) {
  const { slug } = await params;
  const study = getCaseStudy(slug);

  if (!study) {
    notFound();
  }

  return (
    <CaseStudyMotionShell>
      <CaseStudyPage study={study} />
    </CaseStudyMotionShell>
  );
}
