const metrics = [
  {
    label: "Senior ownership",
    value: "100%",
    description: "The people in the room are the people doing the work.",
  },
  {
    label: "One integrated team",
    value: "03",
    description: "Strategy, design and engineering moving as one system.",
  },
  {
    label: "Lost in handoffs",
    value: "00",
    description: "Zero distance between the decision and the execution.",
  },
  {
    label: "Operating range",
    value: "Global",
    description: "Rooted in Lima. Built to collaborate anywhere.",
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
