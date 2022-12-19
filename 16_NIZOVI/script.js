let cars = ["Toyota", "BMW", "Volvo"];


console.log(cars);
console.log(cars[0]);
console.log(cars[2]);
console.log(cars[3]);//?undefined

cars[1] = cars[1] + "208"; "Peugeot";
console.log(cars);

// js dozvoljava da elementi niza budu razlicitih tipova

let razno = [15, -3.5, "hello", true, [1, 2, 3]]

console.log(razno);

//Ispis elemenata niza cars
for (let i = 0; i < cars.length; i++) {
    console.log(cars[i]);
}
// uglavnom nam nece zatrebati index nakon for petlje tako da mozemo da deklarisemo sa let u for petlji,bas ako nam zatreba onda cemo sa var.

//Pristup elementima niza razno
for (let i = 0; i < razno.length; i++) {
    console.log(razno[i]);
}
//varijanta sa medjupromenljivom
let unutrasnjiNiz = razno[4];

for (let i = 0; i < unutrasnjiNiz.length; i++) {
    console.log(unutrasnjiNiz[i]);
}

for(let i = 0; i<razno[4].length;i++){
    console.log(razno[4][i]);
}

// promena vrednosti unutrasnjeg niza

razno[4][1]=5;
for(let i = 0; i<razno[4].length;i++){
    console.log(razno[4][i]);
}

//Uvecanje vrednosti unutrasnjeg reda za po 10%

for(let i =0; i< razno[4].length;i++) {
    razno[4][i]*=1.1;
}// ovde odmah moze console.log domah unutra, ali stavili smo dve odvojene petlje, svejedno je,isto ce da vrati

for(let i = 0; i<razno[4].length;i++){
    console.log(razno[4][i]);
}

//Zadaci

//2. Odrediti zbir elemenata celobrojnog niza.
console.log("Zadatak 2.----------");
let brojevi = [8, 4, -2, 0, 1, 0];
let brojevi2 =[2, 3, 4]
let zbir = 0;
for(let i = 0;i < brojevi.length;i++) {
    zbir+= brojevi[i];
}
console.log(zbir);

// ako imamo jos neke nizove gde treba da saberemo brojeve opet sve isto moramo da radimo, zato je prakticnije da napisemo funkciju

let sumaElem = niz =>{
    let zbir = 0;
    for(let i = 0;i < niz.length;i++) {
        zbir+= niz[i];
    }
    return zbir;
}
console.log(sumaElem(brojevi));

console.log(sumaElem(brojevi2));


//3. Odrediti proizvod elemenata celobrojnog niza.
console.log("Zadatak 3.----------");
let proizvodElem = niz =>{
    let proizvod = 1;
    for(let i = 0;i < niz.length;i++) {
        proizvod*= niz[i];
    }
    return proizvod;
}
console.log(proizvodElem(brojevi2));

console.log(proizvodElem(brojevi));// ovde vraca -0 ali to je ispravno

//4.Odrediti srednju vrednost elemenata celobrojnog niza.
console.log("Zadatak 4.----------");
let srednjaVrednost = (niz) => {
let suma= 0;
let brojBrojeva = 0;
for(let i = 0; i < niz.length; i++) {
    suma += niz[i];
    brojBrojeva ++;
}
return (suma / brojBrojeva);
//ovde moze da se podeli sa niz.length umesto brojBrojeva
}
console.log(srednjaVrednost(brojevi));
//druga varijanta
let srVrednost = niz => sumaElem(niz)/niz.length;
console.log(srVrednost(brojevi));

//4.a Odrediti srednju vrednost parnih elemenata celobrojnog niza.

let srVrednostParnih = (niz) => {
    let zbir = 0;
    let br = 0; 
    for(let i = 0; i < niz.length; i++){
        if(niz[i]%2==0) {
            zbir += niz[i];
            br++;
        }
    }
    return zbir/br;
}
console.log(srVrednostParnih(brojevi));

//5. Odrediti maksimalnu vrednost u celobrojnom nizu.
console.log("Zadatak 5.----------");
let brojevi3 = [1, 35, -25, 67];
let maxVred = niz => {
    let max = niz[0];
    for (let i =1; i< niz.length; i++){
        if(niz[i] > max) {
            max = niz[i];
        }
    }
    return max;
}
let br = [8, 11, 10, 11, 4];

console.log(maxVred(br));
console.log(maxVred(brojevi));
console.log(maxVred(brojevi3));


//6. Odrediti minimalnu vrednost u celobrojnom nizu.
console.log("Zadatak 6.----------");
let brojevi4 = [1, 128, 300, 35, -25, 67];
let minVred = niz => {
    let min = niz[0];
    for (let i =0; i<niz.length; i++){
        if(niz[i] < min) {
            min = niz[i];
        }
    }
    return min;
}

console.log(minVred(brojevi4));

//7. Odrediti indeks maksimalnog elementa celobrojnog niza.
console.log("Zadatak 7.----------");
let brojevi5 = [1, 20, 80, -20]
console.log(brojevi4.indexOf(maxVred(brojevi4)));
console.log(brojevi.indexOf(maxVred(brojevi)));
console.log(brojevi5.indexOf(maxVred(brojevi5)));

//8. Odrediti indeks minimalnog elementa celobrojnog niza.
console.log("Zadatak 8.----------");

console.log(brojevi5.indexOf(minVred(brojevi5)));

//9. Odrediti broj elemenata celobrojnog niza koji su veći od srednje vrednosti.
console.log("Zadatak 9.----------");
brojevi5 = [1, 20, 80, -20]
let brojElemVeciOdsrvr = (niz) => {
    let brojBrojeva = 0;
    for(let i = 0; i < niz.length; i++) {
        if( niz[i] > (srednjaVrednost(brojevi5))){
            brojBrojeva++;
        }

    }
      return brojBrojeva;  
}
console.log(srednjaVrednost(brojevi5));
console.log(brojElemVeciOdsrvr(brojevi5));
//10. Izračunati zbir pozitivnih elemenata celobrojnog niza.
console.log("Zadatak 10.----------");

let zbirPozitivnihElem =() => {
    
}



 //11. Odrediti broj parnih elemenata u celobrojnom nizu

 //12. Odrediti broj parnih elemenata sa neparnim indeksom.

 //13. Izračunati sumu elemenata niza sa parnim indeksom.

 //14. Promeniti znak svakom elementu celobrojnog niza.
 
 //15. Promeniti znak svakom neparnom elementu celobrojnog niza sa parnim indeksom.

 //Dat je niz stavki za kupovinu (članovi niza su stringovi). Prolaskom kroz niz napraviti neuređenu listu i ispisati je u html dokument.

 //Dat je niz imena košarkaškog tima. Prolaskom kroz niz formirati tabelu u čijim su redovima imena tima, i tabelu ispisati u html dokument.

 //Dat je niz stringova čiji su članovi putanje do slika. Prikazati sve sliku u html dokumentu sa putanjama navedenim u nizu.

 //Ispisati dužinu svakog elementa u nizu stringova. 

 //Odrediti element u nizu stringova sa najvećom dužinom.

 //Odrediti broj elemenata u nizu stringova čija je dužina veća od prosečne dužine svih stringova u nizu.

 //Odrediti broj elemenata u nizu stringova koji sadrže slovo 'a’. 

// Odrediti broj elemenata u nizu stringova koji počinju na slovo 'a' ili 'A’. 
  