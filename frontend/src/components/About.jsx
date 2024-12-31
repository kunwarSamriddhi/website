import React, { useContext, useEffect } from 'react'
import blogContext from '../context/blogs/BlogContext'
import about from '../assets/about.jpg'

const About = () => {
 
    return (
        <div className='container mt-5 '>
            <div className='mb-5'>
                <h1 style={{ color: 'orange' }}>ABOUT <span style={{ color: 'white' }}>US</span></h1>
                <img src={about} style={{ maxWidth: "100%"}} />
            </div>
            <p style={{color:"white", display:"flex", justifyContent:"center"}}>Since 1999, we've proudly been offering Nepali coffee, pioneering the concept of Specialty Coffee, Third Wave Coffee, and Sustainable Coffee in Nepal. Our unwavering mission has been to provide our customers with the finest coffee. Rooted in our commitment to socially responsible entrepreneurship, we prioritize investing in people, from coffee growers to coffee lovers</p>
        </div>
    )
}

export default About
/* 
<div class="gdlr-core-pbf-background gdlr-core-parallax gdlr-core-js" style="opacity: 0.4 ;background-image: url() ;background-size: cover ;background-repeat: no-repeat ;background-position: center ;" data-parallax-speed="0"></div> */