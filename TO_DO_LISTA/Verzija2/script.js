let btnDodaj = document.getElementById("dodaj");
let ulList = document.getElementById("list");

btnDodaj.addEventListener("click", () => {
  let inputNewList = document.getElementById("obaveza");

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
