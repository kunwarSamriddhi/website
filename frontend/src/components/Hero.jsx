import React from 'react'
import logo from '../assets/logo.png'
import leaflogoo from '../assets/leaflogoo.png'
// import bckground from '../assets/bckground.jpg'
// import bckimg from '../assets/bckimg.png'
// import coffee from '../assets/coffee.jpg'
import beans from '../assets/beans.jpg'

const Hero = () => {
  const sectionStyle = {
    width: "100%",
    height: "300px",
    backgroundImage: `url(${beans})`
  };
  return (
    <div >
      <div className='animate__tada' style={{ font: "caption", fontFamily: "cursive", fontSize: "5rem", color: "white", borderRadius: "25px", alignItems: "center" }}>
        <div style={sectionStyle}>
          <img src={leaflogoo} style={{padding: '20px',}} width={'260px'} />
          Sweet Tea
          <br />

          <h4 style={{ fontStyle: "italic",fontSize: "1.5rem", color: "white", marginLeft:"50px" }}>Welcome to the heaven of premium tea and coffee
          </h4>
        </div>
      </div>
    </div >
  )
}

export default Hero
