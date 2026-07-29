const metrics = [
  {
    label: "Senior involvement",
    value: "100%",
    description: "Every engagement is led hands-on by the senior team.",
  },
  {
    label: "Core disciplines",
    value: "03",
    description: "Strategy, design and engineering working as one system.",
  },
  {
    label: "Delivery layers",
    value: "00",
    description: "No handoffs between the people deciding and building.",
  },
  {
    label: "Working model",
    value: "Global",
    description: "Based in Lima and collaborating with teams everywhere.",
  },
];

function MetricsSection() {
  return (
    <section
      className="section-frame bg-inverse text-inverse-foreground"
      aria-label="Studio impact metrics"
    >
      <dl className="content-container grid grid-cols-1 border-t border-inverse-border sm:grid-cols-2 lg:grid-cols-4">
        {metrics.map((metric) => (
          <div
            data-reveal
            key={metric.label}
            className="flex min-h-40 flex-col justify-between gap-6 border-b border-r border-inverse-border p-5 last:border-r-0 sm:min-h-56 sm:gap-8 sm:p-8"
          >
            <dt className="font-mono text-sm font-medium uppercase tracking-[0.16em] text-inverse-muted">
              {metric.label}
            </dt>
            <dd className="flex flex-col gap-4">
              <span className="text-[2.5rem] font-medium leading-none tracking-[-0.05em] sm:text-[clamp(2.75rem,4vw,4.5rem)]">
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
