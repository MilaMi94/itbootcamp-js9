import { Film } from "./film.js";

let film1 = new Film("Avatar", "James Cameron", 2022);
let film2 = new Film("Gone with the Wind", "Victor Fleming", 1700);
let film3 = new Film("", "", 5);

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
