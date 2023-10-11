// objetos literales

const persona = {
  nombre: 'tony',
  apellido: 'start',
  edad: 45,
}

// estamos creando un clon de un obeto en un objeto nuevo 
const persona2 =  { ...persona }

console.log(persona);
console.log({persona});