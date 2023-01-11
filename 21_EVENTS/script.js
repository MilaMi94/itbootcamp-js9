console.log(`Events---------------`);

//1. Dohvatiti element na koji zelimo da postavimo osluskivac

let btnHello = document.getElementById("hello");

//2. Postavljamo osluskivac na element koji smo dohvatili

btnHello.addEventListener("click", () => {
  console.log("Hello!");
});

//////////////////////
let btnHelloHello = document.getElementById("hello2");
btnHelloHello.addEventListener("dblclick", () => {
  console.log("Hello hello!");
});

/////////////////////

let btnEvents = document.getElementById("hello3");

btnEvents.addEventListener("click", () => {
  console.log("Event click");
});

btnEvents.addEventListener("dblclick", () => {
  console.log("Event dblclick");
});

//Zad 1.Napraviti dugme klikom na koje se u konzoli ispisuje vrednost brojača br. Brojač na početku ima vrednost 1, a svaki put kada se klikne na dugme povećati vrednost brojača za 1.

let btnBrojac = document.getElementById("brojac");
let brojac = 1;
btnBrojac.addEventListener("click", () => {
  //   console.log(`Brojac je ${brojac}`);
  brojac++;
});

//2.Napraviti paragraf i vrednost prethodne funkcije ispisivati u paragrafu umesto u konzoli.

let par = document.getElementById("drugi_p");

btnBrojac.addEventListener("click", () => {
  par.style.backgroundColor = "pink";
  par.innerHTML = brojac;
});

/*Napraviti dugme + i dugme -. 
Kada se klikne na dugme +, na ekranu prikazati vrednost brojača povećanu za 1.
Kada se klikne na dugme -, na ekranu prikazati vrednost brojača smanjenu za 1.*/

let btnMinus = document.getElementById("minus");
let btnPlus = document.getElementById("plus");
let spanRez = document.getElementById("rezultat");
let br = 0;

btnMinus.addEventListener("click", () => {
  br--;
  if (br < 0) {
    br = 0;
  }
  spanRez.innerHTML = br;
  if (br < 10) {
    spanRez.setAttribute("style", "color: green; ");
  } else if (br > 10) {
    spanRez.setAttribute("style", "color: red; ");
  }
});

btnPlus.addEventListener("click", () => {
  br++;
  spanRez.innerHTML = br;
  if (br < 10) {
    spanRez.setAttribute("style", "color: green; ");
  } else if (br > 10) {
    spanRez.setAttribute("style", "color: red; ");
  }
});

// 4.Dopuniti prethodni zadatak uslovima, tako da se na ekranu prikazuju samo pozitivni brojevi. Ukoliko je vrednost manja od nule, na ekranu nastaviti prikazivanje broja 0. - uradjeno

//5.Napraviti input polje i dugme.U input polje treba da se unese ime neke osobe, a na ekranu u paragrafu da se ispiše Zdravo i ime osobe preuzeto iz input polja.Dopuniti 5. zadatak dodavanjem radio button polja gde korisnik može odabrati svoj pol (muški, ženski ili neopredeljen). Nakon duplog klika na dugme, u konzoli ispisati pol koji je osoba odabrala.

let inputUnos = document.getElementById("ime");
let btnPrikazi = document.getElementById("prikazi");
let spanPrikaz = document.getElementById("prikaz");

// let inputPol = document.querySelectorAll('input[name="pol"]');

btnPrikazi.addEventListener("click", () => {
  let value = inputUnos.value;
  spanPrikaz.innerHTML = `Zdravo ${value}`;
  // inputUnos.value = ``;  // zasto ne ova promenljiva value?? zato sto on je negde vec upisao value u memoriju, i mi ako stavimo da je prazan string menjamo njegovo mesto u memoriji a mi treba da input promenimo??
});

btnPrikazi.addEventListener("dblclick", () => {
  //Selektovanje samo jednog radio buttona koji je cekiran
  let checkedPol = document.querySelector('input[name="pol"]:checked'); // Jedan radio button koji je cekiran (vraca HTML tag)
  let valueCheckedPol = checkedPol.value; // daje vrednost (value) iz selektovanog HTML taga
  console.log(valueCheckedPol);
  /////// Selektovanje svih radio buttona prema name atributu

  let inputRadios = document.getElementsByName("pol");
  inputRadios.forEach((input) => {
    if (input.checked) {
      console.log(input.value);
    }
  });

  //Isto postizemo i ukoliko koristimo querySelectorAll///
  let inputRadiosQuery = document.querySelectorAll('input[name="pol"]');
  inputRadiosQuery.forEach((input) => {
    if (input.checked) {
      console.log(input.value);
    }
  });
});

//7 forma

let inputKvadriraj = document.getElementById("kvadriraj");
let btnIzracunaj1 = document.getElementById("izracunaj1");
let spanRez1 = document.getElementById("rez1");
let inputPrepolovi = document.getElementById("prepolovi");
let btnIzracunaj2 = document.getElementById("izracunaj2");
let spanRez2 = document.getElementById("rez2");
let inputPoluprecnik = document.getElementById("poluprecnik");
let btnIzracunaj3 = document.getElementById("izracunaj3");
let spanRez3 = document.getElementById("rez3");

btnIzracunaj1.addEventListener("click", () => {
  let value1 = inputKvadriraj.value * inputKvadriraj.value;
  spanRez1.innerHTML = value1;
});
btnIzracunaj2.addEventListener("click", () => {
  let value2 = inputPrepolovi.value / 2;
  spanRez2.innerHTML = value2;
});

btnIzracunaj3.addEventListener("click", () => {
  let value3 = Math.PI * inputPoluprecnik.value **2 ;
  spanRez3.innerHTML = value3;
});

console.log("Hello im $s string", "+po");