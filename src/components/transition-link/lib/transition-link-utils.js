function getTargetPath(href) {
  if (typeof href !== "string") return null;
  return href.split(/[?#]/, 1)[0] || "/";
}

function getTargetHash(href) {
  if (typeof href !== "string") return null;

  const hashIndex = href.indexOf("#");
  if (hashIndex === -1) return null;

  const hash = href.slice(hashIndex + 1).split("?", 1)[0];
  if (!hash) return null;

  try {
    return decodeURIComponent(hash);
  } catch {
    return hash;
  }
}

export { getTargetHash, getTargetPath };
