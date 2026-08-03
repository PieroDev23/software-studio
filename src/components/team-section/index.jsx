import Image from "next/image";
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
  TypographyCardTitle,
  TypographyDisplay,
  TypographyEyebrow,
} from "@/components/ui/typography";
import { cn } from "@/lib/utils";
import josuePhoto from "../../../assets/images/josue.png";
import pieroPhoto from "../../../assets/images/piero.png";
import sebastianPhoto from "../../../assets/images/sebastian.png";

const team = [
  {
    name: "Piero Davila",
    image: pieroPhoto,
    linkedin: "https://www.linkedin.com/in/piero-davila/",
    theme: "light",
  },
  {
    name: "Josue Villasante",
    image: josuePhoto,
    imageClassName: "object-top",
    linkedin: "https://www.linkedin.com/in/josuevillasante/",
    theme: "dark",
  },
  {
    name: "Sebastian Muñoz",
    image: sebastianPhoto,
    imageClassName: "object-top",
    linkedin: "https://www.linkedin.com/in/sebasjmdlc/",
    theme: "purple",
  },
];

const cardThemes = {
  dark: "team-card-dark text-foreground",
  light: "team-card-light text-inverse-foreground",
  purple: "team-card-purple text-foreground",
};

const linkedinIconPath =
  "M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3c0-2.6-.56-4.59-3.59-4.59-1.46 0-2.44.8-2.83 1.56h-.04V8.85H9.16v9.65h3v-4.77c0-1.26.24-2.48 1.8-2.48 1.54 0 1.56 1.44 1.56 2.56v4.69h2.98M5.68 8.85v9.65h3V8.85h-3M7.18 4a1.74 1.74 0 0 0-1.74 1.74c0 .96.78 1.76 1.74 1.76a1.75 1.75 0 0 0 1.75-1.76C8.93 4.78 8.14 4 7.18 4Z";

function TeamCard({ member, translated, edge, compact = false }) {
  return (
    <article
      data-reveal
      className={cn(
        "team-card group relative isolate flex h-full flex-col overflow-hidden",
        cardThemes[member.theme],
      )}
    >
      <div className="relative aspect-[4/5] overflow-hidden text-white">
        <div
          data-parallax-team-initials
          className="absolute inset-x-0 -inset-y-8"
          aria-hidden="true"
        >
          <Image
            src={member.image}
            alt=""
            fill
            sizes="(max-width: 1023px) 80vw, 28vw"
            className={cn(
              "team-card-media object-cover",
              member.imageClassName,
            )}
          />
        </div>
        <div
          className="team-card-image-scrim absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100 group-focus-within:opacity-100"
          aria-hidden="true"
        />
        <div className="team-card-photo-meta absolute inset-x-0 bottom-0 p-5 font-mono text-sm font-medium uppercase tracking-[0.12em] opacity-0 transition-opacity duration-500 group-hover:opacity-100 group-focus-within:opacity-100 sm:p-8">
          <p className="flex items-center gap-3">
            <span className="size-2 bg-current" aria-hidden="true" />
            <TerminalMeta text={translated.discipline} />
          </p>
        </div>
      </div>

      <div
        className={cn(
          "team-card-details flex flex-1 flex-col gap-4 p-5 sm:gap-5 sm:p-8",
          compact ? "min-h-[18rem]" : "min-h-[21rem]",
        )}
      >
        <div>
          <div className="flex items-start justify-between gap-4">
            <TypographyCardTitle>{translated.name}</TypographyCardTitle>
            <a
              href={member.linkedin}
              target="_blank"
              rel="noreferrer"
              className="inline-flex size-10 shrink-0 items-center justify-center border border-current/25 transition-all hover:scale-105 hover:border-current/60"
              aria-label={`${translated.name} — LinkedIn`}
              title="LinkedIn"
            >
              <svg viewBox="0 0 24 24" className="size-5" aria-hidden="true">
                <path d={linkedinIconPath} fill="currentColor" />
              </svg>
              <span className="sr-only">{translated.name} — LinkedIn</span>
            </a>
          </div>

          <div className="mt-1 border-t border-current/20 pt-4 sm:mt-2 sm:pt-5">
            <p className="mb-2 font-mono text-sm font-medium uppercase tracking-[0.12em] opacity-60 sm:mb-3">
              {edge}
            </p>
            <p className="text-xl leading-7 font-medium tracking-[0.030rem] sm:text-2xl sm:leading-8">
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

export default function TeamSection() {
  const t = useTranslations("Team");
  const members = t.raw("members");
  return (
    <section
      id="team"
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
