import { AppBar } from "../components/AppBar";
import { BlogCard } from "../components/BlogCard";
import { useBlogs } from "../hooks/hooks";


export function Blogs(){

    const {isLoading, blogs} = useBlogs();
    if(isLoading){
        return(
            <div>
                loading...
            </div>
        )
    }
    return(
        <div>
            <AppBar/>
            <div className="flex justify-center">
                <div>
                    {blogs.map(blog => {
                        return(
                            <BlogCard 
                                id = {blog.id}
                                authorName= {blog.author.name} 
                                title={blog.title} 
                                content={blog.content}
                                publishedDate="Jan 2, 2024"
                            />
                        )
                    })}
                </div>
            </div>
        </div>
        
    )
}