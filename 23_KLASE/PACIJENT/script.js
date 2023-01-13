import Pacijent from "./pacijent.js";

let p1 = new Pacijent("Milica", 1.65, 45);
let p2 = new Pacijent("Goran", 2.02, 105);
let p3 = new Pacijent("Milan", 1.69, 70);
let p4 = new Pacijent("Ana", 1.73, 70);

let pacijenti = [p1, p2, p3, p4];

// Ispisati podatke o pacijentu sa najmanjom težinom.
let btnMinTezina = document.getElementById("razunajMinTezinu");
let pMinTezina = document.getElementById("minTezina");
btnMinTezina.addEventListener("click", () => {
  let minPac = pacijenti[0];
  pacijenti.forEach((p) => {
    if (minPac.tezina > p.tezina) {
      minPac = p;
    }
  });
  minPac.stampaj(); // u konzoli
  pMinTezina.innerHTML = minPac.stampajListu();
});

//Ispisati podatke o pacijentu sa najvećim bmi vrednošću.

let btnMaxBmi = document.getElementById("maxBmi");
let pMaxBmiRez = document.getElementById("maxBmiRez");

btnMaxBmi.addEventListener("click", () => {
  let pacMaxBmi = pacijenti[0];
  let maxBmi = pacMaxBmi.bmi();
  pacijenti.forEach((p) => {
    if (maxBmi < p.bmi()) {
      pacMaxBmi = p;
    }
  });
  pMaxBmiRez.innerHTML = pacMaxBmi.stampajListu();
});

//Ispisati sve pacijente čije ime sadrži slovo A.
let btnSlovoA = document.getElementById("pacSlovo");
let pSlovoARez = document.getElementById("pacSlovoRez");

btnSlovoA.addEventListener("click", () => {
  let pacSlovoA = pacijenti[0];
  pacijenti.forEach((p) => {
    if (p.ime.includes("a") || p.ime.includes("A")) {
      pacSlovoA = p; 
    }
    pSlovoARez.innerHTML += pacSlovoA.stampajListu();
  });
});

//Napraviti funkciju srednjaVisina kojoj se prosleđuje niz pacijanata a koja određuje i vraća srednju visinu pacijenata.

let btnSrednjaVisina = document.getElementById("srVis");
let pSrVisRez = document.getElementById("srVisRez");

let srednjaVisina = (niz) => {
  let zbir = 0;
  let br = niz.length;
  niz.forEach((p) => {
    zbir += p.visina;
  });
  return `${ zbir / br}m`;
};


btnSrednjaVisina.addEventListener("click", () => {
    pSrVisRez.innerHTML = srednjaVisina(pacijenti);
});

