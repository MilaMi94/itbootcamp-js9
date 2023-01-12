class Film {
    #naslov;
    #reziser;
    #godinaIzdanja;
  constructor(n, r, g) {
    this.naslov = n;
    this.reziser = r;
    this.godinaIzdanja = g;
  }
  stampaj() {
    console.log(`${this.naslov} - ${this.reziser} (${this.godinaIzdanja})`);
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
}

export { Film };
