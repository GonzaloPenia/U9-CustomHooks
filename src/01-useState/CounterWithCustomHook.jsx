import { useCounter } from "../hooks/useCounter"

export const CounterWithCustomHook = () => {

  const {counter, increment, reset, decrement} = useCounter(1);

  return (
    <>
    
    <h1>Counter with custom hook: {counter} </h1>
    <hr />
    <button onClick={ ()=> increment(2) } className="btn btn-primary"> +1</button>
    <button onClick={ reset } className="btn btn-danger"> Reset</button>
    <button onClick={ ()=> decrement(1) } className="btn btn-secondary"> -1</button>
    
    </>
  )
}
