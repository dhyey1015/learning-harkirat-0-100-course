import { useEffect, useState } from "react";

export function LifeCycleFunction(){
    useEffect(function(){
       console.log("function component mounted") // this part runs when code gets mounted for first time
       
       return function(){
        console.log('function component unmouned') // this part runs when code gets unmounted
       }
    }, [])

    return(
        <div>
            form Life cycle Function component
        </div>
    )
}