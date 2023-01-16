export class Autobus {
  constructor(r, b) {
    this.registarskiBroj = r;
    this.brojSedista = b;
  }
  //registarskiBroj
  set registarskiBroj(r) {
    this._registarskiBroj = r;
  }
  get registarskiBroj() {
    return this._registarskiBroj;
  }

  //brojSedista
  set brojSedista(b) {
    this._brojSedista = b;
  }
  get brojSedista(){
    return this._brojSedista;
  }
  //metode

  ispisPodataka() {
    return `   
    <ul>
        <li>${this.registarskiBroj}</li>
        <li>${this.brojSedista}</li>
    </ul>
      
    `;
  }
}
