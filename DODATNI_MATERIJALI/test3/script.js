/*/* Jedan auto plac vodi evidenciju o svim automobilima koji se trenutno nalaze na placu.
Za svaki automobil čuvaju se sledeći podaci:
● marka (string - marka automobila),
● km (realan broj - broj pređenih kilometara automobila),
● godište (ceo broj - godina proizvodnje automobila),
● vlasnici (niz stringova - imena svih prethodnih vlasnika. Zbog jednostavnosti,
pamtiti samo imena, recimo “Pera”, “Mika”, “Laza”).
➢ (10 poena)
Kreirati niz od najmanje tri objekta (najmanje tri automobila koji se nalaze na
placu). */
/* ➢ (15 poena)
Napisati funkciju prosecnoGodiste kojoj se prosleđuje niz automobila, a koja
vraća prosečno godište proizvodnje automobila.
Ukoliko je prosečno godište automobila realan broj, zaokružiti ga na donji ceo
deo.
Pozvati funkciju i rezultat ispisati u konzoli. */

/* ➢ (15 poena)
Napisati funkciju prosekKm10 kojoj se prosleđuje niz automobila, a koja vraća
prosečnu pređenu kilometražu svih automobila ne starijih od 10 godina.
Pozvati funkciju i rezultat ispisati u konzoli. */
/* ➢ (20 poena)
Napisati funkciju rokfeler kojoj se prosleđuje niz automobila kao i ime vlasnika, a
koja vraća true ukoliko postoji vlasnik sa zadatim imenom koji je u svom
vlasništvu posedovao više od dva automobila, a u suprotnom vraća false.
Pozvati funkciju i rezultat ispisati u konzoli. */
/*
➢ (20 poena)
Pretpostavimo da su u niz objekata automobili dodavani po redosledu dolaska na
auto plac. Drugim rečima, na početku niza nalaze se automobili koji su ranije
došli na plac, dok se na kraju niza nalaze automobili koji su skorije došli na plac.
Što je veći indeks automobila u nizu, to je skorije došao na plac.
Podelimo niz automobila na dva dela - jedan deo čine polovinu automobila koji
su od ranije na placu, a drugu polovinu čine automobili koji su skorije došli na
plac.
Ukoliko u nizu ima neparan broj elemenata, tada prvi deo ima jedan više
automobil od drugog dela.
Napisati funkciju skorije koja vraća true ukoliko je polovina automobila koja je
skorije došla na plac u proseku mlađa (po godini proizvodnje) od polovine
automobila koja je ranije došla na plac.
Pozvati funkciju i rezultat ispisati u konzoli.  */

//1.

let auto1 = {
  marka: "Fiat",
  km: 50,
  godiste: 2015,
  vlasnici: ["Pera", "Mika", "Laza"],
};

let auto2 = {
  marka: "Fiat",
  km: 50,
  godiste: 2022,
  vlasnici: ["Pera", "Milan"],
};

let auto3 = {
  marka: "Audi",
  km: 200.5,
  godiste: 2012,
  vlasnici: ["Pera", "Joka", "Zeljka"],
};

let automobili = [auto1, auto2, auto3];

//2.

let prosecnoGodiste = (niz) => {
  let sum = 0;
  niz.forEach((auto) => {
    sum += auto.godiste;
  });

  return Math.floor(sum / niz.length);
};

console.log(`Prosecno godiste automobila je ${prosecnoGodiste(automobili)}.`);

//3.
/* ➢ (20 poena)
Napisati funkciju markaNajmanjeKm kojoj se prosleđuje niz automobila kao i
marka automobila, a koja vraća automobil (objekat) sa zadatom markom, a koji je
prešao najmanje kilometara.
Ukoliko nema automobila sa datom markom, kao rezultat vratiti null.
Ukoliko ima tačno jedan automobil sa datom markom, vratiti taj automobil.
Ukoliko ima više automobila sa datom markom koji su prešli isti broj kilometara,
vratiti najskorije proizveden takav automobil. Ukoliko, pak, ima i više takvih
automobila, vratiti bilo koji od njih.
Pozvati funkciju i rezultat ispisati u konzoli. */
console.log(`Zadatak3 ----------------------------------`);
let najskorijeProizveden = (niz) => {
  const d = new Date();
  let year = d.getFullYear();
  let starost = year - niz[0].godiste;
  let autoObj = niz[0];
  niz.forEach((auto) => {
    if (year - auto.godiste <= starost) {
      autoObj = auto;
    }
  });
  return autoObj;
};

console.log(najskorijeProizveden(automobili)); // vraca obj sa najskorije proizvedenim automobilom

let markaNajmanjeKm = (niz, marka) => {
  let minKm = niz[0].km;
  let trazeniObj = niz[0];
  let br = 0;
  niz.forEach((auto) => {
    if (auto.marka == marka) {
      if (auto.km <= minKm) {
        minKm = auto.km;
        trazeniObj = auto;
        br++;
      }
    }
  });
  //  return trazeniObj;
  console.log(br);
  if (br == 1) {
    console.log(trazeniObj);
  } else if (br == 1) {
  }
};
console.log(markaNajmanjeKm(automobili, "Fiat"));

//4.
console.log(`Zadatak4 ----------------------------------`);

let prosekKm10 = (niz) => {
  let sumKm = 0;
  let br = 0;
  const d = new Date();
  let year = d.getFullYear();
  niz.forEach((auto) => {
    if (year - auto.godiste < 10) {
      sumKm += auto.km;
      br++;
    }
  });
  return sumKm / br++;
};

console.log(prosekKm10(automobili)); // svi automobili ne stariji od 10 god e pa njihov prosek

// 5.

//6.
