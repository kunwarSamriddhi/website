import React from 'react'
import barista1 from '../assets/barista.png'
import barista2 from '../assets/barista2.png'
import bakery from '../assets/bakery-training3.jpg'
import styled from 'styled-components'

const Hr = styled.div`
  width:100%;
  margin:auto;
  color:#fff;
  border-radius:25px;
  border:none;
  border-top:1px solid;
`;
const Services = () => {
    return (
        <div className='container mt-5 '>
            <div className='mb-5'>
                <h1 style={{ color: 'orange', justifyContent: "center" }}>OUR <span style={{ color: 'white' }}>SERVICES</span></h1>
                <img src={barista1} style={{ maxWidth: "100%" }} />
            </div>
            <div className='row'>
                <h1 style={{ color: "white" }}>Barista Training</h1>
                <div className='col-md-7'>
                    <img src={barista2} style={{ width: "100%", height: "95%" }} />
                </div>
                <div className='col-md-5 mt-5' style={{ color: "white", justifyContent: "flex-start" }}>
                    <h1 style={{ color: "orange" }}>ABOUT COURSE</h1>
                    <br />
                    <div style={{ fontSize: "21px", font: "arial" }}>
                        <p>Course duration of 15 days (3 hours/day)</p>
                        <p>70% of Barista Training is based on practical training</p>
                    </div>
                    <h4 style={{ color: "orange" }}>COMPREHENSIVE COFFEE MAKING TRAINING</h4>
                    <ul style={{ justifyContent: "center", fontSize: "18px" }}>
                        <li>A brief History of Coffee</li>
                        <li>Coffee Beans</li>
                        <li>Roasting and Blending</li>
                        <li>Espresso Equipment</li>
                        <li>Extracting Perfect Espresso</li>
                        <li>The Art of Steaming and Foaming Milk</li>
                        <li>Cleaning, Safety & Maintenance</li>
                        <li>Customer Service</li>
                        <li>Occupational Health & Safety</li>
                    </ul>
                </div>
            </div>
            <Hr />
            <div className='row'>
                <h1 style={{ color: "white" }}>Bakery Training</h1>

                <div className='col-md-5 mt-5' style={{ color: "white", justifyContent: "flex-start" }}>
                    <h1 style={{ color: "orange" }}>ABOUT COURSE</h1>
                    <br />
                    <div style={{ fontSize: "19px", font: "arial" }}>
                        <p>Course duration of 25 days (3 hours/day)</p>
                        <p>Course conducted during Morning/mid-days/evenings</p>
                        <p>Training location at Himalayan Java Bakery School, Marcopolo Business Hotel, Hattisar, Kathmandu</p>
                        <p>Small batches for higher focus on students' learning experience.</p>
                        <p>One week of internship program </p>
                    </div>
                </div>
                <div className='col-md-7'>
                    <img src={bakery} style={{ width: "100%", height: "95%" }} />
                </div>
            </div>
        </div>
    )
}

export default Services
