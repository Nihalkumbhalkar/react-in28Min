import "./Counter.css"
import { useState } from "react";

export default function CounterButtons({by, increment, decrement}){

    // console.log(by); 
    const [count, setCount] = useState(0);

    function incrementCounterFunction(){

        setCount(count + by)
        console.log(count);
        increment(by);
        // console.log(state);
        // console.log("Increment Clicked");
    }

    function decrementCounterFunction(){
        setCount(count - by)
        console.log(count)
        decrement(by);
    }

    return(
        <div className="counter">

            {/* <span className="count">{count}</span> */}
            <br/>
            <button  className="counterButton" onClick={incrementCounterFunction}>+{by}</button>
            <button  className="counterButton" onClick={decrementCounterFunction}>-{by}</button>
        </div>
    )
}