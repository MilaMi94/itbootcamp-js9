//Napraviti niz dan objekata (podsetiti se objekta dan sa 14. slajda i kreirati nekoliko takvih objekata)
//Napraviti arrow funksiju koja ispisuje datum u kome je najviše puta izmerena temperatura. Ukoliko ima više takvih datuma:
//Ispisati prvi od njih
//ispisati poslednji od njih
//Napraviti arrow funksiju koja prebrojava i ispisuje koliko je bilo kišnih dana, koliko je bilo sunčanih dana i koliko je bilo oblačnih dana

console.log("Zadatak dan-------------------");

dan1 = {
  datum: "2022/12/21",
  kiša: false,
  sunce: true,
  oblačno: false,
  temperature: [5, 10, 15, 15],
};

dan2 = {
  datum: "2022/12/22",
  kiša: true,
  sunce: true,
  oblačno: false,
  temperature: [5, 15, 10],
};

dan3 = {
  datum: "2022/12/23",
  kiša: false,
  sunce: true,
  oblačno: false,
  temperature: [5, 15, 10, 14, 15],
};

dan4 = {
  datum: "2022/12/24",
  kiša: true,
  sunce: true,
  oblačno: true,
  temperature: [5, 15],
};

dan5 = {
  datum: "2022/12/25",
  kiša: false,
  sunce: false,
  oblačno: false,
  temperature: [-5, 15, 10, 15, 10],
};

let dani = [dan1, dan2, dan3, dan4, dan5];

//1 deo zadatka prvi datum
console.log("Zadatak dan prvi datum -------------------");
let najputaIzmerenaTempPrvi = (niz) => {
  let naj = niz[0];
  niz.forEach((dan) => {
    if (dan.temperature.length > naj.temperature.length) {
      naj = dan;
    }
  });
  console.log(naj.datum);
};

najputaIzmerenaTempPrvi(dani);
//1 deo zadatka drugi datum
console.log("Zadatak dan drugi datum -------------------");

let najputaIzmerenaTempDrugi = (niz) => {
  let naj = niz[0];
  niz.forEach((dan) => {
    if (dan.temperature.length >= naj.temperature.length) {
      naj = dan;
    }
  });

  console.log(naj.datum);
};

najputaIzmerenaTempDrugi(dani);

// 2 deo zadatka kisni, suncani, oblacni dani ??
console.log("Zadatak dan 2 deo zadatka -------------------");

let kisniSuncaniOblacniDani = (niz) => {
  let brS = 0;
  let brO = 0;
  let brK = 0;
  niz.forEach((dan) => {
    if (dan.sunce == true) {
      brS++;
    }
    if (dan.oblačno == true) {
      brO++;
    }
    if (dan.kiša == true) {
      brK++;
    }
  });
  console.log(`Suncani dani ${brS}, oblacni ${brO}, i kisni ${brK}`);
};

kisniSuncaniOblacniDani(dani);

// 3 deo zadatka
console.log("Zadatak dan 3 deo zadatka -------------------");
//Napraviti arrow funkciju koja računa i vraća koliko je bilo dana sa natprosečnom temperaturom
// f-ja za prosek za svaki dan pojedinacno
let prosekTemp = (niz) => {
  let sum = 0;
  niz.forEach((temp) => {
    sum += temp;
  });
  return sum / niz.length;
};

let brDanaNatprosekTemp = (niz) => {
  let sum = 0;
  niz.forEach((dan) => {
    prosekTemp(dan.temperature);
    sum += prosekTemp(dan.temperature);
  });
  let prosekSvihDana = sum / niz.length;
  let br = 0;
  niz.forEach((dan) => {
    if (prosekTemp(dan.temperature) > prosekSvihDana) {
      br++;
    }
  });
  console.log(br);
};

brDanaNatprosekTemp(dani);
