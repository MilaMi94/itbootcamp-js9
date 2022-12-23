/*Napisati funkciju suma kojoj se prosleđuju parametri n i m, dok funkcija vraća sumu kubova brojeva od n do m.
Pozvati funkciju i njen rezultat ispisati u konzoli.

Napisati funkciju godine kojoj se prosleđuje parametar godRodjenja.
Parametar godRodjenja predstavlja godinu rođenja neka osobe. Funkcija treba da vrati koliko godina ima ta (prosleđena) osoba. 
Broj godina osobe izračunati na osnovu prosleđene godine rođenja i trenutne godine koju preuzimate sa računara. 
Pozvati funkciju i dobijeni rezultat ispisati u konzoli.

Napisati funkciju deljiv kojoj se prosleđuju tri parametra n, m i k. Funkcija na ekranu treba da ispiše broj brojeva od n do m koji su deljivi brojem k. Pozvati funkciju.

Pilot želi da napravi program gde unosi vreme polatanja (sat poletanja između 0 i 23 i minut poletanja aviona između 0 i 59) i vreme sletanja aviona (sat sletanja između 0 i 23 i minut sletanja aviona između 0 i 59). Napisati funkciju pilot kojoj se prosleđuje vreme poletanja i vreme sletanja aviona, a ona pilotu u konzoli ispisuje koliko časova i minuta je trajao njegov let. Pretpostaviti da su poletanje i sletanje aviona u istom danu i da je ispravno uneo vrednosti poletanja i sletanja.



Specijalitet jedne poslastičare je slatkiš po imenu jaban koje se pravi od jabuka i banana. Za jednu porciju ovog slatkiša potrebme su 2 jabuke i 3 banane. Poslastičara jabuke i banane dobija od jednog lokalnog dobavljača. U svakoj isporuci ima 20% oštećenih jabuka koje se ne mogu iskoristiti za pripremu jaban slatkiša. Napisati funkciju jaban koja za prosleđeni broj isporučenih jabuka i prosleđeni broj isporučenih banana, određuje i vraća koliko porcija jaban slatkiša je moguće da poslastičar napravi. Broj oštećenih jabuka zaokružiti na najbliži ceo broj.

Dobili ste plaćenu programersku praksu u trajanju od n meseci. Prvog meseca, plata će biti a dinara, a ako budete vredno radili svakog narednog meseca ćete dobiti povišicu od d dinara u odnosu na platu prethodnog meseca. Brojeve n, a i d određujete sami.
 Napišite funkciju praksa kojoj se prosleđuju brojevi n i a. Funkcija treba da vrati vrednosti koliko ćete ukupno navca zaraditi, ukoliko svakog meseca budete dobijali povišicu u odnosu na prethodni mesec.
 Testirati zadatak (pozvati funkciju i ispisati vrednost koju ona vraća). */


//Programirati funkciju za mašinu za izradu nogara za stolove u jednoj fabrici drveta. Prva noga stola je duža druge noge stola isto koliko druga noga stola od treće noge stola, isto kao i treća noga stola od četvrte noge stola. Dužina prve noge stola i još dve noge stola su poznate, a četvrta nije poznata. Funkcija fabrika određuje i vraća dužinu izostale noge stola ako se funkciji prosleđuju poznate dužine ostale tri noge stola (dužina prve noge stola i dužine neke dve noge stola).

let sto = (d1, d2, d3) => {
    // d1 > d2 > d3
    // kad ih ovako poredjamo treba da skontamo da li je ista razlika izmedju njih
    // ako je rastojanje izmedju d1 i d2 isto sa rastojanjem izmedju d2 i d3 to znaci zasigurno da nam fali nogara koja je najmanja
    // da probam sama ako ne uspem imam na snimku
}


/*Napisati funkciju prethodniDan kojoj se prosleđuju tri pozitivna cela broja koja predstavljaju dan, mesec i godinu jednog ispravnog datuma (najuporniji mogu da ispituju i da li su dobre prosleđene vrednosti :) ). Funkcija ispisuje tri cela broja koja predstavljaju dan, mesec i godinu jučerašnjeg datuma. Svi brojevi se ispisuju u jednom redu, a iza svakog broja navodi se tačka.


Napisati funkciju naredniDan kojoj se prosleđuju tri pozitivna cela broja koja predstavljaju dan, mesec i godinu jednog ispravnog datuma (najuporniji mogu da ispituju i da li su dobre prosleđene vrednosti :) ). Funkcija ispisuje tri cela broja koja predstavljaju dan, mesec i godinu sutrašnjeg datuma. Svi brojevi se ispisuju u jednom redu, a iza svakog broja navodi se tačka.Napisati funkciju prethodniDan kojoj se prosleđuju tri pozitivna cela broja koja predstavljaju dan, mesec i godinu jednog ispravnog datuma (najuporniji mogu da ispituju i da li su dobre prosleđene vrednosti :) ). Funkcija ispisuje tri cela broja koja predstavljaju dan, mesec i godinu jučerašnjeg datuma. Svi brojevi se ispisuju u jednom redu, a iza svakog broja navodi se tačka.
 */