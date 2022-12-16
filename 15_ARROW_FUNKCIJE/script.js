function sum(a, b) {
  // Imenovane funkcije: (function) , ime, {param}, {return}
  return a + b;
}

let rez = sum(1, 2);
console.log(rez);

// Anonimne funkcije

let suma = function (a, b) {
  // Anonimne funkcije:{function}, {param}, {return},
  return a + b;
};

rez = suma(1, 2); // poziv anonimne funkcije preko promenljive suma
console.log(rez);

// Arrow funkcija - anonimna f-ja koja ima jos neka od dodatnih svojstva

let suma2 = (a, b) => {
  // => ovo se zove fat arrow
  return a + b;
};

rez = suma2(3, 8);
console.log(rez);

// Pozivanje arrow funkcije ide isto preko promenljive jer je to vrsta anonimnih f-ja

//PRIMER

let hello = () => {
  console.log("Hello World");
};

hello();

let echo = (s1, s2) => {
  let rezultat = s1 + ", " + s2;
  console.log(rezultat);
};

echo("Mila", "Bogdanovic");

// Zadaci

// Da se prenesu parametri ime i prezime i godine, treba da se napise Jelena Matejic je punoletna ako ima >18, a u suprotnom Jelena Matejic je maloletna

// Osoba _____ ______ je punoletna
// // Osoba _____ ______ je maloletna
//1 nacin
console.log(`Primer prvi nacin-------------------`);
let podaci = (i, p, g) => {
  if (g >= 18) {
    console.log(`Osoba ${i} ${p} je punoletna`);
  } else {
    console.log(`Osoba ${i} ${p} je maloletna`);
  }
};

podaci("Mila", "Bogdanovic", 15);

// 2 nacin
console.log(`drugi nacin-------------------`);

let ispisHTML = (ime, prezime, godine) => {
  if (godine >= 18) {
    let ispis = `<p>Osoba ${ime} ${prezime} je punoletna</p>`;
    return ispis; // ovo je drugacija promenljiva od ove ispod
  } else {
    let ispis = `<p>Osoba ${ime} ${prezime} je maloletna</p>`;
    return ispis;
  }
};

document.body.innerHTML += ispisHTML("Mila", "Bogdanovic", 28);

/*3.Napisati funkciju neparan koja za uneti ceo broj n vraća tačno ukoliko je neparan ili netačno ukoliko nije neparan.*/
console.log(`Zadatak 3-------------------`);
let neparan = (n) => {
  if (n % 2 == 1) {
    return true;
  } else {
    return false;
  }
};

document.body.innerHTML += neparan(13);
// skracen kod
console.log(`Zadatak 3 skracen kod varijanta----------------`);
let neparan5 = (n) => {
  return n % 2 == 1;
};
console.log(neparan5(6));

// skracen kod ali koriscenjem svojstva arrow funkcije
console.log(`Zadatak 3 skracen kod varijanta arrow----------------`);
//1. ako arrow f-ji prosledjujemo tacno 1 parametar onda zagrade nisu obavezne
//2. Ako se telo arrow f-je sastoji od samo return naredbe, onda ona nije obavezna

let neparan6 = (n) => n % 2 == 1;

console.log(neparan6(6));

/*4.Napisati funkciju maks2 koja vraća veći od dva prosleđena realna broja. Zatim napisati funkciju maks4 koja vraća najveći od četiri prosleđena realna broja.*/
console.log(`Zadatak 4-------------------`);
let maks2 = (b1, b2) => {
  if (b1 > b2) {
    return b1;
  } else {
    return b2;
  }
};

// Varijanta 2 arrow f-je sa skracenim zapisom i ternarnim operatorom

let max2 = (b1, b2) => (b1 > b2 ? b1 : b2);
console.log(max2(1, 6));
// operator ?:
//console.log(maks2(55,30));

let maks4 = (b1, b2, b3, b4) => maks2(maks2(b1, b2), maks2(b3, b4));
let maks4a = (b1, b2, b3, b4) => maks2(maks2(maks2(b1, b2), b3), b4); // ovo je dobro za implementaciju velikog broja brojeva, ili ako znamo unapred u koliko brojeva trazimo maksimum

console.log(maks4(0, 118, -18, 100));

/*5. Napisati funkciju koja prikazuje sliku za prosledjenu adresu slike.*/

let slika = link => {
  document.write(`<img src="${link}" width="300">`);
};

slika("destinacije.jpg");
slika("letovi.jpg");
slika("informacije.jpg");

/*6. Napisati funkciju koja za unetu boju na engleskom jeziku boji tekst paragrafa u tu boju.
 */

let paragraf = boja => {
  document.write(`<p style="color:${boja}">Ovaj tekst je obojen</p>`);
};

paragraf("orange");
paragraf("pink");
paragraf("blue");
paragraf("green");


/*7. Napisati program koji sadrži funkciju sedmiDan koja za uneti broj n ispisuje n-ti dan u nedelji (npr. za 0 ispisuje “Nedelja”, za 1 se ispisuje „Ponedeljak“, za 2 se ispisuje „Utorak“, ... ,  a za 7 opet “Nedelja”).
Pitanje: Kako bismo realizovali ovaj zadatak da se tražio n-ti mesec u godini? */
console.log(`Zadatak 7-------------------`);

let sedmiDan = (n) => {
  n = n % 7;
  switch (n) {
    case 0:
      console.log("nedelja");
      break;
    case 1:
      console.log("ponedeljak");
      break;
    case 2:
      console.log("utorak");
      break;
    case 3:
      console.log("sreda");
      break;
    case 4:
      console.log("cetvrtak");
      break;
    case 5:
      console.log("petak");
      break;
    case 6:
      console.log("subota");
      break;
    case 7:
    default:
      console.log("Invalid input");
  }
};
sedmiDan(9);
