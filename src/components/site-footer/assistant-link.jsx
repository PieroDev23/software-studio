"use client";

function AssistantLink({ children, href, promptToCopy, ...props }) {
  function copyPrompt() {
    if (!promptToCopy || !navigator.clipboard) {
      return;
    }

    navigator.clipboard.writeText(promptToCopy).catch(() => {});
  }

  return (
    <a href={href} {...props} onClick={copyPrompt}>
      {children}
    </a>
  );
}

export default AssistantLink;
