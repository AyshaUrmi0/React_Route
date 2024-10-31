import React from 'react';
import { Link,useNavigate } from 'react-router-dom';
import './Post.css'

const Post = ({ post = {} }) => {
    // console.log(post);
    const navigate=useNavigate();
    const{id,title,body}=post;
    const handleShowDetails = () => {
        navigate(`/post/${id}`);
    };
    return (
        <div className='post'>
           
            <h2>Id:{id}</h2>
            <p>Title:{title}</p>
            <p>Body:{body}</p>
            <Link to={`/post/${id}`}>Post Details</Link>
            <br />
            <Link to={`/post/${id}`}>
                <button onClick={handleShowDetails}> View Post Details</button></Link>
        </div>
    );
};

export default Post;