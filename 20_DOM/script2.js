let naslov = document.createElement('h3');
naslov.innerHTML = "Naslov kreiran iz JS-a";

document.body.appendChild(naslov);

let lista = document.createElement("ul");
document.body.appendChild(lista);
let li1 = document.createElement("li");
li1.innerHTML = "Prva stavka liste";
lista.appendChild(li1);

let li2 = document.createElement("li");
li2.innerHTML = "Druga stavka liste";
lista.append(li2);

for(let i = 0; i < 3; i++){
    let par = document.createElement('p');
    par.innerHTML = `${i+1}-ta stavka liste`;
    let li = document.createElement('li');
    li.append(par);
    lista.append(li);
}