import Silk from "@/components/silk";
import { TypographyEyebrow } from "@/components/ui/typography";

function ShiftSection({ study, translate }) {
  return (
    <section
      className={`relative min-h-[52svh] overflow-hidden ${study.theme}`}
    >
      <div className="absolute inset-0 opacity-55" aria-hidden="true">
        <Silk {...study.silk} scale={study.silk.scale * 1.25} />
      </div>
      <div className="content-container relative flex min-h-[52svh] flex-col justify-between gap-20 px-5 py-10 sm:px-8 sm:py-14 lg:px-12 lg:py-16">
        <div className="flex items-center justify-between gap-6">
          <TypographyEyebrow className="text-current opacity-65">
            {translate("shift")}
          </TypographyEyebrow>
          <TypographyEyebrow className="text-current opacity-65">
            02 / 04
          </TypographyEyebrow>
        </div>

        <div className="grid items-end gap-12 lg:grid-cols-12 lg:gap-8">
          <p
            data-motion-heading
            className="text-3xl leading-11 font-medium tracking-[0.030rem] sm:text-5xl md:leading-15 lg:col-span-10 lg:text-6xl lg:leading-20 xl:text-7xl"
          >
            “{study.pullQuote}”
          </p>

          <dl
            data-reveal
            className="grid border-t border-current/25 pt-5 font-mono text-sm uppercase leading-5 tracking-[0.1em] lg:col-span-3"
          >
            <div className="grid grid-cols-[4.5rem_1fr] gap-4 border-b border-current/20 py-4">
              <dt className="opacity-50">{translate("before")}</dt>
              <dd>{study.shift.before}</dd>
            </div>
            <div className="grid grid-cols-[4.5rem_1fr] gap-4 py-4">
              <dt className="opacity-50">{translate("after")}</dt>
              <dd>{study.shift.after}</dd>
            </div>
          </dl>
        </div>
      </div>
    </section>
  );
}

export { ShiftSection };
