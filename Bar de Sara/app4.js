//const readLine = require ('readLine');
//
//const rl = readLine.createInterface({
// input: process.stdin,
// output: process.stdout
//});
//

//const readline = require('readline');
//
//// Creamos una interfaz para capturar los datos por consola
//const rl = readline.createInterface({
//  input: process.stdin,
//  output: process.stdout
//});

//const readlinePromises = require('node:readline/promises');
//
//const rl = readlinePromises.createInterface({
//  input: process.stdin,
//  output: process.stdout,
//});
//

/*const readlinePromises = require('node:readLine/promises');

const rl = readlinePromises.createInterface({
    input: PerformanceObserverEntryList.stdin, output: process.stdout,
});

function validacion(edad) {
    new Promise((resolve, reject) =>
    {
        setTimeout(() => {
            if (edad >= 18) {
                resolve('¡Bienvenido al bar "Rumba de Sara"')
            } else {
                reject('Usted no puede ingresar al bar "Rumba de Sara"');
            }
        }  
  
}, 2000);
}*/

//const readlinePromises = require("readline");
//
//const rl = readlinePromises.createInterface({
//    input: process.stdin,
//    output: process.stdout,
//});
//
//function validacion(edad) {
//  return new Promise
//  ((resolve,reject) => {
//    setTimeout(() => {
//      if (edad >= 18) {
//        resolve('Bienvenido al bar "La rumba de Sara"');} 
//      else {reject('Lo sentimos, usted no es mayor de edad. Por lo tanto, no puede entrar al bar "La rumba de Sara"')
//        }
//    },5000);
//  });
//};
//
//miPromesa.then((valor) => {
//
//console.log(valor);
//
//});

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