import { Radnik } from "./radnik.js";

const r1 = new Radnik("Mila", 0);
const r2 = new Radnik("Milos", 700);
const r3 = new Radnik("Maja", 1200);
const r4 = new Radnik("Milena", 1200);
let divMaxPlata = document.getElementById("maxPlata");

const radnici = [r1, r2, r3, r4];

let maksPlata = (niz) => {
  let maxPlata = niz[0].plata;
  niz.forEach((r) => {
    if (maxPlata < r.plata) {
      maxPlata = r.plata;
    }
  });
 return maxPlata;
};

console.log(maksPlata(radnici));



maksPlata(radnici);

let maksPlataOsoba = (arr) => {
  arr.forEach(r=>{
    if(r.plata == maksPlata(arr) ){
      divMaxPlata.innerHTML += r.ispisListe();
    }
  });
};

maksPlataOsoba(radnici);
