import { DM_Mono, Inter_Tight } from "next/font/google";
import "lenis/dist/lenis.css";
import "./globals.css";

import SmoothScrollProvider from "@/components/smooth-scroll-provider";

const interTight = Inter_Tight({
  variable: "--font-inter-tight",
  subsets: ["latin"],
  display: "swap",
});

const dmMono = DM_Mono({
  variable: "--font-dm-mono",
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  display: "swap",
});

export const metadata = {
  metadataBase: new URL("https://manyas.dev"),
  title: {
    default: "Manyas — Senior Product Studio",
    template: "%s | Manyas",
  },
  description:
    "Senior product partners for consequential work. Strategy, design and engineering for high-stakes digital products.",
  applicationName: "Manyas",
  authors: [{ name: "Manyas" }],
  creator: "Manyas",
  publisher: "Manyas",
  keywords: [
    "product studio",
    "product strategy",
    "product design",
    "software engineering",
    "digital products",
    "Lima",
  ],
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Manyas",
    title: "Manyas — Senior Product Studio",
    description:
      "Strategy, design and engineering for high-stakes digital products.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Manyas — Senior Product Studio",
    description:
      "Strategy, design and engineering for high-stakes digital products.",
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${interTight.variable} ${dmMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <SmoothScrollProvider>{children}</SmoothScrollProvider>
      </body>
    </html>
  );
}
