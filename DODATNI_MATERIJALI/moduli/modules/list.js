import generateImage from "./general.js";

let generateList = (parent) => {
  let ul = document.createElement("ul");
  ul.style.listStyleType = "none";
  ul.style.overflow = "hidden";
  parent.appendChild(ul);
  return ul;
};

let generateListItem = (parent, src) => {
  let li = document.createElement("li");
  li.style.float = "left";
  let img = generateImage(src);
  li.appendChild(img);
  parent.appendChild(li);
  return li;
};

const length = 5;

export { generateList, generateListItem, length };
