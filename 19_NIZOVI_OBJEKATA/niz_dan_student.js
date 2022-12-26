//Napraviti niz dan objekata (podsetiti se objekta dan sa 14. slajda i kreirati nekoliko takvih objekata)
console.log("Zadatak-------------------");
//Napraviti arrow funksiju koja ispisuje datum u kome je najviše puta izmerena temperatura. Ukoliko ima više takvih datuma:
//Ispisati prvi od njih
//spisati poslednji od njih
//Napraviti arrow funksiju koja prebrojava i ispisuje koliko je bilo kišnih dana, koliko je bilo sunčanih dana i koliko je bilo oblačnih dana
//Napraviti arrow funkciju koja računa i vraća koliko je bilo dana sa natprosečnom temperaturomlet

dan1 = {
  datum: "2022/12/22",
  kiša: false,
  sunce: true,
  oblačno: false,
  temperature: [5, 10, 15, 14, 15],
};

dan2 = {
  datum: "2022/12/22",
  kiša: true,
  sunce: true,
  oblačno: false,
  temperature: [5, 15, 10, 15, 10, 14, 15],
};

dan3 = {
  datum: "2022/12/22",
  kiša: false,
  sunce: true,
  oblačno: false,
  temperature: [5, 15, 10, 10, 14, 15],
};

dan4 = {
  datum: "2022/12/22",
  kiša: true,
  sunce: true,
  oblačno: false,
  temperature: [5, 15, 10, 10, 14, 15],
};

dan5 = {
  datum: "2022/12/22",
  kiša: false,
  sunce: true,
  oblačno: false,
  temperature: [5, 15, 10, 15, 10, 14, 15],
};

let dani = [dan1, dan2, dan3, dan4, dan5];
// Student zadatak

let student1 = {
  ime: "Dragan",
  prezime: "Aetrovic",
  godStudija: 3,
  ocene: [9, 8, 9, 8],
};
let student2 = {
  ime: "Milan",
  prezime: "Markovic",
  godStudija: 4,
  ocene: [10, 10, 9],
};
let student3 = {
  ime: "Milos",
  prezime: "Zarkovic",
  godStudija: 4,
  ocene: [10, 10, 10, 10, 9],
};
let student4 = {
  ime: "Mosa",
  prezime: "Pijade",
  godStudija: 4,
  ocene: [10, 10, 10, 10, 9],
};
let studenti = [student1, student2, student3, student4];

let prosecnaOcena = (ocene) => {
  let sum = 0;
  ocene.forEach((o) => {
    sum += o;
  });
  return sum / ocene.length;
};

let najStudent = (studenti) => {
  let naj = studenti[0]; // Pretpostavka da je ovo najbolji student
  studenti.forEach((student) => {
    if (prosecnaOcena(naj.ocene) < prosecnaOcena(student.ocene)) {
      naj = student;
    }
  });

  return `${naj.ime} ${naj.prezime}`;
};

console.log(najStudent(studenti));

//2.pristup

let najStudent1 = (studenti) => {
  let ime_najboljeg = "";
  let prezime_najboljeg = "";
  let prosek_najboljeg = -1;

  studenti.forEach((student) => {
    let zbir = 0; // cesta greska da se stavi zbir izvan for.Each
    student.ocene.forEach((ocena) => {
      zbir += ocena;
    });
    let prosek = zbir / student.ocene.length;
    // > vraca prvog studenta sa najvecim prosekom
    // >= vraca poslednjeg studenta sa najvecim prosekom
    if (prosek > prosek_najboljeg) {
      prosek_najboljeg = prosek;
      ime_najboljeg = student.ime;
      prezime_najboljeg = student.prezime;
    }
  });

  return `${ime_najboljeg} ${prezime_najboljeg}`;
};

console.log(najStudent(studenti));

// svi najstudenti
let najSviStudenti = (studenti) => {
  let prosek_najboljeg = -1;
  studenti.forEach((student) => {
    let zbir = 0; // cesta greska da se stavi zbir izvan for.Each
    student.ocene.forEach((ocena) => {
      zbir += ocena;
    });
    let prosek = zbir / student.ocene.length;

    if (prosek > prosek_najboljeg) {
      prosek_najboljeg = prosek;
    }
  });

  studenti.forEach((student) => {
    if (prosek_najboljeg == prosecnaOcena(student.ocene)) {
      console.log(`${student.ime} ${student.prezime}`);
    }
  });
};

najSviStudenti(studenti);

// mora sa dve for.Each petlje jer moramo prvo da prodjemo da nadjemo prosek, pa onda da prodjemo da bi vidli dal ima neki student koji ima taj najveci prosek
