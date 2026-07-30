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

  return {
    title: `${study.client} — ${study.title} | Manyas`,
    description: study.description,
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
