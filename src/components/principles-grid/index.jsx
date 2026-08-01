import { useTranslations } from "next-intl";

export default function PrinciplesGrid() {
  const t = useTranslations("Metrics");
  const metrics = t.raw("items");
  return (
    <dl
      className="mt-12 grid grid-cols-1 border-inverse-border sm:mt-20 sm:grid-cols-2 sm:border-t lg:grid-cols-4"
      aria-label={t("aria")}
    >
      {metrics.map((metric) => (
        <div
          data-reveal
          key={metric.label}
          className="flex min-h-40 flex-col justify-between gap-6 border-inverse-border px-0 py-8 sm:min-h-56 sm:gap-8 sm:border-r sm:border-b sm:p-8 sm:last:border-r-0"
        >
          <dt className="font-mono text-sm font-medium uppercase tracking-[0.16em] text-inverse-muted">
            {metric.label}
          </dt>
          <dd className="flex flex-col gap-4">
            <span className="max-w-full text-4xl leading-11 font-medium tracking-[0.030rem] lg:text-5xl lg:leading-15">
              {metric.value}
            </span>
            <span className="max-w-64 text-base leading-6 text-inverse-muted">
              {metric.description}
            </span>
          </dd>
        </div>
      ))}
    </dl>
  );
}
