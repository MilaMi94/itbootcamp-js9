//DOM
let ulList = document.getElementById("list");
let inputNewList = document.getElementById("obaveza");

inputNewList.addEventListener("keypress", (e) => {
  console.log(e.key, e.keyCode);
  if (e.key == "Enter") {
    // a moze i e.keyCode == 13
    if (inputNewList.value != "") {
      let listItem = document.createElement("li");
      listItem.textContent += inputNewList.value;

      let radioDodaj = document.querySelector("input[name='dodaj']:checked");
      // bolje ispitivanje po value,iako mozemo da stavimo id,jer id nije obavezan deo radio buttona
      if (radioDodaj.value == "pocetak") {
        ulList.prepend(listItem);
      } else {
        ulList.appendChild(listItem);
      }
      inputNewList.value = "";
    }
  }
});

ulList.addEventListener("click", (e) => {
  //console.log(`Kliknuto na UL`);
  //console.log(e);
  //console.log(e.target); //  ovo vraca ceo html element
  //console.log(e.target.tagName); // ovo vraca samo tag velikim slovima UL ili LI

  if (e.target.tagName == "LI") {
    //e.target.classList.toggle("line");
    e.target.remove();
  }
});


///////////////////////////////////////////
//Local Storage
//////////////////////////////////////////
//Smestanje u lokalnu memoriju

localStorage.setItem('name','Jelena'); // prosledjujemo par key-value
localStorage.setItem('city','Nis');

// Update u lokalnoj memoriji
localStorage.setItem('username','Stefan');
//ukoliko key postoji vec u lokal storage onda vrsi update vrednosti za taj key

// ispis u konzoli nesto iz lokalne memorije
console.log(localStorage.getItem('name'));
let u = localStorage.getItem('username');

localStorage.setItem('year',28);
let god = localStorage.getItem('year');
god++;
console.log(`Imam ${god} godina`);

