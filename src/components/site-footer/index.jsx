import Image from "next/image";
import { useTranslations } from "next-intl";
import { siClaude, siDeepseek, siGooglegemini } from "simple-icons";

import { TypographyEyebrow } from "@/components/ui/typography";
import { Link } from "@/i18n/navigation";
import openAiIcon from "../../../assets/images/openai-svgrepo-com.svg";

const assistants = [
  {
    name: "OpenAI",
    href: "https://chatgpt.com/",
    image: openAiIcon,
  },
  {
    name: "Claude",
    href: "https://claude.ai/new",
    icon: siClaude,
  },
  {
    name: "Gemini",
    href: "https://gemini.google.com/app",
    icon: siGooglegemini,
  },
  {
    name: "DeepSeek",
    href: "https://chat.deepseek.com/",
    icon: siDeepseek,
  },
];

function AssistantIcon({ icon, image }) {
  if (image) {
    return (
      <Image
        src={image}
        alt=""
        width={28}
        height={28}
        unoptimized
        className="size-full invert"
      />
    );
  }

  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d={icon.path} fill="currentColor" />
    </svg>
  );
}

function SiteFooter() {
  const translate = useTranslations("Footer");

  return (
    <footer className="border-t border-border bg-background text-foreground">
      <div className="content-container px-5 py-12 sm:px-8 sm:py-16 lg:px-12 lg:py-20">
        <div className="grid gap-x-8 gap-y-12 border-b border-border pb-12 sm:grid-cols-2 sm:pb-16 lg:grid-cols-12 lg:pb-20">
          <div className="lg:col-span-4">
            <Link
              href="/"
              className="inline-flex shrink-0 items-center whitespace-nowrap font-mono text-xs font-medium uppercase leading-none tracking-[0.18em] text-foreground transition-opacity hover:opacity-70 sm:text-sm"
            >
              Manyas
              <span className="relative -top-[0.35em] ml-1 text-[0.65em] leading-none">
                ®
              </span>
            </Link>
            <p className="mt-6 max-w-sm text-base leading-7 text-muted-foreground sm:text-lg">
              {translate("description")}
            </p>
          </div>

          <nav className="lg:col-span-2" aria-label={translate("navigation")}>
            <TypographyEyebrow>{translate("explore")}</TypographyEyebrow>
            <div className="mt-6 flex flex-col items-start gap-3 text-base">
              <Link
                href="/#selected-work"
                className="transition-opacity hover:opacity-60"
              >
                {translate("work")}
              </Link>
              <Link
                href="/#team"
                className="transition-opacity hover:opacity-60"
              >
                {translate("team")}
              </Link>
              <Link
                href="/#contacto"
                className="transition-opacity hover:opacity-60"
              >
                {translate("contact")}
              </Link>
            </div>
          </nav>

          <div className="lg:col-span-2">
            <TypographyEyebrow>{translate("contactTitle")}</TypographyEyebrow>
            <div className="mt-6 flex flex-col items-start gap-3 text-base">
              <a
                href="mailto:hola@manyas.dev"
                className="transition-opacity hover:opacity-60"
              >
                hola@manyas.dev
              </a>
              <p className="text-muted-foreground">{translate("location")}</p>
            </div>
          </div>

          <div className="lg:col-span-4">
            <TypographyEyebrow>{translate("aiEyebrow")}</TypographyEyebrow>
            <h2 className="mt-5 max-w-sm text-2xl leading-8 font-medium tracking-[0.030rem]">
              {translate("aiTitle")}
            </h2>
            <p className="mt-4 max-w-sm text-sm leading-6 text-muted-foreground">
              {translate("aiDescription")}
            </p>

            <div className="mt-7 flex items-center gap-4">
              {assistants.map((assistant) => (
                <a
                  key={assistant.name}
                  href={assistant.href}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex size-9 items-center justify-center text-muted-foreground transition-all hover:scale-110 hover:text-foreground"
                  title={assistant.name}
                >
                  <span className="size-6 [&_svg]:size-full" aria-hidden="true">
                    <AssistantIcon
                      icon={assistant.icon}
                      image={assistant.image}
                    />
                  </span>
                  <span className="sr-only">
                    {translate("askIn")} {assistant.name}
                  </span>
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-4 pt-8 font-mono text-xs uppercase tracking-[0.12em] text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 Manyas</p>
          <p>
            {translate("promptLabel")}: “{translate("prompt")}”
          </p>
        </div>
      </div>
    </footer>
  );
}

export default SiteFooter;
