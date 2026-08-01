import englishMessages from "../../../../messages/en.json";
import spanishMessages from "../../../../messages/es.json";

const copyByLocale = {
  en: englishMessages.Loader,
  es: spanishMessages.Loader,
};

function getRoute(pathname) {
  const [localeSegment, ...pathSegments] = pathname.split("/").filter(Boolean);
  const locale = localeSegment === "es" ? "es" : "en";

  return {
    locale,
    pathname: pathSegments.length > 0 ? `/${pathSegments.join("/")}` : "/",
  };
}

function getCurtainCopy(locale) {
  return copyByLocale[locale] ?? copyByLocale.en;
}

export { getCurtainCopy, getRoute };
