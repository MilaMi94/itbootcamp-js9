// Samostalno da odradim zadatke sve sto smo radili na casu

//1. Napisati funkciju pozdrav kojoj se prosleđuje ime i prezime, a funkcija ispisuje pozdrav. Na primer za uneto ime Jelena i prezime Matejić, funkcija ispisuje Zdravo Jelena Matejić.

//odradili

//2.  Napisati funkciju zbir koja računa zbir dva realna broja.Šta bi trebalo izmeniti da bi se dobila razlika, proizvod ili količnik dva broja.

//odradili

//3. Napisati funkciju neparan koja za uneti ceo broj n vraća tačno ukoliko je neparan ili netačno ukoliko nije neparan.

//odradili

//4. Napisati funkciju maks2 koja vraća veći od dva prosleđena realna broja. Zatim napisati funkciju maks4 koja vraća najveći od četiri prosleđena realna broja.

//odradili

//5. Napisati funkciju koja prikazuje sliku za prosledjenu adresu slike.

//odradili

//6. Napisati funkciju koja za unetu boju na engleskom jeziku boji tekst paragrafa u tu boju.

//odradili

//7. Napisati program koji sadrži funkciju sedmiDan koja za uneti broj n ispisuje n-ti dan u nedelji (npr. za 0 ispisuje “Nedelja”, za 1 se ispisuje „Ponedeljak“, za 2 se ispisuje „Utorak“, ... ,  a za 7 opet “Nedelja”).Pitanje: Kako bismo realizovali ovaj zadatak da se tražio n-ti mesec u godini?
console.log("7. --------------------------------");

function sedmiDan(n) {
  if (n % 7 == 0) {
    document.write("Nedelja");
  } else if (n % 7 == 1) {
    document.write("Ponedeljak");
  } else if (n % 7 == 2) {
    document.write("Utorak");
  } else if (n % 7 == 3) {
    document.write("Sreda");
  } else if (n % 7 == 4) {
    docuent.write("Cetvrtak");
  } else if (n % 7 == 5) {
    document.write("Petak");
  } else if (n % 7 == 6) {
    document.write("Subota");
  }
}

sedmiDan(5);
sedmiDan(7);
sedmiDan(0);
sedmiDan(6);

console.log("7.drugi nacin --------------------------------");

function sedmiDaN(n) {
  n = n % 7;
  switch (n) {
    case 0:
      console.log("nedelja");
      break;
    case 1:
      console.log("ponedeljak");
      break;
    case 2:
      console.log("utorak");
      break;
    case 3:
      console.log("sreda");
      break;
    case 4:
      console.log("cetvrtak");
      break;
    case 5:
      console.log("petak");
      break;
    case 6:
      console.log("subota");
      break;
    case 7:
    default:
      console.log("Invalid input");
  }
}
sedmiDaN(9);

//8. Napisati funkciju deljivSaTri koja se koristi u ispisivanju brojeva koji su deljivi sa tri u intervalu od n do m.Prebrojati koliko ima ovakvih brojeva od n do m.

console.log("8. --------------------------------");

let brojeviDeljiviSaTri = 0;
function deljivSaTri(n, m) {
  for (i = n; i <= m; i++) {
    if (i % 3 == 0) {
      brojeviDeljiviSaTri++;
    }
  }
  console.log(brojeviDeljiviSaTri);
}

deljivSaTri(3, 12);

//9. Napisati funkciju sumiraj koja određuje sumu brojeva od n do m. Brojeve n i m proslediti kao parametre funkciji.
console.log("9. --------------------------------");

let suma = 0;
function sumiraj(n, m) {
  for (i = n; i <= m; i++) {
    suma += i;
  }
  return suma;
}

let sum = sumiraj(3, 12);
console.log(sum);

//10. Napisati funkciju množi koja određuje proizvod brojeva od n do m.Brojeve n i m proslediti kao parametre funkciji.
console.log("10. --------------------------------");
let proizvod = 1;
function mnozi(n, m) {
  for (i = n; i <= m; i++) {
    proizvod *= i;
  }
  console.log(proizvod);
}

mnozi(1, 10);

//11. Napraviti funkciju koja vraća aritmetičku sredinu brojeva od n do m.Brojeve n i m proslediti kao parametre funkciji.
console.log("11. --------------------------------");

suma = 0;
brojBrojeva = 0;

function aritmetickaSredina(n ,m) {

    for(i = n ; i <= m ; i++ ) {
        suma+=i;
        brojBrojeva++;
    }
    return (suma/brojBrojeva);


}

let arSr = aritmetickaSredina(1 , 15);
console.log(arSr);



//12. Napisati funkciju koja vraća aritmetičku sredinu brojeva kojima je poslednja cifra 3 u intervalu od n do m. Brojeve n i m proslediti kao parametre funkciji.

//13. Napisati funkciju kojoj se prosleđuje ceo broj a ona ispisuje tekst koji ima prosleđenu veličinu fonta.

//odradili

//14. Napisati funkciju koja pet puta ispisuje istu rečenicu, a veličina fonta rečenice treba da bude jednaka vrednosti iteratora.

//odradili

//15. Dobili ste plaćenu programersku praksu u trajanju od n meseci. Prvog meseca, plata će biti a dinara, a ako budete vredno radili svakog narednog meseca ćete dobiti povišicu od d dinara. Brojeve n, a i d određujete sami.Napišite funkciju kojoj se prosleđuju brojevi n, a i d. Funkcija treba da vrati vrednost koliko ćete ukupno navca zaraditi, ukoliko svakog meseca budete dobijali povišicu.Testirati zadatak (pozvati funkciju i ispisati vrednost koju ona vraća).



//16. Na igrama bez granica, ekipi je postavljen zadatak da za što kraće vreme pređe stazu na kojoj se nalazi pokretni most. Takmičaru ove ekipe od polazne tačke do mosta treba t sekundi. Tačno p sekundi od kada takmičar može da krene sa polazne tačke (tj. od početka merenja) most počinje da se podiže. Od trenutka podizanja pa do spuštanja mosta protiče n sekundi i prelaz preko mosta za to vreme nije moguć. Nakon toga most ostaje spušten. Takmičari za čekanje kod mosta dobijaju negativne poene, pa je tim rešio da napravi program koji će im tačno odrediti u kojoj sekundi treba da pođu sa startne pozicije kako ne bi dobijali negativne poene. Pomozite timu da napravi funkciju na osnovu prosleđenih vrednosti t, p i n. Funkcija vraća koliko sekundi nakon početka merenja vremena treba da pođe, kako bi prošli poligon bez zaustavljanja npr: t=15, p=20, n=25, čekanje je 0snpr: t=15, p=10, n=12, čekanje je 7s
console.log("16. --------------------------------");

function najkraceVreme(t, p, n) {
  let cekanje = p + n - t;
  if (t <= p + n && p > t) {
    console.log("Moze se preci most bez cekanja");
  } else {
    console.log(`Moze se preci most, sa cekanjem od ${cekanje}`);
  }
}

najkraceVreme(25, 20, 30);
