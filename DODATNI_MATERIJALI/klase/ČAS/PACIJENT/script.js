import Pacijent from "./pacijent.js";

let p1 = new Pacijent("Mila", 174, 62);
let p2 = new Pacijent("Milos", 185, 75);
let p3 = new Pacijent("Maja", 172, 55);
console.log(p1.bmi());
p1.stampaj();

//zadaci
let pacijenti = [p1, p2, p3];

// Ispisati podatke o pacijentu sa najmanjom težinom

let btnMinTez = document.getElementById("minTez");
let pMinTezRez = document.getElementById("minTezRez");

btnMinTez.addEventListener("click", () => {
  let min = pacijenti[0]; // jer mi trebaju podaci o pacijentu,da treba tezina stavila bi i .tezina
  pacijenti.forEach((p) => {
    if (p.tezina < min.tezina) {
      min = p;
    }
  });
  pMinTezRez.innerHTML = min.stampajListu();
});

// Ispisati podatke o pacijentu sa najvećom bmi vrednošću

let btnMaxBMI = document.getElementById("maxBMI");
let pmaxBMIRez = document.getElementById("maxBMIrez");

btnMaxBMI.addEventListener("click", () => {
  let maxBMI = pacijenti[0];
  pacijenti.forEach((p) => {
    if (maxBMI.bmi() < p.bmi()) {
      maxBMI = p;
    }
  });
  pmaxBMIRez.innerHTML = maxBMI.stampajListu();
});

//Ispisati sve pacijente čije ime sadrži slovo A.

let btnSlovoA = document.getElementById("slovoA");
let pSlovoARez = document.getElementById("slovoARez");

btnSlovoA.addEventListener("click", () => {
  pacijenti.forEach((pacijent) => {
    if (pacijent.ime.includes("a") || pacijent.ime.startsWith("A")) {
      pSlovoARez.innerHTML += pacijent.stampajListu();
    }
  });
});

//Napraviti funkciju srednjaVisina kojoj se prosleđuje niz pacijanata a koja određuje i vraća srednju visinu pacijenata.

let btnSrednjaVisina = document.getElementById("srednjaVisina");
let pSrVisRez = document.getElementById("srVisRez");

let srednjaVisina = (niz) => {
  let zbir = 0;
  let br = 0;
  pacijenti.forEach((pacijent) => {
    zbir += pacijent.visina;
    br++;
  });
  return `${ zbir / br}cm`;
};


btnSrednjaVisina.addEventListener("click", () => {
    pSrVisRez.innerHTML =  srednjaVisina(pacijenti);
});


