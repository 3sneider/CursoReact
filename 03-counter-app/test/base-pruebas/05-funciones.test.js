import { getUser, getUsuarioActivo } from "../../base-pruebas/05-funciones";

describe('funciones', () => { 

    test('getUser', () => { 
        const testUser = {
            uid: 'ABC123',
            username: 'El_Papi1502'
        };

        const user = getUser();

        expect( testUser ).toEqual( user )
    })

    test('GetUsuarioActivo', () => { 
        const testUser = {
            uid: 'ABC567',
            username: 'camilo'
        };

        const user = getUsuarioActivo( 'camilo' );

        expect( testUser ).toEqual( user )
     })
})