import { DM_Mono, Inter_Tight } from "next/font/google";
import { notFound } from "next/navigation";
import { hasLocale, NextIntlClientProvider } from "next-intl";
import {
  getMessages,
  getTranslations,
  setRequestLocale,
} from "next-intl/server";
import "lenis/dist/lenis.css";
import "../globals.css";

import LanguageTransitionObserver from "@/components/language-transition-observer";
import SmoothScrollProvider from "@/components/smooth-scroll-provider";
import WebVitals from "@/components/web-vitals";
import { routing } from "@/i18n/routing";
import { siteConfig } from "@/lib/site-config";

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

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }) {
  const { locale } = await params;

  if (!hasLocale(routing.locales, locale)) {
    return {};
  }

  const t = await getTranslations({ locale, namespace: "Metadata" });
  const keywords = t.raw("keywords");
  const googleVerification = process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION;

  return {
    metadataBase: new URL(siteConfig.url),
    title: {
      default: t("title"),
      template: "%s | Manyas",
    },
    description: t("description"),
    applicationName: "Manyas",
    authors: [{ name: "Manyas" }],
    creator: "Manyas",
    publisher: "Manyas",
    keywords,
    robots: {
      index: true,
      follow: true,
    },
    alternates: {
      canonical: `/${locale}`,
      languages: {
        en: "/en",
        es: "/es",
        "x-default": "/en",
      },
    },
    verification: googleVerification
      ? { google: googleVerification }
      : undefined,
    openGraph: {
      type: "website",
      locale: locale === "es" ? "es_PE" : "en_US",
      siteName: "Manyas",
      title: t("title"),
      description: t("socialDescription"),
    },
    twitter: {
      card: "summary_large_image",
      title: t("title"),
      description: t("socialDescription"),
    },
  };
}

export default async function LocaleLayout({ children, params }) {
  const { locale } = await params;

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  setRequestLocale(locale);
  const messages = await getMessages();

  return (
    <html
      lang={locale}
      className={`${interTight.variable} ${dmMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <NextIntlClientProvider locale={locale} messages={messages}>
          <LanguageTransitionObserver />
          <WebVitals />
          <SmoothScrollProvider>{children}</SmoothScrollProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
