let getSomething = () => {
  let obj = new Promise((resolve, reject) => {
   // resolve("Nesto resolve"); // Ako je sve proslo ok, onda je resolve
    reject("Nesto reject"); //Ako nesto nije proslo dobro onda je reject
  });
  return obj; // Vraca objekat Promise
};
// Ako je promise vvratio resolve, realizuje se .then() grana,a ko je promise vratio reject realizuje se .catch() grana
getSomething().then(a =>{
    console.log(`Aktivirana je .then grana ${a}`);
}).catch(a =>{
    console.log(`Aktivirana je .catch grana ${a}`);
}); // then i catch postoje zato sto f-ja vraca promise
