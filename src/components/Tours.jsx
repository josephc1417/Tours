import { Loading } from "./Loading"
import { Tour } from "./Tour"




export const Tours = ({tours,removeTour}) => {
    // const {id,image,info, name, price}=tours
    return (
    <section>
        <div className="title">
            <h2>Our Tours</h2>
            <div className="title.underline"></div>

            <div className="tours">
            {tours.map((tour) => {
              return(
                <Tour key={tour.id} {...tour} removeTour={removeTour} />
              )
            })}
            </div>
        </div>
    </section>
  )
}
