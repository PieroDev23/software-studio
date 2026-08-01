import { TypographyEyebrow } from "@/components/ui/typography";

import { ContactFields } from "./contact-fields";

function ContactForm({ form, title, description, translate }) {
  return (
    <div className="flex items-center bg-inverse px-5 py-14 text-inverse-foreground sm:min-h-svh sm:px-10 sm:py-16 lg:px-12 xl:px-16">
      <form
        ref={form.formRef}
        data-reveal
        action={form.formAction}
        className="mx-auto w-full max-w-2xl"
        noValidate
      >
        <input
          type="text"
          name="bot-field"
          tabIndex={-1}
          autoComplete="off"
          className="hidden"
          aria-hidden="true"
        />
        <input type="hidden" name="phone" value={form.phoneValue} />

        <div className="mb-12 flex flex-col gap-5 lg:hidden">
          <h2 className="text-4xl leading-11 font-medium tracking-[0.030rem]">
            {title}
          </h2>
          <p className="max-w-xl text-lg leading-7 text-inverse-muted">
            {description}
          </p>
        </div>

        <TypographyEyebrow tone="inverse" className="mb-10 sm:mb-14">
          {translate("eyebrow")}
        </TypographyEyebrow>
        <ContactFields form={form} translate={translate} />
      </form>
    </div>
  );
}

export { ContactForm };
