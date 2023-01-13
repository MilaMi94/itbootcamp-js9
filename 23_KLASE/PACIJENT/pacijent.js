class Pacijent {
  constructor(i, v, t) {
    this.ime = i;
    this.visina = v;
    this.tezina = t;
  }

  //ime

  set ime(i) {
    this._ime = i;
  }
  get ime() {
    return this._ime;
  }

  //visina
  set visina(v) {
    if (v > 0 && v < 2.5) {
      this._visina = v;
    } else {
      this._visina = 1.7;
    }
  }

  get visina() {
    return this._visina;
  }

  //tezina

  set tezina(t) {
    if (t > 0 && t < 550) {
      this._tezina = t;
    } else {
      this._tezina = 100;
    }
  }
  get tezina() {
    return this._tezina;
  }

  //metode
  stampaj() {
    console.log(this);
  }

  stampajListu(){
    let htmlLista = `
    <ul>
    <li>Ime: ${this.ime}</li>
    <li>Visina: ${this.visina}m</li>
    <li>Težina: ${this.tezina}kg</li>
    </ul>`
    return htmlLista;
  }

  bmi() {
    let bmi = this.tezina / ((this.visina) ** 2);
    return bmi;
  }

  kritican() {
    let result = false;
    if (this.bmi() < 15 || this.bmi() > 40) {
      result = true;
    }
    return result;
  }
}

export default Pacijent;
