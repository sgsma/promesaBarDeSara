const readlinePromises = require("readline");

const rl = readlinePromises.createInterface({
    input: process.stdin,
    output: process.stdout,
});

const miPromesa = new Promise((resolve, reject) => {
    rl.question ('Ingrese su edad', (edad)) => {
setTimeout(() => {
if ((edad >= 18)) {
resolve('La promesa se cumple');
} else {
reject('la promesa no se cumple');
 }
}, 2000);
    };
miPromesa.then((valor) => {

console.log(valor);
)};
