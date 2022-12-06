let x = 5;
let y = 7;

if (x == y) {
  console.log("Jednake vrednosti");
} else {
  console.log("Razlicite vrednosti");
}

// Isto kao predhodni primer, samo kontra pitanje

if (x != y) {
  console.log("Razlicite vrednosti");
} else {
  console.log("Iste vrednosti");
}

//   Zadaci

// Zadatak 1.

let proizvod = 100;
if (proizvod > 100) {
  document.write("<p>Throw away</p>");
} else {
  document.write("<p>Pack up</p>");
}

// Zadatak 2.

let temp = 20;
if (temp >= 0) {
  document.write("<p style='color:red'>Temperatura u plusu</p>");
} else {
  document.write("<p style='color:blue'>Temperatura u minusu</p>");
}

// Zadatak 3.

let pol = "m";

if (pol == "m") {
  document.write(
    "<img src='https://cdn-icons-png.flaticon.com/512/0/93.png' width='50px'>"
  );
} else {
  document.write(
    "<img src='https://cdn-icons-png.flaticon.com/512/65/65581.png' width='50px'>"
  );
}

// Zadatak 4.

const d = new Date();
let hour = d.getHours();
console.log(hour);

if (hour > 12) {
  document.write("<p>Popodne je.</p>");
} else {
  document.write("<p>Jutro je.</p>");
}

//  Zadatak 5. Za preuzetu godinu sa računara i unetu godinu rođenja izračunati i u paragrafu ispisati da li je osoba punoletna ili maloletna. osoba je punoletna kada napuni 18 godina.

let year = d.getFullYear();
let godinaRodjenja = 1994;

if (year - godinaRodjenja >= 18) {
  document.write("<p>Osoba je punoletna</p>");
} else {
  document.write("<p>Osoba je maloletna</p>");
}

// Zadatak 6. Odrediti i u paragrafu ispisati najveći od tri uneta broja (samo uz pomoć if naredbi, bez korišćenja logičkih operatora).

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

