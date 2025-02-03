

export function AppBar(){
    return(
        <div className="border-b border-slate-200 flex justify-between px-10 py-5">
            <div className="text-4xl font-bold">
                Medium
            </div>
            <div className="flex flex-col justify-center h-10 w-10">
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