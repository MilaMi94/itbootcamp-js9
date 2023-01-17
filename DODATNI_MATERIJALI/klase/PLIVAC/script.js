import { Plivac } from "./plivac.js";

let p1 = new Plivac("Milos", 1997, 15);
let p2 = new Plivac("Jana", 2002, 21);
let p3 = new Plivac("Tina", 1994, 30);
let p4 = new Plivac("Sasa", 1991, 12);
let p5 = new Plivac("Jeka", 1993, 12);
let p6 = new Plivac("Sonja", 2001, 18);
let p7 = new Plivac("Nikola", 2000, 20);
let p8 = new Plivac("Mladen", 1961, 13);
let p9 = new Plivac("Aca", 1971, 15);
let p10 = new Plivac("Dunja", 1981, 15);
let p11 = new Plivac("Maja", 1991, 16);
let p12 = new Plivac("Joka", 1991, 12);

let plivaci = [p1, p2, p3, p4, p5, p6, p7, p8, p9, p10, p11, p12];

let topTen = (arr) => {
  let nizNajbolji = [];
  arr.forEach((p) => {
    nizNajbolji.push(p.najboljiRezultat);
  });

  // za sortiranje petlja
  for (let i = 1; i < nizNajbolji.length; i++) {
    for (let j = 0; j < i; j++) {
      if (nizNajbolji[i] < nizNajbolji[j]) {
        let x = nizNajbolji[i];
        nizNajbolji[i] = nizNajbolji[j];
        nizNajbolji[j] = x;
      }
    }
  }
  let nizDeset = [];

  for (let i = 0; i < 10; i++) {
    nizDeset.push(nizNajbolji[i]);
  }
  return nizDeset;
  {
  }
};
console.log(topTen(plivaci));
// norma
let norma = (norma, arr) => {
  let nizNorma = [];
  arr.forEach((p) => {
    if (p.najboljiRezultat <= norma) {
      nizNorma.push(p);
    }
  });

  return nizNorma;
};

console.log(norma(15, plivaci));
// normaNajmladji

let divNajmladji = document.getElementById('najmladji');

let normaNajmladji = () => {
  let nizNorma = norma(15, plivaci);
  let najmladjiPlivac = nizNorma[0];
  let najmladjeGodiste = najmladjiPlivac.godinaRodjenja;
  nizNorma.forEach(p =>{
    if(p.godinaRodjenja > najmladjeGodiste){
        najmladjeGodiste = p.godinaRodjenja;
        najmladjiPlivac = p;

    }
  })
  return divNajmladji.innerHTML += `${najmladjiPlivac.ime} - ${najmladjiPlivac.godinaRodjenja} - ${najmladjiPlivac.najboljiRezultat}`;
};


normaNajmladji();