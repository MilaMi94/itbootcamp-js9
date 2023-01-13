import { Film } from "./film.js";

let film1 = new Film("Avatar", "James Cameron", 1700, [9, 7, 9, 9, 8]);
let film2 = new Film(
  "Lord of the rings",
  "Peter Jackson",
  2001,
  [7, 10, 8, 6, 9, 10]
);
let film3 = new Film("", "", 5, [5, 6, 4, 2, 7]);

let filmovi = [film1, film2, film3];

// mana je to sto svakako moze da se poljima pristupi mimo getera i setera
// film1._naslov = "";

//mozemo property-ima da stavimo private identifier, i onda ne moze da im se pristupi van klase
// film1.#naslov = "";
console.log(film3.ocene);
console.log(`Prosečna ocena ${film1.naslov} filma je: ${film1.prosek()}`);

//Napraviti funkciju vekFilmova kojoj se prosleđuje niz filmova i ceo broj (vek), a funkcija ispisuje samo one filmove koji su stvoreni u prosleđenom veku
console.log(`Zadatak vekFilmova--------------------------`);

let vekFilmova = (niz, vek) => {
  let pocetakV = vek * 100 - 99;
  let krajV = vek * 100;
  niz.forEach((f) => {
    if (f.godinaIzdanja <= krajV && f.godinaIzdanja >= pocetakV) {
      console.log(f.naslov);
    }
  });
};

vekFilmova(filmovi, 18);

//Napraviti funkciju prosecnaOcena kojoj se prosleđuje niz filmova, a koja određuje i vraća  prosečnu ocenu svih filmova.
console.log(`Zadatak prosecnaOcena------------------------`);

let prosecnaOcena = (niz) => {
  let zbirSvihOcena = 0;
  let brSvihOcena = 0;
  niz.forEach((film) => {
    film.ocene.forEach((o) => {
      zbirSvihOcena += o;
    });
    brSvihOcena += film.ocene.length;
  });
  return zbirSvihOcena / brSvihOcena;
};

console.log(`Prosecna ocena svih filmova je: ${prosecnaOcena(filmovi)}`);

//Napraviti funkciju najboljeOcenjeni kojoj se prosleđuje niz filmova, a ona vraća najbolje ocenjeni film.
console.log(`Zadatak najboljeOcenjeni--------------------`);
let najboljeOcenjeni = (niz) => {
  let najFilm = niz[0];
  let najFilmProsek = najFilm.prosek();
  niz.forEach((f) => {
    if (najFilmProsek < f.prosek()) {
      najFilm = f;
    }
  });
  return najFilm;
};

console.log(najboljeOcenjeni(filmovi));
console.log(film1.prosek()); // najbolji prosek film1
console.log(film2.prosek());
console.log(film3.prosek());

//Napraviti funkciju osrednjiFilm kojoj se prosleđuje niz filmova a ona vraća film koji je najbliži prosečnoj oceni svih filmova.
console.log(`Zadatak osrednjiFilm--------------------------`);

let osrednjiFilm = (niz) => {
  let avgSvihFilmova = prosecnaOcena(niz);
  let minFilm = niz[0]; // predpostavka za film najblizi proseku
  let minRastojanje = Math.abs(avgSvihFilmova - minFilm.prosek());

  niz.forEach((f) => {
    let rastojanje = Math.abs(avgSvihFilmova - f.prosek());
    if (minRastojanje > rastojanje) {
      minRastojanje = rastojanje;
      minFilm = f;
    }
  });
  return minFilm;
};

console.log(osrednjiFilm(filmovi));

//Napraviti funkciju najmanjaOcenaNajboljeg kojoj se prosleđuje niz filmova a ona određuje najbolji film i ispisuje njegovu najslabiju ocenu.
console.log(`Zadatak najmanjaOcenaNajboljeg----------------`);

let najmanjaOcenaNajboljeg = niz =>{

}

//Napisati funkciju najmanjaOcena kojoj se prosleđuje niz filmova, a koja vraća koja je najmanja ocena koju je bilo koji film dobio
console.log(`Zadatak najmanjaOcena--------------------------`);
