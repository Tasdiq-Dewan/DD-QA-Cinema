import axios from "axios";
import { useEffect, useState } from "react";
import "./DiscussionAxios.css";
import Filter from 'bad-words';

const PostDiscussion = () =>{
    const [userPost, setPost] = useState([]);
    const [User, setUser] = useState("Anonymous");
    const [Title, setTitle] = useState("");
    const [Message, setMessage] = useState("");
    const [Posts, getPosts] = useState([]);
    var Filter = require('bad-words'),
    filter = new Filter();

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
        if (Title.length ===0 || Message ===0){
            alert("Please complete the required fields");
        }
        else{
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
    }

    useEffect(() => {
        axios.get("http://localhost:8081/api/getAllPosts").then(result => {
            getPosts(result.data);
        })
    }, []);

    return (
       <div className = 'background'>
        <h3 className ='text'>Please enter a username, you can post anonymously if you desire</h3>
           <input type="text" className = 'username-input' placeholder= "Username" onChange={e => getUsername(e)}></input>
           <h3 className ='text'>Enter the title of what you would like to discuss</h3>
           <input type="text" className = 'title-input' placeholder= "Title" onChange={e => getTitle(e)}></input>
           <h3 className ='text'>Type in your message here, please be civil and any bad language will be censored</h3>
           <input type="text" className = 'data-input' placeholder= "Message" onChange={e => getMessage(e)}></input>
            
           <button className = 'button-56' onClick={e => addPost(e)} >Create Topic</button>

           {Posts.map(post => (
                <div className='discussion-Table'>
            <h2 className='title-Text'>Title: {filter.clean(post.PostTitle)}</h2>
            <h3 className='user-Text'>Username: {filter.clean(post.Username)}</h3>
            <p className='message-Text'>Message: {filter.clean(post.PostMessage)}</p>
            </div>
           ))}

                
           </div>
    );

}
export default PostDiscussion;