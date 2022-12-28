let cars = ["Toyota", "BMW", "Volvo"];

console.log(cars);
console.log(cars[0]);
console.log(cars[2]);
console.log(cars[3]); //?undefined

cars[1] = cars[1] + "208";
("Peugeot");
console.log(cars);

// js dozvoljava da elementi niza budu razlicitih tipova

let razno = [15, -3.5, "hello", true, [1, 2, 3]];

console.log(razno);

//Ispis elemenata niza cars
for (let i = 0; i < cars.length; i++) {
  console.log(cars[i]);
}
// uglavnom nam nece zatrebati index nakon for petlje tako da mozemo da deklarisemo sa let u for petlji,bas ako nam zatreba onda cemo sa var.

//Pristup elementima niza razno
for (let i = 0; i < razno.length; i++) {
  console.log(razno[i]);
}
//varijanta sa medjupromenljivom
let unutrasnjiNiz = razno[4];

for (let i = 0; i < unutrasnjiNiz.length; i++) {
  console.log(unutrasnjiNiz[i]);
}

for (let i = 0; i < razno[4].length; i++) {
  console.log(razno[4][i]);
}

// promena vrednosti unutrasnjeg niza

razno[4][1] = 5;
for (let i = 0; i < razno[4].length; i++) {
  console.log(razno[4][i]);
}

//Uvecanje vrednosti unutrasnjeg reda za po 10%

for (let i = 0; i < razno[4].length; i++) {
  razno[4][i] *= 1.1;
} // ovde odmah moze console.log domah unutra, ali stavili smo dve odvojene petlje, svejedno je,isto ce da vrati

for (let i = 0; i < razno[4].length; i++) {
  console.log(razno[4][i]);
}

//Zadaci

//2. Odrediti zbir elemenata celobrojnog niza.
console.log("Zadatak 2.----------");
let brojevi = [8, 4, -2, 0, 1, 0];
let brojevi2 = [2, 3, 4];
let zbir = 0;
for (let i = 0; i < brojevi.length; i++) {
  zbir += brojevi[i];
}
console.log(zbir);

// ako imamo jos neke nizove gde treba da saberemo brojeve opet sve isto moramo da radimo, zato je prakticnije da napisemo funkciju

let sumaElem = (niz) => {
  let zbir = 0;
  for (let i = 0; i < niz.length; i++) {
    zbir += niz[i];
  }
  return zbir;
};
console.log(sumaElem(brojevi));

console.log(sumaElem(brojevi2));

//3. Odrediti proizvod elemenata celobrojnog niza.
console.log("Zadatak 3.----------");
let proizvodElem = (niz) => {
  let proizvod = 1;
  for (let i = 0; i < niz.length; i++) {
    proizvod *= niz[i];
  }
  return proizvod;
};
console.log(proizvodElem(brojevi2));

console.log(proizvodElem(brojevi)); // ovde vraca -0 ali to je ispravno

//4.Odrediti srednju vrednost elemenata celobrojnog niza.
console.log("Zadatak 4.----------");
let srednjaVrednost = (niz) => {
  let suma = 0;
  let brojBrojeva = 0;
  for (let i = 0; i < niz.length; i++) {
    suma += niz[i];
    brojBrojeva++;
  }
  return suma / brojBrojeva;
  //ovde moze da se podeli sa niz.length umesto brojBrojeva
};
console.log(srednjaVrednost(brojevi));
//druga varijanta
let srVrednost = (niz) => sumaElem(niz) / niz.length;
console.log(srVrednost(brojevi));

//4.a Odrediti srednju vrednost parnih elemenata celobrojnog niza.

let srVrednostParnih = (niz) => {
  let zbir = 0;
  let br = 0;
  for (let i = 0; i < niz.length; i++) {
    if (niz[i] % 2 == 0) {
      zbir += niz[i];
      br++;
    }
  }
  return zbir / br;
};
console.log(srVrednostParnih(brojevi));

//5. Odrediti maksimalnu vrednost u celobrojnom nizu.
console.log("Zadatak 5.----------");
let brojevi3 = [1, 35, -25, 67];
let maxVred = (niz) => {
  let max = niz[0];
  for (let i = 1; i < niz.length; i++) {
    if (niz[i] > max) {
      max = niz[i];
    }
  }
  return max;
};
let br = [8, 11, 10, 11, 4];

console.log(maxVred(br));
console.log(maxVred(brojevi));
console.log(maxVred(brojevi3));

//6. Odrediti minimalnu vrednost u celobrojnom nizu.
console.log("Zadatak 6.----------");
let brojevi4 = [1, 128, 300, 35, -25, 67];
let minVred = (niz) => {
  let min = niz[0];
  for (let i = 1; i < niz.length; i++) {
    if (niz[i] < min) {
      min = niz[i];
    }
  }
  return min;
};

console.log(minVred(brojevi4));

//7. Odrediti indeks maksimalnog elementa celobrojnog niza.
console.log("Zadatak 7.----------");
let brojevi5 = [1, 20, 80, -20];

// Ovakva funkcija vraca indeks poslednjeg maksimuma
let indMaxNiza = (niz) => {
  let max = maxVred(niz);
  let index = -1; // zato sto nije validna vrednost i onda zato je bolje zbog debaginga
  for (let i = 0; i < niz.length; i++) {
    if (max == niz[i]) {
      index = i;
    }
  }
  return index;
};

let elementi = [15, 13, 15, 10, 15];
console.log(indMaxNiza(brojevi5));
console.log(indMaxNiza(elementi));

// Ovakva funkcija vraca indeks prvog maksimuma

let indMaxNiza2 = (niz) => {
  let max = maxVred(niz);
  let index = -1; // zato sto nije validna vrednost i onda zato je bolje zbog debaginga
  for (let i = 0; i < niz.length; i++) {
    if (max == niz[i]) {
      index = i;
      break;
    }
  }
  return index;
};
console.log(indMaxNiza2(elementi));

console.log(brojevi4.indexOf(maxVred(brojevi4)));
console.log(brojevi.indexOf(maxVred(brojevi)));
console.log(brojevi5.indexOf(maxVred(brojevi5)));

//8. Odrediti indeks minimalnog elementa celobrojnog niza.
console.log("Zadatak 8.----------");

let indMinNiza = (niz) => {
  let min = minVred(niz);
  let index = -1; // zato sto nije validna vrednost i onda zato je bolje zbog debaginga
  for (let i = 0; i < niz.length; i++) {
    if (min == niz[i]) {
      index = i;
    }
  }
  return index;
};
console.log(indMinNiza(elementi));
console.log(brojevi5.indexOf(minVred(brojevi5)));

//9. Odrediti broj elemenata celobrojnog niza koji su veći od srednje vrednosti.
console.log("Zadatak 9.----------");
let elementi2 = [1, 2, 3, -2, 5];
let brojElemVeciOdsrvr = (niz) => {
  let brojBrojeva = 0;
  let sredina = srednjaVrednost(niz);
  for (let i = 0; i < niz.length; i++) {
    if (niz[i] > sredina) {
      brojBrojeva++;
    }
  }
  return brojBrojeva;
};
console.log(srednjaVrednost(elementi2));
console.log(brojElemVeciOdsrvr(elementi2));
//10. Izračunati zbir pozitivnih elemenata celobrojnog niza.
console.log("Zadatak 10.----------");

let zbirPozitivnihElem = (niz) => {
  let zbir = 0;
  for (let i = 0; i < niz.length; i++) {
    if (niz[i] > 0) {
      zbir += niz[i];
    }
  }
  return zbir;
};
console.log(zbirPozitivnihElem(elementi2));

//11. Odrediti broj parnih elemenata u celobrojnom nizu
console.log("Zadatak 11.----------");
let brojParnihElem = (niz) => {
  let brojElem = 0;
  for (let i = 0; i < niz.length; i++) {
    if (niz[i] % 2 == 0) {
      brojElem++;
    }
  }
  return brojElem;
};

console.log(brojParnihElem(elementi2));

//12. Odrediti broj parnih elemenata sa neparnim indeksom.
console.log("Zadatak 12.----------");
let paranBrNeparanInd = (niz) => {
  let br = 0;
  for (let i = 0; i < niz.length; i++) {
    if (niz[i] % 2 == 0 && i % 2 != 0) {
      br++;
    }
  }
  return br;
};

// niz = [10, 12, 11, 13, 14, 16]
let nn = [10, 12, 11, 13, 14, 16];
console.log(paranBrNeparanInd(nn));

// druga varijanta
/* let paranBrNeparanInd = niz => {
    let br = 0;
    for(let i =0; i < niz.length; i+=2 ) {
        if(niz[i]%2 == 0 ){
            br++;
        }
    }
    return br;
 }*/

//13. Izračunati sumu elemenata niza sa parnim indeksom.
console.log("Zadatak 13.----------");

let sumaElemParniInd = (niz) => {
  let suma = 0;
  for (let i = 0; i < niz.length; i += 2) {
    suma += niz[i];
  }
  return suma;
};
// niz = [10, 12, 11, 13, 14, 16]
console.log(sumaElemParniInd(nn));

//14. Promeniti znak svakom elementu celobrojnog niza.
console.log("Zadatak 14.----------");

let drugiZnak = (niz) => {
  let noviNiz = [];
  for (let i = 0; i < niz.length; i++) {
    // noviNiz += -niz[i];
    // noviNiz.push(-niz[i]);
    noviNiz.push(niz[i] * -1);
  }
  return noviNiz;
};

nn = [10, 12, 11, -13, 14, 16];
console.log(drugiZnak(nn));

// drugi pristup

//15. Promeniti znak svakom neparnom elementu celobrojnog niza sa parnim indeksom.
console.log("Zadatak 15.----------");
let ZnakNeparniElemParniInd = (niz) => {
  let noviNiz = [];
  niz.forEach((el, i) => {
    if (el % 2 != 0 && i % 2 == 0 && i != 0) {
      noviNiz.push(el * -1);
    } else {
      noviNiz.push(el);
    }
  });
  return noviNiz;
};

// let znak1 = (niz) => {
//   niz.forEach((e, i) => {
//     if (e % 2 != 0 && i % 2 == 0 && i != 0) {
//       e * -1;
//     } else {
//       e;
//     }
//   });
//   return niz;
// };

// nn = [10, 12, 11, -13, 14, 16]
let n1 = [1, 3, 7, -8, 6, 6, 5];
console.log(ZnakNeparniElemParniInd(n1));
// console.log(znak1(n1));

//Dat je niz stavki za kupovinu (članovi niza su stringovi). Prolaskom kroz niz napraviti neuređenu listu i ispisati je u html dokument.
console.log("Zadatak 16.----------");

//domaci

//Dat je niz imena košarkaškog tima. Prolaskom kroz niz formirati tabelu u čijim su redovima imena tima, i tabelu ispisati u html dokument.
console.log("Zadatak 17.----------");

//domaci

//Dat je niz stringova čiji su članovi putanje do slika. Prikazati sve sliku u html dokumentu sa putanjama navedenim u nizu.
console.log("Zadatak 18.----------");

//domaci

//Ispisati dužinu svakog elementa u nizu stringova.
console.log("Zadatak 19.----------");

let elem = ["Mila", "Milos", "-20", "Marko", "235", "0"];

let duzinaElem = (niz) => {
  let duzStringa = ``;
  niz.forEach((el) => {
    duzStringa += el.length + " ";
  });
  return duzStringa;
};

console.log(duzinaElem(elem));

//Odrediti element u nizu stringova sa najvećom dužinom.

console.log("Zadatak 20.----------");
elem = ["Mila", "Milos", "-20", "Marko", "235", "0"];

let najvecaduzStr = (niz) => {
  let maxDuz = -1;

  niz.forEach((e) => {
    if (maxDuz <= e.length) {
      maxDuz = e.length;
    }
  });
  return maxDuz;
};

let sveMaxDuz = (niz) => {
  let sveMax = ``;
  niz.forEach((e) => {
    if(e.length == najvecaduzStr(elem)){
      // sveMax += ` ${e}`; // ovo u stringu da se ispise
      console.log(`${e}`);// ovo jedno ispod drugog da se ispise
    }
  });
  // return sveMax;
};
// pogledaj sutra nije mi bas najjasnije ali sam na dobrom putu

console.log(najvecaduzStr(elem));
sveMaxDuz(elem);
//Odrediti broj elemenata u nizu stringova čija je dužina veća od prosečne dužine svih stringova u nizu.
console.log("Zadatak 21.----------");
elem = ["Mila", "Milos", "-20", "Marko", "235", "0"];
let duzStr = (niz) => {
  let brojac = 0;
  let suma = 0;
  niz.forEach((el) => {
    suma += el.length;
  });
  let prosek = suma / niz.length;
  niz.forEach((el) => {
    if (el.length > prosek) {
      brojac++;
    }
  });
  return brojac;
};
duzStr(elem);
