import { useActionState, useEffect, useRef, useState } from "react";

import { sendContactInquiry } from "@/app/actions/contact";
import { countriesByCode, getLocalizedCountries } from "@/lib/countries";

const initialFormState = {
  success: false,
  message: "",
  errors: {},
};

function useContactForm(locale) {
  const formRef = useRef(null);
  const [formState, formAction] = useActionState(
    sendContactInquiry,
    initialFormState,
  );
  const [countryCode, setCountryCode] = useState("PE");
  const [phone, setPhone] = useState("");
  const [errors, setErrors] = useState({});

  useEffect(() => {
    let active = true;

    async function detectCountry() {
      try {
        const response = await fetch("/api/geolocation", {
          cache: "no-store",
        });
        const data = await response.json();
        const detectedCountry = countriesByCode.get(data.country);

        if (active && detectedCountry) setCountryCode(detectedCountry.code);
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

  const handleFieldChange = (event) => {
    const fieldName = event.currentTarget.name;

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
    setErrors((currentErrors) => {
      if (!currentErrors.country && !currentErrors.phone) return currentErrors;

      const nextErrors = { ...currentErrors };
      delete nextErrors.country;
      delete nextErrors.phone;
      return nextErrors;
    });
  };

  const handlePhoneChange = (event) => {
    setPhone(event.target.value);
    setErrors((currentErrors) => {
      if (!currentErrors.phone) return currentErrors;

      const nextErrors = { ...currentErrors };
      delete nextErrors.phone;
      return nextErrors;
    });
  };

  const callingCode = countriesByCode.get(countryCode)?.callingCode ?? "+51";

  return {
    formRef,
    formState,
    formAction,
    countryCode,
    phone,
    phoneValue: `${callingCode} ${phone}`.trim(),
    errors,
    localizedCountries: getLocalizedCountries(locale),
    handleFieldChange,
    handleCountryChange,
    handlePhoneChange,
  };
}

export { useContactForm };
