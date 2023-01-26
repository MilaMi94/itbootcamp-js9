/*db.collection("customers")
  .doc("cust001")
  .delete()
  .then(() => {
    console.log(`Dokument uspesno izbrisan`);
  })
  .catch((e) => {
    console.log(`Desila se greska: ` + e);
  });

// 1) Moze se dohvatiti jedan dokument
// 2) Moze se dohvattit vise dokumenta

// 1)

db.collection("users")
  .doc("vristic")
  .get()
  .then((doc) => {
    if (doc.exists) {
      let data = doc.data();
      console.log(`Uspesno skinut dokument: `);
      console.log(data);
    } else {
      console.log(`Ne postoji dati dokument`);
    }
  })
  .catch((e) => {
    console.log(`Desila se greska: ` + e);
  });
// Dodavanje dokumenta u kolekciju preko metode add
// mana ovoga je sto se automatski generise neki random id
// takodje svaki put kad sacuvas stranicu on doda novi dokument, tako da nije bas najsrecnija metoda

db.collection("customers")
  .add({
    name: "Mika Mikic",
    age: 30,
    salary: 800,
    addresses: ["Beograd", "Novi Sad"],
  })
  .then(() => {
    console.log(`Dokument uspesno dodat`);
  })
  .catch((e) => {
    console.log(`Desila se greska: ` + e);
  });

// 2)

db.collection("customers")
  .get()
  .then((snapshot) => {
    snapshot.forEach((doc) => {
      console.log(`Uspesno skinut dokument: ` + doc.id);
      console.log(doc.data());
    });
  })
  .catch((e) => {
    console.log(`Desila se greska: ` + e);
  });


  //GET metoda kod kolekcije:
  // prikazivanhje dokumenata u odredjenom redosledu (orderBy)
  // prikazivanje odredjenog broja dokumenata (limit)
  // prikazivanje dokumenata koji zadovoljavaju odredjene kriterijume - filtriranje (where) 

  // 1) orderBy

  db.collection("customers")
  .limit(3)
  .orderBy('salary', 'desc')
  .orderBy('name', 'asc')
  .get()
  .then((snapshot) => {
    snapshot.forEach((doc) => {
      console.log(`Uspesno skinut dokument: ` + doc.id);
      console.log(doc.data());
    });
  })
  .catch((e) => {
    console.log(`Desila se greska: ` + e);
  });

  

  // 3) WHERE

  db.collection('customers')
  //.where('salary', '>', 500 ) // - svi oni cija je plata veca od 500
  //.where('salary', '<=', 600)  // - svi oni cija je plata manja ili jednaka od 600
  .where('name', '>=', 'M')
  .where('name', '<=', 'N')
  .orderBy('name')
  .orderBy('age')
  .get()
  .then((snapshot) => {
    snapshot.forEach((doc) => {
      console.log(`Uspesno skinut dokument: ` + doc.id);
      console.log(doc.data());
    });
  })
  .catch((e) => {
    console.log(`Desila se greska: ` + e);
  });
*/

// zadatak 1
//Imaju adresu u Nišu

/*
db.collection("customers")
  .where("addresses", "array-contains", "Nis")
  .get()
  .then((snapshot) => {
    snapshot.forEach((doc) => {
      console.log(`Uspesno skinut dokument: ` + doc.id);
      console.log(doc.data());
    });
  })
  .catch((e) => {
    console.log(`Desila se greska: ` + e);
  });
*/

//Imaju platu veću ili jednaku od 500,
/*
db.collection("customers")
  .where("salary", ">=", 500)
  .get()
  .then((snapshot) => {
    snapshot.forEach((doc) => {
      console.log(`Uspesno skinut dokument: ` + doc.id);
      console.log(doc.data());
    });
  })
  .catch((e) => {
    console.log(`Desila se greska: ` + e);
  });
*/

//Imaju platu između 300 i 800,
/*
db.collection("customers")
  .where("salary", ">", 300)
  .where("salary", "<", 800)
  .get()
  .then((snapshot) => {
    snapshot.forEach((doc) => {
      console.log(`Uspesno skinut dokument: ` + doc.id);
      console.log(doc.data());
    });
  })
  .catch((e) => {
    console.log(`Desila se greska: ` + e);
  });

*/

//Imaju platu manju od 900, i imaju 30 godina
// indeksi treba
/*
  db.collection("customers")
  .where("salary", "<", 900)
  .where("age", "==", 30)
  .get()
  .then((snapshot) => {
    snapshot.forEach((doc) => {
      console.log(`Uspesno skinut dokument: ` + doc.id);
      console.log(doc.data());
    });
  })
  .catch((e) => {
    console.log(`Desila se greska: ` + e);
  });
*/

//Imaju adresu u Nišu ili Beogradu
/*
  db.collection("customers")
  .where("addresses", "array-contains-any", ["Nis", "Beograd"])
  .get()
  .then((snapshot) => {
    snapshot.forEach((doc) => {
      console.log(`Uspesno skinut dokument: ` + doc.id);
      console.log(doc.data());
    });
  })
  .catch((e) => {
    console.log(`Desila se greska: ` + e);
  });
*/

//Imaju 22, 25 ili 28 godina
/*
db.collection("customers")
  .where("age", "in", [22, 25, 28])
  .get()
  .then((snapshot) => {
    snapshot.forEach((doc) => {
      console.log(`Uspesno skinut dokument: ` + doc.id);
      console.log(doc.data());
    });
  })
  .catch((e) => {
    console.log(`Desila se greska: ` + e);
  });
*/
