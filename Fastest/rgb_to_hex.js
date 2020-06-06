const r = parseInt(readline());
const g = parseInt(readline());
const b = parseInt(readline());

function toHex(c) {
  let comp = c.toString(16).toUpperCase();
  return comp.length == 1 ? "0" + comp : comp;
}

function rgbToHex(r, g, b) {
  return "#" + toHex(r) + toHex(g) + toHex(b);
}

print(rgbToHex(r, g, b));