import { useState, useEffect } from "react";
import PostList from "./PostList";

function Post(){
    const [post, setPost] = useState([])

    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then((response)=> response.json())
        .then((data)=>setPost(data))
    }, [])

    return <PostList posts={post} />
}

export default Post;