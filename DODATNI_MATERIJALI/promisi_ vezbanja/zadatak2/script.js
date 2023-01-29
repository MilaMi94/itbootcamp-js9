let form = document.getElementById("form");
let textInput = document.getElementById("nazivPr");
let btnSubmit = document.querySelector("button");
let prviInput = document.getElementById("cena1");
let drugiInput = document.getElementById("cena2");
let ul = document.querySelector("ul");
let table = document.querySelector("table");


//Odrediti sve proizvode koji su na stanju.
// preko promisa

function getDataReturnPromise(resourse) {
  return new Promise((resolve, reject) => {
    let request = new XMLHttpRequest();
    request.addEventListener("readystatechange", function () {
      if (this.readyState === 4 && this.status === 200) {
        let data = JSON.parse(this.responseText);
        resolve(data);
      } else if (this.readyState === 4) {
        reject(`Greska`);
      }
    });
    request.open("GET", resourse);
    request.send();
  });
}

function submitForm(e) {
  e.preventDefault();
  //Odrediti sve proizvode koji su na stanju.
  let objArr = [];
  let ids = [];

  getDataReturnPromise("./json/stock.json")
    .then((data) => {
      data.forEach((artikal) => {
        if (artikal.stock > 0 && artikal.item.includes(textInput.value)) {
          ids.push(artikal.id);
          objArr.push(artikal);
        }
      });
      return getDataReturnPromise("./json/prices.json");
    })
    .then((data) => {
      //Kao i one čija je cena između dve vrednosti zadate u dva numerička inputa.
      data.forEach((artikal) => {
        if (
          artikal.price > Number(prviInput.value) &&
          artikal.price < Number(drugiInput.value) &&
          ids.includes(artikal.id)
        ) {
          //  d.	Korisniku prikazati u listi nazive tih artikala.
          let li = document.createElement("li");
          li.textContent = `${artikal.item} - ${artikal.price}`;
          ul.append(li);
          //bonus
          objArr.forEach((a) => {
            if (a.id == artikal.id) {
              let row = document.createElement("tr");
              let td1 = document.createElement("td");
              let td2 = document.createElement("td");
              let td3 = document.createElement("td");
              td1.textContent = a.item;
              td2.textContent = a.stock;
              td3.textContent = artikal.price;

              row.append(td1, td2, td3);
              table.append(row);
            }
          });
        }
      });
    })
    .catch((e) => {
      console.log(e);
    });
}

form.addEventListener("submit", submitForm);
