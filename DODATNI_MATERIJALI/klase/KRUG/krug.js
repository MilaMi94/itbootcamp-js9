export class Krug {
    constructor(p){
        this.poluprecnik = p;

    }
    //poluprecnik
    set poluprecnik(p){
        this._poluprecnik= p;
    }
    get poluprecnik(){
        return this._poluprecnik;
    }
    //metode
    obimKruga(){
        return 2 * this.poluprecnik * Math.PI;
    }
    povrsinaKruga (){
        return (this.poluprecnik **2) * Math.PI;
    }

}