import { useState } from 'react';
import PropTypes from 'prop-types';

// nota: estos componentes se pueden crear rapido con el commando rafc
// elos hooks se identifica por la palabra use

export const CounterApp = ({ value }) => {

    const [ counter, setCounter ] = useState( value );


    // si va a usar algo del counter app es bueno tenerlo aqui si no es mejor por fuera
    const suma = () => {
        setCounter( counter + 1 ) ;
    }

    const resta = () => {
        setCounter( counter - 1 ) ;
    }

    const reset = () => setCounter( value ) ;

    return ( 
        <>
            <h1>CounterApp</h1>
            {/* <h2>value: { value }</h2> */}
            <h2>{ counter }</h2>

            <button onClick={ suma }>+1</button>
            <button onClick={ resta }>-1</button>
            <button aria-label="btn-reset" onClick={ reset }>reset</button>
        </>

    );
}

CounterApp.propTypes = {    
    value: PropTypes.number.isRequired
}
