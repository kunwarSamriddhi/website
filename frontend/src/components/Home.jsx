import React, { useState } from 'react'
// import stationery from '../assets/stationery.jpg'
// import girl from '../assets/girl.png'
// import class1 from '../assets/class1.png'
// import tea from '../assets/tea.jpg'
import Banner from './Banner'
import Serviceitems from './Serviceitems'
import Form from './Form'
import Hero from './Hero'
import Footer from './Footer'
// import Testimonials from './Testimonials'
import Testimonial from './Testimonial'
import './Home.css'

const Home = () => {
  return (
    <>
      <div>
        <Hero />
        <br />
        <Banner />
        <Serviceitems />
        {/* <Testimonials /> */}
        <Testimonial/>
        <Form />
        <Footer/>
      </div>
    </>
  )
}

export default Home