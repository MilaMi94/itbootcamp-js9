console.log(document); // objekat (koren DOM stabla)
console.log(document.body); // objekat (body tag iz DOM stabla)

let el1 = document.getElementById('p2');
console.log(el1);  // objekat iz DOM stabla

let el2 = document.getElementsByClassName('par');
console.log(el2); // HTML Collection objekata iz DOM stabla

let el3 = document.getElementsByTagName('p');
console.log(el3); // HTML Collection objekata iz DOM stabla

let el4 = document.getElementsByTagName('a');
console.log(el4); // HTML Collection od samo 1 objekta

let el5 = document.getElementsByName('p');
console.log(el5); // vraca Node list objekata iz DOM objekata

// Pristup elementima HTML Collection
// moze for petljom
console.log('for petlja za kolekciju---------');
for(let i = 0; i < el2.length; i++) {
    console.log(el2[i]);  // el2[i] je element ( objekat, HTML tag) iz HTML kolekcije el2
}
/* ovako ne moze
el2.forEach(e => {
    console.log(e);
});
*/

//forEach petljom ne moze, jer HTMl Collection je poseduje tu metodu jer nije array, resenje je da koristimo for petlju, ali mozemo i da HTML kolekciju konvertujemo u niz
console.log('forEach petlja za kolekciju---------');
let elems = Array.from(el2);
elems.forEach(e => {
    console.log(e);
})


// Pristup el node listi pomocu forEach-a- moze i for i forEach
el5.forEach(e => {
    console.log(e);
})

// Primena metoda querySelector
//Kao parametar prima bilo koji validan CSS selektor.Kao rezultat vraća objekat – prvi HTML element koji zadovoljava dati selektor.
console.log('Primena metoda querySelector---------');
let t1 = document.querySelector('#p2');
console.log(t1);

let t2 = document.querySelector('.par');
console.log(t2); // pvjekat vraca i to prvi samo
console.log(' Primena metoda querySelectorAll---------');
let t3 = document.querySelectorAll('.par');
console.log(t3);