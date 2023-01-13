import { Film } from "./film.js";

let film1 = new Film("Inception", "Cristopher Nolan", 1789, [8.2, 9.3, 7.9]);
let film2 = new Film("Zodiac", "David Fincher", 2007, [8, 9, 7, 8]);
let film3 = new Film(
  "Taxi Driver",
  "Martin Scorsese",
  1976,
  [7, 6, 7, 7, 8, 7]
);
let film4 = new Film("Avatar", "James Cameron", 1789, [5, 9.3, 9]);

let filmovi = [film1, film2, film3, film4];

console.log(film1);
console.log(film2);
console.log(film3);

film1.stampaj();
film2.stampaj();
film3.stampaj();
//menjam rezisera u 1 objektu
film1.reziser = "bla bla";
console.log(film1);

// mana je to sto svakako moze da se poljima pristupi mimo getera i setera
// film1._naslov = "";

//mozemo property-ima da stavimo private identifier, i onda ne moze da im se pristupi van klase
// film1.#naslov = "";

//tabelarni prikaz filmova

let divTabela = document.getElementById("table");

let tab = `
    <table>
        <th>Naziv filma</th>
        <th>Reziser</th>
        <th>Godina izdanja</th>
        <th>Ocene</th>
        <th>Prosecna ocena</th>
`;

filmovi.forEach((f) => {
  tab += `<tr>
        <td>${f.naslov}</td>
        <td>${f.reziser}</td>
        <td>${f.godinaIzdanja}</td>
        <td>${f.ocene}</td>
        <td>${Math.floor(f.prosek())}</td>
    </tr>`;
});

tab += `</table>`;
divTabela.innerHTML = tab;

//Napraviti funkciju vekFilmova kojoj se prosleđuje niz filmova i ceo broj (vek), a funkcija ispisuje samo one filmove koji su stvoreni u prosleđenom veku
console.log(`Zadatak vek--------------------------`);
let vekFilmova = (niz, vek) => {
  let pocetakVeka = vek * 100 - 99;
  let krajVeka = vek * 100;
  niz.forEach((film) => {
    if (film.godinaIzdanja >= pocetakVeka && film.godinaIzdanja <= krajVeka) {
      console.log(film.naslov);
    }
  });
};

vekFilmova(filmovi, 18);

// Napraviti funkciju prosecnaOcena kojoj se prosleđuje niz filmova, a koja određuje i vraća  prosečnu ocenu svih filmova.
console.log(`Zadatak prosecnaOcena--------------------------`);
let prosecnaOcena = (niz) => {
  let zbirSvihOcena = 0;
  let brSvihOcena = 0;
  niz.forEach((film) => {
    let zbirOJednogFilma = 0;
    let brOcenaJednogFilma = 0;
    film.ocene.forEach((o) => {
      zbirOJednogFilma += o;
      brOcenaJednogFilma++;
    });

    zbirSvihOcena += zbirOJednogFilma;
    brSvihOcena += brOcenaJednogFilma;
  });
  return zbirSvihOcena / brSvihOcena;
};

console.log(`Prosecna ocena svih filmova je: ${prosecnaOcena(filmovi)}`);

//Napraviti funkciju najboljeOcenjeni kojoj se prosleđuje niz filmova, a ona vraća najbolje ocenjeni film.
console.log(`Zadatak najboljeOcenjeni--------------------------`);

let najboljeOcenjeni = (niz) => {
  let najboljeOcenjen = niz[0];
  niz.forEach((film) => {
    if (najboljeOcenjen.prosek() < film.prosek()) {
      najboljeOcenjen = film;
    }
  });
  return najboljeOcenjen;
};

console.log(najboljeOcenjeni(filmovi));

//Napraviti funkciju osrednjiFilm kojoj se prosleđuje niz filmova a ona vraća film koji je najbliži prosečnoj oceni svih filmova.
console.log(`Zadatak osrednjiFilm--------------------------`);

let osrednjiFilm = (niz) => {
  let closest = niz[0];
  niz.forEach((film) => {
    if (
      Math.abs(prosecnaOcena(filmovi) - closest.prosek()) >
      Math.abs(prosecnaOcena(filmovi) - film.prosek())
    ) {
      closest = film;
    }
  });
  return closest.naslov;
};

console.log(osrednjiFilm(filmovi));
console.log(prosecnaOcena(filmovi));
console.log(film1.prosek());
console.log(film2.prosek()); // ovaj je najblizi
console.log(film3.prosek());
console.log(film4.prosek());

//Napraviti funkciju najmanjaOcenaNajboljeg kojoj se prosleđuje niz filmova a ona određuje najbolji film i ispisuje njegovu najslabiju ocenu.
console.log(`Zadatak najmanjaOcenaNajboljeg--------------------------`);

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

//Napisati funkciju najcescaOcena kojoj se prosleđuje niz ocena, a ona vraća ocenu koju su filmovi najčešće dobijali.
console.log(`Zadatak najcescaOcena--------------------------`);



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
console.log(iznadOcene(7.4, filmovi));

let niz = iznadOcene(7.4, filmovi);
niz.forEach((f) => {
  f.stampaj();
});

//Napisati funkciju iznadOceneNoviji kojoj se prosleđuje ocena i niz filmova  a koja treba da na ekranu da ispiše sve podatke o najnovijem filmu koji zadovoljava prosleđenu ocenu
console.log(`Zadatak iznadOceneNoviji--------------------------`);

let iznadOceneNoviji = (o, arr) => {
  let nizf = iznadOcene(o, arr);
  let noviji = nizf[0];
  nizf.forEach((e) => {
    if (noviji.godina < e.godina) {
      noviji = e;
    }
  });
  console.log(noviji);
};
iznadOceneNoviji(7, filmovi);
