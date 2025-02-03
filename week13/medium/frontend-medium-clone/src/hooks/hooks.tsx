import axios from "axios";
import { useEffect, useState } from "react"
import { BACKEND_URL } from "../config";

export interface Blog {
    "id": number;
    "content":  string;
    "title":  string;
    "author": {
        "name": string;
    }
}

export const useBlogs = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [blogs, setBlogs] = useState<Blog[]>([]);

    useEffect(() => { 
        axios.get(`${BACKEND_URL}/api/v1/blog/all-blog`, {
            headers: {
                Authorization: localStorage.getItem("token")
            }
        })
        .then(response => {
            setBlogs(response.data.blog);
            setIsLoading(false);
        })
    }, []);

    return { isLoading, blogs };
};


export const useBlog = ({id} : {id: number}) =>{
    const [isLoading, setIsLoading] = useState(true);
    const [blog, setBlog] = useState<Blog>();
    useEffect(() => {
        axios.get(`${BACKEND_URL}/api/v1/blog/get-blog/${id}`, {
            headers:{
                Authorization: localStorage.getItem("token")
            }
        })
            .then(response => {
                setBlog(response.data.blogs);
                setIsLoading(false);
            })
    },[])

    return {
        isLoading,
        blog
    }
}

