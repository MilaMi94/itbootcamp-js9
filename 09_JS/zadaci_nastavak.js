
//   5.zadatak

let dat = new Date();

let dan = dat.getDate();
let mes =  dat.getMonth()+1;
let year = dat.getFullYear();

console.log(dan + "." + mes + "." + year);
console.log(year + "/" + mes + "/" + dan);


// 6.zadatak

let vrednostKursa = 117.2986;
let ukupanBrojEvra = 326;
let nakonRazmene = ukupanBrojEvra * vrednostKursa;

console.log(Math.round(nakonRazmene)); //ne mora ali mozemo i da zaokruzimo pomocu ove funkcije Math.round;


nakonRazmene= 589746;
ukupanBrojEvra = nakonRazmene / vrednostKursa; // ovde mogu da se koriste ove iste promenljive ako nam nije bitno da li ce nm posle trebati vrednost koliko je 150 eur dinara?U tom slucaju mora da se deklarisu nove promenljive za drugu konverziju

console.log(Math.round(ukupanBrojEvra));


// 7.zadatak


ukupanBrojEvra = 559;

let evroDinar = 117.2986;
let dolarDinar = 110.8869;

let dolar = ukupanBrojEvra * evroDinar / dolarDinar ;

console.log(Math.round(dolar));

dolar=259;

ukupanBrojEvra = dolar * dolarDinar / evroDinar;


//   8.zadatak

let celzius = 12;
let farenhajt = celzius * 1.8 + 32;
console.log(farenhajt);

farenhajt= 258;
celzius = (farenhajt - 32 ) / 1.8;
console.log(celzius);


// 9.zadatak 

let kelvin = celzius + 273.15;
console.log(kelvin);

celzius = kelvin - 273.15;
kelvin= 100;
console.log(celzius);