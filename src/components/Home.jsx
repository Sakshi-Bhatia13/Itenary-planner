import React,{useState} from 'react'
import Navbar from './Navbar'
import PlanTripForm from './PlanTripForm'
import './Home.css'

const Home = () => {
  const [showForm, setShowForm] = useState(false);
  const handlePlanTrip = () => {
      setShowForm(true);
  }
  return (
    <div className='container'>
      <h1>Find Perfect Itenary here!</h1>
        <span><button className="btn" onClick={handlePlanTrip}>Plan a New Trip</button></span>
      {showForm && <PlanTripForm />}
    </div>
  )
}

export default Home;