
function PostList({posts = []}){

    return(
        <>
            <h2>Posts</h2>
            {
                posts.map((post)=>{
                    return <div key={post.id} style={{border: "1px solid #ddd", padding: "10px", margin: "10px 0px"}}>
                        <h3>{post.title}</h3>
                        <p>{post.body}</p>
                    </div>
                })
            }
        </>
    )
}



export default PostList;