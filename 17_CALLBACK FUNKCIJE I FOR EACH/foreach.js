// Zadaci

// Zadatak 2.Odrediti zbir elemenata celobrojnog niza.

let sumaElem = (niz) => {
  let suma = 0;
  niz.forEach((el) => {
    suma += el;
  });
  return suma;
};
let a = [1, 2, 3, 4, 5];
console.log(sumaElem(a)); // sumaElem NIJE callback f-ja

// Zadatak 5. Odrediti maksimalnu vrednost u celobrojnom nizu.

let maxVr = (niz) => {
  let max = niz[0];
  niz.forEach((el) => {
    if (el > max) {
      max = el;
    }
  });
  return max;
};

let b = [1, 2, 3, 4, 5];
console.log(maxVr(b));

// Zadatak 7. Odrediti indeks maksimalnog elementa celobrojnog niza.

let indexMaxVr = (niz) => {
  let max = niz[0];
  let idx = 0;
  niz.forEach((el, i) => {
    if (el > max) {
      max = el;
      idx = i;
    }
  });
  return idx;
};

let indexMaxVr2 = (niz) => {
  let max = maxVr(niz);
  let idx = undefined;
  niz.forEach((el, i) => {
    if (el == max && idx == undefined) {
      idx = i;
    }
  });
  return idx;
};

console.log(indexMaxVr(a));

let bb = [1, 3, 6, -8, 6, 6, 4];
//console.log(indexMaxVr(bb)); // output:2 ova funkcija vraca prvo pojavljivanje maksimuma
console.log(indexMaxVr2(bb)); // output:5 ova vraca index poslednjeg pojavljivanja maksimuma

//Dat je niz stavki za kupovinu (članovi niza su stringovi). Prolaskom kroz niz napraviti neuređenu listu i ispisati je u html dokument.

//19. Ispisati dužinu svakog elementa u nizu stringova.

let elem = ["Mila", "Milos", "Ana", "Janko", "Marko", "Bogdan", "Stefan"];

let duzinaElem = (niz) => {
  let duzStringa = ``;
  niz.forEach((el) => {
    duzStringa += el.length + " ";
  });
  return duzStringa;
};

console.log(duzinaElem(elem));

//20. Odrediti element u nizu stringova sa najvećom dužinom.

let elemNajvecaDuz = (niz) => {
  let maxduz = niz[0].length;
  let maxstring = niz[0];
  niz.forEach((el) => {
    if (maxduz < el.length) {
      maxstring = el;
    }
  });
  return maxstring;
};

console.log(elemNajvecaDuz(elem)); // ova f-ja vraca poslednji najduzi string

// ovo gore sam ja radila ovo sad Stefan
// 19.
let duzineSvihStr = (niz) => {
  niz.forEach((el) => {
    console.log(el.length);
  });
};
duzineSvihStr(elem);

// 20.

let maxDuzinaPrvi = (niz) => {
  let maxd = 0;
  niz.forEach((el) => {
    if (el.length > maxd) {
      maxd = el.length;
    }
  });
  let maxStr = undefined;
  niz.forEach((el) => {
    if (el.length == maxd && maxStr == undefined) {
      maxStr = el;
    }
  });
  return maxStr;
};

console.log(maxDuzinaPrvi(elem));

let maxDuzinaPoslednji = (niz) => {
  let maxd = 0;
  niz.forEach((el) => {
    if (el.length > maxd) {
      maxd = el.length;
    }
  });
  let maxStr = undefined;
  niz.forEach((el) => {
    if (el.length == maxd && maxStr == undefined) {
      maxStr = el;
    }
  });
  return maxStr;
};

console.log(maxDuzinaPoslednji(elem));

// 21. Odrediti broj elemenata u nizu stringova čija je dužina veća od prosečne dužine svih stringova u nizu.

//let elem = ["Mila", "Milos", "Ana", "Janko", "Marko", "Bogdan", "Stefan"];
let prosecnaDuzina = (niz) => {
  let duz = 0;
  niz.forEach((el) => {
    duz += el.length;
  });
  return duz / niz.length;
};
let brojNatprosecnoDugih = (niz) => {
  let duz = prosecnaDuzina(niz);
  let br = 0;
  niz.forEach((el) => {
    if (el.length > duz) {
      br++;
    }
  });
  return br;
};
console.log(prosecnaDuzina(elem));
console.log(brojNatprosecnoDugih(elem));

//22. Odrediti broj elemenata u nizu stringova koji sadrže slovo 'a’.
//let elem = ["Mila", "Milos", "Ana", "Janko", "Marko", "Bogdan", "Stefan"];
let brojSadrziA = (niz) => {
  let br = 0;
  niz.forEach((el) => {
    if (el.includes("a") || el.includes("A")) {
      br++;
    }
  });
  return br;
};

console.log(brojSadrziA(elem));

//23. Odrediti broj elemenata u nizu stringova koji počinju na slovo 'a' ili 'A’.
//let elem = ["Mila", "Milos", "Ana", "Janko", "Marko", "Bogdan", "Stefan"];
let brojPocinjeA = (niz) => {
    let br = 0;
    niz.forEach((el) => {
      if (el[0] == ("a") || el[0] == ("A")) {
        br++;
      }
    });
    return br;
  };
  
  console.log(brojPocinjeA(elem));
  