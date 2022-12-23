// Objekti u nizu

// Kako su i nizevi slozeni tipovi podataka, oni takodje mogu sarzati objekte, ako bi ih pisali u arrayu, mnogo je nepregledno. Tako da bolje je promenljivama dodeliti objekte i onda te promenljive staviti u niz.

let blog1 = {
  title: "HTML",
  likes: 30,
  dislikes: 5,
};

let blog2 = {
  title: "CSS!",
  likes: 5,
  dislikes: 15,
};

let blog3 = {
  title: "Java Script",
  likes: 70,
  dislikes: 7,
};

let blogs = [blog1, blog2, blog3];
// Ispis niza objekata
console.log(blogs);

// Ispis jednog objekta iz niza

console.log(blogs[2]);

// Ispis propertija
console.log(blogs[2].title);

// Ispis svih naslova blogova u konzoli

blogs.forEach((blog) => {
  console.log(blog.title);
});

// Ispis svih naslova blogova na stranici
for (let i = 0; i < blogs.length; i++) {
  document.body.innerHTML += `<h3>${blogs[i].title}</h3>`;
  document.body.innerHTML += `<p>likes: ${blogs[i].likes}</p>`;
  document.body.innerHTML += `<p>dislikes: ${blogs[i].dislikes}</p>`;
}

// BITNO ne mozemo ovom metodom da ispisemo ceo objekat, zato sto document.body.innerHTML vidi string, i on ne zna kako da konvertuje objekat u string

// 1. Napraviti arrow funkciju kojoj se prosleđuje niz objekata, a ona vraća ukupan broj lajkova

let sumLikes = (arrObjs) => {
  let sum = 0;
  arrObjs.forEach((obj) => {
    sum += obj.likes;
  });
  return sum;
};

console.log(sumLikes(blogs));

//2. Napraviti arrow funkciju kojoj se prosleđuje niz objekata, a ona vraća prosečan broj lajkova

let avgLikes = (blogs) => sumLikes(blogs) / blogs.length;
console.log(`Prosecan broj lajkova je ${avgLikes(blogs)}`);

//3. Napraviti arrow funkciju kojoj se prosleđuje niz objekata, a ona ispisuje sve one naslove blogova koji imaju više pozitivnih nego negativnih ocena
console.log("Zadatak 3.------------");
let visePozLikes = (arrObj) => {
  arrObj.forEach((obj) => {
    if (obj.likes > obj.dislikes) {
      console.log(obj.title);
    }
  });
};

visePozLikes(blogs);

//3b Napraviti arrow funkciju kojoj se prosleđuje niz objekata, a ona ispisuje sve one naslove blogova koji imaju najmanje duplo više pozitivnih nego negativnih ocena
console.log("Zadatak 3b.------------");

let duploViseLikes = arrObj => {
    arrObj.forEach(obj => {
        if(obj.likes >= 2 * obj.dislikes){
            console.log(obj.title);
        }
    })
}

duploViseLikes(blogs);


//3c Napisati arrow funkciju kojoj se prosleđuje niz objekata a ona ispisuje sve naslove koji se završavaju uzvičnikom
console.log("Zadatak 3c.------------");

let uzvicnikKrajNaslova = blogs => {
    blogs.forEach(obj => {
        if(obj.title[obj.title.length-1] == "!") {
            console.log(obj.title);
        }
    })

}

uzvicnikKrajNaslova(blogs);

