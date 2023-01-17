import { Cipela } from "./cipela.js";

let c1 = new Cipela("Cizma", 38, ["zalepi", "usij"]);
let c2 = new Cipela("Cizma", 39, ["zalepi", "usij"]);
let c3 = new Cipela("Cizma", 37, ["prosiri"]);
let cipele = [c1, c2, c3];

let divCipela = document.getElementById("cipela");

let radi = (cipela) => {
  cipela.prepravke.forEach((p) => {
    if (p == "zalepi") {
      cipela.zalepi(divCipela);
    } else if (p == "usij") {
      cipela.usij(divCipela);
    } else if (p == "prosiri") {
      cipela.prosiri(divCipela);
    } else {
      divCipela.innerHTML = `Nepoznata prepravka`;
    }
  });
};

radi(c1);

// najvisePrepravki
let divPrepravke = document.getElementById("maxPrepravke");

let najvisePrepravki = (arr) => {
  let najvisePrepravkiObj = arr[0]; // predpostavka
  let brojPrepravki = najvisePrepravkiObj.prepravke.length;

  arr.forEach((c) => {
    if (c.prepravke.length >= brojPrepravki) {
      brojPrepravki = c.prepravke.length;
      najvisePrepravkiObj = c;
      divPrepravke.innerHTML += `<li>${c.naziv} - ${c.brojCipela} -${c.prepravke}</li>`;
    }
  });
};

najvisePrepravki(cipele);

// brojPrepravki
let divBrPrepravki = document.getElementById('brPrepravki');


let brojPrepravki = (arr, prepravka) => {
  let brojPrepravki = 0;
  arr.forEach(c =>{
    c.prepravke.forEach(p =>{
        if(p == prepravka){
            brojPrepravki++;
        }
    })
   
  })
  divBrPrepravki.innerHTML += `${brojPrepravki}`;
};


brojPrepravki(cipele, 'prosiri');