let form = document.getElementById("order");
let truckCap = document.getElementById("cap");
let result = document.getElementById("result");

function getItems(resourse, resolve, reject) {
  let request = new XMLHttpRequest();
  request.addEventListener("readystatechange", function () {
    if (request.readyState === 4 && request.status === 200) {
      // sve ok, obradi zahtev
      let data = JSON.parse(request.responseText);
      resolve(data);
      // U slucaju kada je resourse = 'stock.json', uradi jednu stvar
      // U slucaju kada je resourse = 'weights.json', uradi drugu stvar
      //  U slucaju kada je resourse = 'prices.json', uradi trecu stvar
    } else if (request.readyState === 4) {
      reject("Greska");
      // desila se neka greska
    }
  });
  request.open("GET", resourse);
  request.send();
}

function submitForm1(e) {
  e.preventDefault(); // zbog refreshovanja stranice na submit
  //1. Iz fajla stock.json dohvati sve artikle koji nisu na stanju
  let ids = [];
  getItems(
    "./json/stock.json",
    (data) => {
      data.forEach((artikal) => {
        if (artikal.stock == 0) {
          ids.push(artikal.id);
          //2. Iz fajla weights.json dohvati njihovu tezinu
        }
      });
      getItems(
        "./json/weights.json",
        (data) => {
          let totalWeight = 0;
          data.forEach((artikal) => {
            if (ids.includes(artikal.id)) {
              totalWeight += artikal.weight;
            }
          });
          if (totalWeight > truckCap.value) {
            result.innerHTML = `Not enought capacity in truck!!`;
          } else {
            //3. Ako tezina nije veca od kapaciteta kamiona, iz fajla prices.json dohvati njihovu cenu
            getItems(
              "./json/prices.json",
              (data) => {
                let totalPrice = 0;
                data.forEach((artikal) => {
                  if (ids.includes(artikal.id)) {
                    totalPrice += artikal.price;
                  }
                });
                result.innerHTML = `Ukupna cena proizvoda koji treba da se naruce je: ${totalPrice}`;
              },
              (message) => {
                result.innerHTML = message;
              }
            );
          }
        },
        (message) => {
          result.innerHTML = message;
        }
      );
    },
    (message) => {
      result.innerHTML = message;
    }
  );
}
/* PRVI PRISTUP: da se funkcije getItems() zovu jedna ispod druge 
OVO NIJE DOBRO !!! jer svaki poziv getItems() je asinhroni poziv, sto znaci da se oni ne izvrsavaju tim redom

DRUGI PRISTUP: Redosled asinhronih poziva se odvija preko callback funkcija

TRECI PRISTUP: Pozivi lancaju preko promisa
TACAN I PRAKTICAN
*/

//pomocna funkcija

function makeRow(firstContent, secondContent) {
  let tr = document.createElement("tr");
  let td1 = document.createElement("td");
  let td2 = document.createElement("td");
  td1.textContent = firstContent;
  td2.textContent = secondContent;
  tr.appendChild(td1);
  tr.appendChild(td2);
  return tr;
}

function getItemsReturnPromise(resourse) {
  return new Promise((resolve, reject) => {
    // u promisu ide asinhroni deo
    let request = new XMLHttpRequest();
    request.addEventListener("readystatechange", function () {
      if (request.readyState === 4 && request.status === 200) {
        // sve ok, obradi zahtev
        let data = JSON.parse(request.responseText);
        resolve(data);
        // U slucaju kada je resourse = 'stock.json', uradi jednu stvar
        // U slucaju kada je resourse = 'weights.json', uradi drugu stvar
        //  U slucaju kada je resourse = 'prices.json', uradi trecu stvar
      } else if (request.readyState === 4) {
        reject("Greska");
        // desila se neka greska
      }
    });
    request.open("GET", resourse);
    request.send();
  });
}

function submitForm2(e) {
  e.preventDefault();
  let ids = [];
  getItemsReturnPromise("./json/stock.json")
    .then((data) => {
      data.forEach((artikal) => {
        if (artikal.stock == 0) {
          ids.push(artikal.id);
          //2. Iz fajla weights.json dohvati njihovu tezinu
        }
      });
      return getItemsReturnPromise("./json/weights.json");
    })
    .then((data) => {
      let totalWeight = 0;
      data.forEach((artikal) => {
        if (ids.includes(artikal.id)) {
          totalWeight += artikal.weight;
        }
      });
      if (totalWeight > truckCap.value) {
        result.innerHTML = `Not enought capacity in truck!!`;
      } else {
        return getItemsReturnPromise("./json/prices.json");
      }
    })
    .then((data) => {
      let lista = document.createElement("table");
      let tr = makeRow(`Naziv`, `Cena`);
      lista.appendChild(tr);
      if (data != undefined) {
        let totalPrice = 0;
        data.forEach((artikal) => {
          if (ids.includes(artikal.id)) {
            totalPrice += artikal.price;
            let tr = makeRow(artikal.item, artikal.price);
            lista.append(tr);
          }
        });
        let tr = makeRow(`Ukupno`, totalPrice);
        lista.appendChild(tr);
        result.appendChild(lista);
      }
    })
    .catch((message) => {
      result.innerHTML = message;
    });
}

//form.addEventListener("submit", submitForm1);
form.addEventListener("submit", submitForm2);

//BONUS VARIJANTA: Ne ispisati samo ukupnu cenu svih artikala, već tabelu sa dve kolone: U prvoj koloni je ispisan naziv artikla koji se poručuje, u sledećoj je njegova cena. U poslednjem redu tabele, u prvoj ćeliji stoji tekst “UKUPNO”, a u drugoj ćeliji ukupna cena svih artikala.
