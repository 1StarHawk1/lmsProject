import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import ds from '../../../images/ds.jpeg';
import sekiro from '../../../images/sekiro.jpeg';
import er from '../../../images/er.webp';
import bb from '../../../images/bb.jpg';

const MyCarousel = () => {
    return (
        <Carousel style={{ width: '70%', padding: '15px'}}>
            <Carousel.Item style={{ height: '450px', overflow: 'hidden' }}>
                <img
                    className="d-block w-100"
                    src={ds}
                    alt="First slide"
                    style={{ height: '100%', objectFit: 'cover' }}
                />
            </Carousel.Item>
            <Carousel.Item style={{ height: '450px', overflow: 'hidden' }}>
                <img
                    className="d-block w-100"
                    src={sekiro}
                    alt="Second slide"
                    style={{ height: '100%', objectFit: 'cover' }}
                />
            </Carousel.Item>
            <Carousel.Item style={{ height: '450px', overflow: 'hidden' }}>
                <img
                    className="d-block w-100"
                    src={er}
                    alt="Third slide"
                    style={{ height: '100%', objectFit: 'cover' }}
                />
            </Carousel.Item>
            <Carousel.Item style={{ height: '450px', overflow: 'hidden' }}>
                <img
                    className="d-block w-100"
                    src={bb}
                    alt="Fourth slide"
                    style={{ height: '100%', objectFit: 'cover' }}
                />
            </Carousel.Item>
        </Carousel>
    );
};

export default MyCarousel;