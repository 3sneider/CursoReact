// <></> = fragment, solo que este ultimo es muy largo de usar
// import Fragment from 'react'
// <Fragment><Fragment/>
import PropTypes from 'prop-types'

const mesasge = 'Desde una variable';

const objeto = {
    nombre: 'Esneider',
    edad:31
}

const funcionA = () => "Hello World";

// las propr no se envian como parametro, se desecstructuraan
export const EsneiderApp = ( { 
    title,
    subTitle,
    otroTitulo } ) => {     

    // estas propr vienen desde el componente padre
    // console.log(props);

  return (
    <> 
        <h1 data-testid="test-title">{ title }</h1>
        {/* <h1>Esneider Espitia aplication</h1> */}
        <h2>{ subTitle }</h2>
        {/* <h2>Software Enginier</h2> */}
        <p>para escribir en el hatml lo hacemos dentro de corchetes como aqui 1 + 2 =  {1 + 2}</p> 
        <p>Tambien se puede hacer con variables como : { mesasge }</p> 
        <p>Tambien se pueden enviar objetos pero hay que sanitizarlos { JSON.stringify(objeto) }</p>
        <p>se pueden llamar datos desde funciones { funcionA() }</p>
        <p>ahora, para colocar estilos podemos crear el css en la misma carpeta del componenete</p>
        <p>e importarlo en el componente para que lo tome, a menos que sea un estilo global, estos estilos si estan en la raiz de src</p>
        <p>las proptypes se instalan si trabajas con vite, si no ya viene por defecto</p>
        <p>podemos hacer uso de propiedades por defecto en caso de que el padre no nos envie nada pero no queramos disparar un error</p>
        <p>en este caso por ejemplo no lo envian y tenemos el siguiente mensaje { subTitle}</p>
        <p>las propiedad es por defecto se pueden crear tabien como un objeto</p>
    </>
  )
}

// con esto se definen los tipos de las propr
EsneiderApp.propTypes = {
    // se pueden definir tipos y obligatiridad
    title: PropTypes.string.isRequired
}

// hay una gerarqquia que indica que primero toma los valores del proptypes
EsneiderApp.defaultPropr = {
    otroTitulo: 'no Hay titulo'
}

