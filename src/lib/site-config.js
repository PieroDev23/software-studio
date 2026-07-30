export const siteConfig = {
  name: "Manyas",
  url: "https://manyas.dev",
  locales: ["en", "es"],
  defaultLocale: "en",
};

export function absoluteUrl(path = "") {
  return new URL(path, siteConfig.url).toString();
}
