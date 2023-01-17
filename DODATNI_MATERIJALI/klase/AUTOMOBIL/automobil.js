export class Automobil {
  constructor(maxB, minB, tB) {
    this.maxBrzina = maxB;
    this.minBrzina = minB;
    this.trenutnaBrzina = tB;
  }
  // maxBrzina
  set maxBrzina(maxB) {
    this._maxBrzina = maxB;
  }

  get maxBrzina() {
    return this._maxBrzina;
  }
  // minBrzina
  set minBrzina(minB) {
    this._minBrzina = minB;
  }
  get minBrzina() {
    return this._minBrzina;
  }

  //trenutnaBrzina

  set trenutnaBrzina(tB) {
    this._trenutnaBrzina = tB;
  }
  get trenutnaBrzina() {
    return this._trenutnaBrzina;
  }

  //metode

  ubrzaj(v) {
    let rez = this.trenutnaBrzina + v;
    if (rez > this.maxBrzina) {
      this.trenutnaBrzina = this.maxBrzina;
    } else {
      this.trenutnaBrzina = rez;
    }
  }
  uspori(v) {
    let rez = this.trenutnaBrzina - v;
    if (rez < this.minBrzina) {
      this.trenutnaBrzina = this.minBrzina;
    } else {
      this.trenutnaBrzina = rez;
    }
  }
}
