import { cn } from "@/lib/utils";

const displaySizes = {
  hero: "text-[2.25rem] leading-[1.1] sm:text-[clamp(3rem,7.2vw,7rem)] sm:leading-[1.07]",
  statement:
    "text-[2.25rem] leading-[1.12] sm:text-[clamp(2.75rem,5.5vw,5.75rem)] sm:leading-[1.08]",
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
        "text-balance font-medium tracking-[-0.03em]",
        displaySizes[size],
        displayTones[tone],
        className,
      )}
      {...props}
    />
  );
}

function TypographyH1({ className, ...props }) {
  return (
    <h1
      data-slot="typography-h1"
      className={cn(
        "text-balance text-4xl font-semibold leading-tight tracking-[-0.03em] text-foreground sm:text-5xl lg:text-6xl",
        className,
      )}
      {...props}
    />
  );
}

function TypographyH2({ className, ...props }) {
  return (
    <h2
      data-slot="typography-h2"
      className={cn(
        "text-balance text-3xl font-semibold leading-tight tracking-[-0.03em] text-foreground sm:text-4xl lg:text-5xl",
        className,
      )}
      {...props}
    />
  );
}

function TypographyH3({ className, ...props }) {
  return (
    <h3
      data-slot="typography-h3"
      className={cn(
        "text-balance text-2xl font-semibold leading-snug tracking-[-0.025em] text-foreground sm:text-3xl",
        className,
      )}
      {...props}
    />
  );
}

function TypographyH4({ className, ...props }) {
  return (
    <h4
      data-slot="typography-h4"
      className={cn(
        "text-balance text-xl font-semibold leading-snug tracking-[-0.02em] text-foreground sm:text-2xl",
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

function TypographyP({ className, ...props }) {
  return (
    <p
      data-slot="typography-p"
      className={cn(
        "text-pretty text-base font-normal leading-7 text-foreground",
        className,
      )}
      {...props}
    />
  );
}

function TypographyLarge({ className, ...props }) {
  return (
    <p
      data-slot="typography-large"
      className={cn("text-lg font-medium leading-7 text-foreground", className)}
      {...props}
    />
  );
}

function TypographySmall({ className, ...props }) {
  return (
    <small
      data-slot="typography-small"
      className={cn("text-sm font-normal leading-5 text-foreground", className)}
      {...props}
    />
  );
}

function TypographyMuted({ className, ...props }) {
  return (
    <p
      data-slot="typography-muted"
      className={cn(
        "text-sm font-normal leading-6 text-muted-foreground",
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

function TypographyMono({ as: Component = "p", className, ...props }) {
  return (
    <Component
      data-slot="typography-mono"
      className={cn(
        "font-mono text-sm font-normal leading-6 text-foreground",
        className,
      )}
      {...props}
    />
  );
}

export {
  TypographyDisplay,
  TypographyEyebrow,
  TypographyH1,
  TypographyH2,
  TypographyH3,
  TypographyH4,
  TypographyLarge,
  TypographyLead,
  TypographyMono,
  TypographyMuted,
  TypographyP,
  TypographySmall,
};
