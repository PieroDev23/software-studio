import { DM_Mono, Inter_Tight } from "next/font/google";
import "./globals.css";

import { CurtainTransition } from "@/components/curtain-transition";
import WebVitals from "@/components/web-vitals";

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

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${interTight.variable} ${dmMono.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col">
        <CurtainTransition>
          <WebVitals />
          {children}
        </CurtainTransition>
      </body>
    </html>
  );
}
