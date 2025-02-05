import { Link } from "react-router-dom"


export function AppBar(){
    return(
        <div className="border-b border-slate-200 flex justify-between px-10 py-4">
            <Link to={'/blogs'} className="flex flex-col justify-center text-4xl font-bold cursor-pointer">        
                    Medium
            </Link>
            
            <div>
                <Link to={'/publish-blog'}>
                    <button type="button" 
                        className="mr-6 focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-4 py-1.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">
                            + New
                    </button>
                </Link>
                <AvatarAppBar name= "dhyey"/>
            </div>
        </div>
    )
}


export function AvatarAppBar({name}: {name: string}){
    const newName = name.toUpperCase()
    return(
        <div className="relative inline-flex items-center justify-center w-10 h-10 overflow-hidden 
                bg-gray-400 rounded-full text-gray-800 font-normal hover:bg-gray-300 
                transition-colors duration-200">
            <span className="text-xl text-white">{newName[0]}</span>
        </div>
    )
}