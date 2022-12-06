//   1.zadatak

let hour = 17;
let minutes = 43;


let uk_minuti = hour * 60 + minutes;
console.log(uk_minuti);


// let ostatak_minuti;
// ostatak_minuti = minuti - uk_minuti;
// console.log(ostatak_minuti); ne treba do ponoci nego od ponoci


//  2.zadatak

let minOdPonoci= 135;

let min = minOdPonoci % 60;
console.log(min);
let sati = Math.floor(minOdPonoci / 60);
console.log(sati + ":" + min);

//  3. zadatak

let ukupnaCenaRobe = 1399;
let novcanica = 2000;

let kusur = novcanica - ukupnaCenaRobe;
console.log(kusur);


 
//  4.zadatak

let datum = new Date(); // datum je objekat koji sadrzi info o trenutnom datumu i vremenu
//let mesec =  datum.getMonth()+1
//console.log(datum.getFullYear() + "/" + mesec + "/" + datum.getDate());

let h = datum.getHours();
let m = datum.detMinutes();
console.log( h + ":" + m);
console.log( h + 60 + m);


//   5.zadatak

let dat = new Date();

let dan = dat.getDate();
let mes =  dat.getMonth()+1;
let year = dat.getFullYear;

console.log(dan + "/" + mes + "/" + year);



// 6.zadatak

let vrednostKursa = 117.6;
let ukupanBrojEvra = 558;

let nakonRazmene = ukupanBrojEvra * vrednostKursa;

console.log(nakonRazmene);




