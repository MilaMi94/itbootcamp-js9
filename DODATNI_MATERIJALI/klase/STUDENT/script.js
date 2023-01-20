import { Student } from "./student.js";
console.log(Math.round(7));

let s1 = new Student("0511994745071", "Mila", "Ilic", [5, 6, 9, 10]);
let s2 = new Student("2307997705022", "Jeka", "Jovic", [10, 10, 9, 10]);
let s3 = new Student("3011997556012", "Uros", "Nikolic", [9, 9, 9, 10]);
let s4 = new Student("0101002020402", "Ana", "Jovic", [5, 4, 9, 10]);

let studenti = [s1, s2, s3, s4];

console.log(s1);

//f-ja imePrezime

let imePrezime = (i, p) => {
  let br = 0;
  studenti.forEach((s) => {
    if (s.ime == i && s.prezime == p) {
      br++;
    }
  });
  return br;
};
console.log(imePrezime("Ana", "Jovic"));

// srednjaOcena

let srednjaOcena = (niz) => {
  let zbirUk = 0;
  let brO = 0;
  niz.forEach((s) => {
    s.nizOcena.forEach((o) => {
      zbirUk += o;
      brO++;
    });
  });

  return zbirUk / brO;
};
console.log(srednjaOcena(studenti));

//osrednji

let osrednji = (niz) => {
  let najblizi = niz[0];
  let najbliziProsek = niz[0].prosecnaOcena;
  let globalniProsek = srednjaOcena(studenti);
  let najmanjeRast = Math.abs(globalniProsek - najbliziProsek);
  niz.forEach((s) => {
    let studentRast = Math.abs(globalniProsek - s.prosecnaOcena);
    if (studentRast < najmanjeRast) {
      najblizi = s;
    }
  });
  return najblizi;
};
console.log(osrednji(studenti));
console.log(s1.prosecnaOcena);
console.log(s2.prosecnaOcena);
console.log(s3.prosecnaOcena);
console.log(s4.prosecnaOcena);
console.log(srednjaOcena(studenti));

//najmanjaOcenaNajboljeg

let divNajslabijaOcena = document.getElementById("najslabijaOcena");

let najmanjaOcenaNajboljeg = (niz) => {
  let naj = niz[0];
  let najProsek = naj.prosecnaOcena;
  niz.forEach((s) => {
    if (najProsek < s.prosecnaOcena) {
      najProsek = s.prosecnaOcena;
      naj = s;
    }
  });
  let najmanjaOcenaNajboljeg = naj.nizOcena[0];
  naj.nizOcena.forEach((o) => {
    if (o < najmanjaOcenaNajboljeg) {
      najmanjaOcenaNajboljeg = o;
    }
  });
  divNajslabijaOcena.innerHTML = najmanjaOcenaNajboljeg;
};

najmanjaOcenaNajboljeg(studenti);

//najmanjaOcena

let najmanjaOcena = (niz) => {
  let minO = niz[0].nizOcena[0];
  niz.forEach((s) => {
    s.nizOcena.forEach((o) => {
      if (o < minO) {
        minO = o;
      }
    });
  });
  console.log(minO);
};

najmanjaOcena(studenti);

//najcescaOcena



//rodjeniGodine

let rodjeniGodine = (g) => {
  let godina = 1000;
  let jmbg = studenti[0].jmbg;
  console.log(jmbg);
  for (let i = 4; i < 7; i++) {
    console.log(jmbg[i]);
    if (i[4] == 9) {
        godina += jmbg[4]*100;
        godina  
    }
  }
};

rodjeniGodine(1994);
