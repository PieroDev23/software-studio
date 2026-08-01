import Silk from "@/components/silk";

function ContactAside({ title, description }) {
  return (
    <div className="relative isolate hidden overflow-hidden bg-background text-foreground lg:flex lg:min-h-svh lg:p-12 xl:p-16">
      <div className="absolute inset-0 -z-10 opacity-60" aria-hidden="true">
        <Silk
          speed={3}
          scale={1}
          color="#242429"
          noiseIntensity={0.2}
          rotation={-0.2}
        />
      </div>

      <div className="flex w-full flex-col justify-between gap-12 sm:gap-16">
        <h2 className="max-w-2xl text-4xl leading-11 font-medium tracking-[0.030rem] sm:text-5xl sm:leading-15 lg:text-6xl lg:leading-20 xl:text-8xl xl:leading-25">
          {title}
        </h2>

        <div data-reveal className="flex max-w-xl flex-col gap-8">
          <p className="text-lg leading-7 text-foreground/80 sm:text-xl sm:leading-8">
            {description}
          </p>
          <a
            href="mailto:hola@manyas.dev"
            className="w-fit font-mono text-base font-medium tracking-[0.04em] text-foreground underline decoration-border underline-offset-8 transition-opacity hover:opacity-70"
          >
            hola@manyas.dev ↗
          </a>
        </div>
      </div>
    </div>
  );
}

export { ContactAside };
