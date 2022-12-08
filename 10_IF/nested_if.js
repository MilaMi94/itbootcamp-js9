/* Zadatak 18. Za tri uneta broja ispisati koji od njih je najveći, koji od njih je srednji, a koji od njih je najmanji, ovoga puta korišćenjem ugnježdenog grananja.  */

let a = 10;
let b = 20;
let c = 15;

if (a > b) {
  if (a > c) {
    console.log(`Najveci broj je ${a}`);
    if (b > c) {
      console.log(`Srednji broj je ${b}`);
      console.log(`Najmanji broj je ${c}`);
    } else {
      console.log(`Srednji broj je ${c}`);
      console.log(`Najmanji broj je ${b}`);
    }
  } else {
    console.log(`Najveci broj je ${c}`);
    console.log(`Srednji broj je ${a}`);
    console.log(`Najmanji broj je ${b}`);
  }
} else {
  if (b > c) {
    console.log(`Najveci broj je ${b}`);
    if (a > c) {
      console.log(`Srednji broj je ${a}`);
      console.log(`Najmanji broj je ${c}`);
    } else {
      console.log(`Srednji broj je ${c}`);
      console.log(`Najmanji broj je ${a}`);
    }
  } else {
    console.log(`Najveci broj je ${c}`);
    console.log(`Srednji broj je ${b}`);
    console.log(`Najmanji broj je ${a}`);
  }
}

/* Zadatak 19. Učitati dva cela broja i ispitati da li je veći od njih paran.  */

let broj1 = 204;
let broj2 = 204;

if (broj1 > broj2) {
  if (broj1 % 2 == 0) {
    console.log(`Paran i veci broj je ${broj1}`);
  } else {
    console.log(`Neparan i veci broj je ${broj1}`);
  }
} else {
  if (broj2 % 2 == 0) {
    console.log(`Paran i veci broj je ${broj2}`);
  } else {
    console.log(`Neparan i veci broj je ${broj2}`);
  }
}

/* Zadatak 20. Uneti dva datuma i ispisati onaj koji je raniji. Datume unosimo tako što u posebnim promenljivama navedemo dan, mesec i godinu, za svaki od njih. */

let dan1 = 20;
let dan2 = 15;

let mes1 = 5;
let mes2 = 7;

let god1 = 1994;
let god2 = 1994;

if (god1 == god2) {
  if (mes1 < mes2) {
    console.log(`Raniji je datum ${dan1}.${mes1}.${god1}`);
  } else {
    console.log(`Raniji je datum ${dan2}.${mes2}.${god2}`);
  }
} else {
  if (god1 < god2) {
    console.log(`Raniji je datum ${dan1}.${mes1}.${god1}`);
  } else {
    console.log(`Raniji je datum ${dan2}.${mes2}.${god2}`);
  }
}  /*  Ucitati ovo s githuba  */
