import useSWR from 'swr'

const Fetcher = async function(url){
    const response = await fetch(url)
    const data = await response.json()
    return json
}

function Profile(){
    const {data, error, isLoading} = useSWR('https://jsonplaceholder.typicode.com/todos/', Fetcher)

    if(error) return <div>failed to get data</div>
    if(isLoading) return <div>Loading...</div>
    return(
        <div>hello you have {data.length} todos!</div>
    )
}
