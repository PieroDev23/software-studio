import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";
import { OgImage } from "@/components/og-image";
import { getCaseStudy } from "@/lib/case-studies";

// Image metadata
export const alt = "Manyas Software Studio Study Case";
export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/jpeg";

// Image generation
export default async function Image({ params }) {
  const { locale, slug } = await params;
  const studyCase = getCaseStudy(slug, locale);

  // Font loading, process.cwd() is Next.js project directory
  const [interTight, dmMono, imageData] = await Promise.all([
    readFile(join(process.cwd(), "assets/fonts/InterTight-SemiBold.ttf")),
    readFile(join(process.cwd(), "assets/fonts/DMMono-Regular.ttf")),
    readFile(
      join(process.cwd(), `assets/images/og-${studyCase.slug}.jpg`),
      "base64",
    ),
  ]);

  const src = `data:${contentType};base64,${imageData}`;
  const buttonText = locale === "en" ? "Study Case" : "Caso de Estudio";
  const title = studyCase.title;
  const subtitle = studyCase.service;

  return new ImageResponse(
    <OgImage
      src={src}
      title={title}
      subtitle={subtitle}
      buttonText={buttonText}
    />,
    {
      ...size,
      fonts: [
        {
          name: "Inter Tight",
          data: interTight,
          weight: 600,
          style: "normal",
        },
        {
          name: "DM Mono",
          data: dmMono,
          weight: 400,
          style: "normal",
        },
      ],
    },
  );
}
