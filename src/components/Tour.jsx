
export const Tour = ({id, name, price, image, info}) => {
  return (
    <article className="single-tour" key={id}>
        <img className="img" alt={name} src={image}/>
        <span className="tour-price">{price}</span>
        <div className="tour-info">
            <h5>{name}</h5>
            <p className="">{info}</p>
        </div>
    </article>
  )
}
