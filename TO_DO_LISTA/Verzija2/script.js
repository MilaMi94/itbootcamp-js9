let btnDodaj = document.getElementById("dodaj");
let ulList = document.getElementById("list");

btnDodaj.addEventListener("click", () => {
  let inputNewList = document.getElementById("obaveza");
  if (inputNewList.value != "") {
    let listItem = document.createElement("li");
    listItem.textContent=`${inputNewList.value}`;
    ulList.appendChild(listItem);
  }
  inputNewList.value = "";
});
