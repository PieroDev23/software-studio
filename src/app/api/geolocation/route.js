function countryFromLanguage(languageHeader) {
  const language = languageHeader?.split(",")[0]?.trim();
  const region = language?.match(/[-_]([A-Z]{2})\b/i)?.[1];
  return region?.toUpperCase();
}

export async function GET(request) {
  const country =
    request.headers.get("x-geo-country") ??
    request.headers.get("x-vercel-ip-country") ??
    request.headers.get("cf-ipcountry") ??
    request.headers.get("x-country") ??
    countryFromLanguage(request.headers.get("accept-language")) ??
    "PE";

  return Response.json(
    { country: country.toUpperCase() },
    {
      headers: {
        "Cache-Control": "private, no-store",
      },
    },
  );
}
