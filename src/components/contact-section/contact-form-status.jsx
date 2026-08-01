import { AlertCircleIcon, CheckCircle2Icon } from "lucide-react";

import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

function ContactFormStatus({ formState, translate }) {
  if (!formState.message) return null;

  if (formState.success) {
    return (
      <Alert className="rounded-none border-inverse-border bg-background px-5 py-5 text-foreground shadow-xl">
        <CheckCircle2Icon className="text-success" />
        <AlertTitle>{translate("successTitle")}</AlertTitle>
        <AlertDescription className="text-muted-foreground">
          {formState.message}
        </AlertDescription>
      </Alert>
    );
  }

  return (
    <Alert
      variant="destructive"
      className="rounded-none border-destructive/30 bg-background px-5 py-5"
    >
      <AlertCircleIcon />
      <AlertTitle>{translate("errorTitle")}</AlertTitle>
      <AlertDescription>{formState.message}</AlertDescription>
    </Alert>
  );
}

export { ContactFormStatus };
