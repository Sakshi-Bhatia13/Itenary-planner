import Navbar from './components/Navbar'
import Home from './components/Home'
import React,{useState} from 'react'
import PlanTripForm from './components/PlanTripForm'
import HotelSelection from './components/HotelSelection'
import About from './components/About'
import Footer from './components/Footer'
// import Layout from './components/Layout'

const App = () => {
  return (
    <div>
    {/* <Layout> */}
    <Navbar/>
    <Home/>
    {/* <About/> */}
    {/* </Layout> */}
    <HotelSelection/>
    <Footer/>
    </div>
  )
}
export default App;