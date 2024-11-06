
export function SearchBar(){

    return(
        <>  
            <div className='col-span-8 justify-center border-gray-300 pl-10'>
                <input className='w-full border border-gray-300 h-10 rounded-l-full pl-8' type="text" placeholder='Search'/>
            </div>
            {/* search symbol */}
            <div className='flex justify-center col-span-1 bg-gray-200 rounded-r-full h-10 w-16'>
                <button className='flex justify-center pt-2 rounded-r-full h-10 w-16 border border-gray-300 '>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                    </svg>
                </button>   
            </div>
            {/* microphone */}
            <div className=''>
                <div className='col-span-1 flex justify-center bg-gray-200 rounded-full h-10 w-10'>
                    <button>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M12 18.75a6 6 0 0 0 6-6v-1.5m-6 7.5a6 6 0 0 1-6-6v-1.5m6 7.5v3.75m-3.75 0h7.5M12 15.75a3 3 0 0 1-3-3V4.5a3 3 0 1 1 6 0v8.25a3 3 0 0 1-3 3Z" />
                        </svg>
                    </button>
                </div>
            </div>
        
        </>
    )
}