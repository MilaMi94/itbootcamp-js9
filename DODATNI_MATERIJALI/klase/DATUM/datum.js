export class Datum {
  constructor(d, m, g) {
    this.dan = d;
    this.mesec = m;
    this.godina = g;
  }

  //datum

  set dan(d) {
    this._datum = d;
  }
  get dan() {
    return this._datum;
  }

  //mesec
  set mesec(m) {
    this._mesec = m;
  }
  get mesec() {
    return this._mesec;
  }
  //godina

  set godina(g) {
    this._godina = g;
  }
  get godina() {
    return this._godina;
  }
}
