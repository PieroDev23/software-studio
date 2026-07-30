"use server";

import { Resend } from "resend";
import { contactSchema } from "@/lib/contact-schema";
import { countriesByCode } from "@/lib/countries";

const recipient = "pierodavilaaguirre22@gmail.com";
const mockDelivery = process.env.CONTACT_FORM_MOCK !== "false";

export async function sendContactInquiry(_previousState, formData) {
  if (formData.get("bot-field")) {
    return {
      success: true,
      message: "Thanks. We will be in touch shortly.",
      errors: {},
    };
  }

  const result = contactSchema.safeParse(Object.fromEntries(formData));

  if (!result.success) {
    return {
      success: false,
      message: "Please review the highlighted fields.",
      errors: result.error.flatten().fieldErrors,
    };
  }

  if (mockDelivery) {
    await new Promise((resolve) => setTimeout(resolve, 900));

    return {
      success: true,
      message:
        "Thanks — your project is in our queue. We will be in touch shortly.",
      errors: {},
    };
  }

  if (!process.env.RESEND_API_KEY) {
    return {
      success: false,
      message: "Email delivery is not configured yet.",
      errors: {},
    };
  }

  const { name, email, project, country, phone, brief } = result.data;
  const countryName = countriesByCode.get(country)?.name ?? country;
  const safeProject = project.replace(/[\r\n]+/g, " ");
  const resend = new Resend(process.env.RESEND_API_KEY);
  const { error } = await resend.emails.send({
    from: process.env.RESEND_FROM_EMAIL ?? "Manyas <onboarding@resend.dev>",
    to: recipient,
    replyTo: email,
    subject: `New inquiry · ${safeProject}`,
    text: [
      "New project inquiry",
      "",
      `Name: ${name}`,
      `Email: ${email}`,
      `Phone: ${phone}`,
      `Country: ${countryName} (${country})`,
      `Company / project: ${project}`,
      "",
      "Brief",
      brief,
    ].join("\n"),
  });

  if (error) {
    console.error("Resend contact delivery failed", error);
    return {
      success: false,
      message: "We could not send your inquiry. Please try again.",
      errors: {},
    };
  }

  return {
    success: true,
    message:
      "Thanks — your project is in our queue. We will be in touch shortly.",
    errors: {},
  };
}
