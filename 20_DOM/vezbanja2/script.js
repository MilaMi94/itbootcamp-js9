/*Svim parnim paragrafima na stranici dodati klasu error, a svim neparnim paragrafima dodati klasu success
Tekst u paragrafima naizmenično pisati veličinom 15px, veličinom 20px i veličinom od 25px.
Svim paragrafima čiji tekst sadrži reč error, postaviti klasu na error, svim paragrafima čiji tekst sadrži reč success, postaviti klasu na success. Ostale klase paragrafa ne modifikovati.
 if(p.textContent.includes(’success’))
Svim paragrafima koji imaju klasu error skloniti tu klasu, a svim paragrafima koji nemaju klasu error dodati tu klasu.
 */

//1.
//element.classList.add('')
//element.classList.add('')

let sviPar = document.querySelectorAll("p");
console.log(sviPar);

for (let i = 0; i < sviPar.length; i++) {
  if (i % 2 == 0) {
    sviPar[i].classList.add("error");
  } else {
    sviPar[i].classList.add("success");
  }
}

//2

for (let i = 0; i < sviPar.length; i++) {
  if (i % 3 == 0) {
    sviPar[i].style.fontSize = "15px";
  } else if (i % 3 == 1) {
    sviPar[i].style.fontSize = "20px";
  } else {
    sviPar[i].style.fontSize = "25px";
  }
}

//3
for (let i = 0; i < sviPar.length; i++) {
  if (sviPar[i].textContent.includes("error")) {
    sviPar[i].classList.add("error");
  } else if (sviPar[i].textContent.includes("success")) {
    sviPar[i].classList.add("success");
  }
}

//4
for (let i = 0; i < sviPar.length; i++) {
  sviPar[i].classList.toggle("error");
}
