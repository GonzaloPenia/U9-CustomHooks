import { useState } from "react"

export const CounterApp = () => {
    
    const [counter, setCounter] = useState(10)
  
    return (
    <>  
    
    <h1>CounterApp: {counter} </h1>
    
    <hr />
    <button 
    className="btn btn-primary"
    onClick={ () => setCounter( counter+1 ) }> +1 </button>


    </>
  )
}
