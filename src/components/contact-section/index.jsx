"use client";

import { useLocale, useTranslations } from "next-intl";

import { ContactAside } from "./contact-aside";
import { ContactForm } from "./contact-form";
import { useContactForm } from "./lib/use-contact-form";

function ContactSection() {
  const translate = useTranslations("Contact");
  const locale = useLocale();
  const form = useContactForm(locale);
  const titleLead = translate("titleLead");
  const titleCta = translate("titleCta");
  const description = translate("description");

  return (
    <section id="contacto" data-parallax-contact className="bg-inverse">
      <div className="grid overflow-hidden lg:min-h-svh lg:grid-cols-2">
        <ContactAside
          titleLead={titleLead}
          titleCta={titleCta}
          description={description}
        />
        <ContactForm
          form={form}
          titleLead={titleLead}
          titleCta={titleCta}
          description={description}
          translate={translate}
        />
      </div>
    </section>
  );
}

export default ContactSection;
