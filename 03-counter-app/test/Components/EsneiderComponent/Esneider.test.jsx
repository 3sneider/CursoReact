import { render } from '@testing-library/react';
import { EsneiderApp } from '../../../src/Components/EsneiderComponenet/EsneiderApp';

describe('pruebas en esneider componene', () => { 

    test('debe hacer match con el snapshot', () => { 
        const title = 'titulo de pruebas' ;
        const { container } = render(<EsneiderApp title = { title }/>)

        // toma un pantallazo del componente
        // evalua si el codigo ha cambiado antes de que sea actualizado 
        expect( container ).toMatchSnapshot();

        // console.log(container);


     });

     test('debe mostrar el titulo', () => { 
        const title = 'titulo de pruebas' ;
        const { container, getByText } = render(<EsneiderApp title = { title }/>)

        expect( getByText(title)).toBeTruthy();

        const h1 = container.querySelector('h1');
        expect(h1.innerHTML).toBe( title );    //.toContain()     
     })


     test('debe mostrar el titulo y e lsubtitulo', () => { 
         const title = 'titulo de pruebas' ;
         const subTitle = 'subtitulo de pruebas' ;
         
        const { getAllByText } = render(<EsneiderApp title = { title }  subTitle = { subTitle }/>)
        
        expect( getAllByText(subTitle).length ).toBe( 1 );    //.toContain()     
     })

})