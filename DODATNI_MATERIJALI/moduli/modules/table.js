import generateImage from "./general.js";

let generateTable = (parent) => {
  let table = document.createElement("table");
  table.style.border = '1px solid red';
  parent.appendChild(table);
  return table;
};

let generateTableRow = (parent) => {
  let tr = document.createElement("tr");
  parent.appendChild(tr);
  return tr;
};

let generateTableItem = (parent, src) => {
    let td = document.createElement('td');
    let img = generateImage(src);
    td.appendChild(img);
    parent.appendChild(td);
    return td;
};

const length = 5;


export {generateTable, generateTableRow, generateTableItem, length }