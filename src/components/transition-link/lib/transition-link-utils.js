function getTargetPath(href) {
  if (typeof href !== "string") return null;
  return href.split(/[?#]/, 1)[0] || "/";
}

export { getTargetPath };
