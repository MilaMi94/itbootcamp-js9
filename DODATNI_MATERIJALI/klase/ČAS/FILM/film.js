class Film {
  #naslov;
  #reziser;
  #godinaIzdanja;
  #ocene;
  constructor(n, r, g, o) {
    this.naslov = n;
    this.reziser = r;
    this.godinaIzdanja = g;
    this.ocene = o;
  }

  //seteri
  set naslov(n) {
    if (n.length > 0) {
      this.#naslov = n;
    } else {
      this.#naslov = "Film";
    }
  }
  set reziser(r) {
    if (r.length > 0) {
      this.#reziser = r;
    } else {
      this.#reziser = "John Doe";
    }
  }
  set godinaIzdanja(gi) {
    if (gi < 1800) {
      this.#godinaIzdanja = 1800;
    } else {
      this.#godinaIzdanja = gi;
    }
  }
  set ocene(o) {
    this.#ocene = o;
  }

  //geteri

  get naslov() {
    return this.#naslov;
  }
  get reziser() {
    return this.#reziser;
  }
  get godinaIzdanja() {
    return this.#godinaIzdanja;
  }
  get ocene() {
    return this.#ocene;
  }

  //metode

  stampaj() {
    console.log(`${this.naslov} - ${this.reziser} (${this.godinaIzdanja})`);
  }

  prosek() {
    let zbir = 0;
    let br = 0;
    this.ocene.forEach((o) => {
      zbir += o;
      br++;
    });
    return zbir / br;
  }
}

export { Film };
