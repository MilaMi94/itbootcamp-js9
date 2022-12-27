console.log(document); // objekat (koren DOM stabla)
console.log(document.body); // objekat (body tag iz DOM stabla)

let el1 = document.getElementById("p2");
console.log(el1); // objekat iz DOM stabla

let el2 = document.getElementsByClassName("par");
console.log(el2); // HTML Collection objekata iz DOM stabla

let el3 = document.getElementsByTagName("p");
console.log(el3); // HTML Collection objekata iz DOM stabla

let el4 = document.getElementsByTagName("a");
console.log(el4); // HTML Collection od samo 1 objekta

let el5 = document.getElementsByName("p");
console.log(el5); // vraca Node list objekata iz DOM objekata

// Pristup elementima HTML Collection
// moze for petljom
console.log("for petlja za kolekciju---------");
for (let i = 0; i < el2.length; i++) {
  console.log(el2[i]); // el2[i] je element ( objekat, HTML tag) iz HTML kolekcije el2
}
/* ovako ne moze
el2.forEach(e => {
    console.log(e);
});
*/

//forEach petljom ne moze, jer HTMl Collection je poseduje tu metodu jer nije array, resenje je da koristimo for petlju, ali mozemo i da HTML kolekciju konvertujemo u niz
console.log("forEach petlja za kolekciju---------");
let elems = Array.from(el2);
elems.forEach((e) => {
  console.log(e);
});

// Pristup el node listi pomocu forEach-a- moze i for i forEach
el5.forEach((e) => {
  console.log(e);
});

// Primena metoda querySelector
//Kao parametar prima bilo koji validan CSS selektor.Kao rezultat vraća objekat – prvi HTML element koji zadovoljava dati selektor.
console.log("Primena metoda querySelector---------");
let t1 = document.querySelector("#p2");
console.log(t1);

let t2 = document.querySelector(".par");
console.log(t2); // pvjekat vraca i to prvi samo
console.log(" Primena metoda querySelectorAll---------");
let t3 = document.querySelectorAll(".par");
console.log(t3);
// Menjanje svojstva postojecim vrednostima
// objektu iz DOM stabla menjamo svojstvo
t1.innerHTML = "Novi tekst paragrafa sa id-jem <span class ='bold'>p2</span>";

// ako hocemo da na stari sadrzaj dodamo novi
//t1.innerHTML = "Novi tekst paragrafa sa id-jem <span class ='bold'>p2</span>";

for (let i = 0; i < t3.length; i++) {
  t3[i].innerHTML =
    "Promena teksta u elementu sa klasom <span class = 'bold'>par</span>";
}

let link = document.querySelector("a");
link.href = "https://www.google.com ";
link.target = "_blank";
link.id = "link";
//Pojedinacno menjanje stilova ovo je sve pojedinacno
link.style.color = "red";
link.style.border = "1 px solid blue";
link.style.fontSize = "24px";

//link.style = "color: red; border: 1px solid blue; font-size: 24px; "; // a ovo je kao objekat u kome menjamo ali je prakticnije ono pojedinacno

link.setAttribute(
  "style",
  "color: red; border: 1px solid blue; font-size: 24px; "
);

link.setAttribute("link","id")


let table = document.querySelector("table");
console.log(table);
console.log(table.parentNode); // vraca body tag jer se tu nalazi tabela
console.log(table.childNodes[0]);  // ??
console.log(table.childNodes[1]); // tbody
console.log(table.childNodes[1].childNodes[0]);  // dete tbody-ja

for(let i = 0;i < document.body.childNodes.length;i++){
  let element = document.body.childNodes[i];
  console.log(element);
}


let naslov = document.createElement('h1'); // kreira node
naslov.innerHTML = "Naslov kreiran is JS-a"; // kreira element u HTML-u

document.body.prepend(naslov); // ovo dodaje u body
document.body.appendChild(naslov);  // na kraju bodyja
naslov.remove();
// ovako uraditi domaci sa createElement, i appendChild

