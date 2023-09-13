
export const Tour = ({id, name, price, image, info, removeTour}) => {
  return (
    <article className="single-tour" key={id}>
        <img className="img" alt={name} src={image}/>
        <span className="tour-price">{price}</span>
        <div className="tour-info">
            <h5>{name}</h5>
            <p className="">{info}</p>
            <button type="button" className="btn btn-block delete-btn" onClick={() =>removeTour(id) } >Not Interested</button>
            
        </div>
    </article>
  )
}
