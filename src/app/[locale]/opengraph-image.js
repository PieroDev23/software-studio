import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";
import { OgImage } from "@/components/og-image";

// Image metadata
export const alt = "Manyas Software Studio Home";
export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

// Image generation
export default async function Image({ params }) {
  const { locale } = await params;
  // Font loading, process.cwd() is Next.js project directory
  const [interTight, dmMono, imageData] = await Promise.all([
    readFile(join(process.cwd(), "assets/fonts/InterTight-SemiBold.ttf")),
    readFile(join(process.cwd(), "assets/fonts/DMMono-Regular.ttf")),
    readFile(join(process.cwd(), "assets/images/og-cover.jpg"), "base64"),
  ]);

  const src = `data:image/jpeg;base64,${imageData}`;

  const subtitle =
    locale === "en"
      ? "Senior judgment for products that matter"
      : "Criterio senior para productos que importan";

  const title =
    locale === "en"
      ? "Senior judgment for products that matter"
      : "Criterio senior para productos que importan";

  const buttonText =
    locale === "en" ? "MAKE THE RIGHT DECISION" : "HAZ LA DECISION CORRECTA";

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
