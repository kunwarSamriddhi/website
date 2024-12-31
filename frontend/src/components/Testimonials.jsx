import React from 'react'
import Quote from '../assets/blockquote.svg';
import { reviews } from './reviewsData';

const Testimonials = () => {
    return (
        <div className='container my-5'>
            <div className='title'>
                <h1 style={{ color: "orange" }}>TESTIMONIALS</h1>
            </div>
            <section className='container my-5'>
                <img src={Quote} alt="quote" />
                {reviews.map((review) => (
                    <div className='container col-md-4'>
                        <img src={review.image} style={{borderRadius:"50%"}} className='img-thumbnail' alt="" />
                        <p >{review.text}</p>
                        <div>
                            <p>{review.name}</p>
                            <span className="star-yellow">&#9734;</span>
                            <span className="star">&#9734;</span>
                            <span className="star">&#9734;</span>
                            <span className="star">&#9734;</span>
                            <span className="star">&#9734;</span>
                        </div>
                    </div>
                ))}
                <div className="d-flex justify-content-end">
                    <img style={{ transform: 'rotate(180deg)' }} src={Quote} alt="quote" />
                </div>
            </section>
        </div>
    )
}

export default Testimonials
