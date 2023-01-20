const request = new XMLHttpRequest();
console.log(request);

// arrow f-ja

request.addEventListener("readystatechange", () => {
  if (request.readyState === 4 && request.status === 200) {
    let data = JSON.parse(request.responseText);
    console.log(data);
  } else if (request.readyState === 4) {
    console.log("Desila se greska");
  }
});

// anonimna f-ja
// request.addEventListener("readystatechange", function () {
//   if (this.readyState === 4) {
//     console.log(this.responseText);
//   }
// });

request.open("GET", "https://jsonplaceholder.typicode.com/posts");
request.send();

/*   
Uspostaviti konekciju ka endpointu za users resurs: https://jsonplaceholder.typicode.com/users*/ //Ispisati u konzoli one korisnike čiji website ima domen „.com“.

const request1 = new XMLHttpRequest();
request1.addEventListener("readystatechange", function () {
  if (this.readyState === 4 && this.status === 200) {
    let data = JSON.parse(this.responseText);
    console.log(data);
    data.forEach((user) => {
      if (user.website.endsWith(".com")) {
        console.log(user);
      }
    });
  } else if (this.readyState === 4) {
    console.log("Desila se greska");
  }
});

request1.open("GET", "https://jsonplaceholder.typicode.com/users");
request1.send();

//Ispisati korisnike čije ime sadrži reč „Clementin“.

const request2 = new XMLHttpRequest();

request2.addEventListener("readystatechange", function () {
  if (this.readyState === 4 && this.status === 200) {
    let data = JSON.parse(this.responseText);
    data.forEach((user) => {
      if (user.name.includes("Clementin")) {
        console.log(user.name);
      }
    });
  } else if (this.readyState === 4) {
    console.log("Desila se greska");
  }
});

request2.open("GET", "https://jsonplaceholder.typicode.com/users");
request2.send();

//Ispisati korisnike koji rade u kompaniji čije ime sadrži reč „Group“, ili reč „LLC“.
const request3 = new XMLHttpRequest();

request3.addEventListener("readystatechange", function () {
  if (this.readyState === 4 && this.status === 200) {
    let data = JSON.parse(this.responseText);
    data.forEach((user) => {
      if (
        user.company.name.includes("Group") ||
        user.company.name.includes("LLC")
      ) {
        console.log(user);
      }
    });
  } else if (this.readyState === 4) {
    console.log("Desila se greska");
  }
});

request3.open("GET", "https://jsonplaceholder.typicode.com/users");
request3.send();

//Ispisati sve različite gradove u kojima rade ovi korisnici.
const request4 = new XMLHttpRequest();

request4.addEventListener("readystatechange", function () {
  if (this.readyState === 4 && this.status === 200) {
    let cities = [];
    let data = JSON.parse(this.responseText);
    data.forEach((user) => {
      if (!cities.includes(user.address.city)) {
        cities.push(user.address.city);
      }
    });
    console.log(cities);
  } else if (this.readyState === 4) {
    console.log("Desila se greska");
  }
});

request4.open("GET", "https://jsonplaceholder.typicode.com/users");
request4.send();

//Ispisati broj korisnika koji žive na adresi čije su obe vrednosti geografske dužine i geografske širine negativni brojevi.

const request5 = new XMLHttpRequest();

request5.addEventListener("readystatechange", function () {
  if (this.readyState === 4 && this.status === 200) {
    let data = JSON.parse(this.responseText);
    let brojac = 0;
    data.forEach((user) => {
      if (
        Number(user.address.geo.lat) < 0 &&
        Number(user.address.geo.lng) < 0
      ) {
        brojac++;
      }
    });
    console.log(brojac);
  } else if (this.readyState === 4) {
    console.log("Desila se greska");
  }
});

request5.open("GET", "https://jsonplaceholder.typicode.com/users");
request5.send();

// Zadaci sa slajda br 16 sa callback funkcijama

let getUsers = (resolve, reject) => {
  let request = new XMLHttpRequest();
  request.addEventListener("readystatechange", () => {
    if (request.readyState === 4 && request.status === 200) {
      let data = JSON.parse(request.responseText);
      resolve(data);
    } else if (request.readyState === 4) {
      reject("Desila se greska");
    }
  });

  request.open("GET", "https://jsonplaceholder.typicode.com/users");
  request.send();
};

let ispisKonzola = (poruka) => {
  console.log(poruka);
};

//2

let websiteCom = (niz) => {
  niz.forEach((user) => {
    if (user.website.includes(".com")) {
      console.log(user.website);
    }
  });
};

getUsers(websiteCom, ispisKonzola);

//3

let imeCLementine = (niz) => {
  niz.forEach((user) => {
    if (user.name.includes("Clementin")) {
      console.log(user.name);
    }
  });
};

getUsers(imeCLementine, ispisKonzola);

//4

getUsers((niz) => {
  niz.forEach((user) => {
    if (
      user.company.name.includes("Group") ||
      user.company.name.includes("LLC")
    ) {
      console.log(user.company.name);
    }
  });
}, ispisKonzola);

//5

getUsers(
  (niz) => {
    let br = 0;
    niz.forEach((user) => {
      if (
        Number(user.address.geo.lat) < 0 &&
        Number(user.address.geo.lng) < 0
      ) {
        br++;
      }
    });
    console.log(br);
  },
  (poruka) => {
    document.body.innerHTML += poruka;
  }
);
