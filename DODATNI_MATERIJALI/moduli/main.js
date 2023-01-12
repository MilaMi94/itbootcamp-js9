import * as List from "./modules/list.js";
import * as Table from "./modules/table.js";

let ul = List.generateList(document.body);
for (let i = 1; i <= List.length; i++) {
  List.generateListItem(ul, "images/01.jpg");
  List.generateListItem(ul, "images/02.jpg");
}


let table = Table.generateTable(document.body);
let row = Table.generateTableRow(table);
for (let i = 1; i <= Table.length; i++) {
    Table.generateTableItem(row, "images/01.jpg");
    
  }
  