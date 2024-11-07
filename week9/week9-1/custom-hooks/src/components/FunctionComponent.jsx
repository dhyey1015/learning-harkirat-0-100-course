import { useState } from "react";


export function FunctionComponent(){

    const [count, setCount] = useState(0);

    function Increment(){
        setCount(count + 1);
    }

    return (
        <div>
            <p>Function Component</p>
            <p>count: {count}</p>
            <button onClick={Increment}>Increment</button>
        </div>
    )
}