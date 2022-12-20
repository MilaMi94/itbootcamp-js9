// F-ja 1: niz => {for petljom prodjemo kroz sve elemente niza, i svaki ispisemo u konzoli }
// F-ja 2: niz => {for petljom prodjemo kroz sve elemente niza, i svaki ispisemo u div element}
// Funkcija: {niz, nacinIspisa} => {for petljom prodjemo kroz sve elemente niza, i svaki ispisemo na zadati nacin}

// u ovoj funkciji mi ispisujemo poruku u konzoli
function ispisKonzola(poruka) {

    console.log(poruka);
}

// u ovoj funkciji ispisujemo poruku na stranici
function ispisStranica(poruka) {
    let div = document.getElementById('container');
    div.innerHTML = poruka;
}

//u ovoj funkciji zelimo da unutra funkcije stavimo parametar za pozivanje callback funkcije gde pri pozivanju f-je mozemo da kao argument da stavimo neku od predhodnih f-ja
function ispisNiza(niz, cb) {
    let poruka = "";
    for (let i = 0; i < niz.length; i++) {
        poruka += (niz[i] + " ");
    }
    cb(poruka);
}


// dve obicne funkcije
ispisKonzola("Hhahah");
ispisStranica("bla bla bla");

let a = [6, -8, 10, 0, 5];
let b = ["pera", "mika", "laza"];
ispisNiza(a, ispisStranica);
ispisNiza(a, ispisKonzola);

a.forEach(ispisKonzola);
// forEach petlja je metoda koja za svaki element niza poziva callback funkciju,
//a kao parametar te funkcije prosledjuje bas taj element niza

b.forEach(ispisKonzola);

a.forEach(function (element) {
    console.log(element);
});
/// forEach ce za svaki element niza da pozove anonimnu funkciju i prosledice svaki put po jedan element niza

a.forEach(elem =>{
    console.log(elem);
})

