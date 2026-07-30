import { useTranslations } from "next-intl";
import { TerminalMeta } from "@/components/terminal-slash";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import {
  TypographyDisplay,
  TypographyEyebrow,
} from "@/components/ui/typography";
import { cn } from "@/lib/utils";

const team = [
  {
    number: "01",
    name: "Piero Davila",
    initials: "PD",
    theme: "light",
  },
  {
    number: "02",
    name: "Josue Villasante",
    initials: "JV",
    theme: "dark",
  },
  {
    number: "03",
    name: "Sebastian Muñoz",
    initials: "SM",
    theme: "purple",
  },
];

const cardThemes = {
  dark: "team-card-dark text-foreground",
  light: "team-card-light text-inverse-foreground",
  purple: "team-card-purple text-foreground",
};

function TeamCard({ member, translated, edge, compact = false }) {
  return (
    <article
      data-reveal
      className={cn(
        "team-card group relative isolate flex h-full overflow-hidden p-5 sm:p-8",
        compact ? "min-h-[31rem]" : "min-h-[46rem]",
        cardThemes[member.theme],
      )}
    >
      <div className="relative flex w-full flex-col">
        <div className="flex items-start justify-between gap-4 font-mono text-sm font-medium uppercase tracking-[0.12em] opacity-75">
          <p className="flex items-center gap-3">
            <span className="size-2 bg-current" aria-hidden="true" />
            <TerminalMeta text={translated.discipline} />
          </p>
          <p>{member.number}</p>
        </div>

        <div
          className={cn(
            "flex flex-1 items-center justify-center",
            compact ? "py-7" : "py-12",
          )}
          aria-hidden="true"
        >
          <span className="team-card-initials text-[4rem] font-medium leading-none tracking-[-0.04em] opacity-80 sm:text-[clamp(5rem,8vw,8rem)]">
            {member.initials}
          </span>
        </div>

        <div className="team-card-details flex flex-col gap-4 sm:gap-5">
          <h3 className="text-3xl font-medium leading-[1.1] tracking-[-0.03em] sm:text-4xl sm:leading-[1.04]">
            {translated.name}
          </h3>

          <div className="mt-1 border-t border-current/20 pt-4 sm:mt-2 sm:pt-5">
            <p className="mb-2 font-mono text-sm font-medium uppercase tracking-[0.12em] opacity-60 sm:mb-3">
              {edge}
            </p>
            <p className="text-xl font-medium leading-6 tracking-[-0.02em] sm:text-2xl sm:leading-7">
              {translated.edge}
            </p>
            <p className="mt-3 max-w-md text-base leading-6 opacity-70">
              {translated.bio}
            </p>
          </div>
        </div>
      </div>
    </article>
  );
}

function TeamSection() {
  const t = useTranslations("Team");
  const members = t.raw("members");
  return (
    <section
      className="section-frame section-grid section-grid-light bg-inverse text-inverse-foreground"
      aria-labelledby="team-title"
    >
      <div className="content-container">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-8">
          <TypographyEyebrow tone="inverse" className="lg:col-span-2">
            {t("eyebrow")}
          </TypographyEyebrow>
          <TypographyDisplay
            id="team-title"
            as="h2"
            size="statement"
            tone="inverse"
            className="max-w-7xl lg:col-span-10"
          >
            {t("title")}
          </TypographyDisplay>
        </div>

        <Carousel
          className="mt-12 lg:hidden"
          opts={{ align: "start", containScroll: "trimSnaps" }}
        >
          <CarouselContent className="-ml-3">
            {team.map((member, index) => (
              <CarouselItem
                key={member.name}
                className="basis-[88%] pl-3 sm:basis-[72%]"
              >
                <TeamCard
                  member={member}
                  translated={members[index]}
                  edge={t("edge")}
                  compact
                />
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="mt-5 flex justify-end gap-2">
            <CarouselPrevious className="static m-0 translate-none rounded-none" />
            <CarouselNext className="static m-0 translate-none rounded-none" />
          </div>
        </Carousel>

        <div className="mt-20 hidden gap-4 lg:grid lg:grid-cols-3">
          {team.map((member, index) => {
            return (
              <TeamCard
                key={member.name}
                member={member}
                translated={members[index]}
                edge={t("edge")}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default TeamSection;
