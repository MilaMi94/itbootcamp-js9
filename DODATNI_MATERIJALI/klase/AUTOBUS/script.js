import { Autobus } from "./autobus.js";

let a1 = new Autobus("LE12589", 62);
let a2 = new Autobus("PK92589", 62);
let a3 = new Autobus("NS12229", 35);
let a4 = new Autobus("NI22697", 52);

let autobusi = [a1, a2, a3, a4];

let divMaxSedista = document.getElementById("maxSedista");

//ukupnoSedista

let ukupnoSedista = (arr) => {
  let suma = 0;
  arr.forEach((a) => {
    suma += a.brojSedista;
  });
  return suma;
};

console.log(ukupnoSedista(autobusi));

//maksSedista

let maksSedista = (arr) => {
  let maxObj = arr[0]; // ovo nije ni potrebno ali je lakse zbog ispisa
  let maxObjBrSedista = arr[0].brojSedista;
  arr.forEach((a) => {
    if (a.brojSedista == maxObjBrSedista) {
      divMaxSedista.innerHTML += a.ispisPodataka();
    }
  });
};
maksSedista(autobusi);

//ljudi

let ljudi = (br, arr) => {
  let ukSedista = ukupnoSedista(arr);
  if (ukSedista >= br) {
    console.log(true);
  } else {
    console.log(false);
  }
};

ljudi(211, autobusi);
