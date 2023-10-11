
// desestructuramos el dato que revibimos desde el grid
export const GifItem = ({ title, url, id }) => {

    return (
      <div className="card">
          <img src={ url } alt={ title } />
          <p>{ title }</p>
      </div>
    )
  
}