/** biome-ignore-all lint/performance/noImgElement: <explanation> */
import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";
import { LucideArrowBigDown } from "lucide-react";

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

  return new ImageResponse(
    <div
      style={{
        fontFamily: "Inter Tight",
        fontWeight: 600,
        width: "100%",
        height: "100%",
        display: "flex",
        overflow: "hidden",
        background: "black",
        position: "relative",
      }}
    >
      <img
        src={src}
        width={500}
        height={500}
        alt="currentImage"
        style={{ objectFit: "cover", width: "100%", height: "100%" }}
      />

      <div
        style={{
          position: "absolute",
          width: "100%",
          paddingLeft: "25px",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          color: "white",
          gap: 30,
          alignItems: "flex-start",
        }}
      >
        <span
          style={{
            fontFamily: "DM Mono",
            fontWeight: 400,
            color: "white",
            letterSpacing: "3px",
            textTransform: "uppercase",
          }}
        >
          {locale === "en"
            ? "Senior judgment for products that matter"
            : "Criterio senior para productos que importan"}
        </span>

        <span
          style={{
            fontFamily: "Inter Tight",
            fontWeight: 400,
            maxWidth: "70%",
            color: "white",
            fontSize: "60px",
          }}
        >
          {locale === "en"
            ? "We build products that deserve to exist."
            : "Criterio senior para productos que importan"}
        </span>

        <span
          style={{
            background: "white",
            fontFamily: "DM Mono",
            padding: "15px",
            fontWeight: 400,
            color: "black",
            letterSpacing: "2px",
          }}
        >
          {locale === "en"
            ? "MAKE THE RIGHT DECISION"
            : "HAZ LA DECISION CORRECTA"}
        </span>
      </div>
    </div>,
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
