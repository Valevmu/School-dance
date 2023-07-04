import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import photo1 from '../assets/carousel1.jpeg';
import photo2 from '../assets/carousel2.jpeg';
import photo3 from '../assets/carousel3.jpeg';
import '../Styles/CarouselPhoto.css';

const items = [
    {
        title: "Un espacio de movimiento",
        photo: photo1,
    },
    {
        title: "Creatividad",
        photo: photo2,
    },
    {
        title: "Expresión",
        photo: photo3,
    },]

export const CarouselPhoto = () => {
    

    return (
        <div className='carousel-container'>
            <h1>SMART STUDIO</h1>
            <h2>Todas tus clases en una sola aplicación</h2>
            <Carousel>
                {items.map((item,index) => (
                    <Carousel.Item interval={2000} key={index}>
                        <img
                            className="photo-caroulsel"
                            src={item.photo}
                            alt="First slide"
                        />
                        <Carousel.Caption>
                            <h3>{item.title}</h3>
                            <p></p>
                        </Carousel.Caption>
                    </Carousel.Item>
                ))}
            </Carousel>
        </div>
    )
}
