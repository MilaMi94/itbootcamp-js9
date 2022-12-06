let x, y;
x = 3;
y = 5;

console.log(x == y);

if(x == y) { //ovde za ispitavanje vrednosti mogu da se uporedjuju 2 vrednosti a ne vise vrednosti tipa x >= y <= z

    console.log("Vrednosti promenljivih x i y su jednake"); 
    console.log("Jos jedna poruka");
    console.log("Vrednosti " + x + " i " + y + " su jednake")
    console.log(`Vrednosti ${x} i ${y} su jednake`); //ovi navodnici u programiranju se zovu backticks, i ovde da bi varijable ovako koristili moramo da stavimo ${}
}

console.log("Komanda posle IF grananja");

x = 5;
x = 4.5;
x = "4";
y = 4; //JS je slabo tipiziran jezik pa nije nuzno da definisemo kog tipa je neka promenljiva kao u Javi
if (x === y) {

    console.log(`Vrednosti x i y su jednake po tipu i po vrednosti`); 
} //ovo vraca false jer je x string a y je integer

x = "14";
y = "4";
if(x !== y) {

    console.log(`Vrednosti x i y su razliite po tipu ili po vrednosti`);
}

else {

    
}