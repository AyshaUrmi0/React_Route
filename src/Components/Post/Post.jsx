import React from 'react';

const Post = ({ post = {} }) => {
    console.log(post);
    const{id,title}=post;
    return (
        <div>
           
            <h2>{id}</h2>
            <p>{title}</p>
        </div>
    );
};

export default Post;