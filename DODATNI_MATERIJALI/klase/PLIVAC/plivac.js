export class Plivac {
  constructor(i, g, r) {
    this.ime = i;
    this.godinaRodjenja = g;
    this.najboljiRezultat = r;
  }
  //ime
  set ime(i) {
    this._ime = i;
  }
  get ime() {
    return this._ime;
  }
  //godina rodjenja
  set godinaRodjenja(g) {
    this._godinaRodjenja = g;
  }
  get godinaRodjenja() {
    return this._godinaRodjenja;
  }

  //najbolji rezultat
  set najboljiRezultat(r) {
    this._najboljiRezultat = r;
  }
  get najboljiRezultat() {
    return this._najboljiRezultat;
  }

  ispisi() {
    return `
    <ul>
        <li>${this.ime}</li>
        <li>${this.godinaRodjenja}</li>
        <li>${this.najboljiRezultat}</li>
    </ul>`;
  }
}
