/*Na casu koje nismo radili Zadatak 9.  Za vreme preuzeto sa računara ispisati 
dobro jutro za vreme manje od 12 sati ujutru, 
dobar dan za vreme manje od 18 sati,
u ostalim slučajevima ispisati dobro veče.*/

const d = new Date();
const hour = d.getHours();

if (hour < 12) {
  console.log("Dobro jutro");
} else if (hour < 18) {
  console.log("Dobar dan");
} else {
  console.log("Dobro vece");
}

/* Zadatak 15.  Za uneti broj ispitati da li je on manji od nule, veći od nule ili jednak nuli. 
Ukoliko je manji ili jednak nuli ispisati njegov prethodnik, a ukoliko je veći od nule ispisati njegov sledbenik. */

let broj = 1;

if (broj > 0) {
  console.log(`Sledbenik ${broj++}`);
} else {
  console.log(`Predhodnik ${broj--}`);
}

/* Zadatak 17. Za učitani broj ispitati da li je ceo. */

let ceoBroj = 23;

if (ceoBroj% 1 != 0) {
  console.log("Broj nije ceo");
} else {
  console.log("Broj je ceo");
}

// drugi nacin

if(Number.isInteger(ceoBroj)) { // sama po sebi ce metoda vratiti tacno
    console.log("Broj ceo");
} else {
    console.log("Broj nije ceo");
}

/* IF-Zadaci za vezbu word dokument */

/* 1. Za dva uneta broja ispisati koji je veći a koji je manji.*/

let br1 = 5;
let br2 = 56;

if (br1 > br2) {
  console.log(`${br1} je veci`);
} else {
}
console.log(`${br2} je veci`);

/* 15.  Za dva uneta broja, od većeg učitanog broja oduzeti manji i rezultat ispisati na ekranu.  */

br1 = 58;
br2 = 69;

if (br1 > br2) {
    console.log(`${br1 - br2}`);
} else {
    console.log(`${br2 - br1}`);
}

/* 24.Napisati program koji za uneta četiri prirodna broja a,b,c,d određuje koliko njih je deljivo sa 2, koliko sa 5, a koliko sa 2 i 5 i štampa odgovarajuće poruke. */

let a;
let b;
let c;
let z; /*umesto d jer sam vec koristila gore */



