import React from 'react'
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/splide.min.css';
import { reviews } from './reviewsData';
import Quote from '../assets/blockquote.svg';

const Testimonial = () => {
    return (
        <div className='container my-5'>
            <div className="title">
                <h1 style={{ color: "orange" }}>TESTIMONIALS</h1>
            </div>
            <section className="testimonial-container">
                <div className="slider-container">
                    <blockquote>
                        <img className="top-quote quote" src={Quote} alt="quote" />
                        <img className="bottom-quote quote" src={Quote} alt="quote" />
                    </blockquote>

                    <Splide
                        options={{
                            perPage: 1,
                            autoplay: true,
                            speed: 1000,
                            rewind: true,
                            rewindByDrag: true,
                        }}
                    >
                        {reviews.map((review) => (
                            <SplideSlide key={review.id}>
                                <img className="review-img" src={review.image} alt="" />
                                <div className="content">
                                    <p className="text">{review.text}</p>
                                    <div className="info">
                                        <div className="rating">
                                            <span className="star">&#9733;</span>
                                            <span className="star">&#9733;</span>
                                            <span className="star">&#9733;</span>
                                            <span className="star">&#9733;</span>
                                            <span className="star">&#9734;</span>
                                        </div>
                                        <p className="user">{review.name}</p>
                                    </div>
                                </div>
                            </SplideSlide>
                        ))}
                    </Splide>
                </div>
            </section>
        </div>
    )
}

export default Testimonial
