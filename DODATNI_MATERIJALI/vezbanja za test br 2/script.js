// 1. Ja sama sebi- Napraviti tabelu sa 9 redova.Svaki red tabele treba da ima po dve ćelije (dve kolone).Redovi treba da se smenjuju u 3 boje plava, pink, zuta.

let tabela = `<table>`;
let i = 1;

for (i = 1; i <= 9; i++) {
  if (i % 3 == 0) {
    tabela += `
            <tr class="zuta">
                <td>Tekst</td>
                <td>Tekst</td>
            </tr>
        `;
  } else if (i % 2 == 0) {
    tabela += `
            <tr class="pink">
                <td>Tekst</td>
                <td>Tekst</td>
            </tr>
        `;
  } else {
    tabela += `
        <tr class="plava">
            <td>Tekst</td>
            <td>Tekst</td>
        </tr>
    `;
  }
}

tabela += `</table>`;
document.write(tabela);

// 2.  Koristeći for petlju kreirati uređenu listu sa ugnježdenim elementima neuredjene liste, kao što je prikazano na slici sa desne strane.

let lista = `<ol>`;

for (i = 1; i <= 10; i++) {
  if (i % 3 == 0) {
    lista += ` 
        <ul>
            <li>Element ${i} </li>
        </ul>
      
    `;
  } else {
    lista += `
        <li>Element ${i}</li>
    
    `;
  }
}

lista += `</ol>`;
document.write(lista);

// 3. Napisati program koji proverava da li je ceo broj x paran ili neparan i ippisuje odgovarajudu poruku.
console.log("Zadatak 3------------------");

let x = 10;

if (x % 2 == 0) {
  console.log("Broj je paran");
} else {
  console.log("Broj je neparan");
}

//4.  Napisati program koji, ako je broj a vedi od 0, štampa poruku ‘Broj je pozitivan’.
console.log("Zadatak 4------------------");

let a = 0;

if (a > 0) {
  console.log("Broj je pozitivan");
} else if (a < 0) {
  console.log("Broj je negativan");
} else {
  console.log("Broj je 0");
}

//5. Napisati program koji proverava da li je zbir dva broja deljiv sa tri ili nije. Ispisati poruku: 'Jeste' ili 'Nije'.
console.log("Zadatak 5------------------");
a = 18;
x = 15;
let n = a + x;

if (n % 3 == 0) {
  console.log(`Zbir brojeva ${a} i ${x} je deljiv sa 3`);
} else {
  console.log(`Zbir brojeva ${a} i ${x} nije deljiv sa 3`);
}

//6. Napisati program koji treba izračunati koren broja x ako je taj broj pozitivan, a inače ispisati poruku: 'Nema realnog rešenja'.
console.log("Zadatak 6------------------");

x = 49;
let z = Math.sqrt(x);

if (x > 0) {
  console.log(`Koren broja ${x} je ${z}`);
} else {
  console.log(`Nema realnog rešenja`);
}

// 7. Napisati program kojim se unose dva pozitivna, cela broja a i b. Napisati program koji izračunava i štampa površinu jednakostraničnog trougla ako su brojevi jednaki (stranica je jednaka datimbrojevima), odnosno površinu pravougaonika ako su brojevi različiti (stranice pravougaonika sujednake datim brojevima).
console.log("Zadatak 7------------------");

a = 5;
let b = 2;
let pTrougao = (a * a * Math.sqrt(3)) / 4;
let pPravougaonik = a * b;

if (a == b) {
  console.log(`Povsina jednakostranicnog trougla je ${pTrougao}`);
} else {
  console.log(`Povrsina pravougaonika je ${pPravougaonik}.`);
}

// 8. Data su dva realna broja x i y. Napisati program koji izračunava i štampa količnik x y ako je broj y različit od nule, a inače ispisuje poruku: 'Deljenje je nemoguce' .
console.log("Zadatak 8------------------");

x = 25;
let y = 5;
let xy = x / y;

if (y != 0) {
  console.log(`Kolicnik brojeva ${x} i ${y} je ${xy}.`);
} else {
}

//9. Data su tri ugla α, β, γ. Napisati program koji ispituje da li dati uglovi mogu biti uglovi trougla i ako
//mogu ispisati poruku: 'Mogu', a inače ispisati poruku: 'Ne mogu'.

console.log("Zadatak 9------------------");

x = 50;
y = 100;
z = 30;
zbir = 180;

if (x + y + z == zbir) {
  console.log("moze");
} else {
  console.log("ne moze");
}

//10. Napisati program koji de, ako je unet redni broj meseca, ispisuje njegov broj dana. U slučaju da je unet broj 2 ispitati da li je godina prestupna.

console.log("Zadatak 10------------------");

let dd = 2;
let februar = 29;

if (
  dd == 1 ||
  dd == 3 ||
  dd == 5 ||
  dd == 7 ||
  dd == 8 ||
  dd == 10 ||
  dd == 12
) {
  console.log("31 dana");
} else if (dd == 2) {
  if (februar < 29) {
    console.log("Godina nije prestupna");
  } else {
    console.log("Godina je prestupna");
  }
} else {
  console.log("30 dana");
}

console.log("Mesec je:", dd);

//11.  Napisati program kojim se za dva uneta broja a i b proverava da li je prvi deljiv drugim.Ispisati poruku: 'Jeste deljiv' ili 'Nije deljiv'.
console.log("Zadatak 11------------------");

a = 21;
b = 5;
if (a % b == 0) {
  console.log("Jeste deljiv");
} else {
  console.log("Nije deljiv");
}

//12.  Napisati program kojim se unosi ceo broj X, a zatim ako je broj različit od 0 ispisuje njegova recipročna vrednost, a inače ispisuje poruka: 'Nemogude je deliti nulom'.
console.log("Zadatak 12------------------");

x = 12;
let reciprocna = 1 / x;

if (x != 0) {
  console.log(`Reciprocna vrednost broja ${x} je: ${reciprocna}`);
} else {
  console.log(`Nemoguce je deliti sa nulom`);
}

//13.  Proveriti da li je uneti broj x pripada intervalu (10,50]. Ispisati poruku: 'Pripada', a inače poruku:'Ne pripada'.
console.log("Zadatak 13------------------");
x = 150;
if (x > 10 && x < 50) {
  console.log(`Broj ${x} pripada intervalu `);
} else {
  console.log(`Broj ${x} ne pripada intervalu`);
}

//14.  Napisati program kojim se promenljivoj min dodeljuje vrednost manjeg između brojeva a i b.
console.log("Zadatak 14------------------");

let min;
a = 150;
b = 20;

if (a < b) {
  min = a;
  console.log(`${min}`);
} else {
  min = b;
  console.log(`${min}`);
}

//15.  Napisati program kojim se unosi g oznaka geometrijske figure (znakovnog tipa). U slučaju da je uneto 'D'ispisati poruku: 'DELTOID' ; 'T' ispisati poruku: 'TRAPEZ' ; 'R' ispisati poruku: 'ROMB'; a inače ispisatiporuku: 'UNESITE SLOVA D, T ili R ! '.
console.log("Zadatak 15------------------");
let g = `v`;

if (g == `D`) {
  console.log("DELTOID");
} else if (g == `T`) {
  console.log("TRAPEZ");
} else if (g == `R`) {
  console.log("ROMB");
} else {
  console.log("UNESITE SLOVA D, T ILI R!");
}

////////////////////////////////////////////////////////////
//////////////////////Onih 38. zadataka////////////////////

//Grananja
console.log("GRANANJA PDF------------------");

//13.  Odrediti maksimum ˇcetiri broja.
console.log("Zadatak 13------------------");
a = 150;
b = 250;
c = 12;
d = 200;

if (a > b && a > c && a > d) {
  console.log(`Broj ${a} je maksimum`);
} else if (b > a && b > c && b > d) {
  console.log(`Broj ${b} je maksimum`);
} else if (c > a && c > b && c > d) {
  console.log(`Broj ${c} je maksimum`);
} else {
  console.log(`Broj ${d} je maksimum`);
}

//14.  Napisati program kojim se ispituje da li su uneta tri broja u neopadaju ́cem redosledu.

console.log("Zadatak 14------------------");
a = 50;
b = 45;
c = 40;

if (a > b && b > c) {
  console.log("Brojevi su u opadajucem redosledu");
} else if (a < b && b < c) {
  console.log("Brojevi su u rastucem redosledu");
} else {
  console.log("Brojevi ne idu po nekom redosledu");
}

//15. Za uˇcitani prirodan broj odˇstampati njegov najbliˇzi broj koji je deljiv sa 17.

console.log("Zadatak 15------------------");

x = 35;
a = 17;

z = x % a;

let niziBr = x - z;
let visiBr = niziBr + a;

console.log(niziBr);

if (x - niziBr < visiBr - x) {
  console.log(`Najblizi broj broju ${x} koji je deljiv sa 17 je ${niziBr}`);
} else {
  console.log(`Najblizi broj broju ${x} koji je deljiv sa 17 je ${visiBr}`);
}

// 24. Zadatak 24. Napisati program koji za uneti broj meseca (1=Januar, 2=Februar, ...) i trenutnu godinu ispisujenjegov broj dana. Godina je prestupna ako je deljiva sa 4 i nije deljiva sa 100 ili ako je deljiva sa 400.
console.log("Zadatak 24------------------");

dd = 1;
let god = 2016;

if (
  dd == 1 ||
  dd == 3 ||
  dd == 5 ||
  dd == 7 ||
  dd == 8 ||
  dd == 10 ||
  dd == 12
) {
  console.log(`Mesec ima 31 dan.`);
} else if (dd == 2) {
  if ((god % 4 == 0 && god % 100 != 0) || god % 400 == 0) {
    console.log(`Mesec ima 29 dana.`);
  } else {
    console.log(`Mesec ima 28 dana.`);
  }
} else if (dd <= 0 || dd > 12) {
  alert("Invalid input");
} else {
  console.log("30 dana");
}

//PETLJE

console.log("PETLJE------------------");

//25.  Odrediti sve delioce prirodnog broja n.
console.log("Zadatak 25------------------");
n = 25;
let brojDelioca = 0;
i = 1;
//1, 5, 25 sa samim sobom je deljiv , treba ispitati do n/2 +1

//for
for (i = 1; i <= n / 2; i++) {
  if (n % i == 0) {
    brojDelioca++;
  }
}

console.log(brojDelioca + 1);

//while
n = 25;
i = 1;
brojDelioca = 0;

while (i <= n / 2) {
  if (n % i == 0) {
    brojDelioca++;
  }
  i++;
}

console.log(brojDelioca + 1);

//26.  Napisati program koji  ́ce ispisati tablicu mnoˇzenja za jednocifrene brojeve.
console.log("Zadatak 26 na ekranu------------------");
// 1*1= 1

for (i = 1; i <= 9; i++) {
  for (x = 1; x <= 9; x++) {
    document.write(`<p>${i}*${x}=${i * x}</p>`);
  }
}

//27.  Napisati program koji ˇstampa sve brojeve do 1000 koji su deljivi sa 3, nisu deljivi sa 7, a poslednja cifra im je neparan broj.
console.log("Zadatak 27------------------");

for (i = 1; i <= 100; i++) {
  if (i % 3 == 0 && i % 7 != 0 && (i % 10) % 2 == 1) {
    console.log(`${i}`);
  }
} // zasto ovo radi?

// a ovo ne radi?

// z = i%10;
// for (i = 1; i <= 100; i++) {
//     if (i % 3 == 0 && i % 7 != 0 && z % 2 == 1) {
//       console.log(`${i}`);
//     }
//   }

//28. Napisati program koji raˇcuna zbir prvih n brojeva.
console.log("Zadatak 28------------------");

zbir = 0;
n = 5;

for (i = 1; i <= n; i++) {
  zbir += i;
}

console.log(`Zbir prvih ${n} brojeva je ${zbir}`);

//31.  Napisati program koji ˇstampa sve ˇcetvorocifrene brojeve kod kojih su srednje dve cifre jednake ikoji su pritom deljivi brojem dobijenim izbacivanjem srednje dve cifre..
console.log("Zadatak 29------------------");
// ja i ovde mozda prvo neki cetvorocifren boj u petlji pa onda od njega %1000, tu dobijamo zadnje 3 cifre, onda kad podelimo sa 10 i zaokruzimo dobijamo 2 sredisnje.

console.log(1550 % 1000);

console.log(554 / 10);

//32. Napisati program koji  ́ce ispisati prirodan broj iz segmenta [a, b] koji ima najve ́ci broj delilaca.Ukoliko postoji viˇse brojeva sa istim brojem delilaca, odˇstampati najve ́ci od njih.

a = 1;
b = 10;
brojDelioca = 0;

for (i = a; i < b; i++) {
  for (x = 1; x <= b; x++) {
    if (b % x == 0) {
      brojDelioca++; //10 deljivo sa 1,2
    }
  }
} // ovo sam zabagovala!!!!!!!!!!!!!!!!!!!!!!**********

// 33. Ispitati da li je uneti broj prost.

// radila vise puta

// 34. Napisati program kojim se izraˇcunava maksimalna i srednja vrednost niza prirodnih brojeva ˇcijaduˇzina unapred nije poznata. Niz se uˇcitava do unosa prve nule.

// ovo malo ne razumem

// 35. Napisati program kojim se nalazi najve ́ci zajedniˇcki delilac dva broja.

/* ne verujem da ce ovo da bude, ali mogla bi da probam da ga odradim nekad




//36. Napisati program kojim se odredjuje koliko cifara ima uneti broj n.*/

n = 12548;
i = 1;
while ((n = n / 10) >= 1) {
  i++;
}

console.log(i);

/* 37. Napisati program kojim se odredjuje broj jedinica u binarnom zapisu broja n.

//38.  Napisati program kojim se od datog prirodnog broja n kreira broj sa istim ciframa ali u inverznom poretku */


