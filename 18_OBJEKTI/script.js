// OBJEKTI
// kreiramo promenljivu pa = i onda viticaste zagrade. U njima stavljamo property-je i njihove vrednosti, odvajamo ih zarezom, a na kraju objekta, posle zatvorene zagrade ide tacka zarez ; KOD F-JA NE IDE NA KRAJU ;

let blog1 = {
  title: "HTML",
  content: "Ovo je blog o osnovnim HTML tagovima",
  author: "Jelena",
};
// ispis celog objekta
console.log(blog1);

// ispis tipa podatka
console.log(typeof blog1);

// kako pristupamo property-ju u objektu
console.log(blog1.title);
console.log(blog1["title"]); // kao kad pristupamo nizu ali moramo da stavimo property u " "

// izmena propertija

blog1.content = "Osnove HTML-a";
console.log(blog1);
blog1["author"] = "Stefan";
console.log(blog1);

////////////////////////////////////////
// metode se dodaju unutar definisanja objekta
// u objektu uobicajeno se stavljaju prvo property pa onda metode
let user = {
  username: "JM",
  age: 28,
  blogs: ["IF naredba grananja", "FOR petlja", "WHILE petlja"],
  login: function () {
    // ako postoji parametar, moramo da argumentujemo
    console.log("Ulogovani ste");
  },
  logout: function () {
    console.log("Izlogovani ste");
  },
  logBlogs: function () {
    this.blogs.forEach((b) => {
      console.log(b);
    });
  },
};

user.login();
user.logout();
// unutar objekta ne mogu arrow funkcije
user.logBlogs();

// kljucna rec this.- Npr kod metode logblogs, hocemo da ispisemo blogove, ne mozemo da stavimo console.log(blogs), nego moramo console.log(this.blogs);Znaci ako hocemo da pristupi nekom propertiju unutar samog objekta koristimo rec this..

// ako stavimo ovako
console.log(this);
// ovo vraca roditeljski objekat - window objekat koji je globalni objekat pretrazivaca
user.blogs.forEach((b) => {
  document.write(`<p>${b}</p>`);
});

// Formirati objekat dan koji sadrzi
/*Datum (string u formatu YYYY/MM/DD),
Kiša (true/false),
Sunce (true/false),
Oblačno (true/false),
Vrednosti temperature (Niz temperatura tog dana).
 */

let dan = {
  datum: "2022/12/22",
  kiša: false,
  sunce: true,
  oblačno: false,
  temperature: [5, 15, 10, 15, 10, 14, 15],
  //1.
  prosecnaTemp: function () {
    let suma = 0;
    this.temperature.forEach((el) => {
      suma += el;
    });
    return suma / this.temperature.length;
  },
  //2.
  brNatprosecnih: function () {
    let br = 0;
    let avg = this.prosecnaTemp();
    this.temperature.forEach((el) => {
      if (el > avg) {
        br++;
      }
    });
    return br;
  },
  //3.
  brMaksimalnih: function () {
    let br = 0;
    let maks = 0;
    this.temperature.forEach((el) => {
      if (el >= maks) {
        maks = el;
      }
    });

    this.temperature.forEach((el) => {
      if (el == maks) {
        br++;
      }
    });
    return br;
  },
  //4.
  izmedjuTemp: function (t1, t2) {
    let br = 0;
    this.temperature.forEach((el) => {
      if (el > t1 && el < t2) {
        br++;
      }
    });
    return br;
  },
  //5
  veciDeoDanaTemp: function () {
    let iznadproseka = false;
    let natprosek = this.brNatprosecnih();
    if (natprosek > this.temperature.length / 2) {
      iznadproseka = true;
    }
    return iznadproseka;
  },

  //6
  ledenDan: function () {
    let ledenDan = true;
    this.temperature.forEach((el) => {
      if (el > 0) {
        ledenDan = false;
      }
    });
    return ledenDan;
  },
  //6. drugi nacin
  /*
  leden: function () {
    for(let i =0; i < this.temperature.length; i++) {
      if(this.temperature[i] > 0) {
        return false;
      }
    }
    return true;
  }
  */ 
};


console.log(dan.prosecnaTemp());
console.log(dan.brNatprosecnih());
console.log(dan.brMaksimalnih());
console.log(dan.izmedjuTemp(5, 15));
console.log(dan.veciDeoDanaTemp());
console.log(dan.ledenDan());

// uradi 3,4,5,6 za vezbu
//1. Određuje i vraća prosečnu temperaturu izmerenu tog dana.
//2. Prebrojava i vraća koliko merenja je bilo sa natprosečnom temperaturom.
//3. Prebrojava i vraća koliko merenja je bilo sa maksimalnom temperaturom.
//4. Prima dva parametra koji predstavljaju dve temperature. Potrebno je da metoda vrati broj merenja u toku dana čija je vrednost između ove dve zadate temperature (ne uključujući te dve vrednosti).
//5. Vraća true ukoliko je u većini dana temperatura bila iznad proseka. U suprotnom vraća false.
//6. Za dan se smatra da je leden ukoliko nijedna temperatura izmerena tog dana nije iznosila iznad 0 stepeni. Metod vraća true ukoliko je dan bio leden, u suprotnom metod vraća false.
// 7,8, i 9 za domaci

