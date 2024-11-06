import ytLogo  from '/image/ytlogo.jpg'

export function Appbar(){

    return(
            <div className='grid grid-cols-12'>
                <div className='grid grid-cols-6 col-span-3 pt-5'>
                    <div className='col-span-1 pl-5'>
                        <svg className='' xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                        </svg>
                    </div>
                    <div className='col-span-5 h-10 w-24'>
                        <img src={ytLogo} alt="YouTube-logo" />
                    </div>
                </div>


                <div className='grid grid-cols-10 col-span-6 pt-2'>
                    {/* search bar */}
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
                </div> 
                <div className='grid grid-cols-6 col-span-3 pt-3 justify-end'>
                    <div className='col-span-6 justify-self-end pr-10'>
                        <button className='border border-gray-200 rounded-full px-2 py-1'>
                            <div className='flex justify-between'>
                                <div className='text-blue-500 font-medium pr-1'>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                                    </svg>
                                </div>
                                <div className='text-blue-500 font-semibold text-sm pt-0.5'>
                                    Sign in
                                </div>
                            </div>
                        </button>
                    </div>
                </div>
            </div>

    )
}