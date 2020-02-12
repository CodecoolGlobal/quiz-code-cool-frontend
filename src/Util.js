export const formatText = text => {
  text = text.replace(/&quot;/g, "'");
  text = text.replace(/&amp;/g, "&");
  text = text.replace(/&ldquo;/g, "“");
  text = text.replace(/&rdquo;/g, "”");
  text = text.replace(/&#039;/g, "'");
  text = text.replace(/&eacute;/g, "é");
  return text;
};
