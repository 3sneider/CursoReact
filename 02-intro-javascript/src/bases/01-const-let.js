console.log("Hello world "); 

// variables y constantes

// las constantes son variables que no mutan o no cambian
const x = 1;

// las let son variables que mutan o pueden cambiar de valor
let y = 'esneider';

// se pueden declara nuevamente las mismas variables
// dentro de otros ambientes, esto es llamado variables de scop
if (true) {
  let y = 'Jess';
  console.log(y);
}

console.log(y);