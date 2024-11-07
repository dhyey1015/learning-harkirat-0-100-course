import { useEffect, useState } from "react";

export function MouseTracerHook(){
    const mousePointer = useMousePointer();

    return(
        <div>
            <p>your mouse position is x: {mousePointer.x} y: {mousePointer.y}</p>
        </div>
    )
}

function useMousePointer(){
    const [mousePointer, setMousePointer] = useState({x: 0, y: 0})

    function handleMouseMove(event){
        setMousePointer({x: event.clientX, y: event.clientY})
    }

    useEffect(function(){
        window.addEventListener('mousemove', handleMouseMove)

        return function(){
            window.removeEventListener('mousemove', handleMouseMove)
        }
    },[])

    return mousePointer
}

