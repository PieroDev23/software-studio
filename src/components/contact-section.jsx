import Silk from "@/components/Silk";
import { Button } from "@/components/ui/button";
import { Field, FieldGroup, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { TypographyEyebrow } from "@/components/ui/typography";

function ContactSection() {
  const contactTitle = "Build the thing people remember.";
  const contactDescription =
    "Bring us the idea, the broken system or the difficult next chapter. We will bring senior attention and a clear point of view.";

  return (
    <section id="contacto" className="bg-inverse">
      <div className="grid overflow-hidden lg:min-h-svh lg:grid-cols-2">
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
            <h2 className="max-w-2xl text-[2.5rem] font-medium leading-[1.1] tracking-[-0.03em] sm:text-[clamp(3.25rem,6vw,7rem)] sm:leading-[1.02]">
              {contactTitle}
            </h2>

            <div data-reveal className="flex max-w-xl flex-col gap-8">
              <p className="text-lg leading-7 text-foreground/80 sm:text-xl sm:leading-8">
                {contactDescription}
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

        <div className="flex items-center bg-inverse px-5 py-14 text-inverse-foreground sm:min-h-svh sm:px-10 sm:py-16 lg:px-12 xl:px-16">
          <form data-reveal className="mx-auto w-full max-w-2xl">
            <div className="mb-12 flex flex-col gap-5 lg:hidden">
              <h2 className="text-[2.65rem] font-medium leading-[1.08] tracking-[-0.035em]">
                {contactTitle}
              </h2>
              <p className="max-w-xl text-lg leading-7 text-inverse-muted">
                {contactDescription}
              </p>
            </div>

            <TypographyEyebrow tone="inverse" className="mb-10 sm:mb-14">
              Start a conversation
            </TypographyEyebrow>

            <FieldGroup className="gap-8 sm:gap-10">
              <div className="grid gap-8 sm:grid-cols-2 sm:gap-10">
                <Field>
                  <FieldLabel
                    htmlFor="contact-name"
                    className="font-mono text-sm uppercase tracking-[0.12em] text-inverse-muted"
                  >
                    Name
                  </FieldLabel>
                  <Input
                    id="contact-name"
                    name="name"
                    autoComplete="name"
                    placeholder="Your name"
                    required
                    className="h-12 rounded-none border-0 border-b border-inverse-border px-4 text-lg text-inverse-foreground shadow-none placeholder:text-inverse-muted focus-visible:ring-0"
                  />
                </Field>

                <Field>
                  <FieldLabel
                    htmlFor="contact-email"
                    className="font-mono text-sm uppercase tracking-[0.12em] text-inverse-muted"
                  >
                    Email
                  </FieldLabel>
                  <Input
                    id="contact-email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    placeholder="you@company.com"
                    required
                    className="h-12 rounded-none border-0 border-b border-inverse-border px-4 text-lg text-inverse-foreground shadow-none placeholder:text-inverse-muted focus-visible:ring-0"
                  />
                </Field>
              </div>

              <Field>
                <FieldLabel
                  htmlFor="contact-project"
                  className="font-mono text-sm uppercase tracking-[0.12em] text-inverse-muted"
                >
                  Company / Project
                </FieldLabel>
                <Input
                  id="contact-project"
                  name="project"
                  placeholder="What are you building?"
                  required
                  className="h-12 rounded-none border-0 border-b border-inverse-border px-4 text-lg text-inverse-foreground shadow-none placeholder:text-inverse-muted focus-visible:ring-0"
                />
              </Field>

              <Field>
                <FieldLabel
                  htmlFor="contact-brief"
                  className="font-mono text-sm uppercase tracking-[0.12em] text-inverse-muted"
                >
                  The brief
                </FieldLabel>
                <Textarea
                  id="contact-brief"
                  name="brief"
                  placeholder="Tell us about the ambition, the problem and where things stand."
                  required
                  className="min-h-40 resize-y rounded-none border-0 border-b border-inverse-border px-4 py-4 text-lg leading-7 text-inverse-foreground shadow-none placeholder:text-inverse-muted focus-visible:ring-0"
                />
              </Field>

              <Button
                type="submit"
                size="lg"
                className="h-16 w-full justify-between rounded-none px-6 text-base"
              >
                Send inquiry <span aria-hidden="true">↗</span>
              </Button>
            </FieldGroup>
          </form>
        </div>
      </div>
    </section>
  );
}

export default ContactSection;
