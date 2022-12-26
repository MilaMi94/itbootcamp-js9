let blog1 = {
  title: "HTML",
  likes: 30,
  dislikes: 5,
};

let blog2 = {
  title: "CSS!",
  likes: 20,
  dislikes: 15,
};

let blog3 = {
  title: "Java Script",
  likes: 50,
  dislikes: 7,
};
let blog4 = {
  title: "NoSQL DB",
  likes: 200,
  dislikes: 15,
};

let blog5 = {
  title: "Responsive Web Design!",
  likes: 3,
  dislikes: 15,
};

let blog6 = {
  title: "Event Listener",
  likes: 700,
  dislikes: 70,
};

let user = {
  username: "Jelena",
  age: 28,
  blogs: [blog1, blog2, blog3],
  logBlogs: function () {
    this.blogs.forEach((blog) => {
      console.log(blog.title);
    });
  },
};

// Ispisati sve blogove korisnika user
console.log(user.blogs);

console.log(user.blogs[0]); // Ovo je prvi blog

// Ispisati naslov prvog bloga koji je napisao korisnik user
console.log(user.blogs[0].title);

user.logBlogs();

//Napraviti niz korisnika gde svaki od korisnika sadrži niz blogova. Svaki blog u ovom nizu je objekat.

let user1 = {
  username: "Stefan",
  age: 13,
  blogs: [blog4],
  logBlogs: function () {
    this.blogs.forEach((blog) => {
      console.log(blog.title);
    });
  },
};

let user2 = {
  username: "JohnDoe",
  age: 36,
  blogs: [blog5, blog6],
  logBlogs: function () {
    this.blogs.forEach((blog) => {
      console.log(blog.title);
    });
  },
};

let users = [user, user1, user2];

//Ispisati imena onih autora koji imaju ispod 18 godina

users.forEach((u) => {
  if (u.age < 18) {
    console.log(u.username);
  }
});

//Ispisati naslove onih blogova koji imaju više od 50 lajkova
console.log("Zadatak-------------------");
users.forEach((user) => {
  let blogs = user.blogs; // niz blogova tekuceg usera
  blogs.forEach((blog) => {
    if (blog.likes > 50) {
      console.log(blog.title);
    }
  });
}); // ovakav primer sa petljom u petlji je ugnjezdena petlja

//Ispisati sve blogove autora čiji je username ’JohnDoe’
console.log("Zadatak-------------------");

users.forEach((user) => {
  if (user.username == "JohnDoe") {
    user.logBlogs();
  }
});

// Napraviti arrow funkciju kojoj se prosledjuje username autora, a ona ispisuje sve njegove blogove
console.log("Zadatak-------------------");
let printBlogs = (username) => {
  users.forEach((user) => {
    if (user.username == username) {
      user.logBlogs();
    }
  });
};

printBlogs("Stefan");

// Ispisati imena onih autora koji imaju ukupno više od 100 lajkova za blogove koje su napisali
console.log("Zadatak-------------------");

// moj nacin dobro je tako treba
let iAutoraViseOdStoLike = (niz) => {
  niz.forEach((user) => {
    let blogovi = user.blogs; // niz blogova svakog usera
    let sumlikes = 0; // izvan ili u?? kad ovde izvan stavimo sumLikes on vraca na sum = 0 za svakog usera.
    blogovi.forEach((blog) => {
      sumlikes += blog.likes;
    });
    // console.log(sumlikes);
    if (sumlikes > 100) {
      console.log(user.username);
    }
  });
};

iAutoraViseOdStoLike(users);

//Ispisati naslove onih blogova koji imaju natprosečan broj pozitivnih ocena
console.log("Zadatak-------------------");
//moj nacin
let prosekLikes = () => {
  let suma = 0;
  let br = 0;
  users.forEach((user) => {
    let blogs = user.blogs;
    blogs.forEach((blog) => {
      suma += blog.likes;
      br++;
    });
  });
  return suma / br;
};

let nasloviNatprosekLikes = () => {
  let prosek = prosekLikes();
  users.forEach((user) => {
    let blogs = user.blogs; // niz blogova svakog usera;
    blogs.forEach((blog) => {
      if (blog.likes > prosek) {
        console.log(blog.title);
      }
    });
  });
};

console.log(prosekLikes());
nasloviNatprosekLikes();

//Jelena

let avgLikes = (users) => {
  let sum = 0;
  let br = 0;
  for (let i = 0; i < users.length; i++) {
    let user = users[i]; // ovo daje objekat 1 user(iz niza users)
    let blogs = user.blogs; // ovo je niz blogova za "selektovanog" korisnika
    for (let j = 0; j < blogs.length; j++) {
      let blog = blogs[j]; // Ovo daje objekat blog( jedan el iz niza blogs)
      sum += blog.likes; // Dodajem lajkove na sumu
      br++; // Dodajem da sam naisla na jos jedan blog
    }
  }
  return sum / br;
};

let iznadProsekaLajkovi = (users) => {
  let prosekLajkova = avgLikes(users);
  for (let i = 0; i < users.length; i++) {
    let user = users[i];
    let blogs = user.blogs;
    for (let j = 0; j < blogs.length; j++) {
      let blog = blogs[j];
      if (blog.likes > prosekLajkova) {
        console.log(blog.title);
      }
    }
  }
};
console.log(`Prosecan broj lajkova je ${avgLikes(users)}`);
iznadProsekaLajkovi(users);
//Ispisati naslove onih blogova koji imaju natprosečan broj pozitivnih ocena i ispodprosečan broj negativnih ocena
console.log("Zadatak-------------------");

let prosekDislikes = () => {
  let suma = 0;
  let br = 0;
  users.forEach((user) => {
    let blogs = user.blogs; // niz blogova svakog usera;
    blogs.forEach((blog) => {
      suma += blog.dislikes;
      br++;
    });
  });
  return suma / br;
};

console.log(prosekDislikes());

let NatprosekLike_IspodPrDislike = () => {
  let prLikes = prosekLikes();
  let prDislikes = prosekDislikes();

  users.forEach((user) => {
    let blogs = user.blogs;
    blogs.forEach((blog) => {
      if (blog.likes > prLikes && blog.dislikes < prDislikes) {
        console.log(blog.title);
      }
    });
  });
};

NatprosekLike_IspodPrDislike();
