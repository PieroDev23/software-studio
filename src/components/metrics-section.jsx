import { useTranslations } from "next-intl";

function MetricsSection() {
  const t = useTranslations("Metrics");
  const metrics = t.raw("items");
  return (
    <section
      className="section-frame bg-inverse text-inverse-foreground"
      aria-label={t("aria")}
    >
      <dl className="content-container grid grid-cols-1 border-inverse-border sm:grid-cols-2 sm:border-t lg:grid-cols-4">
        {metrics.map((metric) => (
          <div
            data-reveal
            key={metric.label}
            className="flex min-h-40 flex-col justify-between gap-6 border-inverse-border p-5 sm:min-h-56 sm:gap-8 sm:border-r sm:border-b sm:p-8 sm:last:border-r-0"
          >
            <dt className="font-mono text-sm font-medium uppercase tracking-[0.16em] text-inverse-muted">
              {metric.label}
            </dt>
            <dd className="flex flex-col gap-4">
              <span className="max-w-full text-[2.35rem] font-medium leading-[1.08] tracking-[-0.03em] sm:text-[clamp(2.5rem,3.25vw,3.75rem)] sm:leading-[1.04]">
                {metric.value}
              </span>
              <span className="max-w-64 text-base leading-6 text-inverse-muted">
                {metric.description}
              </span>
            </dd>
          </div>
        ))}
      </dl>
    </section>
  );
}

export default MetricsSection;
