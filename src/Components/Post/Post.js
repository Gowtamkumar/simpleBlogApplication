import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import Navbar from '../Sheard/Navbar/Navbar';

const Post = () => {
    const { postId } = useParams();
    const [post, setpost] = useState({})
    const [comment, setComments] = useState([])

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
            .then(res => res.json())
            .then(data => setpost(data))

    }, [postId])

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/comments?postId=${postId}`)
            .then(res => res.json())
            .then(data => setComments(data))
    }, [postId])
    return (
        <section className="container">
            <Navbar></Navbar>
            <div className="mt-5">
                <ul class="list-group">
                    <li class="list-group-item">
                        <div className="row">
                            <div className="col-md-7 p-4">
                                <h3>{post.title}</h3>
                                <p>{post.body}</p>
                            </div>
                            <div className="col-md-5">
                                <img src="https://i.ibb.co/N3kh5vj/fitness-trainer.jpg" alt="" className="img-fluid" />
                            </div>
                        </div>
                    </li>
                </ul>
                {/* Comments */}
                <div className="p-5">
                    <h4>Comments</h4>
                    {comment.map(singlecomment => <div className="">
                        <ul class="list-group mt-3">
                            <li class="list-group-item">
                                <h3>{singlecomment.name}</h3>
                                <p>{singlecomment.body}</p>
                            </li>
                        </ul>
                    </div>)
                    }
                </div>
            </div>
        </section>
    );
};
export default Post;