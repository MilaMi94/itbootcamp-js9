export class FMRadio {
  constructor(s, f, jt) {
    this.stranica = s;
    this.frekvencija = f;
    this.jacinaTona = jt;
  }
  //stranica
  set stranica(s) {
    this._stranica = s;
  }
  get stranica() {
    return this._stranica;
  }

  //frekvencija
  set frekvencija(f) {
    if (f >= 87.5 && f <= 108) {
      this._frekvencija = f;
    }
  }
  get frekvencija() {
    return this._frekvencija;
  }

  //jacinaTona

  set jacinaTona(jt) {
    if (jt >= 0 && jt <= 20) {
      this._jacinaTona = jt;
    }
  }

  get jacinaTona() {
    return this._jacinaTona;
  }

  //metode
  promeniZvuk(simbol) {
    if (simbol == "+" && this.jacinaTona < 20 && this.jacinaTona >=0) {
      this.jacinaTona++;
    } else if (simbol == "-" && this.jacinaTona <= 20 && this.jacinaTona > 0) {
      this.jacinaTona--;
    }
  }
}
