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

// nisam sigurna da dobro razumem ovaj zadatak
let vrednost = 0;
let dvVrednost = 0;

for (i = 5; i < 15; i++) {
  vrednost += i;
}

dvVrednost = vrednost * 2;
console.log(`Dvostruka vrednost brojeva od 5 do 15 je ${dvVrednost}`);

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
console.log("Zadatak 8------------------------------------------------------");

n = 2;
m = 6;
suma = 0;

for (i = n; i < m; i++) {
  suma += i * i;
}

console.log(`Suma kvadrata brojeva od ${n} do ${m} je ${suma}`);

//9.  Preuzeti proizoljne tri slike sa istom ekstenzijom i imenovati ih 1, 2 i 3. For petljom u HTML-u ispisati svaku od sličica uz pomoć brojača (iteratora).
console.log(
  "Zadatak 9------------na stranici------------------------------------------"
);

for (i = 1; i <= 3; i++) {
  document.write(`<img src = "${i}.png" width= "300">`);
}

document.write("<br>");

//10. Odrediti proizvod svih brojeva deljivih sa 11 u intervalu od 20 do 100.
console.log("Zadatak 10------------------------------------------------------");

p = 1; // proizvod svih brojeva deljivih

for (i = 20; i < 100; i++) {
  if (i % 11 == 0) {
    p *= i;
  }
}

console.log(
  `Proizvod svih brojeva u intervalu od 20 do 100 koji su deljivi sa 11 je: ${p}`
);

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

//13. Prebrojati koliko brojeva od n do m je pozitivno, a koliko njih je negativno.
console.log("Zadatak 13------------------------------------------------------");

n = -55;
m = 30;
let brojN = 0;
let brojP = 0;

for (i = n; i < m; i++) {
  while (i < 0) {
    brojN++;
    i++;
  }

  while (i < m) {
    brojP++;
    i++;
  }
}

console.log(
  `U intervalu od ${n} do ${m} ima ${brojP} pozitivnih brojeva i ${brojN} negativnih brojeva.`
);

//14. Prebrojati koliko je brojeva od 5 do 50 koji su deljivi sa 3 ili sa 5. *
console.log("Zadatak 14------------------------------------------------------");

n = 5;
m = 50;
let brojTri = 0;
let brojPet = 0;

for (i = n; i < m; i++) {
  if (i % 3 == 0 || i % 5 == 0) {
    if (i % 3 == 0 && i % 5 != 0) brojTri++;
    else if (i % 5 == 0 && i % 3 != 0) {
      brojPet++;
    }
  }
}

console.log(
  `U intervalu od ${n} do ${m} ima ${brojTri} brojeva deljivih samo sa 3 i ${brojPet} brojeva deljivih samo sa 5.`
);

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
console.log(
  `Broj broja kojima je zadnja cifra 4 je ${br_brojeva},a njihov zbir je ${zbir} `
);

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

console.log(
  `Zbir brojeva od ${n} do ${m} koji nisu deljivi brojem ${a} je ${zbir} `
);

//17.  Odrediti proizvod brojeva od n do m koji su deljivi brojem a *
console.log("Zadatak 17------------------------------------------------------");

n = 2;
m = 15;
a = 5;
p = 1;

for (i = n; i <= m; i++) {
  if (i % a == 0) {
    p *= i;
  }
}

console.log(
  `Proizvod brojeva od ${n} do ${m} koji su deljivi brojem ${a} je ${p} `
);

//18.  Odrediti sa koliko brojeva je deljiv uneti broj k
console.log("Zadatak 18------------------------------------------------------");

let k = 10;
brojDelioca = 0;

for (i = 1; i <= k; i++) {
  if (k % i == 0) {
    brojDelioca++;
  }
}

console.log(`Broj ${k} je deljiv sa ${brojDelioca} broja`);

//19.  Odrediti da li je dati prirodan broj n prost. Broj je prost ako je deljiv samo sa jedan i sa samim sobom.
console.log("Zadatak 19------------------------------------------------------");

n = 67; // da li je prost?
let prostBroj = true;

for (i = 2; i < n / 2; i++) {
  if (n % i == 0) {
    prostBroj = false;
    break;
  }
}

if (prostBroj == false) {
  console.log(`${n} nije prost broj.`);
} else if (n == 1) {
  console.log(`${n} nije ni prost ni slozen broj.`);
} else {
  console.log(`${n} je prost broj.`);
}

//20.   Napraviti tabelu sa 6 redova.Svaki red tabele treba da ima po dve ćelije (dve kolone).Svakom parnom redu dodati klasu „obojen“.Korišćenjem CSS-a, klasi obojen postaviti proizvoljnu boju pozadine.
console.log("Zadatak 20------------------------------------------------------");

//PROBLEM PROBLEM kod document.write('<table>')kad smo ovako otvorili table tag u nekim browserima on ce sam da zatvori table tag iako mi to ne zelimo

let str = `<table border = "1">`;

for (i = 1; i <= 6; i++) {
  if (i % 2 == 0) {
    str += `   <tr class="roze">
                    <td>Tekst</td>
                    <td>Tekst</td>
              </tr>
          `;
  } else {
    str += `   <tr>    
                  <td>Tekst</td>
                  <td>Tekst</td>
            </tr>
        `;
  }
}

str += `</table>`;
// document.body.innerHTML += str;
document.write(str);

//21.  Koristeći for petlju kreirati neuređenu listu sa ugnježdenim elementima, kao što je prikazano na slici sa desne strane.
console.log("Zadatak 21------------------------------------------------------");
//skica
/* <ul>
    <li>Element 1</li>
    <li>Element 1</li>
    <li>
        <ul>
            <li>Element2</li>
        </ul>
    </li>
</ul> */

let lista = `<ul>`;
// elementi
for (i = 1; i <= 10; i++) {
  if (i % 3 == 0) {
    lista += `   
      <ul>
          <li>Element  ${i}</li>
      </ul>
         
    `;
  } else {
    lista += `<li>Element ${i}</li>`;
  }
}
lista += `</ul>`;
document.write(lista);

//22.  Kreirati 64 span elemenata i rasporediti ih kao na slici desno, koristeći for petlju. *
console.log("Zadatak 22------------------------------------------------------");

for (i = 1; i <= 64; i++) {
  document.write(`<span class='kvadrat'>${i}</span>`);
  if (i % 8 == 0) {
    document.write("<br>");
  }
}

//23. Kreirati 64 span elemenata i rasporediti ih kao na slici desno, tako da elementi izgledaju kao polja šahovske table. U realizaciji ovog zadatka koristiti for petlju.
console.log("Zadatak 23------------------------------------------------------");

span = `<div>`;
for (i = 1; i <= 64; i++) {
  if (
    i <= 8 ||
    (i >= 17 && i <= 24) ||
    (i >= 33 && i <= 40) ||
    (i >= 49 && i <= 56)
  ) {
    if (i % 2 == 0) {
      span += `<span class='kvadrat' style='background-color:black; color:white;'>${i}</span>`;
    } else {
      span += `<span class='kvadrat' style='background-color:white;'>${i}</span>`;
    }
    if (i % 8 == 0) {
      span += `<br>`;
    }
  } else {
    if (i % 2 == 1) {
      span += `<span class='kvadrat' style='background-color:black; color:white;'>${i}</span>`;
    } else {
      span += `<span class='kvadrat' style='background-color:white;'>${i}</span>`;
    }
    if (i % 8 == 0) {
      span += `<br>`;
    }
  }
}

span += `</div>`;
document.write(span);

// let span = `<div>`;
// let broj = 1;
// for (i = 1; i <= 8; i++) {
//   for (x = 1; x <= 8; x++) {
//     if ((i + x) % 2 == 0) {
//       span += `<span class='kvadrat' style='background-color:white;'>${broj++}</span>`;
//     } else {
//       span += `<span class='kvadrat' style='background-color:black; color:white;'>${broj++}</span>`;
//     }
//   }
//   span += `<br>`;
// }

// span += `</div>`;
// document.write(span);

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

k = 10;
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
