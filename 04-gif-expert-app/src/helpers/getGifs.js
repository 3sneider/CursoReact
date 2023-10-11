export const getGifs = async( category ) => {

    // url del servicio a consumir, la key es variable 
    const url = `https://api.giphy.com/v1/gifs/search?api_key=o4qlQZYC1gOU4Ph55O9sWeTcjh3jNVda&q=${ category }&limit=10`;

    // captura la respuesta 
    const resp = await fetch( url );

    // desesstructuramos y traemos solo lo que se necesita
    const { data } = await resp.json();

    // como data es un array hacemos un map para retornar otro array con los datos que queremos
    const gifs = data.map( img => ({
        id: img.id,
        title: img.title,
        url: img.images.downsized_medium.url
    }));

    // retornamos el listado de gifs
    return gifs;
}