import { useEffect, useState } from "react";


export function DebounceHook(){
    const [inputValue, setInputValue] = useState('')
    const debounceValue = useDebounce(inputValue, 500)
    return(
        <div>
            Debounce value is {debounceValue}
             <input 
                type="text" 
                value= {inputValue}
                onChange={function(event){
                    setInputValue(event.target.value)
                }}
                placeholder="Search..."
            />
        </div>
       
    )
}

function useDebounce(inputValue, timeout){

    const [debouncedValue, setDebouncedValue] = useState(inputValue)
        
        useEffect(function(){
            let value = setTimeout(function(){
                setDebouncedValue(inputValue)
            }, timeout)

            return function(){
                clearTimeout(value)
            }
        },[inputValue])
    return debouncedValue
}