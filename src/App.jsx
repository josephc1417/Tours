import {useState,useEffect} from 'react'

const url = 'https://course-api.com/react-tours-project';

const App = () => {
const [isLoading, setLoading] = useState(true)//set a conditional to determine if loading 
const [isError, setIsError] = useState(false)
const [Tours, setTours] = useState([])

//^(1.) - fetch API function
const getData = async () => {
  setLoading(true)
  try {
    const response = await fetch(url)
    const userData = await response.json()
    console.log(userData);
    setTours(userData)
  } catch (error) {
    setIsError(error)
    console.log(error);    
  }
  //!setting state value to false because loading is no longer taking place 
  setLoading(false)
}

//^(2.) - UE Hook (render function call on initial mount)
useEffect(() => { 
  getData()
}, [])



//^(3.) - 
if(isLoading){
  return <h2>Loading...</h2>
}
if(isError){
return <h2>There was an error fetching the data</h2>
}

//! Destructure json obj (Tours)
const {image,info, name, price}= Tours
  return(
<div>
{Tours.map((tour) => {
return(
<div className='container' key={id}>
<img src={image} className=''/>
<h2></h2>
</div>
)  
})}
</div>
  ) 
};
export default App;
