// Ispis poruke zdravo 5 puta.

let i = 1;

while(i <= 5) {
    console.log("zdravo");
    i++;
    
}
console.log("Poruka nakon while petlje");
console.log(`Vrednost promenljive i nakon while petlje je ${i}`);

/*

if(uslov)  { ... }
while(uslov)  { ... }

IF -> Blok naredbi izvrsava 0 ili 1 puta
While -> Blok naredbi se izvrsava 0 puta ako je uslov netacan, ili do beskonacnosti (ne treba to da dozvolimo, jer program puca, npr meni je chrome puko jer mi je vs na auto save , dok nisam stavila uslov u while petlji povecavao je bro i stalno ispisivao Zdravo)
*/

//Ispis brojeva od 1-5

i = 1;

while(i <= 5) {
    console.log(i);
    i++;

}


