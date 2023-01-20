console.log(`CALLBACK`);

let getTodos = (resource, callback) => {
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
      callback( undefined, "Nije moguce dohvatiti podatke");
    }
  });
  //2. Otvaranje kreiranog zahteva
  request.open("GET", resource);
  //3. Slanje zahteva
  request.send();
};

getTodos("../JSON/todos.json", (data, err) => {
  //console.log(data, err);
  if(data){
    console.log(data);
  }else{
    console.log(err);
  }

});

console.log(`KRAJ`);
