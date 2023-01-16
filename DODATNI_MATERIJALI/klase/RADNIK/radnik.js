export class Radnik {
  constructor(i, p) {
    this.ime = i;
    this.plata = p;
  }

  //ime
  set ime(i) {
    this._ime = i;  
  }
  get ime() {
    return this._ime;
  }

  //plata
  set plata(p) {
    this._plata = p;
  }
  get plata() {
    return this._plata;
  }

  //
  ispisListe() {
    return `   
    <ul>
        <li>${this.ime}</li>
        <li>${this.plata}</li>
    </ul>
      
    `;
  }
}
