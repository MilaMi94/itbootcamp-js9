/* 1.Ispisati brojeve od 1 do 20
Svaki u istom redu
Svaki u novom redu*/

// svaki u novom redu

let i = 1;

while (i <= 20) {
  console.log(i);
  i++;
}

// u istom redu

i = 1;
let poruka = "";

while (i <= 20) {
  poruka = poruka + i + " ";
  i++;
}

console.log(poruka);

/*   

#   |      poruka       |  i
------------------------------
0   |        ""         |  1
1   |        "1 "       |  2
2   |       "1 2 "      |  3

*/

/* 2.Ispisati brojeve od 20 do 1.   */
//1.nacin
i = 20;

while (i >= 1) {
  console.log(i);
  i--;
}

//2.nacin
i = 1;

while (i <= 20) {
  console.log(21 - i);
  i++;
}

/* 3. Ispisati parne brojeve od 1 do 20.  */
// 1. nacin
i = 1;

while (i <= 20) {
  if (i % 2 == 0) {
    console.log(`${i} je paran broj`);
  }
  i++;
}

//2. nacin
i = 2;
while (i <= 20) {
  console.log(i);
  i += 2; // ovo je krace doduse, ali ono prvo je elegantnije
}

/* Kreirati n paragrafa sa proizvoljnim tekstom i naizmenično ih obojiti u tri različite boje*/
//1. nacin

i = 1;
let n = 6;

while (i <= n) {
  if (i % 3 == 0) {
    document.write("<p style='color:blue';>aflshfsfj</p>");
  } else if (i % 3 == 1) {
    document.write("<p style='color:red';>aflshfsfj</p>");
  } else {
    document.write("<p style='color:green';>aflshfsfj</p>");
  }
  i++;
}

//2. nacin

n = 7;
i = 1;
while (i <= n) {
  if (i % 3 == 0) {
    document.body.innerHTML += "<p class='plava'>Neki tekst</p>";
  } else if (i % 3 == 1) {
    document.body.innerHTML += "<p class='crvena'>Neki tekst</p>";
  } else {
    document.body.innerHTML += "<p class='crna'>Neki tekst</p>";
  }

  i++;
}

/* 5. Kreirati n proizvoljnih slika i staviti im naizmenično dva različita okvira */
i = 1;
n = 3;

while (i <= n) {
  if (i % 2 == 0) {
    document.write("<img style= 'border: 2px solid blue'; src='slika2.jpg';>");
  } else {
    document.write("<img style= 'border: 2px solid red'; src='slika2.jpg';>");
  }

  i++;
}
document.write("<br>");

/* 6. Odrediti sumu brojeva od 1 do 100 */
i = 1;
let zbir = 0;

while (i <= 100) {
  zbir += i;
  i++;
}

console.log(zbir);

/* 7.  Odrediti sumu brojeva od 1 do n */

n = 20;
i = 1;
zbir = 0;

while (i <= n) {
  zbir += i;
  i++;
}

document.write(`<p>${zbir}</p>`);

/* 8. Odrediti sumu brojeva od n do m  */

let m = 20;
n = 1;
zbir = 0;
i = n;

while (i <= m) {
  zbir += i;
  i++;
}

document.write(`<p>${zbir}</p>`);

/* 9. Odrediti proizvod brojeva od n do m */

m = 15;
n = 10;
let pr = 1;

while (n <= m) {
  pr *= n;
  n++;
}

document.write(`<p>${pr}</p>`);

/*Odrediti sumu kvadrata parnih i sumu kubova neparnih brojeva od n do m */

n = 3;
m = 6;
let sumaKvadrataParnih = 0;
let sumaKubovaNeparnih = 0;
i = n;

while (i <= m) {
  if (i % 2 == 0) {
    //sumaKvadrataParnih += (i*i);
    sumaKvadrataParnih + -(i ** 2);
  } else {
    sumaKubovaNeparnih += i ** 3;
  }
  i++;
}
console.log(
  `Suma kvadrata parnih brojeva od ${n} do ${m} jednaka je: ${sumaKvadrataParnih}`
);

console.log(
  `Suma kubova neparnih brojeva od ${n} do ${m} jednaka je: ${sumaKubovaNeparnih}`
);

//Odrediti sa koliko brojeva je deljiv uneti broj k

k = 24;
i = 1;
let brojDelioca = 0;

while (i <= k) {
  if (k % i == 0) {
    brojDelioca++;
  }
  i++;
}
console.log(`Broj delioca broja ${k} jednak je: ${brojDelioca}`);

if(brojDelioca == 2) {
  console.log("broj je prost")
}
else {
  console.log("broj je slozen")
}
//Odrediti da li je dati prirodan broj n prost. Broj je prost ako je deljiv samo sa jedan i sa samim sobom.

let number = 21;
i = 2;
prostBroj = true;

while (i < number) {
  if (number % i == 0) {
    prostBroj = false;
    break;
  }

  i = i++;
}

if (number == 2 || prostBroj == true) {
  document.write(`<p>${number} je prost broj.</p>`);
} else {
  document.write(`<p>${number} nije prost broj.</p>`);
}
