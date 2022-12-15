// let , var i const - nisu tipovi promenljivih vec oblasti vazenja

let a = 5;
var b = 10; // iako stavimo b = 10; isto sto i var b=10;
console.log(a, b);

a++;
b++;
console.log(a, b);

a = 5;
var b = 10;
console.log(a, b);

/////////////////////////////////////////////////////////

let x = 10;
var y = 20;

if (true) {
  let x = 15;
  var y = 25;

  console.log(x, y); // ovako mozemo da redeklarisemo let jer razlicita oblast vazenja, ovde vazi u if bloku, a ovo drugo je izvan if bloka
}

console.log(x, y);
