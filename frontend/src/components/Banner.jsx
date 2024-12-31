import React from 'react'
import shop1 from '../assets/shop1.png'
import shopp1 from '../assets/shopp1.png'
import herbal1 from '../assets/herbal1.png'

const Banner = () => {
    return (
        <div>
            <div className='img-fluid rounded'>
                <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
                    <div className="carousel-indicators">
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    </div>
                    <div className="carousel-inner" >
                        <div className="carousel-item active">
                            <img src={herbal1} className="d-block w-100" alt="..." />
                            <div className="carousel-caption d-none d-md-block"></div>
                        </div>
                        <div className="carousel-item">
                            <img src={shopp1} className="d-block w-100" alt="..." />
                            <div className="carousel-caption d-none d-md-block"></div>
                        </div>
                        <div className="carousel-item">
                            <img src={shop1} className="d-block w-100" alt="..." />
                            <div className="carousel-caption d-none d-md-block"></div>
                        </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Banner
/* style={{ width: "97%", height: "25%", alignContent: "center", alignItems: 'center', justifyContent: "center", margin: 'auto' }} */
/* <div>
            <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src={herbal} className="d-block w-100" alt="..."/>
                    </div>
                    <div className="carousel-item">
                        <img src={shopp} className="d-block w-100 h-50" alt="..."/>
                    </div>
                    <div className="carousel-item">
                        <img src={shop} className="d-block w-100 h-50" alt="..."/>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </div> */