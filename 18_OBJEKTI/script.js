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
  temperature: [5, 10, 15],
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
};

console.log(dan.prosecnaTemp());
console.log(dan.brNatprosecnih());

// uradi 3,4,5,6 za vezbu