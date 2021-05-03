
import { useContext } from 'react'
import { CounterContext } from '../App';


function CompD() {

    const counter = useContext(CounterContext)

    //console.log(counter);
    const { count, increment, decrement, reset } = counter;
    
    return (
        <div>
            <h3>Component - D </h3>
            <div>
                <p>Count : <b>{count}</b></p>
                <button onClick={increment}>Increment</button>
                <button onClick={decrement}>Decrement</button>
                <button onClick={reset}>Reset</button>
            </div>
        </div>
    )
}

export default CompD



