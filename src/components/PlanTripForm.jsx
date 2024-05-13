import React,{useState} from 'react';
import './PlanTripForm.css'

const PlanTripForm = () => {
        const [selectedActivities, setSelectedActivities] = useState({
            kidFriendly: false,
            museum: false,
            amusementPark: false,
            historical: false,
            outdoorAdventures: false,
            malls: false
        });
    
        const handleActivityChange = (activity) => {
            setSelectedActivities({
                ...selectedActivities,
                [activity]: !selectedActivities[activity]
            });
        };
    
    const handleSubmit = (e) => {
        e.preventDefault();
    };

    return (
        <div className="plan-trip-form">
            <h2>Plan a New Trip</h2>
            <form onSubmit={handleSubmit}>
                <label htmlFor="destination">Destination:</label>
                <input type="text" id="destination" required />

                {/* <label htmlFor="numberOfDays">Number of Days:</label>
                <input type="number" id="numberOfDays" required />

                <label htmlFor="startDate">Start Date:</label>
                <input type="date" id="startDate" required />

                <label htmlFor="endDate">End Date:</label>
                <input type="date" id="endDate" required />

                <label htmlFor="numberOfPersons">Number of Persons:</label>
                <input type="number" id="numberOfPersons" required /> */}
                 
                
                <fieldset>
                    <legend className='activities'>Preferred Activities</legend>
                    <label>
                        <input
                            type="checkbox"
                            checked={selectedActivities.kidFriendly}
                            onChange={() => handleActivityChange('kidFriendly')}
                        />
                        Kid-Friendly
                    </label>
                    <label>
                        <input
                            type="checkbox"
                            checked={selectedActivities.museum}
                            onChange={() => handleActivityChange('museum')}
                        />
                        Museum
                    </label>
                    <label>
                        <input
                            type="checkbox"
                            checked={selectedActivities.amusementPark}
                            onChange={() => handleActivityChange('amusementPark')}
                        />
                        Amusement Park
                    </label>
                    <label>
                        <input
                            type="checkbox"
                            checked={selectedActivities.historical}
                            onChange={() => handleActivityChange('historical')}
                        />
                        Historical Sites
                    </label>
                    <label>
                        <input
                            type="checkbox"
                            checked={selectedActivities.outdoorAdventures}
                            onChange={() => handleActivityChange('outdoorAdventures')}
                        />
                        Outdoor Adventures
                    </label>
                    <label>
                        <input
                            type="checkbox"
                            checked={selectedActivities.malls}
                            onChange={() => handleActivityChange('malls')}
                        />
                        Malls
                    </label>
                </fieldset>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default PlanTripForm
