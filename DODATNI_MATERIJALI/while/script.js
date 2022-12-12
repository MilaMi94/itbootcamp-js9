/* Zadaci sa prezentacije Stefanove
1. Ispisati brojeve od 1 do 20:
Svaki u istom redu
Svaki u novom redu */

let i = 1;

while (i <= 20) {
  document.write(i + " ");
  i++;
}

i = 1;

while (i <= 20) {
  document.write(i + " ");
  document.write("<br>");
  i++;
}
//------------------------------------------------------------------------------------------
/* 2. Ispisati brojeve od 20 do 1.  */

i = 20;

while (i >= 1) {
  document.write(i + " ");
  i--;
}

document.write("<br>");

//--------------------------------------------------------------------------------------------

/* 3. Ispisati parne brojeve od 1 do 20. */

i = 1;

while (i <= 20) {
  if (i % 2 == 0) {
    document.write(i + " ");
  }
  i++;
}

//------------------------------------------------------------------------------------------------
/* 4. Kreirati n paragrafa sa proizvoljnim tekstom i naizmenično ih obojiti u tri različite boje */
i = 1;
let n = 10;

while (i <= n) {
  document.write("<p style=color:'blue';>aflshfsfj</p>");
  i++;
}
//-------------------------------------------------------------------------------------------------
/* 5. Kreirati n proizvoljnih slika i staviti im naizmenično dva različita okvira */
i = 1;
n = 6;

while (i <= n) {
  document.write("<img style= 'border: 2px solid blue'; src='slika2.jpg';>");
  i++;

  document.write("<img style= 'border: 2px solid red'; src='slika2.jpg';>");
  i++;
}

document.write("<br>");
//-------------------------------------------------------------------------------------------------
/* 6. Odrediti sumu brojeva od 1 do 100 */
i = 1;
let zbir = 0;

while (i <= 100) {
  zbir += i;
  i++;
}

document.write(zbir);

document.write("<br>");
//--------------------------------------------------------------------------------------------------

/* 7.  Odrediti sumu brojeva od 1 do n */

// isto kao predhodni

/* 8. Odrediti sumu brojeva od n do m  */

//isto kao predhodni

/* 9. Odrediti proizvod brojeva od n do m */

//isto kao predhodni

/* 10. Odrediti sumu kvadrata parnih i sumu kubova neparnih brojeva od n do m. N je meni iz predhodnog primera i pa cu tako da nastavim*/

i = 1;
let m = 10;
zbir = 0;

while (i <= m) {
  if (i % 2 == 0) {
    zbir += Math.pow(i, 2);
    
  } else if(i % 2 == 1){
    zbir += Math.pow(i, 3);
  }
  i++;
}

document.write(`${zbir}`);

//-------------------------------------------------------------------------------------------------------------------------

/* 11. Odrediti sa koliko brojeva je deljiv uneti broj k  */

let k = 5;
i= 1;
let brD=0;

while(i < k) {
  if(k%i ==0) {
    brD += brD++;
  }

  i++;
}

//--------------------------------------------------------------------------------------------------------------------------
/* 12.  Odrediti da li je dati prirodan broj n prost. Broj je prost ako je deljiv samo sa jedan i sa samim sobom.*/

n = 13;
i = 2;
let prostBroj = true;

while (i < n / 2 ) { // kao bolje je za optimizaciju kad je n/2
  if (n % i == 0) {
    prostBroj = false;
    break;    // ovde stavljamo break da bi pekinulo petlju
  }
  i++;
}

if (prostBroj == false) {
  document.write(`<p>${n} nije prost broj.</p>`);
} else if (n == 1) {  
  document.write(`<p>${n} nije ni prost ni slozen broj.</p>`);
} else {
  document.write(`<p>${n} je prost broj.</p>`);
}

//----------------------------------------------------------------------------------------------------------------------------
// i = 2;
// prostBroj = true;

// while (i <= Math.sqrt(number) ) {
//   if (number%i ==0) {
//     prostBroj = false;
//     break;
//   }
//   i = i + 1;
// }

// if (prostBroj == false) {
//   document.write(`<p>${number} nije prost broj.</p>`);
// } else if (number == 1) {
//   document.write(`<p>${number} nije ni prost ni slozen broj.</p>`);
// } else {
//   document.write(`<p>${number} je prost broj.</p>`);
// }
