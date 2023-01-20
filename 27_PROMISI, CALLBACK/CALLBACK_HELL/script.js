console.log(`CALLBACK`);

let getResponse = (resource, callback) => {
  // 1. Kreiranje XML Objekta

  let request = new XMLHttpRequest();

  request.addEventListener("readystatechange", () => {
    if (request.readyState === 4 && request.status === 200) {
      // Sve OK
      //console.log(request.responseText);
      callback(request.responseText, undefined);
    } else if (request.readyState === 4) {
      // Nesto nije OK
      //console.log(`Nije moguce dohvatiti podatke`);
      callback(undefined, "Nije moguce dohvatiti podatke");
    }
  });
  //2. Otvaranje kreiranog zahteva
  request.open("GET", resource);
  //3. Slanje zahteva
  request.send();
};

getResponse("../JSON/prvi.json", (data, err) => {
  //console.log(data, err);
  if (data) {
    // Ukoliko je sve OK sa prvi.json, ispisi njegove podatke i potom ucitaj drugi.json fajl
    console.log(data);
    getResponse("../JSON/drugi.json", (data, err) => {
      if (data) {
        console.log(data);
        // Ukoliko je sve OK sa drugi.json, ispisi njegove podatke i potom ucitaj treci.json fajl
        getResponse("../JSON/treci.json", (data, err) => {
          if (data) {
            console.log(data);
          } else {
            console.log(err);
          }
        });
      } else {
        console.log(err);
      }
    });
  } else {
    console.log(err);
  }
});

console.log(`KRAJ`);
