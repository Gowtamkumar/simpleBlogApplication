import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';


const Posts = () => {
    const max = 100;
    const [posts, setPosts] = useState([])
    const [limit, setLimit] = useState(10);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(res => res.json())
            .then(data => setPosts(data))
    }, [limit])
    // console.log(post.splice(0, 10))
    console.log(posts)


    const handleShowMore = () => {
        if (limit <= max) {
            let newLimit = limit + 10;
            setLimit(newLimit)
        }
    };
    console.log("fff", limit)
    return (
        <section className="container mt-4">

            <div className="row">
                {posts.slice(0, limit).map((postdata) =>
                    <div className="col-md-12 mt-3" key={postdata.id}>
                        <ul class="list-group">
                            <li class="list-group-item">
                                <div className="row">
                                    <div className="col-md-7">
                                        <p><Link to={`/user/${postdata.userId}`}>User: {postdata.userId}</Link></p>
                                        <h3><Link to={`/post/${postdata.id}`}>{postdata.title}</Link> </h3>
                                        <p className="text-justify">{postdata.body}</p>

                                        <Link to={`/post/${postdata.id}`} className="text-light"><button className="btn btn-success ">Read More</button></Link>

                                    </div>
                                    <div className="col-md-5">
                                        <img src="https://i.ibb.co/N3kh5vj/fitness-trainer.jpg" alt="" className="img-fluid" />
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                )}
                <div class="d-grid gap-2 mb-3 mt-4">
                    <button class="btn btn-primary" type="button" onClick={handleShowMore}>Load More</button>
                </div>
            </div>
        </section>
    );
};

export default Posts;