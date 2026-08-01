import {
  TypographyDisplay,
  TypographyEyebrow,
} from "@/components/ui/typography";

function MovesSection({ moves, translate }) {
  return (
    <section className="section-frame bg-background text-foreground">
      <div className="content-container">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-8">
          <TypographyEyebrow className="lg:col-span-2">
            {translate("changed")}
          </TypographyEyebrow>
          <TypographyDisplay
            as="h2"
            size="statement"
            className="max-w-5xl lg:col-span-10"
          >
            {translate("moves")}
          </TypographyDisplay>
        </div>

        <div className="mt-12 grid border-t border-border sm:mt-20 lg:grid-cols-3">
          {moves.map((move) => (
            <section
              key={move.number}
              className="flex min-h-[22rem] flex-col border-b border-border p-5 sm:min-h-[28rem] sm:p-8 lg:border-r lg:last:border-r-0"
            >
              <TypographyEyebrow>{move.number}</TypographyEyebrow>
              <div className="mt-auto pt-16">
                <h3 className="max-w-[12ch] text-3xl font-medium tracking-tight sm:text-4xl">
                  {move.title}
                </h3>
                <p className="mt-6 max-w-sm text-base leading-7 text-muted-foreground sm:text-lg sm:leading-8">
                  {move.body}
                </p>
              </div>
            </section>
          ))}
        </div>
      </div>
    </section>
  );
}

export { MovesSection };
