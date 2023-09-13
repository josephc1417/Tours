import {useState} from 'react'


export const Tour = ({id, name, price, image, info, removeTour}) => {
 const [readMore, setReadMore] = useState(false) //boolean
// display the first 250 characters of the paragraph 

  return (
    <article className="single-tour" key={id}>
        <img className="img" alt={name} src={image}/>
        <span className="tour-price">{price}</span>
        <div className="tour-info">
            <h5>{name}</h5>
            
            
            {/*only want to display the entire text if the sate value is true */}
            <p className=""> {readMore ? info: `${info.substring(0,200)}...`}
            <br />
            {/*When button is clicked, the state will be set to the opposite value(toggle)*/}
            <button type="button" className="info-btn" onClick={() => setReadMore(!readMore)}>
            {readMore ? 'Show less' :'Read More'}</button>
            </p>
            <button type="button" className="btn btn-block delete-btn" onClick={() =>removeTour(id) } >Not Interested</button>
            
        </div>
    </article>
  )
}
