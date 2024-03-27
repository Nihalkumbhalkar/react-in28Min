
import { useState } from 'react';
import './Counter.css';
import CounterButtons from "./CounterButton"


export default function Counter(){

    const [count, setCount] = useState(0)

    function incrementParentCounter(by){
        setCount(count + by)
    }

    function decrementParentCounter(by){
        setCount(count - by)
    }

    return(
        <>
                    <h1>Counter App</h1>
            <div className="parentCount">{count}</div>
            <CounterButtons by={1} increment={incrementParentCounter} decrement={decrementParentCounter}/>
            <CounterButtons by={2} increment={incrementParentCounter} decrement={decrementParentCounter}/>
            <CounterButtons by={5} increment={incrementParentCounter} decrement={decrementParentCounter}/>
        </>
    )
}
