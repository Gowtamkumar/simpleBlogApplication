import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { PostContext } from '../../App';
import Navbar from '../Sheard/Navbar/Navbar';

const User = () => {
    const { userID } = useParams();
    const [user, setUser] = useState({})
    const [userPost, setUserpost] = useContext(PostContext)
    const [postupdate, setPostupdate] = useState({})

    // This useEffect only show user
    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/users/${userID}`)
            .then(res => res.json())
            .then(data => setUser(data))

        fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userID}`)
            .then(res => res.json())
            .then(data => setUserpost(data))
    }, [userID])
    // This useEffect only show user all post




    // Delete oparation start
    const postDelete = (id) => {
        fetch(`https://jsonplaceholder.typicode.com/posts/${id.id}`, {
            method: 'DELETE',
        })
            .then(res => res.json())
            .then(data => {
                const postDelete = userPost.filter(postdelete => postdelete.id !== id.id)
                setUserpost(postDelete)
            })
    }
    // Delete oparation start
    // new Post Start
    const SinglePostAdd = () => {
        const SinglePostTitle = document.getElementById("newpostTitle").value
        const SinglePostbody = document.getElementById("newpostBody").value

        fetch(`https://jsonplaceholder.typicode.com/posts`, {
            method: 'POST',
            body: JSON.stringify({
                title: SinglePostTitle,
                body: SinglePostbody
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
            .then((response) => response.json())
            .then((data) => setUserpost([data, ...userPost]));
    }
    // new Post end
    // Update oparation start
    const postUpdateShowData = (id) => {
        // Post Update form
        fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
            .then(res => res.json())
            .then(data => setPostupdate(data))
    }

    const SinglePostUpdate = (post) => {

        const SinglePostTitleUpdate = document.getElementById("postUpdateTitle").value
        const SinglePostbodyUpdate = document.getElementById("postupdateBody").value

        fetch(`https://jsonplaceholder.typicode.com/posts/${post.id}`, {
            method: 'PUT',
            body: JSON.stringify({
                // userId: post.userId,
                // id: post.id,
                title: SinglePostTitleUpdate,
                body: SinglePostbodyUpdate
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
            .then((response) => response.json())
            .then((data) => {
                const postup = [data, ...userPost]
                const index = postup.indexOf(data)
                postup[index] = { ...data }
                setUserpost(postup)
            });
    }
    // Update oparation end

    return (
        <section className="container">
            <Navbar></Navbar>
            <div className="row mt-5">
                <div className="col-md-6">
                    <div class="card" >
                        <img src="https://st2.depositphotos.com/1104517/11965/v/600/depositphotos_119659092-stock-illustration-male-avatar-profile-picture-vector.jpg" class="card-img-top" alt="..." style={{ width: '150px', margin: "0 auto" }} className="justify-content-center" />
                        <div class="card-body">
                            <h5 class="card-title">{user.name}</h5>
                            {/* <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> */}
                        </div>
                        <ul class="list-group list-group-flush">
                            <li class="list-group-item">Emaill:  {user.email}</li>
                            <li class="list-group-item">Phone: {user.phone}</li>
                            <li class="list-group-item">Website: {user.website}</li>
                        </ul>
                    </div>
                </div>
                <div className="col-md-6 justify-content-end">
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item">Emaill:  {user.email}</li>
                        <li class="list-group-item">Phone: {user.phone}</li>
                        <li class="list-group-item">Website:  {user.website}</li>
                    </ul>

                    {/*Button trigger modal*/}
                    <div className="d-grid gap-2 mb-3">
                        <button type="button" class="btn btn-primary " data-bs-toggle="modal" data-bs-target="#exampleModalupdate" >Add New Post</button>
                    </div>

                    {/* New post Option start */}
                    {/* Modal*/}
                    <div class="modal fade" id="exampleModalupdate" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div class="modal-dialog">
                            <div class="modal-content">
                                <div class="modal-header">
                                    <h5 class="modal-title" id="exampleModalLabel">Add New Post</h5>
                                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                </div>
                                <form> {/* New post from  */}
                                    <div class="modal-body">
                                        <div class="mb-3">
                                            <input type="text" class="form-control" id="newpostTitle" />
                                        </div>
                                        <div class="mb-3">
                                            <textarea type="text" class="form-control" id="newpostBody" placeholder="Another input placeholder" />
                                        </div>
                                    </div>
                                    <div class="modal-footer">
                                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                        <button type="button" class="btn btn-primary" onClick={() => SinglePostAdd()}>Add New Post</button>
                                    </div>
                                </form>{/* New post end*/}
                            </div>
                        </div>
                    </div>
                    {/* New post Option start end*/}
                </div>
            </div>
            {/* Single User post Start */}
            <div className="row mt-5">
                {userPost.map((UserPostData) =>
                    <div className="col-md-12" key={UserPostData.id}>
                        <ul className="list-group">
                            {/* Single user post show */}
                            <li className="list-group-item p-4">
                                <h3>{UserPostData.title}</h3>
                                <p>{UserPostData.body}</p>
                                {/* single post delete button */}
                                <button className="btn btn-success"
                                    onClick={() => postDelete(UserPostData)}
                                >Delete</button> &nbsp;
                                {/*Button trigger modal*/}
                                <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={() => postUpdateShowData(UserPostData.id)}>Update</button>
                                {/* Single user post show end*/}
                                {/* Modal*/}
                                <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                    <div class="modal-dialog">
                                        <div class="modal-content">
                                            <div class="modal-header">
                                                <h5 class="modal-title" id="exampleModalLabel"> Post Update</h5>
                                                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                            </div>

                                            <form> {/* post update form */}
                                                <div class="modal-body">
                                                    <div class="mb-3">
                                                        <input type="text" class="form-control" id="postUpdateTitle" defaultValue={postupdate.title} />
                                                    </div>
                                                    <div class="mb-3">
                                                        <textarea type="text" class="form-control" id="postupdateBody" placeholder="Another input placeholder" defaultValue={postupdate.body} />
                                                    </div>
                                                </div>
                                                <div class="modal-footer">
                                                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                                    <button type="button" class="btn btn-primary" onClick={() => SinglePostUpdate(postupdate)}>Update</button>
                                                </div>
                                            </form>{/* post update form end*/}
                                        </div>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                )}
            </div>
            {/* Single User post end */}
        </section>
    );
};

export default User;