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
let btn4 = document.querySelector("#click4");
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

let vr = 0;
let clock = null;
// da bi izbegavali postavljanje vise satova uvodimo if(clock == null), i onda kad vise pua kliknemo na dugme onda ne uvode se novi satovi
btn3.addEventListener("click", () => {
  if (clock == null) {
    clock = setInterval(() => {
      /*  let datum = new Date();
      let h = datum.getHours();
      let m = datum.getMinutes();
      let s = datum.getSeconds();*/
      vr++;
      ispis.innerHTML = vr;
    }, 1000);
  }
});

btn4.addEventListener("click", () => {
  clearInterval(clock);
  clock = null;
});
// zadatak Napraviti dva dugmeta i input kao na slici.Klikom na dugme „Start“, počinje odbrojavanje: Ispisuju se redom brojevi 1, 2, 3, ... svake sekunde. Klikom na dugme „Stop“ pauzira se odbrojavanje.
let btnStart = document.getElementById("start");
let inputCount = document.getElementById("count");
let btnStop = document.getElementById("stop");
//start btn

let br = -1;
let counter = null;
btnStart.addEventListener("click", () => {
  if (counter == null) {
    counter = setInterval(() => {
      br++;
      inputCount.value = br;
    }, 1000);
  }
});

// stop btn
btnStop.addEventListener("click", () => {
  clearInterval(counter);
  counter = null;
  br = -1;
  inputCount.value = " ";
});
