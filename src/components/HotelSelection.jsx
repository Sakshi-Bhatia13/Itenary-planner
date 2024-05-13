import React, { useState } from 'react';
import './HotelSelection.css';
import hotelImage from '../assets/hotel.jpeg'; 

const HotelSelection = () => {
  const [destination, setDestination] = useState('');
  const [budget, setBudget] = useState('');

  const handleDestinationChange = (event) => {
    setDestination(event.target.value);
  };

  const handleBudgetChange = (event) => {
    setBudget(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`Destination: ${destination}\nBudget per Room: ${budget}`);
  };

  return (
    <div className="hotel-selection-container">
      <h2>Find Hotels to Stay In</h2>
      <div className="form-container">
        <div className="input-group">
          <label htmlFor="destination">Enter Destination</label>
          <input
            type="text"
            id="destination"
            value={destination}
            onChange={handleDestinationChange}
          />
        </div>
        <div className="input-group">
          <label htmlFor="budget">Enter Budget per Room</label>
          <input
            type="text"
            id="budget"
            value={budget}
            onChange={handleBudgetChange}
          />
        </div>
        <button type="submit" className="btn-cls" onClick={handleSubmit}>Search Hotels</button>
        <img src={hotelImage} alt="Hotel" className="hotel-image" />
        </div>
    </div>
  );
};

export default HotelSelection;
