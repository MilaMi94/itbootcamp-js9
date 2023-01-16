import { Film } from "./film.js";

let film1 = new Film("Avatar", "James Cameron", 1700, [9, 10, 9, 9, 8]);
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

let najmanjaOcenaNajboljeg = (niz) => {
  let najboljeOcenjen = najboljeOcenjeni(niz);
  let min = najboljeOcenjen.ocene[0];
  najboljeOcenjen.ocene.forEach((o) => {
    if (min > o) {
      min = o;
    }
  });
  return min;
};

console.log(najmanjaOcenaNajboljeg(filmovi));

//Napisati funkciju najmanjaOcena kojoj se prosleđuje niz filmova, a koja vraća koja je najmanja ocena koju je bilo koji film dobio.
console.log(`Zadatak najmanjaOcena--------------------------`);
// moja verzija
let najmanjaOcena = (niz) => {
  let minOcena = niz[0].ocene[0];
  for (let i = 0; i < niz.length; i++) {
    for (let j = 0; j < niz[i].ocene.length; j++) {
      if (niz[i].ocene[j] < minOcena) {
        minOcena = niz[i].ocene[j];
      }
    }
  }
  return minOcena;
};

console.log(najmanjaOcena(filmovi));

// na casu
let najmanjaOcena1 = (niz) => {
  let najmanja = niz[0].ocene[0];
  niz.forEach((el) => {
    el.ocene.forEach((o) => {
      if (najmanja > o) {
        najmanja = o;
      }
    });
  });
  console.log(najmanja);
};

najmanjaOcena1(filmovi);

//Napisati funkciju najcescaOcena kojoj se prosleđuje niz ocena, a ona vraća ocenu koju su filmovi najčešće dobijali.
console.log(`Zadatak najcescaOcena--------------------------`);
// ja probala
let niz = [2, 1, 10, 7, 5, 5, 5, 9, 9, 9, 9];
let najcescaOcena = (arr) => {
  let result = 0;
  for (let i = 0; i < arr.length; i++) {
    let tekuciBr = arr[i];
    let tekuciBrP = 1;
    let brPojavljivanja = 0;
    for (let j = 0; j < arr.length; j++) {
      if (tekuciBr == arr[j]) {
        brPojavljivanja++;
        // console.log(brPojavljivanja);
      }
    }
    if (brPojavljivanja > tekuciBrP) {
      result = arr[i];
    }
  }
  return result;
};
console.log(najcescaOcena(niz));

// Jelena

let sveOcene = (niz) => {
  let arrSveOcene = [];
  niz.forEach((film) => {
    // arrSveOcene.push(film.ocene); // ovo vraca niz sa 3 podniza
    arrSveOcene = arrSveOcene.concat(film.ocene); // a ovo vraca niz sa svim ocenama znaci spaja nizove
  });
  return arrSveOcene;

  //arrSveOcene  = arrSveOcene.concat(f1.ocene);
};

let najcescaOcena1 = (nizOcena) => {
  let predpostavkaNajucestalijiElem = nizOcena[0];
  let brPojavljivanjaPredpostavke = 1;
  for (let i = 0; i < nizOcena.length; i++) {
    let tekuci = nizOcena[i]; // zvezdica
    let tekuciBrPojavljivanja = 0;
    for (let j = 0; j < nizOcena.length; j++) {
      if (tekuci == nizOcena[j]) {
        tekuciBrPojavljivanja++; // nasli smo isti element treba povecati br pojavljivanja tekuceg
      }
    }
    if (tekuciBrPojavljivanja > brPojavljivanjaPredpostavke) {
      brPojavljivanjaPredpostavke = tekuciBrPojavljivanja;
      predpostavkaNajucestalijiElem = tekuci;
    }
  }
  return predpostavkaNajucestalijiElem;
};

let nizSvihOcena = sveOcene(filmovi);
console.log(najcescaOcena1(nizSvihOcena));

//Napraviti funkciju iznadOcene kojoj se prosleđuje ocena i niz filmova, a ona vraća niz onih filmova koji su bolje ocenjeni (veća im je prosečna ocena) od prosleđene ocene.
console.log(`Zadatak iznadOcene--------------------------`);

let iznadOcene = (o, arr) => {
  let nizFilmova = [];
  arr.forEach((f) => {
    if (f.prosek() > o) {
      // console.log(f);
      nizFilmova.push(f);
    }
  });
  return nizFilmova;
};
console.log(iznadOcene(7, filmovi));

// let niz = iznadOcene(7.4, filmovi);
// niz.forEach((f) => {
//   f.stampaj();
// });

// na casu Jelena

let iznadOcene1 = (ocena, filmovi) => {
  let nizFilmova = [];
  filmovi.forEach((film) => {
    if (film.prosek() > ocena) {
      nizFilmova.push(film);
    }
  });
  return nizFilmova;
};

console.log(iznadOcene1(8.8, filmovi));

//Napisati funkciju iznadOceneNoviji kojoj se prosleđuje ocena i niz filmova  a koja treba da na ekranu da ispiše sve podatke o najnovijem filmu koji zadovoljava prosleđenu ocenu
console.log(`Zadatak iznadOceneNoviji--------------------------`);

let iznadOceneNoviji = (o, arr) => {
  let nizf = iznadOcene(o, arr);
  let noviji = nizf[0];
  nizf.forEach((e) => {
    if (noviji.godinaIzdanja < e.godinaIzdanja) {
      noviji = e;
    }
  });
  console.log(noviji);
};
iznadOceneNoviji(7, filmovi);

// Jelena

let iznadOceneNoviji1 = (ocena, filmovi) => {
  let nizFilmova = iznadOcene1(ocena, filmovi);
  let noviji = nizFilmova[0];
  nizFilmova.forEach((f) => {
    if (f.godinaIzdanja > noviji.godinaIzdanja) {
      noviji = f;
    }
  });
  console.log(noviji);
};

iznadOceneNoviji1(8, filmovi);
