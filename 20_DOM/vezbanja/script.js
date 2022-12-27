/*
Dohvatiti prvi paragraf na stranici.
Dohvatiti prvi div tag sa klasom „error“.
Dohvatiti poslednji red u tabeli.
Dohvatiti sve linkove na stranici.
Dohvatiti sve slike na stranici.

Sve elemente ispisati u konzoli.
 */

let el1 = document.querySelector("p");
console.log(el1);

// let el2 = document.getElementsByClassName("div.error");
// console.log(el2);

let el3 = document.querySelector("tr:last-child");
console.log(el3);

let el4 = document.getElementsByTagName("a");
console.log(el4); // vraca kolekciju
for (let i = 0; i < el4.length; i++) {
  console.log(el4[i]);
}

let el5 = document.querySelectorAll("a");
console.log(el5); // vraca node list
el5.forEach((el) => {
  console.log(el);
});

let el6 = document.getElementsByTagName("img");
console.log(el6);
let el = Array.from(el6);
el.forEach((e) => {
  console.log(e);
});

let alltablerows = document.getElementsByTagName("tr");
console.log(alltablerows[alltablerows.length - 1]);

/*Zadaci 8 slajd */
//1.
let sviPar = document.getElementsByTagName("p");
console.log(sviPar);
for (let i = 0; i < sviPar.length; i++) {
  sviPar[i].innerHTML += ` VAZNO!!!`;
}

// 2.
let sviDivovi = document.querySelectorAll("div.error");
for (let i = 0; i < sviDivovi.length; i++) {
  sviDivovi[i].innerHTML += "<h1>Greska!</h1>";
}

// 3.
let n = sviPar.length;
for (let i = 1; i < n; i++) {
  sviPar[i].innerHTML += (i + 1) ** 2;
}

//4.
el.forEach((e) => {
  e.alt = "slike";
});
//5.

for (let i = 0; i < sviPar.length; i++) {
  sviPar[i].style.color = "purple";
}

//6.

for (let i = 0; i < sviPar.length; i++) {
  if (i % 2 == 0) {
    sviPar[i].style.backgroundColor = "green";
  } else if (i % 2 == 1) {
    sviPar[i].style.backgroundColor = "red";
  }
}

//Svim linkovima na stranici postaviti padding na 5px, font size na 18px i text-decoration na none. Parnim linkovima staviti zelenu pozadinsku boju i ljubicastu boju teksta, a neparnim linkovima plavu pozadinsku boju i belu boju teksta.

for (let i = 0; i < el5.length; i++) {
  el5[i].style.padding = "5px";
  el5[i].style.fontSize = "8px";
  el5[i].style.textDecoration = "none";

  if (i % 2 == 0) {
    el5[i].style.backgroundColor = "green";
    el5[i].style.color = "purple";
  } else {
    el5[i].style.backgroundColor = "blue";
    el5[i].style.color = "white";
  }
}

//Svim slikama na stranici koja su sa ekstenzijom .png, postaviti okvir na debljinu 2px i crvenu boju.

let sveSlike = document.querySelectorAll("img[src$='.png']");

for (let i = 0; i < sveSlike.length; i++) {
  sveSlike[i].style.border = "2px solid red";
  sveSlike[i].style.marginTop = "10px";
}

//Svakom linku na stranici promeniti target svojstvo na sledeći način: ako je bilo _blank, postaviti na _top, a ako je bila neka vrednost različita od _blank, ili uopšte nije bilo postavljeno, tada postaviti na _blank.

for (let i = 0; i < el5.length; i++) {
  if (el5[i].target == "_blank") {
    el5[i].target = "_top";
  } else {
    el5[i].target = "_blank";
  }
}



