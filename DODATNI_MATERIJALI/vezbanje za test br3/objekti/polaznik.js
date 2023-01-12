/*Zadatak 2.
Objekat Polaznik sadrži ime (string), prezime (string), kao i ocena (ceo broj između 0 i 100, što zapravo predstavlja broj bodova na završnom testu).
Objekat Kurs (naravno, neki iz ITBootcamp-a) sadrži naziv (string), grad u kojem se održava (string), kao i niz polaznici (elementi niza su objekti tipa Polaznik).
Kreirati niz od barem 4 kursa. Svaki kurs može imati proizvoljan broj polaznika, i staviti barem tri polaznika za svaki kurs. Voditi se sledećim pravilima prilikom kreiranja svakog objekta:
Naziv kursa može biti “Razvoj veb stranica: JS”, “Razvoj veb stranica: PHP”, “Testiranje softvera: QA”, “Osnove programiranja: Java”.
Grad može biti “Beograd”, “Niš”, “Novi Sad” ili “Kosovska Mitrovica”.
Imena polaznika za svaki kurs su proizvoljni, kao i ocene, dokle god je svaka ocena ceo broj između 0 i 100.
Napisati sledeće arrow funkcije:
Funkciji se prosleđuje niz kurseva i string koji predstavlja grad, a vraća broj kurseva koji se održavaju u tom gradu.
Funkciji se prosleđuje niz kurseva i string koji predstavlja naziv, a vraća broj kurseva koji sadrže dati naziv.
Funkciji se prosleđuje niz kurseva, a ona ispisuje naziv kursa i grad u kojem se nalazi maksimalan broj polaznika. Ukoliko postoji više takvih kurseva, ispisati bilo koji takav kurs.
Funkciji se prosleđuje niz kurseva i string koji predstavlja prezime, a ispisuje sve polaznike (ime i prezime polaznika, kao i naziv kursa i grad gde pohađaju kurs) čije ime sadrži dati parametar.
Funkciji se prosleđuje niz kurseva, a ispisuje naziv kursa i grad gde je ostvarena najbolja prosečna ocena na završnom testu. Ukoliko ima više takvih kurseva, ispisati bilo koji.
Kurs je uspešan ako su svi polaznici položili završni test (svi polaznici ostvarili iznad 65%). Funkciji se prosleđuje niz kurseva, a vraća broj uspešnih kurseva.
Grad “kida” ukoliko je svaki kurs koji se održava u tom gradu uspešan. Funkciji se prosleđuje niz kurseva i grad, a vraća da li dati grad kida (funkcija vraća true ili false).
Polaznici na nekom kursu su “pokidali” na završnom testu ako nijedan polaznik nije osvojio manje od 80% na završnom testu. Funkciji se prosleđuje niz kurseva i naziv nekog kursa, a ona ispituje da li su polaznici pokidali na tom kursu (funkcija vraća true ili false).*/

let polaznik1 = {
  ime: "Mila",
  prezime: "Bogdanovic",
  ocena: 81,
};
let polaznik2 = {
  ime: "Milos",
  prezime: "Ivanovic",
  ocena: 70,
};
let polaznik3 = {
  ime: "Maja",
  prezime: "Bogdanovic",
  ocena: 80,
};
let polaznik4 = {
  ime: "Milena",
  prezime: "Bogdanovic",
  ocena: 90,
};
let polaznik5 = {
  ime: "Aca",
  prezime: "Ilic",
  ocena: 60,
};
let polaznik6 = {
  ime: "Ana",
  prezime: "Djokic",
  ocena: 70,
};
let polaznik7 = {
  ime: "Jela",
  prezime: "Ilic",
  ocena: 45,
};

let polaznik8 = {
  ime: "Nada",
  prezime: "Obric",
  ocena: 33,
};

let kurs1 = {
  naziv: "Razvoj veb stranica: JS",
  grad: "Beograd",
  polaznici: [polaznik1],
};
let kurs2 = {
  naziv: "Razvoj veb stranica: PHP",
  grad: "Nis",
  polaznici: [polaznik4, polaznik5, polaznik6],
};
let kurs3 = {
  naziv: "Testiranje softvera: QA",
  grad: "Nis",
  polaznici: [polaznik7, polaznik1],
};
let kurs4 = {
  naziv: "Osnove programiranja: Java",
  grad: "Kosovska Mitrovica",
  polaznici: [polaznik2],
};

let kurs = [kurs1, kurs2, kurs3, kurs4];

//broj kurseva u gradu

let brKursevaGrad = (niz, str) => {
  let brojac = 0;
  niz.forEach((el) => {
    if (el.grad == str) {
      brojac++;
    }
  });
  return brojac;
};
console.log(brKursevaGrad(kurs, "Kosovska Mitrovica"));

//broj kurseva sa istim nazivom

let brKursevaIstiNaziv = (niz, str) => {
  let brojac = 0;
  niz.forEach((el) => {
    if (el.naziv == str) {
      brojac++;
    }
  });
  return brojac;
};

console.log(brKursevaIstiNaziv(kurs, "Osnove programiranja: Java"));

//kurs sa max polaznika

let maxPolaznika = (niz) => {
  let max = 0;
  let naziv = undefined;
  let grad = undefined;
  niz.forEach((el) => {
    if (el.polaznici.length >= max) {
      max = el.polaznici.length;
      naziv = el.naziv;
      grad = el.grad;
    }
  });
  return `Naziv kursa: ${naziv} u gradu ${grad}.`;
};

console.log(maxPolaznika(kurs));

// ispisuje sve iz objekta, koji sadrzi dato prezime

let istoPrezime = (niz, str) => {
  let ime = undefined;
  let prezime = undefined;
  let nazivKursa = undefined;
  let grad = undefined;
  niz.forEach((k) => {
    k.polaznici.forEach((el) => {
      if (el.prezime == str) {
        ime = el.ime;
        prezime = el.prezime;
        nazivKursa = k.naziv;
        grad = k.grad;
      }
    });
  });
  return `Trazeni podaci su: ${ime} ${prezime},naziv kursa ${nazivKursa}, u gradu ${grad} `;
};

console.log(istoPrezime(kurs, "Ilic"));
// ovo sam napisala samo za poslednjeg ovako ispise u forEach ako hocu da mi sve ispise, stavim console.log unutra forEach-a

// naziv kursa gde je ostvarena najveca ocena

let nazivKursaNajboljaOcena = (niz) => {
  let naziv = undefined;
  let grad = undefined;
  let maxOcena = 0;
  niz.forEach((k) => {
    k.polaznici.forEach((el) => {
      if (el.ocena >= maxOcena) {
        maxOcena = el.ocena;
        grad = k.grad;
        naziv = k.naziv;
      }
    });
  });
  return `Najbolja ocena je ostvarena na kursu ${naziv}, u gradu ${grad} `;
};

console.log(nazivKursaNajboljaOcena(kurs));

// uspesan kurs

let uspesanKurs = (niz) => {
  let brUspesnih = 0;

  niz.forEach((kurs) => {
    let brPolozenih = 0;
    kurs.polaznici.forEach((el) => {
      if (el.ocena > 65) {
        brPolozenih++;
      }
    });

    if (brPolozenih == kurs.polaznici.length) {
      brUspesnih++;
    }
  });
  return brUspesnih;
};
console.log(uspesanKurs(kurs));

// grad kida
//pomocna f-ja
let uspesanKursPomocna = (niz) => {
  let brPolozenih = 0;
  niz.forEach((el) => {
    if (el.ocena > 65) {
      brPolozenih++;
    }
  });

  return brPolozenih == niz.length;
};
console.log(uspesanKursPomocna(kurs1.polaznici));

let gradKida = (niz, grad) => {
  let brKursaSaGradom = 0;
  let brUspesnih = 0;
  niz.forEach((el) => {
    if (el.grad == grad) {
      brKursaSaGradom++;
      if (uspesanKursPomocna(el.polaznici)) {
        brUspesnih++;
      }
    }
  });
  return brKursaSaGradom == brUspesnih;
};

console.log(gradKida(kurs, "Nis"));

//polaznici pokidali

let pokidaliPomocna = (niz) => {
  let brPolozenih = 0;
  niz.forEach((el) => {
    if (el.ocena > 80) {
      brPolozenih++;
    }
  });

  return brPolozenih == niz.length;
};

let pokidaliKurs = (niz, naziv) => {
  let pokidali = undefined;
  niz.forEach((kurs) => {
    if (kurs.naziv == naziv) {
      pokidali = pokidaliPomocna(kurs.polaznici);
    }
  });
  return pokidali;
};

console.log(pokidaliKurs(kurs,'Razvoj veb stranica: JS'));
