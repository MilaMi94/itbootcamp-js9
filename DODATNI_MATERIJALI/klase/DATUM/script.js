import { Datum } from "./datum.js";

let d1 = new Datum(5, 11, 2011);
let d2 = new Datum(5, 11, 2011);
let d3 = new Datum(1, 5, 1995);
let divDatum = document.getElementById("datumi");

let ranijiDatum = (prvid, drugid) => {
  if (prvid.godina < drugid.godina) {
    divDatum.innerHTML = `Raniji datum je: ${prvid.dan}.${prvid.mesec}.${prvid.godina}`;
  } else if (prvid.godina > drugid.godina) {
    divDatum.innerHTML = `Raniji datum je: ${drugid.dan}.${drugid.mesec}.${drugid.godina}`;
  } else {
    if (prvid.mesec < drugid.mesec) {
      divDatum.innerHTML = `Raniji datum je: ${prvid.dan}.${prvid.mesec}.${prvid.godina}`;
    } else if (prvid.mesec > drugid.mesec) {
      divDatum.innerHTML = `Raniji datum je: ${drugid.dan}.${drugid.mesec}.${drugid.godina}`;
    } else {
      if (prvid.dan < drugid.dan) {
        divDatum.innerHTML = `Raniji datum je: ${prvid.dan}.${prvid.mesec}.${prvid.godina}`;
      } else if (prvid.dan > drugid.dan) {
        divDatum.innerHTML = `Raniji datum je: ${drugid.dan}.${drugid.mesec}.${drugid.godina}`;
      } else {
        divDatum.innerHTML = `Datumi su jednaki.`;
      }
    }
  }
};

ranijiDatum(d1, d2);
