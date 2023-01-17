export class FMRadio {
  constructor(s, f, jt) {
    this.stanica = s;
    this.frekvencija = f;
    this.jacinaTona = jt;
  }
  //stranica
  set stanica(s) {
    this._stanica = s;
  }
  get stanica() {
    return this._stanica;
  }

  //frekvencija
  set frekvencija(f) {
    if (f > 108) {
      this._frekvencija = 108;
    } else if (f < 87.5) {
      this._frekvencija = 87.5;
    } else {
      this._frekvencija = f;
    }
  }
  get frekvencija() {
    return this._frekvencija;
  }

  //jacinaTona

  set jacinaTona(jt) {
    if (jt < 0) {
      this._jacinaTona = 0;
    } else if (jt > 20) {
      this._jacinaTona = 20;
    }else{
      this._jacinaTona = jt;
    }
  }

  get jacinaTona() {
    return this._jacinaTona;
  }

  //metode
  promeniZvuk(simbol) {
    if (simbol == "+" && this.jacinaTona < 20 && this.jacinaTona >= 0) {
      this.jacinaTona++;
    } else if (simbol == "-" && this.jacinaTona <= 20 && this.jacinaTona > 0) {
      this.jacinaTona--;
    }
  }
  frekvencijaIskljuci() {
    this.frekvencija = 87.5;
  }
}
