import React, { useState } from 'react';
import { AddCategory, GifGrid } from './components';
// el archivo barril simplifica las importaciones, index.js
// import { AddCategory } from "./components/AddCategory";
// import { GifGrid } from './components/GifGrid';

export const GifExpertApp = () => {

    // espacio en memoria para mantener informacion
    const [categories, setCategories] = useState([''])

    // agregar nueva categoria al hook
    const onAddCategory = (newCategory) => {
        if (categories.includes(newCategory)) return;

        // con setCategories creo un nuevo elemento categories
        // al cual se le agrega un nuevo valor
        // segun el orden de estos parametors el valor sera insertado
        // al comienso o al final del array
        setCategories([newCategory, ...categories]);
    }

    return (
        <>
            <h1>GifExpertApp</h1>

            {/* de esta manera enviamos el state al hijo para que sea el quien lo opere
            y agrege la informacion que se deba agregar, linea 23 del addCategory */}
            {/* <AddCategory setCategories={ setCategories }/> */}

            {/* invacando el componente desde el padre podemos invocar funcines
            del hijo y recibir propiedades desde el hijo, value es el inputvalue
            del componente add category*/}
            <AddCategory
                onNewCategory={(value) => onAddCategory(value)}
            />

            {
                // creamos un componente que sera un grid de gif
                // aqui mapearemos los valores del category
                categories.map((category) => (
                    <GifGrid
                        key={category}
                        category={category} />
                ))
            }
        </>
    )
}
