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

if (ceoBroj% 1 != 0) {
  console.log("Broj nije ceo");
} else {
  console.log("Broj je ceo");
}

// drugi nacin

if(Number.isInteger(ceoBroj)) { // sama po sebi ce metoda vratiti tacno
    console.log("Broj ceo");
} else {
    console.log("Broj nije ceo");
}

/* IF-Zadaci za vezbu word dokument */

// 1. Za dva uneta broja ispisati koji je veći a koji je manji.

let br1 = 5;
let br2 = 56;

if (br1 > br2) {
  console.log(`${br1} je veci`);
} else {
  console.log(`${br2} je veci`);
}


/* 2. Ispitati da li je uneta temperatura u plusu ili je u minusu. Ukoliko je temperatura nula, računati da je u plusu.*/

let temp = 25;
if(temp >= 0) {
  console.log(`Uneta temperatura ${temp} je u plusu. `)
}else{
  console.log(`Uneta temperatura ${temp} je u minusu. `)
}

/*U odnosu na pol (muški/ženski) koji je korisnik uneo prikazati odgovarajući avatar. */

let pol = m;





/*U odnosu na preuzete vrednosti AM i PM sa svog računara, ispisati da li je trenutno jutro ili popodne.
Za preuzetu godinu sa računara i unetu godinu rođenja izračunati da li je osoba punoletna ili maloletna.
Odrediti najveći od tri uneta broja
Na osnovu unetog broja poena ispitati koju ocenu profesor treba da upiše učeniku. Učenik je položio ispit ukoliko ima više od 50 poena, u suprotnom je pao ispit.
Za više od 50 poena učenik dobija ocenu 6,
za više od 60 poena učenik dobija ocenu 7,
za više od 70 poena učenik dobija ocenu 8,
za više od 80 poena učenik dobija ocenu 9 i
za više od 90 poena učenik dobija ocenu 10.
Preuzeti koji je dan u nedelji sa računara i ispitati da li je to radni dan ili je u pitanju vikend.
Za vreme preuzeto sa računara ispisati dobro jutro za vreme manje od 12 sati ujutru, dobar dan za vreme manje od 18 sati popodne i u ostalim  slučajevima ispisati dobro veče.
 Uporediti dva uneta datuma i ispisati koji od njih je raniji.
 Radno vreme jedne programerske firme je od 9h do 17h. Preuzeti vreme sa računara i ispitati da li u to vreme firma radi ili ne radi.
 Za unet početak i kraj radnog vremena dva lekara ispisati DA ukoliko se njihove smene preklapaju, u suprotnom ispisati NE.
 Za uneti broj ispitati da li je paran ili nije.
 Za uneti broj ispisati da li je deljiv sa 3 ili ne.
 Za dva uneta broja, od većeg učitanog broja oduzeti manji i rezultat ispisati na ekranu.
 Za uneti broj ispitati da li je on manji ili veći od nule. Ukoliko je manji ili jednak nuli ispisati njegov prethodnik, a ukoliko je veći od nule ispisati njegov sledbenik.
 Za tri uneta broja ispisati koji od njih ne najveći, koji od njih je srednji, a koji od nih je najmanji. 
 Za učitani broj ispitati da li je ceo.
Učitati dva cela broja i ispitati da li je veći od njih paran. 
Naći koji je najveći od tri uneta broja $a, $b i $c.
 Ispisati na ekranu „ekstremna temperatura“ ukoliko je temperatura manja od -15 stepeni Celzijusovih  i veća od 40 stepeni Celzijusovih.
 Ispitati da li je godina prestupna. (Godinu preuzeti sa vremena na Vašem računaru). Prestupna je ona godina koja je deljiva sa 4, ako nije deljiva sa 100, mada ipak jeste deljiva sa 400.
Jedan butik ima radno vreme od 9h do 20h radnim danima, a vikendom od 10h do 18h. Preuzeti dan i vreme sa računara i ispitati da li je butik trenutno otvoren.
Napisati program koji za uneta četiri prirodna broja a,b,c,d određuje koliko njih je deljivo sa 2, koliko sa 5, a koliko sa 2 i 5 i štampa odgovarajuće poruke.
Za tri učitana broja x, y, z ispitati da li je jedan od njih jednak sumi druga dva.
Napisati program koji za uneta tr*/


/* 15.  Za dva uneta broja, od većeg učitanog broja oduzeti manji i rezultat ispisati na ekranu.  */

br1 = 58;
br2 = 69;

if (br1 > br2) {
    console.log(`${br1 - br2}`);
} else {
    console.log(`${br2 - br1}`);
}



