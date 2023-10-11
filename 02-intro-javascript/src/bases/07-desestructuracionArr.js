// Desestructuración DE ARREGLOS

const personajes = ['Goku','Gohan','Goten'];

// esta destructurando el array tomando un valor y asegignandola a goku
// con los espacios vacios podriamos definir el indice
const [ , , goku ] = personajes;

console.log(goku);

const retonarArreglo = () => {
  return ['ABC', 123]
}

const [letras, numros]  = retonarArreglo();
console.log(letras, numros);

const returnArray = ( valor ) => {
  return [ valor , () => { 
    console.log('Hello Wrold')
  }];
}

const arr = returnArray( 'Esneider' );

console.log(arr);
console.log(arr[1]());

const [ nombre, setNombre] = returnArray( 'Esneider' );

console.log(nombre);
console.log(setNombre);


 