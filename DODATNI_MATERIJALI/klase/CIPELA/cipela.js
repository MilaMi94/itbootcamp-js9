export class Cipela {
  constructor(n, b, p) {
    this.naziv = n;
    this.brojCipela = b;
    this.prepravke = p;
  }
  // naziv
  set naziv(n) {
    this._naziv = n;
  }
  get naziv() {
    return this._naziv;
  }

  //broj cipela
  set brojCipela(b) {
    this._brojCipela = b;
  }
  get brojCipela() {
    return this._brojCipela;
  }

  //prepravke
  set prepravke(p){
    this._prepravke = p;
  }
  get prepravke(){
    return this._prepravke;
  }

  //metode

  zalepi(){
    return innerHTML = `Zalepljena cipela`;
  }
  prosiri(){
    return innerHTML = `Prosirena cipela`;
  }
  usij(){
    return innerHTML = `Usivena cipela`;
  }

}
