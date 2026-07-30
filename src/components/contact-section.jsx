"use client";

import { AlertCircleIcon, CheckCircle2Icon } from "lucide-react";
import { useLocale, useTranslations } from "next-intl";
import { useActionState, useEffect, useRef, useState } from "react";
import { useFormStatus } from "react-dom";
import { sendContactInquiry } from "@/app/actions/contact";
import Silk from "@/components/Silk";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import {
  Field,
  FieldError,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import {
  NativeSelect,
  NativeSelectOption,
} from "@/components/ui/native-select";
import { Textarea } from "@/components/ui/textarea";
import { TypographyEyebrow } from "@/components/ui/typography";
import { countriesByCode, getLocalizedCountries } from "@/lib/countries";

const initialFormState = {
  success: false,
  message: "",
  errors: {},
};

function SubmitButton() {
  const t = useTranslations("Contact");
  const { pending } = useFormStatus();

  return (
    <Button
      type="submit"
      size="lg"
      disabled={pending}
      className="h-16 w-full justify-between rounded-none px-6 text-base"
    >
      {pending ? t("sending") : t("send")}
      <span aria-hidden="true">↗</span>
    </Button>
  );
}

function ContactSection() {
  const t = useTranslations("Contact");
  const locale = useLocale();
  const formRef = useRef(null);
  const [formState, formAction] = useActionState(
    sendContactInquiry,
    initialFormState,
  );
  const [countryCode, setCountryCode] = useState("PE");
  const [phone, setPhone] = useState("");
  const [errors, setErrors] = useState({});
  const contactTitle = t("title");
  const contactDescription = t("description");
  const localizedCountries = getLocalizedCountries(locale);

  useEffect(() => {
    let active = true;

    async function detectCountry() {
      try {
        const response = await fetch("/api/geolocation", {
          cache: "no-store",
        });
        const data = await response.json();
        const detectedCountry = countriesByCode.get(data.country);

        if (!active || !detectedCountry) return;

        setCountryCode(detectedCountry.code);
      } catch {
        // Peru remains the safe default when geolocation is unavailable.
      }
    }

    detectCountry();

    return () => {
      active = false;
    };
  }, []);

  useEffect(() => {
    setErrors(formState.errors ?? {});

    if (formState.success) {
      formRef.current?.reset();
      setPhone("");
    }
  }, [formState]);

  const clearError = (fieldName) => {
    setErrors((currentErrors) => {
      if (!currentErrors[fieldName]) return currentErrors;

      const nextErrors = { ...currentErrors };
      delete nextErrors[fieldName];
      return nextErrors;
    });
  };

  const handleCountryChange = (event) => {
    const nextCountry = countriesByCode.get(event.target.value);

    if (!nextCountry) return;

    setCountryCode(nextCountry.code);
    clearError("country");
    clearError("phone");
  };

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
          <form
            ref={formRef}
            data-reveal
            action={formAction}
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
            <input
              type="hidden"
              name="phone"
              value={`${countriesByCode.get(countryCode)?.callingCode ?? "+51"} ${phone}`.trim()}
            />
            <div className="mb-12 flex flex-col gap-5 lg:hidden">
              <h2 className="text-[2.65rem] font-medium leading-[1.08] tracking-[-0.035em]">
                {contactTitle}
              </h2>
              <p className="max-w-xl text-lg leading-7 text-inverse-muted">
                {contactDescription}
              </p>
            </div>

            <TypographyEyebrow tone="inverse" className="mb-10 sm:mb-14">
              {t("eyebrow")}
            </TypographyEyebrow>

            <FieldGroup className="gap-8 sm:gap-10">
              <div className="grid gap-8 sm:grid-cols-2 sm:gap-10">
                <Field data-invalid={Boolean(errors.name)}>
                  <FieldLabel
                    htmlFor="contact-name"
                    className="font-mono text-sm uppercase tracking-[0.12em] text-inverse-muted"
                  >
                    {t("name")}
                  </FieldLabel>
                  <Input
                    id="contact-name"
                    name="name"
                    autoComplete="name"
                    placeholder={t("namePlaceholder")}
                    required
                    aria-invalid={Boolean(errors.name)}
                    onChange={() => clearError("name")}
                    className="h-12 rounded-none border-0 border-b border-inverse-border px-4 text-lg text-inverse-foreground shadow-none placeholder:text-inverse-muted focus-visible:ring-0"
                  />
                  <FieldError
                    errors={errors.name?.map((message) => ({ message }))}
                  />
                </Field>

                <Field data-invalid={Boolean(errors.email)}>
                  <FieldLabel
                    htmlFor="contact-email"
                    className="font-mono text-sm uppercase tracking-[0.12em] text-inverse-muted"
                  >
                    {t("email")}
                  </FieldLabel>
                  <Input
                    id="contact-email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    placeholder="you@company.com"
                    required
                    aria-invalid={Boolean(errors.email)}
                    onChange={() => clearError("email")}
                    className="h-12 rounded-none border-0 border-b border-inverse-border px-4 text-lg text-inverse-foreground shadow-none placeholder:text-inverse-muted focus-visible:ring-0"
                  />
                  <FieldError
                    errors={errors.email?.map((message) => ({ message }))}
                  />
                </Field>
              </div>

              <Field data-invalid={Boolean(errors.project)}>
                <FieldLabel
                  htmlFor="contact-project"
                  className="font-mono text-sm uppercase tracking-[0.12em] text-inverse-muted"
                >
                  {t("project")}
                </FieldLabel>
                <Input
                  id="contact-project"
                  name="project"
                  placeholder={t("projectPlaceholder")}
                  required
                  aria-invalid={Boolean(errors.project)}
                  onChange={() => clearError("project")}
                  className="h-12 rounded-none border-0 border-b border-inverse-border px-4 text-lg text-inverse-foreground shadow-none placeholder:text-inverse-muted focus-visible:ring-0"
                />
                <FieldError
                  errors={errors.project?.map((message) => ({ message }))}
                />
              </Field>

              <div className="grid gap-8 sm:grid-cols-2 sm:gap-10">
                <Field data-invalid={Boolean(errors.country)}>
                  <FieldLabel
                    htmlFor="contact-country"
                    className="font-mono text-sm uppercase tracking-[0.12em] text-inverse-muted"
                  >
                    {t("country")}
                  </FieldLabel>
                  <NativeSelect
                    id="contact-country"
                    name="country"
                    value={countryCode}
                    onChange={handleCountryChange}
                    aria-invalid={Boolean(errors.country)}
                    className="w-full [&_[data-slot=native-select]]:h-12 [&_[data-slot=native-select]]:rounded-none [&_[data-slot=native-select]]:border-0 [&_[data-slot=native-select]]:border-b [&_[data-slot=native-select]]:border-inverse-border [&_[data-slot=native-select]]:px-4 [&_[data-slot=native-select]]:text-lg [&_[data-slot=native-select]]:text-inverse-foreground [&_[data-slot=native-select]]:shadow-none [&_[data-slot=native-select]]:focus-visible:ring-0"
                  >
                    {localizedCountries.map((country) => (
                      <NativeSelectOption
                        key={country.code}
                        value={country.code}
                      >
                        {country.flag} {country.name} ({country.callingCode})
                      </NativeSelectOption>
                    ))}
                  </NativeSelect>
                  <FieldError
                    errors={errors.country?.map((message) => ({ message }))}
                  />
                </Field>

                <Field data-invalid={Boolean(errors.phone)}>
                  <FieldLabel
                    htmlFor="contact-phone"
                    className="font-mono text-sm uppercase tracking-[0.12em] text-inverse-muted"
                  >
                    {t("phone")}
                  </FieldLabel>
                  <Input
                    id="contact-phone"
                    name="phoneNational"
                    type="tel"
                    inputMode="tel"
                    autoComplete="tel"
                    value={phone}
                    onChange={(event) => {
                      setPhone(event.target.value);
                      clearError("phone");
                    }}
                    aria-invalid={Boolean(errors.phone)}
                    placeholder={t("phonePlaceholder")}
                    className="h-12 rounded-none border-0 border-b border-inverse-border px-4 text-lg text-inverse-foreground shadow-none placeholder:text-inverse-muted focus-visible:ring-0"
                  />
                  <FieldError
                    errors={errors.phone?.map((message) => ({ message }))}
                  />
                </Field>
              </div>

              <Field data-invalid={Boolean(errors.brief)}>
                <FieldLabel
                  htmlFor="contact-brief"
                  className="font-mono text-sm uppercase tracking-[0.12em] text-inverse-muted"
                >
                  {t("brief")}
                </FieldLabel>
                <Textarea
                  id="contact-brief"
                  name="brief"
                  placeholder={t("briefPlaceholder")}
                  required
                  aria-invalid={Boolean(errors.brief)}
                  onChange={() => clearError("brief")}
                  className="min-h-40 resize-y rounded-none border-0 border-b border-inverse-border px-4 py-4 text-lg leading-7 text-inverse-foreground shadow-none placeholder:text-inverse-muted focus-visible:ring-0"
                />
                <FieldError
                  errors={errors.brief?.map((message) => ({ message }))}
                />
              </Field>

              {formState.message &&
                (formState.success ? (
                  <Alert className="rounded-none border-inverse-border bg-background px-5 py-5 text-foreground shadow-xl">
                    <CheckCircle2Icon className="text-success" />
                    <AlertTitle>{t("successTitle")}</AlertTitle>
                    <AlertDescription className="text-muted-foreground">
                      {formState.message}
                    </AlertDescription>
                  </Alert>
                ) : (
                  <Alert
                    variant="destructive"
                    className="rounded-none border-destructive/30 bg-background px-5 py-5"
                  >
                    <AlertCircleIcon />
                    <AlertTitle>{t("errorTitle")}</AlertTitle>
                    <AlertDescription>{formState.message}</AlertDescription>
                  </Alert>
                ))}

              {!formState.success && <SubmitButton />}
            </FieldGroup>
          </form>
        </div>
      </div>
    </section>
  );
}

export default ContactSection;
