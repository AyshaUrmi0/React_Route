import React from 'react';
import Post from '../Post/Post';
import { useLoaderData } from 'react-router-dom';

const Posts = () => {
    const posts = useLoaderData();
    return (
        <div>
            <h3>Posts:</h3>
            <p>{posts.length}</p>
            <div>
                {posts.map((post) => (
                    <Post post={post} key={post.id} />
                ))}
            </div>
        </div>
    );
};

export default Posts;
