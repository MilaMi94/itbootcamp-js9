/*import { generateList, generateItem as generateListItem} from "./moduli/list.js";
import {generateTable, generateItem as generateTableItem, generateTableRow} from "./moduli/table.js";


let ul = generateList(document.body);
generateListItem(ul, "images/photo1.png");
generateListItem(ul, "images/photo2.png");
generateListItem(ul, "images/photo3.png");



let table = generateTable(document.body);
let tr = generateTableRow(table);
generateTableItem(tr, "images/photo1.png");
generateTableItem(tr, "images/photo2.png");
generateTableItem(tr, "images/photo3.png");*/

import * as Lista from "./moduli/list.js";
import * as Tabela from "./moduli/table.js";


let ul = Lista.GL(document.body);
for (let i = 1; i <= Lista.length; i++) {
  Lista.GI(ul, `images/photo${i}.png`);
}

let table = Tabela.generateTable(document.body);
let tr = Tabela.generateTableRow(table);

for (let i = 1; i <= Tabela.length; i++) {
  Tabela.generateItem(tr, `images/photo${i}.png`);
}
