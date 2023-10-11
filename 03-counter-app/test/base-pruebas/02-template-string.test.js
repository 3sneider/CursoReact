import { getSaludo } from "../../base-pruebas/02-template-string";

describe('02-template-string', () => { 
    test('get saludo', () => { 
        const name = 'Esneider';
        const message = getSaludo(name);

        expect( message ).toBe(`Hola ${name}`)
     })
});