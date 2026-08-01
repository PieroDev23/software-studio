import { cn } from "@/lib/utils";

const displaySizes = {
  hero: "text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl",
  statement: "text-4xl md:text-5xl lg:text-6xl xl:text-7xl",
};

const displayTones = {
  default: "text-foreground",
  inverse: "text-inverse-foreground",
};

function TypographyDisplay({
  as: Component = "h1",
  className,
  size = "hero",
  tone = "default",
  ...props
}) {
  return (
    <Component
      data-slot="typography-display"
      className={cn(
        "text-balance font-medium tracking-tight",
        displaySizes[size],
        displayTones[tone],
        className,
      )}
      {...props}
    />
  );
}

function TypographyCardTitle({ as: Component = "h3", className, ...props }) {
  return (
    <Component
      data-slot="typography-card-title"
      className={cn(
        "text-3xl font-medium tracking-tight sm:text-4xl",
        className,
      )}
      {...props}
    />
  );
}

function TypographyLead({ className, ...props }) {
  return (
    <p
      data-slot="typography-lead"
      className={cn(
        "text-pretty text-base font-normal leading-7 text-muted-foreground sm:text-xl sm:leading-relaxed",
        className,
      )}
      {...props}
    />
  );
}

const eyebrowSizes = {
  default: "text-sm",
  md: "text-base",
};

const eyebrowTones = {
  default: "text-muted-foreground",
  inverse: "text-inverse-muted",
};

function TypographyEyebrow({
  as: Component = "p",
  className,
  size = "default",
  tone = "default",
  ...props
}) {
  return (
    <Component
      data-slot="typography-eyebrow"
      className={cn(
        "font-mono font-medium uppercase leading-5 tracking-[0.2em]",
        eyebrowSizes[size],
        eyebrowTones[tone],
        className,
      )}
      {...props}
    />
  );
}

export {
  TypographyCardTitle,
  TypographyDisplay,
  TypographyEyebrow,
  TypographyLead,
};
