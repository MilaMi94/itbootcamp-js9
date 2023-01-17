import { Krug } from "./krug.js";

console.log(Math.PI);

let k1 = new Krug(6);
let k2 = new Krug(7);
let k3 = new Krug(10);
let k4 = new Krug(12);

let krugovi = [k1, k2, k3, k4];

//funkcija upisaniKrug  ovo moze i preko poluprecnika

let upisaniKrug = (o1, o2) => {
  let povrsinaPrvog = o1.povrsinaKruga();
  let povrsinaDrugog = o2.povrsinaKruga();
  return povrsinaPrvog > povrsinaDrugog ? true : false;
};

console.log(upisaniKrug(k1, k2));

// rastuci 

let rastuci = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i + 1].poluprecnik < arr[i].poluprecnik) {
      return false;
    }else{
     }
  }

};

console.log(rastuci(krugovi));
