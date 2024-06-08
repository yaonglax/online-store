import React, { useEffect, useRef } from 'react';
import '../components/CardStyle.css';
import img1 from '../Images/card1.png'
import img2 from '../Images/card2.png'
import img3 from '../Images/card3.png'
import img4 from '../Images/card4.png'
import img5 from '../Images/card5.png'
import img6 from '../Images/card6.png'

const CardSlider = () => {
    const imageListRef = useRef(null);

    useEffect(() => {
        const imageList = imageListRef.current;

        const logImageItemDimensions = () => {
            const imageItems = imageList.querySelectorAll('.image-item');
            imageItems.forEach(item => {
                const { width, height } = item.getBoundingClientRect();
                console.log(`Ширина image-item: ${width}px, Высота image-item: ${height}px`);
            });
        };

        logImageItemDimensions();

        const handleSlideClick = (direction) => {
            const scrollAmount = imageList.clientWidth * direction;
            imageList.scrollBy({ left: scrollAmount, behavior: "smooth" });
        };

        const imageListScrollHandler = () => {
            logImageItemDimensions();
        };

        imageList.addEventListener("scroll", imageListScrollHandler);

        return () => {
            imageList.removeEventListener("scroll", imageListScrollHandler);
        };
    }, []);

    return (
        <div className='big-container'>
            <div className="container">
                <div className="slider-wrapper">
                    <ul className="image-list" ref={imageListRef}>
                        <img src={img1} className="image-item" alt="img-1" />
                        <img src={img2} className="image-item" alt="img-1" />
                        <img src={img3} className="image-item" alt="img-1" />
                        <img src={img4} className="image-item" alt="img-1" />
                        <img src={img5} className="image-item" alt="img-1" />
                        <img src={img6} className="image-item" alt="img-1" />
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default CardSlider;
