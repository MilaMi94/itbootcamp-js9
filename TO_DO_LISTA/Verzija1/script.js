//Dohvatiti sve <li> elemente sa stranice.
let listItems = document.querySelectorAll("li");
console.log(listItems);

//Svakom <li> elementu iz liste dodati Event Listener
//(Hint: proći petljom po listi <li> elemenata koje ste dohvatili i svakom od njih dodati Event Listener)
//Kada se klikne na <li> precrtati tekst u elementu na koji je kliknuto
//Kada se ponovo klikne na precrtani  <li> element, „otprecrtati ga“

listItems.forEach((li) => {
  li.addEventListener("click", () => {
    li.classList.toggle("line");
  });
});
