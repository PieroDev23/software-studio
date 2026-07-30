import { parsePhoneNumberFromString } from "libphonenumber-js";
import { z } from "zod";

export const contactSchema = z
  .object({
    name: z
      .string()
      .trim()
      .min(2, "Please enter your name.")
      .max(80, "Your name is too long."),
    email: z
      .email("Enter a valid email address.")
      .max(160, "Your email is too long."),
    project: z
      .string()
      .trim()
      .min(2, "Tell us what you are building.")
      .max(120, "Keep the project name under 120 characters."),
    country: z.string().regex(/^[A-Z]{2}$/, "Select a country."),
    phone: z.string().trim().min(5, "Enter your phone number."),
    brief: z
      .string()
      .trim()
      .min(20, "Tell us a little more about the project.")
      .max(2000, "Keep the brief under 2,000 characters."),
  })
  .superRefine(({ country, phone }, context) => {
    const parsedPhone = parsePhoneNumberFromString(phone, country);

    if (!parsedPhone?.isValid()) {
      context.addIssue({
        code: "custom",
        path: ["phone"],
        message: "Enter a valid phone number for the selected country.",
      });
    }
  });
