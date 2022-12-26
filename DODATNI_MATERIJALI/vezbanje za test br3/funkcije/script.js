/*Napisati funkciju suma kojoj se prosleđuju parametri n i m, dok funkcija vraća sumu kubova brojeva od n do m.
Pozvati funkciju i njen rezultat ispisati u konzoli. */
console.log("1.---------------------------------");
let suma = (n, m) => {
  let suma = 0;
  for (let i = n; i < m; i++) {
    suma += i * i * i;
  }
  return suma;
};

console.log(suma(1, 6));

/*Napisati funkciju godine kojoj se prosleđuje parametar godRodjenja. Parametar godRodjenja predstavlja godinu rođenja neka osobe. Funkcija treba da vrati koliko godina ima ta (prosleđena) osoba. 
Broj godina osobe izračunati na osnovu prosleđene godine rođenja i trenutne godine koju preuzimate sa računara. 
Pozvati funkciju i dobijeni rezultat ispisati u konzoli.*/
console.log("2.---------------------------------");
let godine = (godRodjenja) => {
  const d = new Date();
  let year = d.getFullYear();
  return year - godRodjenja;
};

console.log(`Prosledjena osoba ima ${godine(1997)} godina`);
console.log(`Prosledjena osoba ima ${godine(1994)} godina`);

/*Napisati funkciju deljiv kojoj se prosleđuju tri parametra n, m i k. Funkcija na ekranu treba da ispiše broj brojeva od n do m koji su deljivi brojem k. Pozvati funkciju.*/
console.log("3.---------------------------------");
let deljiv = (n, m, k) => {
  let br = 0;
  for (let i = n; i < m; i++) {
    if (i % k == 0) {
      br++;
    }
  }
  console.log(
    `Broj brojeva od ${n} do ${m} koji su deljivi brojem ${k} je ${br}`
  );
};

deljiv(1, 10, 2);

/*Pilot želi da napravi program gde unosi vreme polatanja (sat poletanja između 0 i 23 i minut poletanja aviona između 0 i 59) i vreme sletanja aviona (sat sletanja između 0 i 23 i minut sletanja aviona između 0 i 59). Napisati funkciju pilot kojoj se prosleđuje vreme poletanja i vreme sletanja aviona, a ona pilotu u konzoli ispisuje koliko časova i minuta je trajao njegov let. Pretpostaviti da su poletanje i sletanje aviona u istom danu i da je ispravno uneo vrednosti poletanja i sletanja. */
console.log("4.---------------------------------");

let pilot = (poletanje, sletanje) => {
  const dd = poletanje.split(":");
  const ddd = sletanje.split(":");
  function racunanjeLeta(a, b) {
    const RR = a * 60;
    const BR = RR + parseInt(b);
    return BR;
  }
  const rezMinuti = racunanjeLeta(ddd[0], ddd[1]) - racunanjeLeta(dd[0], dd[1]);

  if (rezMinuti < 59) {
    console.log(rezMinuti);
  } else {
    const min = rezMinuti % 60;
    const sat = (rezMinuti - min) / 60;
    const finalniRez = sat + ":" + min;
    console.log(finalniRez);
  }
};

pilot("21:11", "21:42");

/*Specijalitet jedne poslastičare je slatkiš po imenu jaban koje se pravi od jabuka i banana. Za jednu porciju ovog slatkiša potrebme su 2 jabuke i 3 banane. Poslastičara jabuke i banane dobija od jednog lokalnog dobavljača. U svakoj isporuci ima 20% oštećenih jabuka koje se ne mogu iskoristiti za pripremu jaban slatkiša. Napisati funkciju jaban koja za prosleđeni broj isporučenih jabuka i prosleđeni broj isporučenih banana, određuje i vraća koliko porcija jaban slatkiša je moguće da poslastičar napravi. Broj oštećenih jabuka zaokružiti na najbliži ceo broj. */
console.log("5.---------------------------------");

let jaban = (j, b) => {
  const bezOstecenja = b * 0.8;
  const porcijaJ = Math.round(j / 2);
  const porcijaB = Math.round(bezOstecenja / 3);
  console.log(porcijaJ);
  console.log(porcijaB);
  if (porcijaB > porcijaJ) {
    return porcijaJ;
  } else if (porcijaB < porcijaJ) {
    return porcijaB;
  } else {
    return porcijaB;
  }
};

console.log(jaban(43, 44));
// j 21
// b 12
/*Dobili ste plaćenu programersku praksu u trajanju od n meseci. Prvog meseca, plata će biti a dinara, a ako budete vredno radili svakog narednog meseca ćete dobiti povišicu od d dinara u odnosu na platu prethodnog meseca. Brojeve n, a i d određujete sami.
 Napišite funkciju praksa kojoj se prosleđuju brojevi n i a. Funkcija treba da vrati vrednosti koliko ćete ukupno navca zaraditi, ukoliko svakog meseca budete dobijali povišicu u odnosu na prethodni mesec.
 Testirati zadatak (pozvati funkciju i ispisati vrednost koju ona vraća). */
console.log("6.---------------------------------");

let praksa = (n, a, d) => {
  zbir = 0;
  for (i = 1; i <= n; i++) {
    zbir += a;
    a = a + d;
  }
  return zbir;
};

//20000   1
//22000   2
//24000
//26000
//28000
console.log(praksa(10, 20000, 2000));

//Programirati funkciju za mašinu za izradu nogara za stolove u jednoj fabrici drveta. Prva noga stola je duža druge noge stola isto koliko druga noga stola od treće noge stola, isto kao i treća noga stola od četvrte noge stola. Dužina prve noge stola i još dve noge stola su poznate, a četvrta nije poznata. Funkcija fabrika određuje i vraća dužinu izostale noge stola ako se funkciji prosleđuju poznate dužine ostale tri noge stola (dužina prve noge stola i dužine neke dve noge stola).
console.log("7.---------------------------------");

let fabrika = (d1, d2, d3) => {
  let najduza;
  let najmanja;
  let srednja;
  if (d1 > d2 && d1 > d3) {
    najduza = d1;
    if (d2 < d3) {
      srednja = d3;
      najmanja = d2;
    } else {
      srednja = d2;
      najmanja = d3;
    }
  } else if (d1 > d2 && d1 < d3) {
    najduza = d3;
    srednja = d1;
    najmanja = d2;
  } else {
    najmanja = d1;
    if (d2 < d3) {
      srednja = d2;
      najduza = d3;
    } else {
      srednja = d3;
      najduza = d2;
    }
  }
  let d4;
  console.log(najduza, srednja, najmanja);
  if (najduza - srednja == srednja - najmanja) {
    d4 = najmanja - (najduza - srednja);
  } else if (najduza - srednja > srednja - najmanja) {
    d4 = najduza - (srednja - najmanja);
  } else {
    d4 = najmanja + (najduza - srednja);
  }
  // d1 > d2 > d3  d4??
  // kad ih ovako poredjamo treba da skontamo da li je ista razlika izmedju njih
  // ako je rastojanje izmedju d1 i d2 isto sa rastojanjem izmedju d2 i d3 to znaci zasigurno da nam fali nogara koja je najmanja
  // da probam sama ako ne uspem imam na snimku
  console.log(d4);
};

fabrika(40, 47, 54);

// 20 10 5
//20 15 5
// 20 15 10

/*Napisati funkciju prethodniDan kojoj se prosleđuju tri pozitivna cela broja koja predstavljaju dan, mesec i godinu jednog ispravnog datuma (najuporniji mogu da ispituju i da li su dobre prosleđene vrednosti :) ). Funkcija ispisuje tri cela broja koja predstavljaju dan, mesec i godinu jučerašnjeg datuma. Svi brojevi se ispisuju u jednom redu, a iza svakog broja navodi se tačka.*/
console.log("8.---------------------------------");

let prethodniDan = (d, m, g) => {
  if (d == 1 && m == 3) {
    if ((0 == g % 4 && 0 != g % 100) || 0 == g % 400) {
      d1 = 29;
      m1 = m - 1;
    } else {
      d1 = 28;
      m1 = m - 1;
    }
  } else if (d == 1 && (m == 5 || m == 7 || m == 10 || m == 12)) {
    d1 = 30;
    m1 = m - 1;
  } else if (d == 1) {
    if (m == 1) {
      d1 = 31;
      m1 = 12;
      g = g - 1;
    } else {
      d1 = 31;
      m1 = m - 1;
    }
  } else {
    d1 = d - 1;
    m1 = m - 1;
  }
  console.log(`${d1}.${m1}.${g}`);
};

prethodniDan(1, 1, 2012);

/*Napisati funkciju naredniDan kojoj se prosleđuju tri pozitivna cela broja koja predstavljaju dan, mesec i godinu jednog ispravnog datuma (najuporniji mogu da ispituju i da li su dobre prosleđene vrednosti :) ). Funkcija ispisuje tri cela broja koja predstavljaju dan, mesec i godinu sutrašnjeg datuma. Svi brojevi se ispisuju u jednom redu, a iza svakog broja navodi se tačka.*/
console.log("9.---------------------------------");

let naredniDan = (d, m, g) => {
  if (d == 28 && m == 2 ) {
    if ((0 == g % 4 && 0 != g % 100) || 0 == g % 400) {
      d1 = 29;
      m1 = m + 1;
    } else {
      d1 = 1;
      m1 = m + 1;
    }
  } else if (
    d == 31 &&
    (m == 1 || m == 3 || m == 5 || m == 7 || m == 8 || m == 10)
  ) {
    d1 = 1;
    m1 = m + 1;
  } else if (d == 31) {
    if (m == 12) {
      d1 = 1;
      m1 = 1;
      g = g + 1;
    } else {
      d1 = 1;
      m1 = m + 1;
    }
  } else {
    d1 = d + 1;
    m1 = m;
  }
  console.log(`${d1}.${m1}.${g}`);
};

naredniDan(28, 2, 2013);





