console.log(`CALLBACK`);

let getResponse = (resource) => {
  // 1. Kreiranje XML Objekta
  let request = new XMLHttpRequest();
  //2. Otvaranje kreiranog zahteva
  request.open("GET", resource);
  //3. Slanje zahteva
  request.send();

  return new Promise((resolve, reject) => {
    request.addEventListener("readystatechange", () => {
      if (request.readyState === 4 && request.status === 200) {
        //Sve OK i koristimo resolve kome prosledjujemo podatke iz json fajla
        resolve(request.responseText);
      } else if (request.readyState === 4) {
        // Nesto nije OK i koristimo reject kome saljemo tekst greske
        reject("Nije moguce dohvatiti podatke");
      }
    });
  });
};

getResponse("../JSON/prvi.json")
  .then((sadrzaj) => {
    console.log(`prvi.json resolved`, sadrzaj);
    return getResponse("../JSON/drugi.json"); // vraca promise na koji se odnosi naredni then()
  })
  .then((sadrzajDrugog) => {
    console.log(`drugi.json resolved`, sadrzajDrugog);
    return getResponse("../JSON/treci.json");
  })
  .then((sadrzajTreceg) => {
    console.log(`treci.json resolved`, sadrzajTreceg);
  })
  .catch((greska) => {
    console.log(`Promise reject`, greska);
  }); // catch je jedan, i on se aktivira u bilo kom slucaju ako dodje do greske

console.log(`KRAJ`);
