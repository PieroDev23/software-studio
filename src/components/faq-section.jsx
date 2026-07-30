import {
  TypographyDisplay,
  TypographyEyebrow,
} from "@/components/ui/typography";

const questions = [
  {
    question: "What kind of work do you take on?",
    answer:
      "Consequential digital products: new ventures, complex platforms and critical product decisions where senior judgment changes the outcome.",
  },
  {
    question: "When should we bring you in?",
    answer:
      "When the opportunity is real but the path is not. We are most useful before direction hardens—or when a product has lost momentum.",
  },
  {
    question: "Do you replace an internal team?",
    answer:
      "No. We work with founders and product teams, bringing the senior strategy, design and engineering needed to move the hardest work forward.",
  },
  {
    question: "How does an engagement begin?",
    answer:
      "With the decision in front of you. We establish the stakes, expose the real constraints and define the smallest meaningful way to start.",
  },
  {
    question: "How long do engagements last?",
    answer:
      "Long enough to create a real outcome. Some begin as a focused strategic phase; others continue through design, build and release.",
  },
  {
    question: "Can you work with teams outside Peru?",
    answer:
      "Yes. We are based in Lima and work globally, with deliberate overlap, direct communication and senior partners in every conversation.",
  },
];

function FaqSection() {
  return (
    <section
      className="section-frame section-grid section-grid-dark bg-accent text-foreground"
      aria-labelledby="faq-title"
    >
      <div className="content-container grid gap-12 lg:grid-cols-12 lg:gap-8">
        <div className="lg:col-span-5">
          <TypographyEyebrow>Before we begin</TypographyEyebrow>
          <TypographyDisplay
            id="faq-title"
            as="h2"
            size="statement"
            className="mt-8 max-w-[8ch] sm:mt-12"
          >
            The questions worth asking.
          </TypographyDisplay>
        </div>

        <div className="border-t border-border lg:col-span-7">
          {questions.map((item, index) => (
            <details
              data-reveal
              name="faq"
              key={item.question}
              className="group border-b border-border"
            >
              <summary className="flex cursor-pointer list-none items-start justify-between gap-8 py-6 marker:hidden sm:py-8 [&::-webkit-details-marker]:hidden">
                <span className="flex gap-4 sm:gap-6">
                  <span className="pt-1 font-mono text-xs tracking-[0.12em] text-muted-foreground sm:text-sm">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="text-xl font-medium leading-tight tracking-[-0.02em] sm:text-2xl">
                    {item.question}
                  </span>
                </span>
                <span
                  className="shrink-0 font-mono text-2xl leading-none transition-transform duration-300 group-open:rotate-45"
                  aria-hidden="true"
                >
                  +
                </span>
              </summary>

              <p className="max-w-2xl pb-7 pl-10 pr-8 text-base leading-7 text-muted-foreground sm:pb-9 sm:pl-14 sm:text-lg sm:leading-8">
                {item.answer}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FaqSection;
