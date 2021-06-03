import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <section className="container">
            <nav className="navbar navbar-expand-lg navbar-light">
                <div className="container-fluid">
                    <Link to="/" className="navbar-brand">Simple Blog</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav ms-auto">
                            <li className="nclassName=av-item">
                            <Link to="/" className="nav-link" > Home</Link>
                            </li>
                           
                            <li className="nav-item">
                                <Link to="/posts" className="nav-link" >Posts</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/users" className="nav-link" >Users</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </section>
    );
};

export default Navbar;