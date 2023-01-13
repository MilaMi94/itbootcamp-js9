import Pacijent from "./pacijent.js";

let p1 = new Pacijent("Mila", 174, 62);
let p2 = new Pacijent("Milos", 185, 75);
let p3 = new Pacijent("Maja", 172, 55);

let pacijenti = [p1, p2, p3];

console.log(p1.bmi());

p1.stampaj();
