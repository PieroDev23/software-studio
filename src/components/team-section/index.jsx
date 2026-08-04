import Image from "next/image";
import { useTranslations } from "next-intl";
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

function TeamCard({ member, translated, edge, index, compact = false }) {
  const panelFirst = !compact && index !== 1;

  return (
    <article className="team-card flex h-full flex-col gap-3 sm:gap-5">
      <div
        data-team-blind-reveal
        className={cn(
          "team-card-photo group/photo relative aspect-[4/5] overflow-hidden text-white",
          panelFirst && "lg:order-2",
        )}
      >
        <div
          data-parallax-team-initials
          className="absolute inset-x-0 -inset-y-16"
          aria-hidden="true"
        >
          <Image
            src={member.image}
            alt=""
            fill
            sizes="(max-width: 1023px) 88vw, 30vw"
            className={cn(
              "team-card-media object-cover",
              member.imageClassName,
            )}
          />
        </div>

        <div
          className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/5 to-black/20"
          aria-hidden="true"
        />

        <div
          data-team-photo-top
          className="absolute inset-x-0 top-0 flex items-center justify-between p-5 font-mono text-xs font-medium uppercase tracking-[0.16em] sm:p-7"
        >
          <span>{translated.title}</span>
          <span>Manyas®</span>
        </div>

        <div
          data-team-photo-bottom
          className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-5 p-5 sm:p-7"
        >
          <div className="flex min-w-0 flex-col gap-2">
            <h3 className="text-3xl leading-none font-medium tracking-[0.02em] sm:text-4xl">
              {translated.name}
            </h3>
            <p className="font-mono text-xs font-medium uppercase tracking-[0.16em] text-white/70">
              {translated.discipline}
            </p>
          </div>

          <a
            href={member.linkedin}
            target="_blank"
            rel="noreferrer"
            className="inline-flex size-11 shrink-0 items-center justify-center focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
            aria-label={`${translated.name} — LinkedIn`}
            title="LinkedIn"
          >
            <svg viewBox="0 0 24 24" className="size-6" aria-hidden="true">
              <path d={linkedinIconPath} fill="currentColor" />
            </svg>
            <span className="sr-only">{translated.name} — LinkedIn</span>
          </a>
        </div>

        <div
          data-team-blinds
          className="invisible pointer-events-none absolute inset-0 z-30"
          aria-hidden="true"
        >
          <span
            data-team-blind-layer
            className="absolute inset-0 z-10 bg-inverse"
          />
        </div>
      </div>

      <div
        className={cn(
          "team-card-details flex min-h-64 flex-1 flex-col justify-between gap-8 p-6 sm:p-8",
          cardThemes[member.theme],
          panelFirst && "lg:order-1",
        )}
      >
        <div className="flex items-center justify-between gap-4 font-mono text-xs font-medium uppercase tracking-[0.16em]">
          <span>{edge}</span>
          <span className="opacity-50">Manyas®</span>
        </div>

        <p className="text-balance text-2xl leading-[1.08] font-medium tracking-[0.015em] sm:text-3xl xl:text-4xl">
          {translated.edge}
        </p>

        <blockquote className="max-w-md text-sm leading-6 opacity-65 sm:text-base">
          “{translated.quote}”
        </blockquote>
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
                className="basis-[92%] pl-3 sm:basis-[72%]"
              >
                <TeamCard
                  member={member}
                  translated={members[index]}
                  edge={t("edge")}
                  index={index}
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

        <div className="mt-20 hidden grid-cols-3 items-stretch gap-5 lg:grid xl:gap-7">
          {team.map((member, index) => (
            <TeamCard
              key={member.name}
              member={member}
              translated={members[index]}
              edge={t("edge")}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
