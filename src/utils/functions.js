export function adjustToUrl(text, elements) {
  elements.forEach((e) => {
    const res = text.replaceAll(e, "");
    text = res;
  });
  return text;
}
