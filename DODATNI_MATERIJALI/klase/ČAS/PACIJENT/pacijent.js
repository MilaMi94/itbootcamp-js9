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
    if (v > 0 && v < 250) {
      this._visina = v;
    } else {
      this._visina = 150;
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

  bmi() {
    let bmi = this.tezina / (this.visina / 100) ** 2;
    return bmi;
  }

  stampajListu() {
    let lista = 
    `
    <ul>
      <li>${this.ime}</li>
      <li>${this.visina}</li>
      <li>${this.tezina}</li>
    </ul> 
    `;
    return lista;
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
