// and - &&
// daje true iskljucivo ako imamo true i true

let a = 0;
let b = -158;
let c = 0;

if (a == 5 && b == 6) {
  console.log("Hello");
}

// or - ||
// NE daje true iskljucivo ako su oba izraza netacna
// tj. daje true ukoliko je makar jedan izraz tacan

if (a == 5 || b == 6) {
  console.log("World");
}

/*  Mozemo da kombinujemo logicke operatore ali prednost se daje && operatoru, savetuje se da bolje stavljamo zagrade kad nam nesto treba tako prvenstveno, npr negacija ima prednosti i nad && operatorom, tako da po redu prioriteta ide =! pa onda && pa onda || */

if (a == 5 || b == 6 || c == 7) {
  console.log("Makara jedan od uslova je tacan");
} else {
  console.log("Ni jedan od uslova nije tacan tj. svi uslovi su netacni");
}

if (c != 7) {
  console.log(`${c} je razlicito od 7`);
}

if (!(c == 7)) {
  console.log(`${c} je razlicito od 7`);
}

/* Zadatak 21. Naći koji je najveći od tri uneta broja 
a, b i c, korišćenjem logičkih operatora. */

a = 100;
b = 356;
c = -25;

if (a > b && a > c) {
  console.log(`Najveci broj je ${a}`);
} else if (b > a && b > c) {
  console.log(`Najveci broj je ${b}`);
} else {
  console.log(`Najveci broj je ${c}`);
}

/* Zadatak 22. U promenljivu uneti broj koji predstavlja temperaturu vazduha. Na ekranu ispisati „ekstremna temperatura“ ukoliko je temperatura manja od -15 stepeni Celzijusovih ili veća od 40 stepeni Celzijusovih. */

let temp = 42;

if (temp < -15 || temp > 40) {
  console.log("Ekstremna temperatura");
}

/* Zadatak 23. Ispitati da li je trenutna godina prestupna. (godinu preuzeti iz vremena na Vašem računaru).Godina je prestupna ako je deljiva sa 4 i nije deljiva sa 100 ili ako je deljiva sa 400.   */

const d = new Date();
let year = d.getFullYear();
console.log(year);

if ((year % 4 == 0 && year % 100 != 0) || year % 400 == 0) {
  console.log("Godina je prestupna");
} else {
  console.log("Godina nije prestupna");
}

/* Zadatak 24. Jedan butik ima radno vreme od 9h do 20h radnim danima, a vikendom od 10h do 18h. Preuzeti dan i vreme sa računara, ispitati “otvoreno” ukoliko je butik trenutno otvoren.
U suprotnom ispisati “zatvoreno”.  
Ko bude imao vremena: 
Ukoliko je butik trenutno otvoren, prikazati i sličicu otvorenih vrata na ekranu. Ukoliko je butik trenutno zatvoren, prikazati i sličicu zatvorenih vrata. */

let dan = 3;
let sat = 15;

if (dan == 0 || dan == 6) {
  //Vikend
  if (sat >= 10 && sat < 18) {
    console.log("Vikend je i butik je trenutno otvoren");
    document.write(
      "<img src='https://thumbs.dreamstime.com/b/open-sign-isolated-11711817.jpg'>"
    );
  } else {
    console.log("Vikend je i butik je trenutno zatvoren");
    document.write(
      "<img src='https://www.shutterstock.com/image-vector/close-stencil-font-stamp-square-260nw-1540700669.jpg'>"
    );
  }
} else {
  //Radni dan
  if (sat >= 9 && sat < 20) {
    console.log("Radni dan je i butik je trenutno otvoren");
    document.write(
      "<img src='https://thumbs.dreamstime.com/b/open-sign-isolated-11711817.jpg'>"
    );
  } else {
    console.log("Radni dan je i butik je trenutno zatvoren");
    document.write(
      "<img src='https://www.shutterstock.com/image-vector/close-stencil-font-stamp-square-260nw-1540700669.jpg'>"
    );
  }
}
