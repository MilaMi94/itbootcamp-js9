//1.  Ispisati brojeve od 1 do 20
console.log("Zadatak 1------------------------------------------------------");
let w = 1;
while (w <= 20) {
  console.log(w);
  w++;
}

for (i = 1; i <= 20; i++) {
  console.log(i);
}

//2.  Ispisati brojeve od 20 do 1
console.log("Zadatak 2------------------------------------------------------");
w = 20;

while (w >= 1) {
  console.log(w);
  w--;
}

for (i = 20; i >= 1; i--) {
  console.log(i);
}

//3.   Ispisati parne brojeve od 1 do 20
console.log("Zadatak 3------------------------------------------------------");
// 1. nacin
for (i = 1; i <= 20; i++) {
  if (i % 2 == 0) {
    console.log(i);
  }
}
console.log("2 nacin--------------------------------------------------------");

for (i = 2; i <= 20; i += 2) {
  console.log(i);
}

// u for i<=20 && i%2 ==0 to ne moze zato sto petlja ce prekinuti sa izvrsavanjem jer kad dodje do broja 3 npr koji ne ispunjava oba uslova , onda ce izaci iz petlje

//4. Ispisati dvostruku vrednost brojeva od 5 do 15
console.log("Zadatak 4------------------------------------------------------");

//5.  Odrediti sumu brojeva od 1 do n
console.log("Zadatak 5------------------------------------------------------");

let n = 5;
let suma = 0;
for (i = 1; i <= n; i++) {
  suma += i;
}
console.log(`Suma je ${suma}`);

//6.  Odrediti sumu brojeva od n do m *
console.log("Zadatak 6------------------------------------------------------");

let m = 10;
suma = 0;
for (n = 5; n <= m; n++) {
  suma += n;
}
console.log(`Suma je ${suma}`);

//7.  Odrediti proizvod brojeva od n do m
console.log("Zadatak 7------------------------------------------------------");

n = 2;
m = 5;
let p = 1;

for (i = n; i <= m; i++) {
  p *= i;
}
console.log(`Proizvod brojeva od ${n} do ${m} je ${p}`);

//8  Odrediti sumu kvadrata brojeva od n do m

//9.  Preuzeti proizoljne tri slike sa istom ekstenzijom i imenovati ih 1, 2 i 3. For petljom u HTML-u ispisati svaku od sličica uz pomoć brojača (iteratora).
console.log("Zadatak 9------------------------------------------------------");

for (i = 1; i <= 3; i++) {
  document.write(`<img src = "${i}.png">`);
}

//10. Odrediti proizvod svih brojeva deljivih sa 11 u intervalu od 20 do 100.

//11. Prebrojati koliko ima brojeva deljivih sa 13 u intervalu od 5 do 150.
console.log("Zadatak 11------------------------------------------------------");
n = 5;
m = 150;
let d = 0; // brojevi deljivi sa 13

for (i = n; i <= 150; i++) {
  if (i % 13 == 0) {
    d += 1;
  }
}

console.log(`U intervalu od ${n} do ${m} je ${d} brojeva deljivih sa 13.`);

// 12. Ispisati aritmetičku sredinu brojeva od n do m.
console.log("Zadatak 12------------------------------------------------------");

n = 10;
m = 14;
let zbir = 0;
let br_brojeva = 0;

for (i = n; i <= m; i++) {
  zbir += i;
  br_brojeva++;
}
let arsr = zbir / br_brojeva;
console.log(`Aritmeticka sredina je ${arsr} `);

// 15.  Prebrojati i izračunati sumu brojeva od n do m kojima je poslednja cifra 4.
console.log("Zadatak 15------------------------------------------------------");

n = 10;
m = 24;
zbir = 0;
br_brojeva = 0;

for (i = n; i <= m; i++) {
  if (i % 10 == 4) {
    zbir += i;
    br_brojeva++;
  }
}
console.log(`Broj broja kojima je zadnja cifra 4 je ${br_brojeva},a njihov zbir je ${zbir} `);

//16. Odrediti sumu brojeva od n do m koji nisu deljivi brojem a
console.log("Zadatak 16------------------------------------------------------");

let a = 5;
n = 1;
m = 5;
zbir = 0;


for (i = n; i <= m; i++) {
    if (i % a != 0) {
      zbir += i;
      
    }
  }

  console.log(`Zbir brojeva od ${n} do ${m} koji nisu deljivi brojem ${a} je ${zbir} `);



//18.  Odrediti sa koliko brojeva je deljiv uneti broj k
console.log("Zadatak 18------------------------------------------------------");








//19.  Odrediti da li je dati prirodan broj n prost. Broj je prost ako je deljiv samo sa jedan i sa samim sobom.
console.log("Zadatak 19------------------------------------------------------");

// --------------------------------------------------------------------------
//objasnjavanje gde da koristimo while a gde for petlju
//------------------------------------------------------------------------
// Ispisati prvih n parnih brojeva pocevsi od broja 2 - ovde ne znamo koliko puta ce nesto da se izvrsi zato u tom slucaju radije koristimo while petlju
console.log(
  "WHILE VS FOR------------------------------------------------------"
);
n = 3;
i = 2;
br_parnih = 0;

while (br_parnih < n) {
  if (i % 2 == 0) {
    br_parnih++;
    console.log(`${br_parnih}. od ${n} parnih je broj ${i} `);
  }
  i++;
}

// koliko neparnih brojeva ucestvuje u sumiranju dok suma ne predje broj k. Kako da ga odradimo for petljom? Ne moze jer ne znamo koliko ce se puta izvrsavati..
// --------------------OVO PROBATI PREKO FORA------------------------ //
console.log(
  "WHILE VS FOR------------------------------------------------------"
);
let k = 10;
suma = 0;
br_brojeva = 0;
let ii = 1;

while (suma < k) {
  if (ii % 2 != 0) {
    suma += ii;
    br_brojeva++;
  }
  ii++;
}
console.log(br_brojeva - 1); // ovo nesto ne stima treba da bude 5
// --------------------OVO PROBATI PREKO FORA------------------------ //
