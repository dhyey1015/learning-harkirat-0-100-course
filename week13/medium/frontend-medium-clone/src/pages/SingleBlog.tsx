import { useParams } from "react-router-dom";
import { useBlog } from "../hooks/hooks";
import { FullBlog } from "../components/FullBlog";

export function SingleBlog(){
    const { id } = useParams()
    const { isLoading, blog} = useBlog({
        id: Number(id)
    })
    if(isLoading){
        return(
            <div>loading...</div>
        )
    }
    
    return(
        <div>
            <FullBlog blog={blog}/>
        </div>
    )
}