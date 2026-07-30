import { TerminalMeta } from "@/components/terminal-slash";
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
    discipline: "Partner / Engineering",
    edge: "Creative product thinking",
    bio: "The team’s creative force, finding original paths through difficult product constraints.",
    theme: "light",
  },
  {
    number: "02",
    name: "Josue Villasante",
    initials: "JV",
    discipline: "Partner / Technology",
    edge: "10× engineering",
    bio: "Exceptional technical range and execution speed across complex product systems.",
    theme: "dark",
  },
  {
    number: "03",
    name: "Sebastian Muñoz",
    initials: "SM",
    discipline: "Partner / Engineering",
    edge: "Leadership & judgment",
    bio: "Impeccable judgment, strong leadership and a clear understanding of the business behind every problem.",
    theme: "purple",
  },
];

const cardThemes = {
  dark: "team-card-dark text-foreground",
  light: "team-card-light text-inverse-foreground",
  purple: "team-card-purple text-foreground",
};

function TeamSection() {
  return (
    <section
      className="section-frame section-grid section-grid-light bg-inverse text-inverse-foreground"
      aria-labelledby="team-title"
    >
      <div className="content-container">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-8">
          <TypographyEyebrow tone="inverse" className="lg:col-span-2">
            The studio
          </TypographyEyebrow>
          <TypographyDisplay
            id="team-title"
            as="h2"
            size="statement"
            tone="inverse"
            className="max-w-7xl lg:col-span-10"
          >
            Three partners. Zero layers. All in.
          </TypographyDisplay>
        </div>

        <div className="mt-12 grid gap-4 sm:mt-20 lg:grid-cols-3">
          {team.map((member) => (
            <article
              data-reveal
              key={member.name}
              className={cn(
                "team-card group relative isolate flex min-h-[34rem] overflow-hidden p-5 sm:min-h-[46rem] sm:p-8",
                cardThemes[member.theme],
              )}
            >
              <div className="relative flex w-full flex-col">
                <div className="flex items-start justify-between gap-4 font-mono text-sm font-medium uppercase tracking-[0.12em] opacity-75">
                  <p className="flex items-center gap-3">
                    <span className="size-2 bg-current" aria-hidden="true" />
                    <TerminalMeta text={member.discipline} />
                  </p>
                  <p>{member.number}</p>
                </div>

                <div
                  className="flex flex-1 items-center justify-center py-8 sm:py-12"
                  aria-hidden="true"
                >
                  <span className="team-card-initials text-[4rem] font-medium leading-none tracking-[-0.04em] opacity-80 sm:text-[clamp(5rem,8vw,8rem)]">
                    {member.initials}
                  </span>
                </div>

                <div className="team-card-details flex flex-col gap-5">
                  <h3 className="text-3xl font-medium leading-[1.1] tracking-[-0.03em] sm:text-4xl sm:leading-[1.04]">
                    {member.name}
                  </h3>

                  <div className="mt-2 border-t border-current/20 pt-5">
                    <p className="mb-3 font-mono text-sm font-medium uppercase tracking-[0.12em] opacity-60">
                      Distinctive edge
                    </p>
                    <p className="text-2xl font-medium leading-7 tracking-[-0.02em]">
                      {member.edge}
                    </p>
                    <p className="mt-3 max-w-md text-base leading-6 opacity-70">
                      {member.bio}
                    </p>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default TeamSection;
