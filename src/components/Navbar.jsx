import React from 'react';
import './Navbar.css';

const Navbar = () => {
    return (
    <header>
        <div className="Navbar">
            <nav className="navbar">
                <div className="logo">
                    <h4>Tripazone</h4>
                </div>
                <ul className="nav-links">
                    <li><a href="#home">Home</a></li>
                    <li><a href="#about">About Us</a></li>
                    <li><a href="#services">Services</a></li>
                </ul>
                <div className="create-new-trip">
                    <button className="btn">Plan a New Trip</button>
                </div>
            </nav>
        </div>
    </header>
    );
};

export default Navbar;
