console.log(`Funkcije`);

function zdravo() {
  console.log(`Zdravo!`);
}

zdravo();
zdravo();
console.log(`Hello!`);
zdravo();

for (i = 1; i <= 5; i++) {
  zdravo(); // ovo poziva funkciju onoliko puta koliko se izvrsi for petlja
}

////////////////////////////////////////////////////

function hello(name) {
  // u zagradama parametar koji se prosledjuje

  console.log(`Hello ${name}`);
}

hello("Jelena"); // sta zelimo da nam se ispise stavljamo u zagradama funkcije

hello("Zlatko");

/////////////////////////////////////////////////////

function hello_full_name(ime, prezime) {
  console.log(`Hello ${ime} ${prezime}`);
  // console.log(`Hello ${im} ${pr}`); ovo ne moze
}

hello_full_name("Stefan", "Stanimirovic");
hello_full_name("Ivanovic", "Ana");

let im = "Ana";
let pr = "Ivanovic";
hello_full_name(im, pr);

//VAZNO VAZNO sad ovde let im i let pr , funkcija to vidi sad jer prosledjujemo kao argument i ona tad zato to vidi, ali unutar funkcije ne mozemo da napisemo . Ako pre funkcije stavimo var im i var pr to znaci da mozemo i u funkciji mocicemo da koristimo, jer je var globalna promenljiva.

/////////////////////////////////////////////////////

/////////////////Zadaci  //////////////////////////////

// 2. Napisati funkciju zbir koja računa zbir dva realna broja.Šta bi trebalo izmeniti da bi se dobila razlika, proizvod ili količnik dva broja.



function zbirDvaBroja(broj1, broj2) {
  console.log(broj1 + broj2);
}
zbirDvaBroja(20, 10);

// odraditi drugi deo zadatka



//5.  Napisati funkciju koja prikazuje sliku za prosledjenu adresu slike.



function prikazSlike(slika) {
    document.write(`<img src=${slika}>`);
}

prikazSlike("destinacije.jpg");  /* ovde mora u navodnicima jer je tako u document.write, nije promenljiva */





//6.  Napisati funkciju koja za unetu boju na engleskom jeziku boji tekst paragrafa u tu boju.

function bojiParagraf(boja) {
  document.write(`<p style="color:${boja}";> Obojeni tekst <p>`);
}

bojiParagraf("green");
bojiParagraf("orange");

/*zasto je ovde string? zato sto bez "" znaci da je to promenljiva zapravo*/


/* 13. Napisati funkciju kojoj se prosleđuje ceo broj a ona ispisuje tekst koji ima prosleđenu veličinu fonta.*/


function ceoBroj(broj) {

    document.write(`<p style="font-size:${broj}px";>Neki tekst</p>`);
}


ceoBroj("25");


/*14.  Napisati funkciju koja pet puta ispisuje istu rečenicu, a veličina fonta rečenice treba da bude jednaka vrednosti iteratora.    */

function istaRecenica() {
    document.write(`<p style="font-size:">Ista recenica</p>`);
}


for(i = 1; i <= 5; i++){

    istaRecenica();

}
