import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import Navbar from '../Sheard/Navbar/Navbar';

const User = () => {
    const { userID } = useParams();
    const [user, setUser] = useState({})
    const [userPost, setUserpost] = useState([])
    // This useEffect only show user
    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/users/${userID}`)
            .then(res => res.json())
            .then(data => setUser(data))
    }, [])
// This useEffect only show user all post
    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userID}`)
            .then(res => res.json())
            .then(data => setUserpost(data))
    }, [])
    console.log(userPost)
    return (
        <section className="container">
            <Navbar></Navbar>
            <div className="row">
                <h2>User Name: {user.name}</h2>
            </div>
            <div className="row">
                {
                    userPost.map((UserPostData) =>
                        <div className="col-md-12" key={UserPostData.id}>
                            <ul class="list-group">
                                <li class="list-group-item">
                                    <h3>{UserPostData.title}</h3>
                                    <p>{UserPostData.body}</p>
                                </li>
                            </ul>
                        </div>
                    )
                }
            </div>
        </section>
    );
};

export default User;