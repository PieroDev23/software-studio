import { useTranslations } from "next-intl";

import SiteFooter from "@/components/site-footer";
import { getCaseStudy } from "@/lib/case-studies";

import { CaseStudyFooter } from "./case-study-footer";
import { CaseStudyHero } from "./case-study-hero";
import { ChallengeSection } from "./challenge-section";
import { MovesSection } from "./moves-section";
import { OutcomeSection } from "./outcome-section";
import { PremiseSection } from "./premise-section";
import { ShiftSection } from "./shift-section";
import { StoryMediaSection } from "./story-media-section";

function CaseStudyPage({ study, locale }) {
  const translate = useTranslations("CaseStudy");
  const nextStudy = getCaseStudy(study.next, locale);

  return (
    <>
      <main className="bg-background text-foreground">
        <article>
          <CaseStudyHero study={study} translate={translate} />
          <PremiseSection study={study} label={translate("premise")} />
          <ChallengeSection
            study={study}
            label={translate("challenge")}
            translate={translate}
          />
          <ShiftSection study={study} translate={translate} />
          <MovesSection moves={study.moves} translate={translate} />
          <StoryMediaSection
            study={study}
            translate={translate}
            layout="details"
          />
          <OutcomeSection
            study={study}
            label={translate("outcome")}
            translate={translate}
          />
        </article>
        <CaseStudyFooter nextStudy={nextStudy} translate={translate} />
      </main>
      <SiteFooter />
    </>
  );
}

export default CaseStudyPage;
