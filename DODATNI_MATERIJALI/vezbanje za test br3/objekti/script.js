//Zadatak 1.
/*Objekat Student sadrži njegovo ime (string), prezime (string), godinu studija (ceo broj između 1 i 5), kao i niz ocena do sada položenih ispita (niz celih brojeva, gde je svaki od brojeva u intervalu od 6 do 10).
Kreirati niz od barem 4 studenta. Napisati sledeće arrow funkcije:
Funkciji se prosleđuje niz studenata i string koji sadrži jedan karakter, a štampa imena i prezimena svih studenata čije prezime počinje na zadato slovo.
Funkciji se prosleđuje niz studenata i dva stringa, a štampa imena i prezimena svih studenata čije ime sadrži prvi string, a prezime sadrži drugi string.
Funkciji se prosleđuje niz studenata i ceo broj između 1 i 5 koji predstavlja godinu studija, a vraća broj studenata koji se nalaze na prosleđenoj godini studija.
Funkciji se prosleđuje niz studenata, a ona ispisuje ime i prezime studenta sa maksimalnim prosekom. Ukoliko ima više takvih studenata, ispisati ime i prezime bilo kog takvog studenta.
Student je prosečan ako nema nijednu šesticu i nijednu desetku. Funkciji se prosleđuje niz studenata, a ona ispisuje sve prosečne studente.
Student je “ekstra” ako je polagao ispite samo sa devetkama i desetkama, i pri tome je broj desetki barem duplo veći od broja devetki. Funkciji se prosleđuje niz studenata, a ona ispisuje sve ekstra studente.
Student “kida” ako je polagao ispite samo samo sa devetkama i desetkama, a broj devetki je manji od godine studije na kojoj se student nalazi. Funkciji se prosleđuje niz studenata, a ona ispisuje sve studente koji kidaju.
Student “razbija” ako je sve ispite položio sa ocenom deset. Pri tome, broj desetki ne sme biti manji od broja 5 * (godina_studija - 1). (Dakle, ne može student na trećoj godini da razbija ako je položio jedan ispit, kao što nijedan student prve godine još ne može da razbija, jer još nije položio sve ispite iz tekuće godine). Funkciji se prosleđuje niz studenata, a ona ispisuje sve studente koji razbijaju.
Student je “aljkav” ako nijedan ispit nije položio sa ocenom većom od 7. Funkciji se prosleđuje niz studenata, a ona prebrojava sve aljkave studente.
Student se “bruka” ako nije student prve godine, a broj položenih ispita je manji od broja 3 * (godina_studija - 1), i pri tome nijedna ocena nije veća od 7. Funkciji se prosleđuje niz studenata, a ona prebrojava sve studente koji se brukaju. */

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
Polaznici na nekom kursu su “pokidali” na završnom testu ako nijedan polaznik nije osvojio manje od 80% na završnom testu. Funkciji se prosleđuje niz kurseva i naziv nekog kursa, a ona ispituje da li su polaznici pokidali na tom kursu (funkcija vraća true ili false).



Napomena.
U svim zadacima možete dodati i pomoćne metode u bilo kom objektu, ako vam je potrebno radi lakše implementacije zadatih funkcija.*/

//Moj pristup
console.log("Zadatak student moj pristup-------------------");

let s1 = {
  ime: "Mila",
  prezime: "Bogdanovic",
  godStudija: 5,
  ocene: [9, 8, 9, 8], //8.5
};
let s2 = {
  ime: "Milos",
  prezime: "Ivanovic",
  godStudija: 2,
  ocene: [9, 7, 9],
};
let s3 = {
  ime: "Milan",
  prezime: "Ivanovic",
  godStudija: 5,
  ocene: [10, 10, 10, 10, 9], //9.8
};
let s4 = {
  ime: "Maja",
  prezime: "Bogdanovic",
  godStudija: 3,
  ocene: [10, 10, 9, 9, 9], //9.8
};
let students = [s1, s2, s3, s4];
// pocetno slovo
console.log("pocetno slovo-------------------");

let pocetnoSlovo = (niz, str) => {
  niz.forEach((s) => {
    if (s.prezime.startsWith(str)) {
      console.log(
        `Student sa pocetnim slovom prezimena ${str} je ${s.ime} ${s.prezime} `
      );
    }
  });
};

pocetnoSlovo(students, "B"); // treba da ispise imena i prezimena studenta sa tim pocetnim slovom prezimena

// prvi i drugi string
console.log("prvi i drugi string-------------------");

let prviDrugiString = (niz, st1, st2) => {
  niz.forEach((s) => {
    if (s.ime.includes(st1) && s.prezime.includes(st2)) {
      console.log(` ${s.ime} ${s.prezime} `);
    }
  });
};

prviDrugiString(students, "il", "ic"); // štampa imena i prezimena svih studenata čije ime sadrži prvi string, a prezime sadrži drugi string.

//br studenata na prosledjenoj godini
console.log("br studenata na prosledjenoj godini-------------------");

let brStNaGodini = (niz, brGod) => {
  let br = 0;
  niz.forEach((s) => {
    if (s.godStudija == brGod) {
      br++;
    }
  });
  console.log(br);
};

brStNaGodini(students, 5);

// maks prosek
console.log("studenti max prosek-------------------");
let prosek = (niz) => {
  let sum = 0;
  niz.forEach((o) => {
    sum += o;
  });
  return sum / niz.length;
};

let maxProsek = (niz) => {
  let max = prosek(niz[0].ocene);
  niz.forEach((s) => {
    if (prosek(s.ocene) > max) {
      max = prosek(s.ocene);
    }
  });
  return max;
};
console.log(`Maks prosek je ${maxProsek(students)}`);

let sviStudentiMaxProsek = (niz) => {
  niz.forEach((s) => {
    if (prosek(s.ocene) == maxProsek(students)) {
      console.log(
        `Student sa maksimalnim prosekom ocena je ${s.ime} ${s.prezime}`
      );
    }
  });
};

sviStudentiMaxProsek(students); // vraca sve najbolje studente

// prosecan student nijedna 6, nijedna 10
console.log("prosecan student-------------------");

let prosecan = (niz) => {
  let prosSt = `Prosecni studenti su: `;
  niz.forEach((s) => {
    if (!s.ocene.includes(6) && !s.ocene.includes(10)) {
      prosSt += `${s.ime} ${s.prezime} `;
    }
  });
  return prosSt;
};
console.log(prosecan(students));

// esktra student
console.log("ekstra student-------------------");
// samo 9 i 10, br 10 bar duplo veci od br 9
let ekstraStudenti = (niz) => {
  niz.forEach((s) => {
    let ocene = s.ocene; // niz svakog studenta ocene
    if (
      !ocene.includes(6) &&
      !ocene.includes(7) &&
      !ocene.includes(8) &&
      desetViseodDevet(ocene)
    ) {
      console.log(`${s.ime} ${s.prezime}`);
    }
  });
};

let desetViseodDevet = (niz) => {
  let br10 = 0;
  let br9 = 0;
  for (let i = 0; i < niz.length; i++) {
    if (niz[i] == 10) {
      br10++;
    }
    if (niz[i] == 9) {
      br9++;
    }
  }
  if (br10 >= 2 * br9) {
    return true;
  }
};

ekstraStudenti(students);
// bruka
/*
let bruka = (studenti) => {
  let br = 0;
  studenti.forEach((student) => {
    let bruka = true;
    let brIspita = student.ocene.length;
    if (student.godina == 1 || brIspita > 3 * (student.godina - 1)) {
      bruka = false;
    } else {
      student.ocene.forEach((ocena) => {
        if (ocena > 7) {
          bruka = false;
        }
      });
    }
    if (bruka) {
      br++;
      console.log(`${student.ime} ${student.prezime}`);
    }
  });
  return br;
};
console.log(`Broj studenata koji se brukaju je ${bruka(studenti)}`);

//aljkav

let aljkavStudent = (studenti) => {
  studenti.forEach((student) => {
    let ocene = student.ocene;
    student.aljkav = true;
    ocene.forEach((ocena) => {
      if (ocena > 7) {
        student.aljkav = false;
      }
    });
  });
  let nemaALjkavih = true;
  studenti.forEach((student) => {
    if (student.aljkav) {
      console.log(`Aljkav student: ${student.ime} ${student.prezime}`);
      nemaALjkavih = false;
    }
  });
  if (nemaALjkavih) {
    console.log(`Nema aljkavih studenata`);
  }
};
aljkavStudent(studenti);
*/
