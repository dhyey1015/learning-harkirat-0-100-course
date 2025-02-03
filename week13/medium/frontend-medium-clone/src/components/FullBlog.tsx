import { Blog } from "../hooks/hooks"
import { AppBar, AvatarAppBar } from "./AppBar"
import { AvatarBlogCard } from "./BlogCard"

export function FullBlog({blog} : {blog: Blog}){

    return (
        <div>
            <AppBar />
            <div className="flex justify-center">
                <div className="grid grid-cols-12 px-10 w-full pt-[20px] max-w-7xl">
                    <div className="col-span-8">
                        <div className="text-5xl font-extrabold pb-3">
                            {blog.title}
                        </div>
                        <div className="text-slate-500 pb-8">
                            Posted on Dec 2, 2024
                        </div>
                        <div>
                            {blog.content}
                        </div>
                    </div>
                    <div className="col-span-4 pl-20">
                        <div className="font-semibold text-xl ">
                            Author
                        </div>
                        <div className="flex">
                            <div className="flex flex-col justify-center pr-4">
                                <AvatarAppBar name={blog.author.name}/>
                            </div>
                            <div>
                                <div className="text-3xl font-bold">
                                    {blog.author.name}
                                </div>
                                <div className="text-slate-500 pt-1">
                                    Random catch phrase about the author's ability to grab the users attention
                                </div>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
        
    )
}