import { render, screen } from '@testing-library/react';
import { EsneiderApp } from '../../../src/Components/EsneiderComponenet/EsneiderApp';

describe('pruebas en esneider componenente 2', () => {

   const title = 'titulo de pruebas 2';
   const subTitle = 'subtitulo de pruebas';

   test('debe hacer match con el snapshot', () => {

      const { container } = render(<EsneiderApp title={title} />);
      expect(container).toMatchSnapshot();
   });

   test('debe mostrar el titulo 2', () => {

      render(<EsneiderApp title={title} />)
      expect( screen.getByText(title) ).toBeTruthy();  // .not.toBe......      
   })

   test('debe mostrar el titulo y e lsubtitulo 2', () => {

      render(<EsneiderApp title={title} />)
      expect( screen.getByRole('heading', { level: 1 }).innerHTML).toContain(title)     
   })

})