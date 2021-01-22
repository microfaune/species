import React from "react";
import Carousel from 'react-bootstrap/Carousel'
import image1 from '../images/img1.jpg'
import image2 from '../images/bg02.jpg'
import image3 from '../images/bg05.jpg'
import './Caroussel.css'

function Caroussel () {
    return (
        <Carousel className="carousel-content">
            <Carousel.Item interval={5000}>
                <img
                    className="d-block w-100"
                    src={image1}
                    alt="First slide"
                />
            </Carousel.Item>
            <Carousel.Item interval={5000}>
                <img
                    className="d-block w-100"
                    src={image2}
                    alt="Second slide"
                />
            </Carousel.Item>
            <Carousel.Item interval={5000}>
                <img
                    className="d-block w-100"
                    src={image3}
                    alt="Third slide"
                />
            </Carousel.Item>
        </Carousel>
    );
}

export default Caroussel;
