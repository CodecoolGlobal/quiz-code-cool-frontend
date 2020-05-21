import he from "he";

export const decodeStringToHtml = text => {
  text = he.decode(text);
  return text;
};