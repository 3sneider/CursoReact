
// no se pueden hacer pruebas de algo que no esta exportado 
export function getSaludo(nombre) {
    return 'Hola ' + nombre;
}

const nombre = 'pedro';


// el test suit ejecuta todo el codigo 
console.log( `Este es un texto: ${ getSaludo( nombre ) }  ` );