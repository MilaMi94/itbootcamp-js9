import generateImage from "./general.js";

function generateList(parent) {
  let ul = document.createElement("ul");
  ul.style.overflow = "hidden";
  ul.style.listStyleType = "none";
  parent.appendChild(ul);
  return ul;
}

function generateItem(parent, src) {
  let li = document.createElement("li");
  li.style.float = "left";
  let img = generateImage(src);
  li.appendChild(img);
  parent.appendChild(li);
  return li;
}
let length = 3;

export { generateList as GL, generateItem as GI, length};
