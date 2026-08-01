import { useTranslations } from "next-intl";
import { useFormStatus } from "react-dom";

import { Button } from "@/components/ui/button";

function ContactSubmitButton() {
  const translate = useTranslations("Contact");
  const { pending } = useFormStatus();

  return (
    <Button
      type="submit"
      size="lg"
      disabled={pending}
      className="h-16 w-full justify-between rounded-none px-6 text-base"
    >
      {pending ? translate("sending") : translate("send")}
      <span aria-hidden="true">↗</span>
    </Button>
  );
}

export { ContactSubmitButton };
