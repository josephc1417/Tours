import {useState,useEffect} from 'react'
import { Loading } from './components/Loading';
import { Tours } from './components/Tours';
import { Tour } from './components/Tour';

const url = 'https://course-api.com/react-tours-project';

const App = () => {
const [isLoading, setLoading] = useState(true)//set a conditional to determine if loading 
const [isError, setIsError] = useState(false)
const [tours, setTours] = useState([])

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



//^(3.) - while fetch awaits >> setup conditional return (if successful/or nay) 
if(isLoading){
  return(
    <main>
      <Loading />
    </main>
    ) 
}
if(isError){
return <h2>There was an error fetching the data</h2>
}


  return(
<main>
{/*Passing userData obj{tours} to Tours component */}  
{/*It needs to be iterated over in Tours component */}  
<Tours tours={tours} />
</main>
  ) 
};


export default App;
