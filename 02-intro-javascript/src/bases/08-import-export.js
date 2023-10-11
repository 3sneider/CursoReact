// import, export

// primera forma para importar js
// import { heroes } from './data/heroes'

// tenemos un snipet para esta construccion,  imp
// import  {heroes } from './data/heroes'

// se puede hacer referencia directa al objeto 
// escribirnedo el nombre del objeto que buscas ejm heroes
// import { heroes } from "./data/heroes"

// si se exporta con la sintax default el heroes es sin {}
import heroes, {owners } from "../data/heroes";

// console.log( heroes );

const getHeroeById = ( id ) => {
  return heroes.find( (heroe) => heroe.id === id);
}

const getHeroesByOutner = ( owner) => {
  return heroes.filter( (heroe) => heroe.owner === owner);
}

// console.log( owners );

// console.log(getHeroeById(2) );
// console.log(getHeroesByOutner('Marvel') );


export default getHeroeById;