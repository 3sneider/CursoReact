// Desestructuración

const persona = {
  nombre: 'Tony',
  edad: 12,
  clave: 'asf',
}

// esta bien pero puede que no necesite todos los datos

console.log(persona.nombre);
console.log(persona.edad);
console.log(persona.clave);

// hacer una destructuracion seria 

const { nombre } = persona ;

console.log(nombre);

// la parte derecha es la que nosotro s declaramos
// peros si se llama de la misma manera no hay necesidad de ponerla
const { edad:edad2 } = persona ;

console.log(edad2);


// en una funcion puedo recibir un objeto y hacer la destructuracion

const retornaclave = ({ clave }) => console.log(clave);

retornaclave(persona);