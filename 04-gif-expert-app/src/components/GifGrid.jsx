import { GifItem } from './GifItem';
import { useFetchGifs } from '../hooks/useFetchGifs';

export const GifGrid = ({ category }) => {

        // esto es un hook personalizado
        // lo desestructuramos como un objeto
    const { images, isLoading } = useFetchGifs( category );
    
    return (
        <>
            <h3>{ category }</h3>
            {
                isLoading && ( <h2>Cargando...</h2> )
            }
            

            <div className="card-grid">
                {
                    images.map( ( image ) => (
                        <GifItem 
                            key={ image.id } 
                            // enviamos el dato para que se desestructure
                            // en el componente que los recibe
                            // ... espread, sirve para esparcir las propiedades
                            { ...image }
                        />
                    ))
                }
                
            </div>

        </>
    )
}