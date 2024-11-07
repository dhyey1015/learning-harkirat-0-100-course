import photo  from '/image/image.png'
import logo  from '/image/logo.png'

export function VideoCard(props){

    return(
        // className='h-96 w-96 bg-red-500'
         <div className='cursor-pointer'> 
            <img className='rounded-2xl' src={photo} alt="image" />
            <div className="grid grid-cols-12 pt-3">
                <div className="col-span-1">
                    <img className='rounded-full'src={logo} alt="image" />
                </div>
                <div className="col-span-11 pl-3">
                    <div className='text-sm line-clamp-2 font-bold'>
                        {props.title}
                    </div>
                    <div className="flex text-gray-600 text-base">
                        <div>
                            {props.channel}
                        </div>
                        <svg className='w-5 h-5 pl-1 pt-1 ' xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                            <path  stroke-linecap="round" stroke-linejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                        </svg>
                    </div>
                    <div className="text-gray-600 text-base">
                        {props.views} | {props.dmyNumber} {props.dmy} ago
                    </div>
                </div>
                
            </div>
        </div>
    )
}