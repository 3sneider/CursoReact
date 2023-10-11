
describe('Pruebas', () => { 

    test('descrpcion', () => {
        // if( 1 === 0){
        //     throw new Error('Error')
        // }    
    
        // esisten tres partes para las pruebas y asi lo vamos a ordenar
    
        // 1. Arrange
        const message1 = 'Hola Mundo';
    
        // 2. Act
        const message2 = message1.trim();
    
        // 3. Assert
        expect( message1 ).toBe( message2 ) // tobe es la forma de decir igual a 
    })

})