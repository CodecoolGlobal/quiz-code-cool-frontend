import he from "he";

export const decodeStringToHtml = text => {
  text = he.decode(text);
  return text;
};

export const shuffle = array => {
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
};
