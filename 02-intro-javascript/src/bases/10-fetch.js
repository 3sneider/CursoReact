// fetch api

const apiKey = 'C1khQe3Z7R1W2lfTO9myKeuShdqFYSGC';

const peticion = fetch(`http://api.giphy.com/v1/gifs/random?api_key=${ apiKey }`);

peticion
    .then( resp => resp.json() )
    .then( ({ data }) => { // las pormesas pueden encadenarse, si la anterior retorna una promesa 
        const { url } = data.images.original;
        
        const img = document.createElement('img');
        img.src = url;

        document.body.append( img );


    })
    .catch( console.warn );