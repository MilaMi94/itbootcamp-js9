// let broj = 3;

// if (broj < 0) {

//     console.log("Broj je manji od nule");
// }
// else if(broj == 0) {

//     console.log("Broj je jednak nuli");
// }
// else if(br > 0) {

//     console.log("Broj je veci od nule");
// }

// else {
//     console.log("Zbunjen sam, nije broj");
// }

// console.log("Kraj grananja");

// Zadatak 7.Preuzeti koji je dan u nedelji sa računara i ispitati da li je to radni dan ili je u pitanju vikend.

const d = new Date();
let dan = d.getDay();
console.log(dan);

if (dan == 0) {
  document.write("<p>Vikend</p>");
} else if (dan == 6) {
  document.write("<p>Vikend</p>");
} else {
  document.write("<p>Radni dan</p>"); //gledamo da obimniju grupu smestimo u if a manju grupu u else
}

// Zadatak 8.  Na osnovu unetog broja poena u paragrafu ispitati koju ocenu profesor treba da upiše učeniku. Učenik je položio ispit nekom ocenom  ukoliko ima više od 50 poena, u suprotnom treba ispisati da je pao ispit.

let poeni = 80;

if (poeni < 50) {
  document.write("<p> Ucenik pao </p>");
} else if (poeni <= 60) {
  document.write("<p>Ucenik je dobio 6. </p>");
} else if (poeni <= 70) {
  document.write("<p>Ucenik je dobio 7. </p>");
} else if (poeni <= 80) {
  document.write("<p>Ucenik je dobio 8. </p>");
} else if (poeni <= 90) {
  document.write("<p>Ucenik je dobio 9. </p>");
} else if (poeni <= 100) {
  document.write("<p>Ucenik je dobio 10. </p>");
}

//Zadatak 10. Radno vreme jedne programerske firme je od 9h do 17h. Preuzeti vreme sa računara i ispitati da li u to vreme firma radi ili ne radi.

let hour = d.getHours();
console.log(hour);

if (hour < 9) {
  document.write("<p>Firma je zatvorena.</p>");
} else if (hour >= 17) {
  document.write("<p>Firma je zatvorena.</p>");
} else {
  document.write("<p>Firma je otvorena.</p>");
}

/* Zadatak 11. Za unet sat početka i sat kraja radnog vremena dva lekara,  ispisati DA ukoliko se smene lekara preklapaju, u suprotnom ispisati NE.
Ne može se desiti da lekar počne smenu pre ponoći, a završi sa smenom nakon ponoći, ovo se podrazumeva i ne ispitivati dodatno */

let k1 = 15;
let k2 = 20;
let p1 = 8;
let p2 = 14;

if (k1 < p2) {
  console.log("Nema preklapanja");
} else if (k2 < p1) {
  console.log("Nema preklapanja");
} else {
  console.log("Ima preklapanja");
}

// Zadatak 12. Za uneti broj ispitati da li je paran ili nije.

broj = 13;
// 10 / 2 = 5 + ost.0

let ost = broj % 2;
if (broj % 2 == 0) {
  console.log("Paran broj");
} else {
  console.log("Neparan broj");
}

// Zadatak 13. Za uneti broj ispisati da li je deljiv sa 3 ili ne.

broj = 91;
if (broj % 3 == 0) {
  console.log("Broj je deljiv sa 3");
} else {
  console.log("Broj nije deljiv sa 3");
}

// Zadatak 14. Za dva uneta broja, od većeg učitanog broja oduzeti manji i rezultat ispisati na ekranu.

let v = 20;
let m = 10;

if (m < v) {
  console.log(v - m);
} else if (m > v) {
  console.log(m - v);
} else {
  console.log("Vrednost je 0");
}

// Zadatak 16. Za tri uneta broja ispisati koji od njih je najveći, koji od njih je srednji, a koji od njih je najmanji, korišćenjem if – else if strukture. 

let b1 = 35;
let b2 = 15;
let b3 = 125;

let maks = b1;
if (maks < b2) {
  maks = b2;
}
if (maks < b3) {
  maks = b3;
}
document.write(`<p>Maksimum je ${maks}`);

//  Sa minimumom

let mini = b1;
if (b2 < mini) {
  mini = b2;
}
if (b3 < mini) {
  mini = b3;
}

document.write(`<p>Minimum je ${mini}`);

// Odredjivanje srednjeg broja 

let sr = b1 + b2 + b3 - maks - mini;

document.write(`<p>Srednji broj je ${sr}`);