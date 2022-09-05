import axios from "axios";
import { useEffect, useState } from "react";

const PostDiscussion = () =>{
    const [userPost, setPost] = useState([]);
    const [User, setUser] = useState("Anonymous");
    const [Title, setTitle] = useState("");
    const [Message, setMessage] = useState("");
    const [Posts, getPosts] = useState([]);

    const getUsername = (e) => {
        setUser(e.target.value);
    }

    const getTitle = (e) => {
        setTitle(e.target.value);
    }

    const getMessage = (e) => {
        setMessage(e.target.value);
    }

    const addPost = (e) => {
        axios.post("http://localhost:8081/api/addDiscussionPost", {
        "Post_id":97,
        "Username":User,
        "PostTitle":Title,
        "PostMessage":Message
        }).then(result => {
            setPost(result.data);
            console.log(result.data);
            window.location.reload();
        })
    }

    useEffect(() => {
        axios.get("http://localhost:8081/api/getAllPosts").then(result => {
            getPosts(result.data);
        })
    }, []);

    return (
       <>

           <input type="text" className = 'search-input' placeholder= "Username" onChange={e => getUsername(e)}></input>
           <input type="text" className = 'search-input' placeholder= "Title" onChange={e => getTitle(e)}></input>
           <input type="text" className = 'search-input' placeholder= "Message" onChange={e => getMessage(e)}></input>

           <button onClick={e => addPost(e)} >tutti</button>

           {Posts.map(post => (
                <div>
            <h3>Username: {post.Username}</h3>
            <h4>Title: {post.PostTitle}</h4>
            <p>Message: {post.PostMessage}</p>
            </div>
           ))}

           </>
    );

}
export default PostDiscussion;