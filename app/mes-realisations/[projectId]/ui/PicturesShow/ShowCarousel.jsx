import React from 'react';
import Slider from 'react-slick';
import './SlickCarousel/slick.css';
import './SlickCarousel/slickTheme.css';


export const ShowCarousel = ({pictures}) => {

    const settings = {
        dots: true,
        arrows: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };

    return (
        <div className="carousel-wrapper">
            <Slider className="product-img-carousel" {...settings}>
                {
                    pictures.map((picture, index) => (
                        <div key={index} className="carousel-item">
                            <div className="product-img-wrapper">
                                <img className="product-img" src={picture.src} alt={picture.alt} />
                            </div>
                        </div>
                    ))
                }
            </Slider>
        </div>
    )
}