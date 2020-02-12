export const decodeStringToHtml = text => {
  var txt = document.createElement("textarea");
  txt.innerHTML = text;
  return txt.value;
};
