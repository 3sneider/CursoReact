// promesas

import getHeroeById from "./bases/08-import-export";

const getHeroeByIdAsync = (id) => {
  return new Promise( (resolve, reject) => {
    setTimeout( () => {
      const heroe = getHeroeById(id);    

      heroe != undefined ? resolve(heroe) : reject('no se encontro resultados');     
      
    }, 500)
  });
}

getHeroeByIdAsync(10)
  .then( heroe => console.log(heroe))
  .catch( console.warn );

// promesa.then((heroe) => {
//   console.log('heroe', heroe)
// })
// .catch( err => console.warn(err));