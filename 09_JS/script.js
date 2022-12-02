console.log("Poruka iz JS datoteke");

let y; //deklarisali smo promenljivu y;
let x = 3; //deklarisali smo promenljivu x i dodelili joj vrednost 3

console.log(x);

x = "Pera";
console.log(x);


y = -10;// dodeljuje se vrednost 
console.log(y);
x= 8;

console.log(x-y); // 18
let z = true;
console.log(z);

//const e;
//e = 2.71;  ovo nije validno javlja gresku, const mora u isto vreme da se deklarise i inicijalizuje


let age; // age = undefined
console.log(age); // undefined
console.log(age+3); // NaN- Not a Number

let age2;
age2 = null;
console.log(age2); // null
console.log(age2 + 3); // vratice 3 jer sabira sa nuu i js konertuje onda tu u 0 posto je to prazna vrednost i onda +3

let ime = "Stefan";
console.log(ime);
let ime2 = 'Stefan';
console.log(ime2);

let ime3 = "Stefan's room"; //mozemo apostrof da koristimo dok god smo navodnike koristili za spoljasnje
console.log(ime3);

let ime4 = 'This was a "funny" joke';
console.log(ime4);  //moze i ovako jer je opet razlicito

let ime5 = "This was a \"funny\" joke";

x = 5;
//x = x + 3; umesto ovoga se koristi +=
x += 3;
console.log(x);

x = x / 2;
//x /= 2;
console.log(x);

x = 6;
x++;
console.log(x);

++x;
console.log(x);

x=6;
console.log(x++); // results:6 prvo ce stara vrednost promenljive da se iskoristi u izrazu pa onda ce da se poveca gledamo redosled kako pise+


console.log(x); // results: 7

console.log(++x); //ovde prvo poveca pa onda prikaze

console.log(7 % 3); // 2 * 3 i ostatak 1
console.log(24 % 18);

console.log((52%13)+1);

x = 5;
console.log(x ** 2);
