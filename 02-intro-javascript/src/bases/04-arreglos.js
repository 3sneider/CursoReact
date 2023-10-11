// arreglos en js
// un array es una coelccion de informacion que se encuentra en una varible 

// const arreglo = new Array();
const arreglo = [1, 2, 3];

// cambia la posicion
arreglo.push(1);

// copia los elementos y le agrega nuevos
let arreglo2 = [ ...arreglo, 5]

// crea una nueva copia y le da funcionalidad a los valores 
const arreglo3 = arreglo2.map((numero) => {
  return numero * 2;
});

console.log(arreglo);
console.log(arreglo2);
console.log(arreglo3);
