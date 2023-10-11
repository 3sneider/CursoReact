import { retornaArreglo } from "../../base-pruebas/07-deses-arr";

describe('07-desestructuracion', () => { 

    test('retornaArreglo', async () => { 

        const testArray = ['ABC', 123];

        const [letters, numbers] = retornaArreglo();

        expect( letters ).toBe( testArray[0] );
        expect( typeof letters ).toBe( 'string' );
        expect( numbers ).toBe( testArray[1] );
        expect( typeof numbers ).toBe( 'number' );

        // espera cualquier tipo de string
        expect( letters ).toEqual( expect.any(String));

    })
    
 })