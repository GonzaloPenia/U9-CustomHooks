import { useState } from "react"

export const CounterAppV2 = () => {
    //Conjunto de tres contadores y un boton que solo incremente el valor del primero.
    
    const [state, setCounter] = useState({
        counter1: 10,
        counter2: 20,
        counter3: 30
    });

    const {counter1, counter2, counter3} = state;
  
    return (
        <>  
        
        <h1>CounterAppV2</h1>
        <h3>Contador 1: {counter1} </h3>
        <h3>Contador 2: {counter2} </h3>
        <h3>Contador 3: {counter3} </h3>
        
        <hr />
        <button 
        className="btn btn-primary"
        onClick={
            () => setCounter( {
                ...state,
                counter1: counter1 + 1,
            } ) 
        }> +1 </button>

        </>
    )
}
