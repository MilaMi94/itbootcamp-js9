//Iz kolekcije tasks, pročitati sve zadatke, sortirane po nazivu.

// taskovi koji su Su prioritetni,
/*
db.collection("tasks")
  .where("priority", "==", true )
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
// treba da se izvrse u tekucoj godini
/*
let datum = new Date();
let godina = datum.getFullYear();
let datum1 = new Date(godina, 0, 1); // 1. januar tekuce godine
// let datum2 = new Date(godina + 1, 0, 1); // 1. januar sledece godine
let datum2 = new Date(godina, 11, 31, 23, 59, 59, 999);
let ts1 = firebase.firestore.Timestamp.fromDate(datum1);
let ts2 = firebase.firestore.Timestamp.fromDate(datum2);

db.collection("tasks")
  .where("due_date", ">=", ts1)
  .where("due_date", "<", ts2)
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
//Su završeni
/*
let now = new Date();
let dateTimeSt = firebase.firestore.Timestamp.fromDate(now);

db.collection("tasks")
  .where("due_date", "<=", dateTimeSt)
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
//Tek treba da počnu.

let now = new Date();
let dateTimeSt = firebase.firestore.Timestamp.fromDate(now);

db.collection("tasks")
  .where("start_date", ">", dateTimeSt)
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

// Iz kolekcije movies, pročitati sve filmove:
//Koje je režirao George Lucas,
/*
db.collection("movies")
  .where("director", "==", "George Lucas")
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
//Čija je ocena između 5 i 10,

//Kojima je žanr komedija, tragedija ili drama,


//Koji su izašli u 21. veku.

// Prikazati sve informacije o najbolje rangiranom filmu.

// Prikazati sve informacije o najslabije rangiranoj drami.
