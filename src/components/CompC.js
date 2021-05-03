
import { CounterContext } from '../App';


function CompC() {
    return (
        <div>
            <h3>Component - C </h3>    
            
            <CounterContext.Consumer>
                {
                    counter => {
                        // console.log(counter);
                        const { count, increment, decrement, reset } = counter;

                        return (
                            <div>
                                <p>Count : <b>{count}</b></p>
                                <button onClick={increment}>Increment</button>
                                <button onClick={decrement}>Decrement</button>
                                <button onClick={reset}>Reset</button>
                            </div>
                        )
                    }
                }
            </CounterContext.Consumer>
        
        </div>
    )
}

export default CompC



