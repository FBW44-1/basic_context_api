
import React, { useState, createContext } from 'react';

import './App.css';
import CompA from './components/CompA';

// 1. step : to create Context
export const CounterContext = createContext();

function App() {

    const [count, setCount] = useState(0)
    
    const increment = () => {
        setCount( prevCount => prevCount + 1)
    }

    const decrement = () => {
        setCount( prevCount => prevCount - 1)
    }

    const reset = () => {
        setCount(0)
    }

    return (
        <CounterContext.Provider value={{count,  increment, decrement, reset}}>
            <div className="App">
                <CompA />
            </div>
        </CounterContext.Provider>
    );
}
export default App;




