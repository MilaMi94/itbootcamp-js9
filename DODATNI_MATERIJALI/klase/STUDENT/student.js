export class Student {
  constructor(jmbg, i, p, o) {
    this.jmbg = jmbg;
    this.ime = i;
    this.prezime = p;
    this.nizOcena = o;
    this.prosecnaOcena = this._prosecnaOcena;
  }

  //jmbg
  set jmbg(j) {
    if (typeof j === "string" && j.length == 13) {
      this._jmbg = j;
    }
  }

  get jmbg() {
    return this._jmbg;
  }

  //ime
  set ime(i) {
    this._ime = i;
  }

  get ime() {
    return this._ime;
  }
  //prezime
  set prezime(p) {
    this._prezime = p;
  }

  get prezime() {
    return this._prezime;
  }

  //nizOcena

  set nizOcena(niz) {
    let newArr = [];
    niz.forEach((o) => {
      let newO = Math.round(o);
      newArr.push(newO);
    });
    this._nizOcena = newArr;
  }

  get nizOcena() {
    return this._nizOcena;
  }

  // prosecnaOcena

  set prosecnaOcena(nizOcena) {
    let suma = 0;
    this._nizOcena.forEach((o) => {
      suma += o;
    });
    this._prosecnaOcena = suma / this.nizOcena.length;
  }

  get prosecnaOcena() {
    return this._prosecnaOcena;
  }

  //metode

  ispis() {
    return `   <ul>
    <li>${this.jmbg}</li>
    <li>${this.ime}</li>
    <li>${this.prezime}</li>
    <li>${this.nizOcena}</li>
    <li>${this.prosecnaOcena}</li>
    </ul>`;
  }
}
