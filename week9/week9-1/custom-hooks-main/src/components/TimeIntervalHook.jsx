import { useEffect, useState } from "react";


export function TimeIntervalHook(){
    const [count, setCount] = useState(0)
    useInterval(function(){
        setCount(count => count + 1)
    }, 1000)

    return(
        <div>
            <p>your time is: {count}</p>
        </div>
    )
}

function useInterval(fn, timeout){
    useEffect(function(){
        const value =  setInterval(function(){
            fn()
        }, timeout)

        return function() {
            clearInterval(value)
        }
    }, [timeout, fn])
}