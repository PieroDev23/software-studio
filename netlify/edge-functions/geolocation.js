export default async (_request, context) => {
  return Response.json(
    { country: context.geo?.country?.code?.toUpperCase() ?? "PE" },
    {
      headers: {
        "Cache-Control": "private, no-store",
      },
    },
  );
};

export const config = {
  path: "/api/geolocation",
};
