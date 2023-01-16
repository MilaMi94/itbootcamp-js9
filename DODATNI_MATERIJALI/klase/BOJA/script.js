import Boja from "./boja.js";

let b1 = new Boja(5, 10, 100); // zasicenost 0-100% ide
let b2 = new Boja(5, 50, 100);
let b3 = new Boja(5, 30, 50);
let boje = [b1, b2, b3];

//Napraviti funkciju ispitajSličnost koja za dve prosleđene boje vraća true ukoliko su te dve boje iste, u suprotnom vraća false.

let ispitajSličnost = (prvab, drugab) => {
  if (prvab.talasnaDuzina == drugab.talasnaDuzina) {
    console.log(true);
  } else {
    console.log(false);
  }
};

ispitajSličnost(b1, b2);

//Napraviti funkciju srednjaTalasnaDuzina koja za niz boja vraća vrednost srednje talasne dužine.

let srednjaTalasnaDuzina = (niz) => {
  let suma = 0;
  niz.forEach((b) => {
    suma += b.talasnaDuzina;
  });
  return suma / niz.length;
};

console.log(srednjaTalasnaDuzina(boje));


