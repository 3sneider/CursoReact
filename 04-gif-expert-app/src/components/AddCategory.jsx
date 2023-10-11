import { useState } from 'react';


export const AddCategory = ({ onNewCategory }) => {

    const [ inputValue, setInputValue ] = useState('');

    // recibimos el evento y lo desestructuramos para tomar el target
    const onInputChange = ({ target }) => {
        // seteamos el valor del target optenido en el input en el inputvalue        
        setInputValue( target.value );
    }

    // se recibe el event pero sin destructurarlo
    const onSubmit = ( event ) => {
        // evitamos refresh del navegador para no perder los estados
        event.preventDefault();

        // este seria el valor que enviaremos al padre
        if( inputValue.trim().length <= 1) return;

        // se puede setear a un estate padre desde el hijo, dessetructurando 
        // setCategories( categories => [ inputValue, ...categories ]);

        // limpiar el input
        setInputValue('');

        // de esta manera emitimos un metodo al padre
        onNewCategory( inputValue.trim() );
    }

    return (
        <form onSubmit={ onSubmit }>
            <input 
                type="text"
                placeholder="Buscar gifs"
                value={ inputValue }
                onChange={ onInputChange }
            />
        </form>
    )
}