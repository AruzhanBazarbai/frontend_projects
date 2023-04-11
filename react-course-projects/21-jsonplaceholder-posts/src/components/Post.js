import './Post.css'
function Post(props){
    const {userId,id,title,body}=props
    return (
        <div className="post">
            <h1>user Id: {userId}</h1>
            <h1>id: {id}</h1>
            <h1>title: {title}</h1>
            <h1>body: {body}</h1>
        </div>
    )
}
export default Post