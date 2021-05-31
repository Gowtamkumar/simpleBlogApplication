import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import Navbar from '../Sheard/Navbar/Navbar';

const Post = () => {
    const { postId } = useParams();
    const [post, setpost] = useState({})
    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
            .then(res => res.json())
            .then(data => setpost(data))

    }, [])

    return (
        <div>
            <Navbar></Navbar>
            <h2>Single post{postId}</h2>
            <ul class="list-group">
                <li class="list-group-item">
                    <h3>{post.title}</h3>
                    <p>{post.body}</p>
                </li>
            </ul>
        </div>
    );
};

export default Post;