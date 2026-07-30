import isoCountries from "i18n-iso-countries";
import englishLocale from "i18n-iso-countries/langs/en.json";
import spanishLocale from "i18n-iso-countries/langs/es.json";
import { getCountries, getCountryCallingCode } from "libphonenumber-js";

isoCountries.registerLocale(englishLocale);
isoCountries.registerLocale(spanishLocale);

const countryNameOverrides = {
  FK: "Falkland Islands",
};

export function countryFlag(countryCode) {
  return countryCode
    .toUpperCase()
    .split("")
    .map((character) => String.fromCodePoint(character.charCodeAt(0) + 127397))
    .join("");
}

export const countries = getCountries()
  .map((code) => ({
    code,
    name:
      countryNameOverrides[code] ?? isoCountries.getName(code, "en") ?? code,
    callingCode: `+${getCountryCallingCode(code)}`,
    flag: countryFlag(code),
  }))
  .sort((countryA, countryB) => {
    if (countryA.name === countryB.name) return 0;
    return countryA.name < countryB.name ? -1 : 1;
  });

export function getLocalizedCountries(locale) {
  const supportedLocale = locale === "es" ? "es" : "en";

  return countries
    .map((country) => ({
      ...country,
      name: isoCountries.getName(country.code, supportedLocale) ?? country.name,
    }))
    .sort((countryA, countryB) => {
      if (countryA.name === countryB.name) return 0;
      return countryA.name < countryB.name ? -1 : 1;
    });
}

export const countriesByCode = new Map(
  countries.map((country) => [country.code, country]),
);
