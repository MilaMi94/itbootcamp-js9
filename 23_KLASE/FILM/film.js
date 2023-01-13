class Film {
  constructor(n, r, g, o) {
    this.naslov = n;
    this.reziser = r;
    this.godinaIzdanja = g;
    this.ocene = o;
  }

  //seteri
  set naslov(n) {
    if (n.length > 0) {
      this._naslov = n;
    } else {
      this._naslov = "Film";
    }
  }
  set reziser(r) {
    if (r.length > 0) {
      this._reziser = r;
    } else {
      this._reziser = "John Doe";
    }
  }
  set godinaIzdanja(gi) {
    if (gi < 1800) {
      this._godinaIzdanja = 1800;
    } else {
      this._godinaIzdanja = gi;
    }
  }
  set ocene(o) {
    if (Array.isArray(o)) {
      this._ocene = o;
    } else {
      this._ocene = [];
    }
  }

  //geteri

  get naslov() {
    return this._naslov;
  }
  get reziser() {
    return this.__reziser;
  }
  get godinaIzdanja() {
    return this._godinaIzdanja;
  }
  get ocene() {
    return this._ocene;
  }
  //metode

  stampaj() {
    console.log(`${this.naslov} - ${this.reziser} (${this.godinaIzdanja})`);
  }
  prosek() {
    let sumaOcena = 0;
    this.ocene.forEach((o) => {
      sumaOcena += o;
    });
    return sumaOcena / this.ocene.length;
  }
}

export { Film };
