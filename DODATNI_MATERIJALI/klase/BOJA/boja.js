/*Kreirati klasu Boja koja ima talasnu dužinu u nm, zasićenje i intenzitet.
Napraviti konstruktor kome se prosleđuju tri vrednosti koje treba postaviti.
Napraviti odgovarajuće getere i setere.
Napraviti funkciju ispitajSličnost koja za dve prosleđene boje vraća true ukoliko su te dve boje iste, u suprotnom vraća false.
Napraviti funkciju srednjaTalasnaDuzina koja za niz boja vraća vrednost srednje talasne dužine. */

class Boja {
    #talasnaDuzina;
    #zasicenje;
    #intenzitet

    constructor(td, z, i) {
        // ovde se pozivaju seteri
        this.talasnaDuzina = td; 
        this.zasicenje = z;
        this.intenzitet = i;
    }
    //talasna duzina
    set talasnaDuzina(td){
        this.#talasnaDuzina = td;
    }
    get talasnaDuzina(){
        return this.#talasnaDuzina;
    }

    //zasicenje
    set zasicenje(z) {
        this.#zasicenje = z;
    }

    get zasicenje(){
        return this.#zasicenje;
    }

    //intenzitet
    set intenzitet(i){
        this.#intenzitet = i;
    }
    get intenzitet(){
        return this.#intenzitet;
    }

    //metode nema za sada

    

}


export default Boja;