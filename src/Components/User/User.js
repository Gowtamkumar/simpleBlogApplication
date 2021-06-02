import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import Navbar from '../Sheard/Navbar/Navbar';
import { useForm } from "react-hook-form";
import { Link } from 'react-router-dom';

const User = () => {
    const { userID } = useParams();
    const [user, setUser] = useState({})
    const [userPost, setUserpost] = useState([])
    const [postupdate, setPostupdate] = useState({})

    // update from 
    const { register, handleSubmit, errors } = useForm();
    const onSubmit = data => console.log("ddd", data);

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
    console.log(user.id)




    const postDelete = (id) => {
        fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
            method: 'DELETE',
        })
            .then(res => res.json())
            .then(data => {
                console.log("Delete Successfull")
            })
        console.log(id)
    }

    // new Post Start
    const SinglePostAdd = () => {
        const SinglePostTitle = document.getElementById("postUpdateTitle").value
        const SinglePostbody = document.getElementById("postupdateBody").value

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





    // UPdate start
    const postUpdate = (id) => {

        // Post Update form
        fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
            .then(res => res.json())
            .then(data => setPostupdate(data))
    }

    const SinglePostUpdate = (id) => {
        const SinglePostTitle = document.getElementById("postUpdateTitle").value
        const SinglePostbody = document.getElementById("postupdateBody").value

        fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
            method: 'PATCH',
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
    // UPdate end

    console.log("lksjdflasdkfjlka", postupdate)
    return (
        <section className="container">
            <Navbar></Navbar>
            <div className="row "  >
                <div className="col-md-6">
                    <h2>User Name: {user.name}</h2>
                </div>
                <div className="col-md-6 d-flex justify-content-end">



                    {/*Button trigger modal*/}
                    <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal" >Add New Post</button>

                    {/* Modal*/}
                    <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div class="modal-dialog">
                            <div class="modal-content">
                                <div class="modal-header">
                                    <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
                                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                </div>

                                <form> {/* post update form */}
                                    <div class="modal-body">
                                        <div class="mb-3">
                                            <input type="text" class="form-control" id="postUpdateTitle" />
                                        </div>
                                        <div class="mb-3">
                                            <textarea type="text" class="form-control" id="postupdateBody" placeholder="Another input placeholder" />
                                        </div>
                                    </div>
                                    <div class="modal-footer">
                                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                        <button type="button" class="btn btn-primary" onClick={() => SinglePostAdd()}>Update</button>
                                    </div>
                                </form>{/* post update form end*/}
                            </div>
                        </div>
                    </div>








                    {/* <button className="btn btn-success ">
                        <Link to="/newpost" className="text-light">Add New Post</Link>
                    </button> */}




                </div>
            </div>
            <div className="row">
                {
                    userPost.map((UserPostData) =>
                        <div className="col-md-12" key={UserPostData.id}>
                            <ul className="list-group">
                                <li className="list-group-item">
                                    <h3>{UserPostData.title}</h3>
                                    <p>{UserPostData.body}</p>


                                    <button
                                        className="btn btn-success"
                                        onClick={() => postDelete(UserPostData.id)}
                                    >Delete</button>


                                    {/*Button trigger modal*/}
                                    <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={() => postUpdate(UserPostData.id)}>
                                        Update
                                    </button>

                                    {/* Modal*/}
                                    <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                        <div class="modal-dialog">
                                            <div class="modal-content">
                                                <div class="modal-header">
                                                    <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
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
                                                        <button type="button" class="btn btn-primary" onClick={() => SinglePostUpdate(UserPostData.id)}>Update</button>
                                                    </div>
                                                </form>{/* post update form end*/}
                                            </div>
                                        </div>
                                    </div>


                                </li>
                            </ul>
                        </div>
                    )
                }
            </div>
            <div>

            </div>
        </section>
    );
};

export default User;