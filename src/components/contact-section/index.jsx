"use client";

import { useLocale, useTranslations } from "next-intl";

import { ContactAside } from "./contact-aside";
import { ContactForm } from "./contact-form";
import { useContactForm } from "./lib/use-contact-form";

function ContactSection() {
  const translate = useTranslations("Contact");
  const locale = useLocale();
  const form = useContactForm(locale);
  const title = translate("title");
  const description = translate("description");

  return (
    <section id="contacto" data-parallax-contact className="bg-inverse">
      <div className="grid overflow-hidden lg:min-h-svh lg:grid-cols-2">
        <ContactAside title={title} description={description} />
        <ContactForm
          form={form}
          title={title}
          description={description}
          translate={translate}
        />
      </div>
    </section>
  );
}

export default ContactSection;
