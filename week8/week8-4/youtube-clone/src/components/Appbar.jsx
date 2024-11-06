import { SearchBar } from './SearchBar'
import { SignInButton } from './SigninButton'
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
                    <SearchBar/>
                </div> 
                <div className='grid grid-cols-6 col-span-3 pt-3 justify-end'>
                   <SignInButton/> 
                </div>
            </div>
    )
}