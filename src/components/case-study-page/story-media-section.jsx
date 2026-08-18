import Image from "next/image";

import { TypographyEyebrow } from "@/components/ui/typography";
import { cn } from "@/lib/utils";

const mediaLayouts = {
  details: [
    {
      id: "interface",
      aspect: "aspect-[4/5] sm:aspect-[5/6]",
      className: "lg:col-span-5",
      sizes: "(max-width: 1024px) 100vw, 42vw",
    },
    {
      id: "context",
      aspect: "aspect-[4/3] sm:aspect-[7/5] lg:mt-28",
      className: "lg:col-span-7",
      sizes: "(max-width: 1024px) 100vw, 58vw",
    },
  ],
};

function MediaFrame({ media, slot, index, tone, translate }) {
  if (!media?.src) return null;

  const label = translate(`media.${slot.id}`);
  const caption = media?.caption ?? label;
  const inverse = tone === "inverse";

  return (
    <figure data-reveal className={slot.className}>
      <div
        className={cn(
          "relative isolate overflow-hidden border border-border bg-primary text-primary-foreground",
          slot.aspect,
        )}
      >
        <Image
          src={media.src}
          alt={media.alt ?? ""}
          fill
          sizes={slot.sizes}
          className={cn("object-cover", media.className)}
        />
      </div>

      <figcaption
        className={cn(
          "mt-4 flex items-start justify-between gap-6 border-t pt-3 font-mono text-xs uppercase leading-5 tracking-[0.12em]",
          inverse
            ? "border-inverse-border text-inverse-muted"
            : "border-border text-muted-foreground",
        )}
      >
        <span>{caption}</span>
        <span className="shrink-0">{String(index).padStart(2, "0")}</span>
      </figcaption>
    </figure>
  );
}

function StoryMediaFrame({
  study,
  translate,
  id,
  index,
  tone = "default",
  className,
  aspect = "aspect-[16/10] sm:aspect-[16/9]",
  sizes = "(max-width: 1320px) 100vw, 1320px",
}) {
  return (
    <MediaFrame
      media={study.media?.[id]}
      slot={{ id, aspect, className, sizes }}
      index={index}
      tone={tone}
      translate={translate}
    />
  );
}

function StoryMediaSection({
  study,
  translate,
  layout = "details",
  tone = "default",
}) {
  const slots = mediaLayouts[layout];
  const media = study.media ?? {};
  const populatedSlots = slots.filter((slot) => media[slot.id]?.src);
  const offsets = { details: 2 };
  const inverse = tone === "inverse";

  if (populatedSlots.length === 0) return null;

  return (
    <section
      className={cn(
        "section-frame",
        inverse
          ? "bg-inverse text-inverse-foreground"
          : "bg-background text-foreground",
      )}
      aria-label={translate("media.section")}
    >
      <div className="content-container">
        <div
          className={cn(
            "mb-8 grid gap-4 border-t pt-4 lg:grid-cols-12",
            inverse ? "border-inverse-border" : "border-border",
          )}
        >
          <TypographyEyebrow tone={tone} className="lg:col-span-2">
            {translate("media.section")}
          </TypographyEyebrow>
          <p
            className={cn(
              "max-w-xl text-sm leading-6 lg:col-span-6 lg:col-start-7",
              inverse ? "text-inverse-muted" : "text-muted-foreground",
            )}
          >
            {translate(`media.${layout}Intro`)}
          </p>
        </div>

        <div className="grid gap-10 lg:grid-cols-12 lg:gap-8">
          {populatedSlots.map((slot, slotIndex) => (
            <MediaFrame
              key={slot.id}
              media={media[slot.id]}
              slot={slot}
              index={offsets[layout] + slotIndex}
              tone={tone}
              translate={translate}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export { StoryMediaFrame, StoryMediaSection };
