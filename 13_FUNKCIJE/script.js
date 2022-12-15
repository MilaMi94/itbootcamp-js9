console.log(`Funkcije`);

function zdravo() {
  console.log(`Zdravo!`);
}

zdravo();
zdravo();
console.log(`Hello!`);
zdravo();

for (i = 1; i <= 5; i++) {
  zdravo(); // ovo poziva funkciju onoliko puta koliko se izvrsi for petlja
}

////////////////////////////////////////////////////

function hello(name) {
  // u zagradama parametar koji se prosledjuje

  console.log(`Hello ${name}`);
}

hello("Jelena"); // sta zelimo da nam se ispise stavljamo u zagradama funkcije

hello("Zlatko");

/////////////////////////////////////////////////////

function hello_full_name(ime, prezime) {
  console.log(`Hello ${ime} ${prezime}`);
  // console.log(`Hello ${im} ${pr}`); ovo ne moze
}

hello_full_name("Stefan", "Stanimirovic");
hello_full_name("Ivanovic", "Ana");

let im = "Ana";
let pr = "Ivanovic";
hello_full_name(im, pr);

//VAZNO VAZNO sad ovde let im i let pr , funkcija to vidi sad jer prosledjujemo kao argument i ona tad zato to vidi, ali unutar funkcije ne mozemo da napisemo . Ako pre funkcije stavimo var im i var pr to znaci da mozemo i u funkciji mocicemo da koristimo, jer je var globalna promenljiva.

/////////////////////////////////////////////////////

/////////////////Zadaci  //////////////////////////////

// 2. Napisati funkciju zbir koja računa zbir dva realna broja.Šta bi trebalo izmeniti da bi se dobila razlika, proizvod ili količnik dva broja.

function zbirDvaBroja(broj1, broj2) {
  console.log(broj1 + broj2);
}
zbirDvaBroja(20, 10);

// odraditi drugi deo zadatka

//5.  Napisati funkciju koja prikazuje sliku za prosledjenu adresu slike.

function prikazSlike(slika) {
  document.write(`<img src="${slika}">`);
}

prikazSlike("destinacije.jpg");
/* ovde mora u navodnicima jer je tako u document.write, nije promenljiva */

//6.  Napisati funkciju koja za unetu boju na engleskom jeziku boji tekst paragrafa u tu boju.

function bojiParagraf(boja) {
  document.write(`<p style="color:${boja}";> Obojeni tekst <p>`);
}

bojiParagraf("green");
bojiParagraf("orange");

/*zasto je ovde string? zato sto bez "" znaci da je to promenljiva zapravo*/

/* 13. Napisati funkciju kojoj se prosleđuje ceo broj a ona ispisuje tekst koji ima prosleđenu veličinu fonta.*/

function ceoBroj(broj) {
  document.write(`<p style="font-size:${broj}px";>Neki tekst heheheh</p>`);
}

ceoBroj("25");

/*14.  Napisati funkciju koja pet puta ispisuje istu rečenicu, a veličina fonta rečenice treba da bude jednaka vrednosti iteratora.    */

function istaRecenica(h) {
  for (i = 1; i <= 5; i++)
    document.write(`<p style="font-size:${i + h}px";>Neki tekst heheheh</p>`);
}
istaRecenica(24);

///////////////////////////////////////////////////
/* 3. Napisati funkciju neparan koja za uneti ceo broj n vraća tačno ukoliko je neparan ili netačno ukoliko nije neparan.*/

function neparan(n) {
  if (n % 2 == 0) {
    return "Paran broj";
  } else {
    return "Neparan broj";
  }
}

let tekst = neparan(11);
console.log(tekst);
document.write(tekst);

// recimo da je trebalo ovaj tekst neparan broj da se ispise u headeru, footeru, nav baru itd.Onda mogu da pozovem funkciju.

/*4 Napisati funkciju maks2 koja vraća veći od dva prosleđena realna broja. Zatim napisati funkciju maks4 koja vraća najveći od četiri prosleđena realna broja.*/
console.log("Zadatak 4--------------------------");
function maks2(broj1, broj2) {
  if (broj1 > broj2) {
    return broj1;
  } else {
    return broj2;
  }
}

let veciBr = maks2(2, 4);
console.log(`Veci broj je broj ${veciBr}`);

// 2 deo zadatka
console.log("Zadatak 4 drugi deo----------------------");

function maks4(b3, b4, b5, b6) {
  if (b3 >= b4 && b3 >= b5 && b3 >= b6) {
    return b3;
  } else if (b4 >= b3 && b4 >= b5 && b4 >= b6) {
    return b4;
  } else if (b5 >= b3 && b5 >= b4 && b5 >= b6) {
    return b5;
  } else {
    return b6;
  }
}

let maks = maks4(102, 250, 250, -25);
console.log(`Najveci od ponudjenih cetiri broja je ${maks}`);

function maks4(br1, br2, br3, br4) {
  // let veci1 = maks2(br1, br2);
  // let veci2 = maks2(br3, br4);
  // let najveci = maks2(veci1, veci2);
  // return najveci;
  return maks2(maks2(br1, br2),maks2(br3,br4));
}

let naj = maks4(140, 51, 5, 1);
console.log(naj);
