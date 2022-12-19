console.log("Mila");

// Funkcije - Zadaci za vežbu 

/*Napisati funkciju pozdrav kojoj se prosleđuje ime i prezime, a funkcija ispisuje pozdrav. Na primer za uneto ime Jelena i prezime Matejić, funkcija ispisuje Zdravo Jelena Matejić. */
console.log("1.----------------");
let pozdrav = (i, p) => {
    console.log(`${i} ${p}`);

}

pozdrav("Mila", "Bogdanovic");




/*Napisati funkciju zbir koja računa zbir dva realna broja.
Šta bi trebalo izmeniti da bi se dobila razlika, proizvod ili količnik dva broja.*/
console.log("2.----------------");
// istrazi jos malo

/*Napisati funkciju neparan koja za uneti ceo broj n vraća tačno ukoliko je neparan ili netačno ukoliko nije neparan.*/
console.log("3.----------------");
let neparan = (n) => (n % 2 == 1);

console.log(neparan(6));



/*Napisati funkciju maks2 koja vraća veći od dva prosleđena realna broja. Zatim napisati funkciju maks4 koja vraća najveći od četiri prosleđena realna broja.*/
console.log("4.----------------");

let maks2 = (a, b) => a > b ? a : b;
// console.log(maks2(79,89));
let maks4 = (a, b, c, d) => maks2(a, b) > maks2(c, d) ? maks2(a, b) : maks2(c, d);
console.log(maks4(25, 13, 250, 1));
/*Napisati funkciju koja prikazuje sliku za prosledjenu adresu slike.*/
console.log("5.----------------");

let slika = link => {
    document.write(`<img src="${link}" width="300">`);
};

slika("destinacije.jpg")

/*Napisati funkciju koja za unetu boju na engleskom jeziku boji tekst paragrafa u tu boju.*/
console.log("6.----------------");

let paragraf = boja => {
    document.write(`<p style="color:${boja}">Ovaj tekst je obojen</p>`);
};

paragraf("orange");
paragraf("pink");
paragraf("blue");
paragraf("green");



/*Napisati program koji sadrži funkciju sedmiDan koja za uneti broj n ispisuje n-ti dan u nedelji (npr. za 0 ispisuje “Nedelja”, za 1 se ispisuje „Ponedeljak“, za 2 se ispisuje „Utorak“, ... ,  a za 7 opet “Nedelja”).
Pitanje: Kako bismo realizovali ovaj zadatak da se tražio n-ti mesec u godini?*/
console.log("7.----------------");



let sedmiDan = (n) => {
    n = n % 7;
    switch (n) {
        case 0:
            console.log("nedelja");
            break;
        case 1:
            console.log("ponedeljak");
            break;
        case 2:
            console.log("utorak");
            break;
        case 3:
            console.log("sreda");
            break;
        case 4:
            console.log("cetvrtak");
            break;
        case 5:
            console.log("petak");
            break;
        case 6:
            console.log("subota");
            break;
        case 7:
        default:
            console.log("Invalid input");
    }
};
sedmiDan(9);

console.log("7. drugi deo zadatka--------------");

let mesec = (n) => {
    n = n % 12;
    switch (n) {
        case 0:
            console.log("januar");
            break;
        case 1:
            console.log("februar");
            break;
        case 2:
            console.log("mart");
            break;
        case 3:
            console.log("april");
            break;
        case 4:
            console.log("maj");
            break;
        case 5:
            console.log("jun");
            break;
        case 6:
            console.log("jul");
            break;
        case 7:
            console.log("avgust");
            break;
        case 8:
            console.log("septembar");
            break;
        case 9:
            console.log("oktobar");
            break;
        case 10:
            console.log("novembar");
            break;
        case 11:
            console.log("decembar");
            break;
        case 12:
        default:
            console.log("Invalid input");
    }
};
mesec(1);



/*Napisati funkciju deljivSaTri koja se koristi u ispisivanju brojeva koji su deljivi sa tri u intervalu od n do m.
Prebrojati koliko ima ovakvih brojeva od n do m.*/
console.log("8.----------------");

let brojevi = 0;
let deljivSaTri = (n, m) => {
    for (i = n; i <= m; i++) {
        if (i % 3 == 0) {
            brojevi++;
        }
    }
    return brojevi;
}

console.log(deljivSaTri(2, 12));
/*Napisati funkciju sumiraj koja određuje sumu brojeva od n do m. 
Brojeve n i m proslediti kao parametre funkciji.*/
console.log("9.----------------");
let zbirBrojeva = 0;
let sumiraj = (n, m) => {
    for (i = n; i <= m; i++) {
        zbirBrojeva += i;
    }
    return zbirBrojeva;
}

console.log(sumiraj(2, 12));


/*Napisati funkciju množi koja određuje proizvod brojeva od n do m.
Brojeve n i m proslediti kao parametre funkciji.*/
console.log("10.----------------");

let proizvod = 1;
let mnozi = (n, m) => {
    for (i = n; i <= m; i++) {
        proizvod *= i;
    }
    return proizvod;
}

console.log(mnozi(1, 10));
/*Napraviti funkciju koja vraća aritmetičku sredinu brojeva od n do m.
Brojeve n i m proslediti kao parametre funkciji.*/
console.log("11.----------------");
let brojBrojeva = 0;
zbirBrojeva = 0;
let aritmetickaSredina = (n, m) => {
    for (i = n; i < m; i++) {
        zbirBrojeva += i;
        brojBrojeva++;
    }
    return (zbirBrojeva / brojBrojeva);
}

console.log(aritmetickaSredina(2, 10));


/*Napisati funkciju koja vraća aritmetičku sredinu brojeva kojima je poslednja cifra 3 u intervalu od n do m. Brojeve n i m proslediti kao parametre funkciji.*/
console.log("12.----------------");

brojBrojeva = 0;
zbirBrojeva = 0;
let poslednjaCifraTri = (n, m) => {
    for (i = n; i <= m; i++) {
        if (i % 10 == 3) {
            zbirBrojeva += i;
            brojBrojeva++;
        }

    }
    return (zbirBrojeva / brojBrojeva);
}

console.log(poslednjaCifraTri(2, 33));


//3,13,23 = 39/3 = 13
//3,13,23,33 = 72/4 =18



/*Napisati funkciju kojoj se prosleđuje ceo broj a ona ispisuje tekst koji ima prosleđenu veličinu fonta.*/
console.log("13.---na ekranu-------------");

let tekst = (n) => {
    document.write(`<p style="font-size:${n}px">Ovo je neki tekst</p>`)
}

tekst(36);


/*Napisati funkciju koja pet puta ispisuje istu rečenicu, a veličina fonta rečenice treba da bude jednaka vrednosti iteratora. */
console.log("14.----na ekranu------------");

let recenica = (h) => {
    for (i = 1; i < 5; i++) {
        document.write(`<p style="font-size:${i + h}px";>Neki tekst heheheh</p>`);
    }
}

recenica(24);




/*Dobili ste plaćenu programersku praksu u trajanju od n meseci. Prvog meseca, plata će biti a dinara, a ako budete vredno radili svakog narednog meseca ćete dobiti povišicu od d dinara. Brojeve n, a i d određujete sami.
Napišite funkciju kojoj se prosleđuju brojevi n, a i d. Funkcija treba da vrati vrednost koliko ćete ukupno navca zaraditi, ukoliko svakog meseca budete dobijali povišicu.
Testirati zadatak (pozvati funkciju i ispisati vrednost koju ona vraća).*/
console.log("15.----------------");
zbir = 0;
let praksa = (n, a, d) => {
    for (i = 1; i <= n; i++) {
        zbir += a;
        a = a + d;

    }
    return zbir;
}

console.log(praksa(4, 10000, 5000));
//100,150,200,250,300
//10000,15000,20000,25000


/*Na igrama bez granica, ekipi je postavljen zadatak da za što kraće vreme pređe stazu na kojoj se nalazi pokretni most. Takmičaru ove ekipe od polazne tačke do mosta treba t sekundi. Tačno p sekundi od kada takmičar može da krene sa polazne tačke (tj. od početka merenja) most počinje da se podiže. Od trenutka podizanja pa do spuštanja mosta protiče n sekundi i prelaz preko mosta za to vreme nije moguć. Nakon toga most ostaje spušten. Takmičari za čekanje kod mosta dobijaju negativne poene, pa je tim rešio da napravi program koji će im tačno odrediti u kojoj sekundi treba da pođu sa startne pozicije kako ne bi dobijali negativne poene. Pomozite timu da napravi funkciju na osnovu prosleđenih vrednosti t, p i n. Funkcija vraća koliko sekundi nakon početka merenja vremena treba da pođe, kako bi prošli poligon bez zaustavljanja.
npr: t=15, p=20, n=25, čekanje je 0s
npr: t=15, p=10, n=12, čekanje je 7s
*/
console.log("15.----------------");

let trka = (t, p, n) => {
    let cekanje = (p + n) - t;
    if (t <= p || t >= p + n) {
        console.log(`Ucesnici mogu proci stazu bez zadrzavanja.`);
    } else {
        console.log(`Ucesnici mogu proci stazu sa zadrzavanjem ${cekanje}.`);
    }

}

trka(15,10,12);