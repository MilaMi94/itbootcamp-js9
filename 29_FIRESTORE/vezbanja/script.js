console.log(db); // db -  objekat "baze podataka"

let users = db.collection("users");
console.log(users);

let user1 = users.doc("jmatejic");
console.log(user1);

let user2 = db.doc("users/ssstanimirovic");
console.log(user2);

/* 
Kada 'pikiramo' dokument preko ovih komandi,
mozemo da izvrsimo jednu od osnovne 4 operacije:
CRUD (Create, Read, Update, Delete)
    Create: doc.set(...)
    Read: doc.get(...)
    Update: doc.update(...)
    Delete: doc.delete(...)
Sve 4 metode kao rezultat vracaju Promise 
=> Mozemo da lancamo .the() i .catch() na bilo koju od ove 4 metode
*/

db.collection("customers")
  .doc("cust001")
  .set({
    name: "Laza Lazic",
    age: 35,
    addresses: ["Beograd", "Cacak"],
    salary: 400,
  })
  .then(() => {
    console.log(`Uspesno dodata musterija`);
  })
  .catch((err) => {
    console.log(`Greska: ` + err);
  });
//set metoda asinhrona zato moze da ima .then i .catch
console.log(1);
console.log(2);
console.log(3);

db.collection("customers")
  .doc("cust001")
  .set(
    {
      height: 185,
    },
    {
      merge: true,
    }
  )
  .then(() => {
    console.log(`Uspesno dodata musterija`);
  })
  .catch((err) => {
    console.log(`Greska: ` + err);
  });

// dodavanje dokumenta u tasks za nas zadatak

let dat1 = new Date("2023-01-23 19:00:00");
let dat2 = new Date("2023-01-24 19:00:00");
let dat3 = new Date("2023-01-23 20:00:00");

// add in tasks
db.collection("tasks")
  .doc("fudbal")
  .set(
    {
      title: "Fudbal",
      start_date: firebase.firestore.Timestamp.fromDate(dat1),
      due_date: firebase.firestore.Timestamp.fromDate(dat2),
      priority: false,
      description: "Fudbalica sa drustvom",
    },
    { merge: true }
  )
  .then(function () {
    console.log("Task successfully added!");
  })
  .catch(function (error) {
    console.error("Error adding task: ", error);
  });

// add in users

db.collection("users")
  .doc("mivanovic")
  .set({
    age: 25,
    name: "Milos",
    surname: "Ivanovic",
    faculty: "PMF",
  })
  .then(function () {
    console.log("Task successfully added!");
  })
  .catch(function (error) {
    console.error("Error adding task: ", error);
  });
//update
db.collection("users")
  .doc("mivanovic")
  .set(
    {
      ocene: [5, 8, 9, 10],
    },
    { merge: true }
  )
  .then(function () {
    console.log("Task successfully added!");
  })
  .catch(function (error) {
    console.error("Error adding task: ", error);
  });
//add in tasks
db.collection("tasks")
  .doc("teretana")
  .set({
    description: "Trening u teretani",
    start_date: firebase.firestore.Timestamp.fromDate(dat1),
    priority: true,
    title: "Teretana",
  })
  .then(function () {
    console.log("Task successfully added!");
  })
  .catch(function () {
    console.error("Error adding task: ", error);
  });
//update in tasks
db.collection("tasks")
  .doc("teretana")
  .set(
    {
      due_date: firebase.firestore.Timestamp.fromDate(dat3),
    },
    { merge: true }
  )
  .then()
  .catch();

//add in customers

db.collection("customers")
  .doc("cust002")
  .set({
    age: 23,
    height: 165,
    name: "Pera Peric",
    salary: 500,
  })
  .then(function () {
    console.log("Task successfully added!");
  })
  .catch(function () {
    console.error("Error adding task: ", error);
  });

//Update metoda

db.collection("users")
  .doc("vristic")
  .update({
    godine: 22, // ovo je updatovalo
    adrese: ["Beograd", "Nis"], // ovo ce dodati novo polje jer ne postoji
  })
  .then(() => {
    console.log("Korisnik uspesno promenjen");
    return db
      .collection("users")
      .doc("vristic")
      .update({
        adrese: firebase.firestore.FieldValue.arrayUnion("Cacak"),
      });
  })
  .then(() => {
    console.log("Korisnik uspesno promenjen");
  })
  .catch((err) => {
    console.log(err);
  });

/*
  db.collection('').doc().set().then().catch()
  db.collection('').doc().set().then().catch()
*/
