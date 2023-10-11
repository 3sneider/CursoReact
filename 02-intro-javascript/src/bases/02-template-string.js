// concatenacion normal

const nombre = 'esneider';
const apellido = 'espitia';

const nombreCompleto = nombre + ' ' + apellido ;
console.log(nombreCompleto);

// template string

function imprimir(nombrep){
  const nombreCompleto2 = `${nombrep} ${apellido}` ;
  return nombreCompleto2 ;
}

console.log(`salida desde funcion ${imprimir(nombre)}`);
