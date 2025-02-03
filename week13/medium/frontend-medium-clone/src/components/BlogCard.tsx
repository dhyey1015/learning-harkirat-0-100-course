import { Link } from "react-router-dom";

interface BlogCardInterface {
    authorName: string;
    title: string;
    content: string;
    publishedDate: string;
    id: number;
}

export function BlogCard({id, authorName, title, content, publishedDate} : BlogCardInterface) {

    return(
        <Link to={`/blog/${id}`}>
        
        <div className="p-4 border-b border-slate-200 w-screen max-w-screen-md cursor-pointer">
           
            <div className="flex pb-2 ">
                <div className="">
                    <AvatarBlogCard name={authorName} />
                </div>
                <div className="flex justify-center flex-col font-normal pl-2 text-sm">
                    {authorName} 
                </div>
                <span className="flex justify-center flex-col pl-1 font-bold text-slate-400">&middot;</span> 
                <div className="flex justify-center flex-col pl-1 text-slate-600 text-sm font-extralight">
                    {publishedDate}  
                </div>
            </div>
            <div  className="text-xl font-extrabold pb-1">
                {title}
            </div>
            <div className="text-sm font-normal text-slate-500 pb-2">
                {content.slice(0,200) + "..."}
            </div>
            <div className="text-slate-400 text-xs">
                {`${Math.ceil(content.length/100)} minute(s) read`}
            </div>
            {/* <div className="bg-slate-100 h-0.5 w-full"></div> */}
        </div>
    </Link>
    )
}

export function AvatarBlogCard({name}: {name: string}){
    const newName = name.toUpperCase()
    return(
        <div className="relative inline-flex items-center justify-center w-6 h-6 overflow-hidden 
                bg-gray-400 rounded-full text-gray-800 font-normal hover:bg-gray-300 
                transition-colors duration-200">
            <span className="text-white">{newName[0]}</span>
        </div>
    )
}