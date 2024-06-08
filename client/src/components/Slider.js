import React, { useState, useRef, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import img1 from '../Images/slider1.png';
import img2 from '../Images/slider2.png';
import img3 from '../Images/slider3.png';
import '../components/styles.css';

const Slider = () => {
    const [offset, setOffset] = useState(0);
    const sliderLineRef = useRef(null);
    const containerRef = useRef(null);

    useEffect(() => {
        const timer = setInterval(() => {
            setOffset(prevOffset => {
                let newOffset = prevOffset + sliderLineRef.current.getBoundingClientRect().width;
                if (newOffset > 3000) {
                    newOffset = 0;  
                }
                sliderLineRef.current.style.left = -newOffset + 'px';
                return newOffset;
            });
            if (containerRef.current) {
                const width = containerRef.current.getBoundingClientRect().width;
                console.log('Высота div с классом slider:', width);
            }

        }, 5000); 
        

        return () => {
            clearInterval(timer); 
        };
    }, []);

    return (
        <Container className='w-100' style={{marginTop: '10em'}} ref={containerRef}>
                <div className="slider">
                    <div className="slider-line" ref={sliderLineRef}>
                        <img src={img1} alt="" style={{ width: '100%'}} />
                        <img src={img2} alt="" style={{ width: '100%'}} />
                        <img src={img3} alt="" style={{ width: '100%'}} />
                    </div>
            </div>
        </Container>
    );

}

export default Slider;