import { parsePhoneNumberFromString } from "libphonenumber-js";
import { z } from "zod";

export const createContactSchema = (t) =>
  z
    .object({
      name: z
        .string()
        .trim()
        .min(2, t("validation.nameRequired"))
        .max(80, t("validation.nameLong")),
      email: z
        .email(t("validation.emailInvalid"))
        .max(160, t("validation.emailLong")),
      project: z
        .string()
        .trim()
        .min(2, t("validation.projectRequired"))
        .max(120, t("validation.projectLong")),
      country: z.string().regex(/^[A-Z]{2}$/, t("validation.countryRequired")),
      phone: z.string().trim().min(5, t("validation.phoneRequired")),
      brief: z
        .string()
        .trim()
        .min(20, t("validation.briefRequired"))
        .max(2000, t("validation.briefLong")),
    })
    .superRefine(({ country, phone }, context) => {
      const parsedPhone = parsePhoneNumberFromString(phone, country);

      if (!parsedPhone?.isValid()) {
        context.addIssue({
          code: "custom",
          path: ["phone"],
          message: t("validation.phoneInvalid"),
        });
      }
    });
