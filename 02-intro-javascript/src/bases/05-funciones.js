// funciones

// esta forma no es tan recomentdada ya que este tipo de funciones se pueden 
// sobreescribir con algun tipo de dato diferente como int
function saludar(nombre){
  console.log(nombre);
}

saludar('Esneider');

// esta forma es mas recomendada
const saludar2 = function( nombre){
  return `que se ic ${nombre}`;
}

console.log(saludar2('Jess'));

// ponerlo en forma flecha seria 
const saludar3 = ( nombre ) => {
  return `como estas ${nombre}`;
}

console.log(saludar3('Roxi'));

// optimizar funciones en flecha si son de logica simple
const saludar4 = ( nombre ) => `Que me cuentas ${nombre}` ;

console.log(saludar4('Luffy'));

// ejmemplo 

const getUser = () => ({
    uid: 'asdfg',
    username: 'Esneider Espitia'
});
  
const user = getUser() ;
  
console.log(user);
