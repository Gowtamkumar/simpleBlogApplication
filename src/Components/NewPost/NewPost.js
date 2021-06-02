import React, { useState } from 'react';
import Navbar from '../Sheard/Navbar/Navbar';
import { useForm } from "react-hook-form";
const NewPost = () => {
    //this newPost state
    const [newPost, setNewPost] = useState({})
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => {
        const title = data.title
        const body = data.body
        fetch('https://jsonplaceholder.typicode.com/posts', { //json placeholder posts api
            method: 'POST',
            body: JSON.stringify({
                title: title,
                body: body,
                
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
            .then((response) => response.json())
            .then((data) => {
                const newDataResult = document.getElementById("newdatashow")
                newDataResult.innerHTML = `
                    <h2>${data.title}</h2>
                    <p>${data.body}</p>
                `
            }
                
            );

    };

    console.log(newPost)




    return (
        <section className="container">
            <div className="row">
                <Navbar></Navbar>
                <div className="p-5">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <input {...register("title", { required: true })} className="form-control" placeholder="Wirte title" />
                        {errors.exampleRequired && <span>This field is required</span>}
                        <textarea {...register("body", { required: true })} className="form-control mt-2" placeholder="Wirte Description" />
                        {errors.exampleRequired && <span>This field is required</span>}
                        <div class="d-grid gap-2 mt-3">
                            <button class="btn btn-primary" type="submit">Add Post</button>
                        </div>
                    </form>
                </div>

            </div>

            <div id="newdatashow">

            </div>

        </section>
    );
};

export default NewPost;