import { useEffect } from "react"
import { useState } from "react"

export default function IsOnlineHook(){

    const isOnline = useIsOnline()

    return(
        <div>
            {isOnline ? <p>you are online</p> : <p>you are offline</p>}
        </div>
    )

}

function useIsOnline(){

    const [isOnline, setIsOnline] = useState(window.navigator.onLine)

    function handleOnline(){
        setIsOnline(true)
    }
    function handleOffline(){
        setIsOnline(false)
    }

    useEffect(function(){
        window.addEventListener('online', handleOnline)
        window.addEventListener('offline', handleOffline)
        return function(){
            window.removeEventListener('online', handleOnline)
            window.removeEventListener('offline', handleOffline)
        }
    },[])

    return isOnline
}