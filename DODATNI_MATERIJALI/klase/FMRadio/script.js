import { FMRadio } from "./fm_radio.js";

let r1 = new FMRadio("Karolina", 100, 21);
let r2 = new FMRadio("Naxi", 107, 20);
let r3 = new FMRadio("TDI", 50, 0);

let stanice = [r1, r2, r3];

// test
r1.promeniZvuk("-");
console.log(r1);

// f-ja srednjaFrekvencija

let srednjaFrekvencija = (arr) => {
  let suma = 0;
  arr.forEach((r) => {
    if(r.frekvencija != 'Invalid input'){
    suma += r.frekvencija;
}
  });
  console.log(suma / arr.length);
};


srednjaFrekvencija(stanice);

// najbliziMaks


let najbliziMaks = arr =>{
    let maxFrekvencija = 108;
    let najblizaRadioStanica = arr[0];
    let minUdaljenostOdMax = Math.abs(maxFrekvencija - najblizaRadioStanica.frekvencija) 
    console.log(minUdaljenostOdMax);
    for(let i = 1; i < arr.length; i++){
        let udaljenostTrenutnog = Math.abs(maxFrekvencija-arr[i].frekvencija);
        if(udaljenostTrenutnog <= minUdaljenostOdMax){
            najblizaRadioStanica = arr[i];
           
        }

    }
    return najblizaRadioStanica;

}

console.log(najbliziMaks(stanice));



