import React, { useState } from 'react';
import './Navbar.css';
import PlanTripForm from './PlanTripForm';

const Navbar = () => {
    const [showForm, setShowForm] = useState(false);

    const handlePlanTrip = () => {
        setShowForm(true);
    }

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
                        <button className="btn" onClick={handlePlanTrip}>Plan a New Trip</button>
                    </div>
                </nav>
            </div>
            {showForm && <PlanTripForm />}
        </header>
    );
};

export default Navbar;
