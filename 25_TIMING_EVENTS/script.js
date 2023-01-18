// u ovom slucaju 5 linija ce da se ispise na kraju svega
console.log(1);
console.log(2);
window.setTimeout(() => {
  console.log(`Poruka je ispisana nakon nekog vremena`);
}, 1000 * 3);
console.log(3);
console.log(4);
// for (let i = 5; i < 100; i++) {
//   console.log(i);
// }

/*let i = 5;
setInterval(() => {
    console.log(i);
    i++;
}, 1000); // ovo u beskonacnost ispisuje*/

// na klik dugmeta ispis nesto na ekranu za odredjeno vreme
let btn1 = document.querySelector("#click1");
let btn2 = document.querySelector("#click2");
let btn3 = document.querySelector("#click3");
let ispis = document.querySelector("#ispis");
let tajmer = null;

btn1.addEventListener("click", function (e) {
  e.preventDefault();
  let datum = new Date();
  let h = datum.getHours();
  let m = datum.getMinutes();
  let s = datum.getSeconds();
  if (tajmer === null) {
    tajmer = setTimeout(function () {
      ispis.innerHTML = `${h}:${m}:${s}`;
      tajmer = null;
    }, 1000 * 2);
  }
});

btn2.addEventListener("click", function (e) {
  e.preventDefault();
  clearTimeout(tajmer);
  tajmer = null;
});
   

btn3.addEventListener("click", () => {
  setInterval(() => {
    let datum = new Date();
    let h = datum.getHours();
    let m = datum.getMinutes();
    let s = datum.getSeconds();
    ispis.innerHTML = `${h}:${m}:${s}`;
  }, 1000);
});
