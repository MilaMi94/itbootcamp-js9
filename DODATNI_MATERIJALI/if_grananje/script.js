/*Na casu koje nismo radili Zadatak 9.  Za vreme preuzeto sa računara ispisati 
dobro jutro za vreme manje od 12 sati ujutru, 
dobar dan za vreme manje od 18 sati,
u ostalim slučajevima ispisati dobro veče.*/

const d = new Date();
const hour = d.getHours();

if (hour < 12) {
  console.log("Dobro jutro");
} else if (hour < 18) {
  console.log("Dobar dan");
} else {
  console.log("Dobro vece");
}

/* Zadatak 15.  Za uneti broj ispitati da li je on manji od nule, veći od nule ili jednak nuli. 
Ukoliko je manji ili jednak nuli ispisati njegov prethodnik, a ukoliko je veći od nule ispisati njegov sledbenik. */

let broj = 1;

if (broj > 0) {
  console.log(`Sledbenik ${broj++}`);
} else {
  console.log(`Predhodnik ${broj--}`);
}

/* Zadatak 17. Za učitani broj ispitati da li je ceo. */

let ceoBroj = 23;

if (ceoBroj % 1 != 0) {
  console.log("Broj nije ceo");
} else {
  console.log("Broj je ceo");
}

// drugi nacin

if (Number.isInteger(ceoBroj)) { // sama po sebi ce metoda vratiti tacno
  console.log("Broj ceo");
} else {
  console.log("Broj nije ceo");
}
//---------------------------------------------------------------------------------------------------------------------------------
//IF-Zadaci za vezbu word dokument 

//1.  Za dva uneta broja ispisati koji je veći a koji je manji.

let br1 = 5;
let br2 = 56;

if (br1 > br2) {
  console.log(`${br1} je veci`);
} else {
  console.log(`${br2} je veci`);
}


/*2.  Ispitati da li je uneta temperatura u plusu ili je u minusu. Ukoliko je temperatura nula, računati da je u plusu.*/

let temp = 25;
if (temp >= 0) {
  console.log(`Uneta temperatura ${temp} je u plusu. `)
} else {
  console.log(`Uneta temperatura ${temp} je u minusu. `)
}

/*3.  U odnosu na pol (muški/ženski) koji je korisnik uneo prikazati odgovarajući avatar. */

let pol = "w";
if (pol == "m") {
  document.write("<img src='https://cdn-icons-png.flaticon.com/512/0/93.png'>")
} else {
  document.write("<img src='https://static.vecteezy.com/system/resources/thumbnails/004/899/680/small/beautiful-blonde-woman-with-makeup-avatar-for-a-beauty-salon-illustration-in-the-cartoon-style-vector.jpg'>")
}


/*4.  U odnosu na preuzete vrednosti AM i PM sa svog računara, ispisati da li je trenutno jutro ili popodne.*/




if (hour < 12) {
  document.write("<p>Jutro je</p>")
} else if (hour < 18) {
  document.write("<p>Popodne je</p>")
} else {
  document.write("<p>Vece je</p>")
}




// 5.  Za preuzetu godinu sa računara i unetu godinu rođenja izračunati da li je osoba punoletna ili maloletna.

let y = d.getFullYear();
console.log(y);
let y1 = 1994;

if ((y - y1) >= 18) {
  console.log("Osoba je punoletna");
} else {
  console.log("Osoba je maloletna");
}


//6.  Odrediti najveći od tri uneta broja
y = 1278;
y1 = 358;
let x = 358;
if (y > y1 && y > x) {
  console.log(`${y} je najveci broj`);
} else if (y1 > y && y1 > x) {
  console.log(`${y1} je najveci broj`);
} else {
  console.log(`${x} je najveci broj`);
}


/*
7.  Na osnovu unetog broja poena ispitati koju ocenu profesor treba da upiše učeniku. Učenik je položio ispit ukoliko ima više od 50 poena, u suprotnom je pao ispit.
Za više od 50 poena učenik dobija ocenu 6,
za više od 60 poena učenik dobija ocenu 7,
za više od 70 poena učenik dobija ocenu 8,
za više od 80 poena učenik dobija ocenu 9 i
za više od 90 poena učenik dobija ocenu 10.*/

let poeni = 91;
if (poeni < 50) {
  console.log("Student je pao ispit");
} else if (poeni < 60) {
  console.log("Student je polozio ispit sa ocenom 6");
} else if (poeni < 70) {
  console.log("Student je polozio ispit sa ocenom 7");
} else if (poeni < 80) {
  onsole.log("Student je polozio ispit sa ocenom 8");
} else if (poeni < 90) {
  onsole.log("Student je polozio ispit sa ocenom 9");
} else {
  console.log("Student je polozio ispit sa ocenom 10");
}


//8.  Preuzeti koji je dan u nedelji sa računara i ispitati da li je to radni dan ili je u pitanju vikend.

let dan = d.getDay();

console.log(dan);

if (dan == 0 || dan == 6) {
  console.log("Sada je vikend")
} else {
  console.log("Sada je radni dan")
}



//9.  Za vreme preuzeto sa računara ispisati dobro jutro za vreme manje od 12 sati ujutru, dobar dan za vreme manje od 18 sati popodne i u ostalim  slučajevima ispisati dobro veče.

///////////////ovo slicno sam odradila gore ///////////////////////////////////


//10.  Uporediti dva uneta datuma i ispisati koji od njih je raniji.

let d1 = 25;
let d2 = 12;
let m1 = 12;
let m2 = 12;
let g1 = 2000;
let g2 = 2000;

if (g1 < g2) {
  console.log(`Raniji je datum ${d1}.${m1}.${g1}`);
} else if (g2 < g1) {
  console.log(`Raniji je datum ${d2}.${m2}.${g2}`);
} else {
  // Obuhvata sve slucajeve kad su godine iste pa ne mora da se stavi uslov uopste
  if (m1 < m2) {
    console.log(`Raniji je datum ${d1}.${m1}.${g1}`);
  } else if (m2 < m1) {
    console.log(`Raniji je datum ${d2}.${m2}.${g2}`);
  } else { // Ovo obuhvata one slucajeve kad su meseci isti
    if (d1 < d2) {
      console.log(`Raniji je datum ${d1}.${m1}.${g1}`);

    }
    else if (d2 < d1) {
      console.log(`Raniji je datum ${d2}.${m2}.${g2}`);
    } else {
      console.log("Datumi su isti ");
    }
  }


}


//11.  Radno vreme jedne programerske firme je od 9h do 17h. Preuzeti vreme sa računara i ispitati da li u to vreme firma radi ili ne radi.


///////////////////////////////////////////      ovo isto lako opet za vreme      /////////////////////////////////////////////////////



//12.  Za unet početak i kraj radnog vremena dva lekara ispisati DA ukoliko se njihove smene preklapaju, u suprotnom ispisati NE.
console.log("Zadatak 12 ------------pocetak");
let p1 = 8;
let k1 = 16;
let p2 = 16;
let k2 = 20;

if( k1 <= p2  ||  k2 <= p1) {
  console.log("Ne poklapaju se");
} else {
  console.log(" Poklapaju se");
}
console.log("Zadatak 12 ------------ kraj");
//////////////////////////////////////        ovo mi je mnogo konfuzan zadatak      ///////////////////////////////////////////////////


//13.  Za uneti broj ispitati da li je paran ili nije.

broj = 14;

if (broj % 2 == 0) {
  console.log("Broj je paran");
} else {
  console.log("Broj je neparan");
}


//14.  Za uneti broj ispisati da li je deljiv sa 3 ili ne.


if (broj % 3 == 0) {
  console.log("Broj je deljiv sa 3");
} else {
  console.log("Broj nije deljiv sa 3");
}


//15.  Za dva uneta broja, od većeg učitanog broja oduzeti manji i rezultat ispisati na ekranu.


let broj1 = 25;
let broj2 = 12;

if (broj1 < broj2) {
  document.write(`${broj2 - broj1}`);
} else {
  document.write(`${broj1 - broj2}`);
}

document.write("<br>");

//16.  Za uneti broj ispitati da li je on manji ili veći od nule. Ukoliko je manji ili jednak nuli ispisati njegov prethodnik, a ukoliko je veći od nule ispisati njegov sledbenik.

broj = -4;
if (broj <= 0) {
  document.write(`${broj - 1}`);
} else {
  document.write(`${broj + 1}`);
}

document.write("<br>");

//17.  Za tri uneta broja ispisati koji od njih ne najveći, koji od njih je srednji, a koji od nih je najmanji. 

broj = 13;
broj1 = 90;
broj2 = 79;

if (broj > broj1 && broj > broj2) {
  console.log(`${broj} je najveci`);
  if (broj1 > broj2) {
    console.log(`${broj1} je srednji`);
    console.log(`${broj2} je najmanji`);

  } else {
    console.log(`${broj2} je srednji`);
    console.log(`${broj1} je najmanji`);
  }
} else if (broj1 > broj && broj1 > broj2) {
  console.log(`${broj1} je najveci`);
  if (broj > broj2) {
    console.log(`${broj} je srednji`);
    console.log(`${broj2} je najmanji`);
  } else {
    console.log(`${broj2} je srednji`);
    console.log(`${broj1} je najmanji`);
  }

} else {
  console.log(`${broj2} je najveci`);
  if (broj > broj1) {
    console.log(`${broj} je srednji`);
    console.log(`${broj1} je najmanji`);
  } else {
    console.log(`${broj1} je srednji`);
    console.log(`${broj} je najmanji`);
  }
}


//18.  Za učitani broj ispitati da li je ceo.


ceoBroj = 23.5;
if (ceoBroj % 1 != 0) {
  console.log("Broj nije ceo");
} else {
  console.log("Broj je ceo");
}



//19.  Učitati dva cela broja i ispitati da li je veći od njih paran. 

broj1 = 55;
broj2 = 55;

if (broj1 > broj2) {
  if (broj1 % 2 == 0) {
    console.log(`${broj1} je veci i paran`);
  } else {
    console.log(`${broj1} je veci i neparan`);
  }
} else if (broj2 > broj1) {
  if (broj2 % 2 == 0) {
    console.log(`${broj2} je veci i paran`);
  } else {
    console.log(`${broj2} je veci i neparan`);
  }
} else {
  if (broj1 % 2 == 0)
    console.log(`Brojevi su isti i parni`);
  else {
    console.log(`Brojevi su isti i neparni`);
  }
}


//20. Naći koji je najveći od tri uneta broja $a, $b i $c.

////////////////////// ovo slicno sam sto puta radila///////////////////////////////////

//21.  Ispisati na ekranu „ekstremna temperatura“ ukoliko je temperatura manja od -15 stepeni Celzijusovih  i veća od 40 stepeni Celzijusovih.

temp = 45;

if (temp < -15 || temp > 40) {
  document.write(`Ekstremna temperatura`);
}

//22. Ispitati da li je godina prestupna. (Godinu preuzeti sa vremena na Vašem računaru). Prestupna je ona godina koja je deljiva sa 4, ako nije deljiva sa 100, mada ipak jeste deljiva sa 400.

///////////////ovo je lako /////////////////
let year = 2016;
if (year % 4 == 0 && year % 100 != 0 && year % 400 == 0) {
  console.log("Godina je prestupna");
} else {
  console.log("Godina nije prestupna");
}

//23.  Jedan butik ima radno vreme od 9h do 20h radnim danima, a vikendom od 10h do 18h. Preuzeti dan i vreme sa računara i ispitati da li je butik trenutno otvoren.



//24.  Napisati program koji za uneta četiri prirodna broja a,b,c,d određuje koliko njih je deljivo sa 2, koliko sa 5, a koliko sa 2 i 5 i štampa odgovarajuće poruke.



//25.  Za tri učitana broja x, y, z ispitati da li je jedan od njih jednak sumi druga dva.



//26. Napisati program koji za uneta tri realna broja određuje zbir dva najveća.






