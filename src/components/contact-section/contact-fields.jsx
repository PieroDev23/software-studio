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

import { ContactFormStatus } from "./contact-form-status";
import { ContactSubmitButton } from "./contact-submit-button";

const labelClassName =
  "font-mono text-sm uppercase tracking-[0.12em] text-inverse-muted";
const inputClassName =
  "h-12 rounded-none border-0 border-b border-inverse-border px-4 text-lg text-inverse-foreground shadow-none placeholder:text-inverse-muted focus-visible:ring-0";

function ContactFields({ form, translate }) {
  const {
    countryCode,
    phone,
    errors,
    localizedCountries,
    formState,
    handleFieldChange,
    handleCountryChange,
    handlePhoneChange,
  } = form;

  return (
    <FieldGroup className="gap-8 sm:gap-10">
      <div className="grid gap-8 sm:grid-cols-2 sm:gap-10">
        <Field data-invalid={Boolean(errors.name)}>
          <FieldLabel htmlFor="contact-name" className={labelClassName}>
            {translate("name")}
          </FieldLabel>
          <Input
            id="contact-name"
            name="name"
            autoComplete="name"
            placeholder={translate("namePlaceholder")}
            required
            aria-invalid={Boolean(errors.name)}
            onChange={handleFieldChange}
            className={inputClassName}
          />
          <FieldError errors={errors.name?.map((message) => ({ message }))} />
        </Field>

        <Field data-invalid={Boolean(errors.email)}>
          <FieldLabel htmlFor="contact-email" className={labelClassName}>
            {translate("email")}
          </FieldLabel>
          <Input
            id="contact-email"
            name="email"
            type="email"
            autoComplete="email"
            placeholder="you@company.com"
            required
            aria-invalid={Boolean(errors.email)}
            onChange={handleFieldChange}
            className={inputClassName}
          />
          <FieldError errors={errors.email?.map((message) => ({ message }))} />
        </Field>
      </div>

      <Field data-invalid={Boolean(errors.project)}>
        <FieldLabel htmlFor="contact-project" className={labelClassName}>
          {translate("project")}
        </FieldLabel>
        <Input
          id="contact-project"
          name="project"
          placeholder={translate("projectPlaceholder")}
          required
          aria-invalid={Boolean(errors.project)}
          onChange={handleFieldChange}
          className={inputClassName}
        />
        <FieldError errors={errors.project?.map((message) => ({ message }))} />
      </Field>

      <div className="grid gap-8 sm:grid-cols-2 sm:gap-10">
        <Field data-invalid={Boolean(errors.country)}>
          <FieldLabel htmlFor="contact-country" className={labelClassName}>
            {translate("country")}
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
              <NativeSelectOption key={country.code} value={country.code}>
                {country.flag} {country.name} ({country.callingCode})
              </NativeSelectOption>
            ))}
          </NativeSelect>
          <FieldError
            errors={errors.country?.map((message) => ({ message }))}
          />
        </Field>

        <Field data-invalid={Boolean(errors.phone)}>
          <FieldLabel htmlFor="contact-phone" className={labelClassName}>
            {translate("phone")}
          </FieldLabel>
          <Input
            id="contact-phone"
            name="phoneNational"
            type="tel"
            inputMode="tel"
            autoComplete="tel"
            value={phone}
            onChange={handlePhoneChange}
            aria-invalid={Boolean(errors.phone)}
            placeholder={translate("phonePlaceholder")}
            className={inputClassName}
          />
          <FieldError errors={errors.phone?.map((message) => ({ message }))} />
        </Field>
      </div>

      <Field data-invalid={Boolean(errors.brief)}>
        <FieldLabel htmlFor="contact-brief" className={labelClassName}>
          {translate("brief")}
        </FieldLabel>
        <Textarea
          id="contact-brief"
          name="brief"
          placeholder={translate("briefPlaceholder")}
          required
          aria-invalid={Boolean(errors.brief)}
          onChange={handleFieldChange}
          className="min-h-40 resize-y rounded-none border-0 border-b border-inverse-border px-4 py-4 text-lg leading-7 text-inverse-foreground shadow-none placeholder:text-inverse-muted focus-visible:ring-0"
        />
        <FieldError errors={errors.brief?.map((message) => ({ message }))} />
      </Field>

      <ContactFormStatus formState={formState} translate={translate} />
      {!formState.success && <ContactSubmitButton />}
    </FieldGroup>
  );
}

export { ContactFields };
