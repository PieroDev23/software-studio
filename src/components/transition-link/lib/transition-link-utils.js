function getTargetPath(href) {
  if (typeof href !== "string") return null;
  return href.split(/[?#]/, 1)[0] || "/";
}

function pickTransitionPhrase(label) {
  const phrases = label
    .split("||")
    .map((phrase) => phrase.trim())
    .filter(Boolean);

  return phrases[Math.floor(Math.random() * phrases.length)] || label;
}

export { getTargetPath, pickTransitionPhrase };
