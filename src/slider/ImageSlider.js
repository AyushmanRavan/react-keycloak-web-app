import React, { useCallback, useEffect, useRef, useState } from 'react';
const slides = [
    { url: "http://localhost:3000/image-1.jpg", title: "beach" },
    { url: "http://localhost:3000/image-2.jpg", title: "boat" },
    { url: "http://localhost:3000/image-3.jpg", title: "forest" },
    { url: "http://localhost:3000/image-4.jpg", title: "city" },
    { url: "http://localhost:3000/image-5.jpg", title: "italy" },
  ];
  

function ImageSlider(props) {
    const [currentIndex, setCurrentIndex] = useState(0);
    
    const goToPrevious = () => {
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1
        setCurrentIndex(newIndex);
    }
    const goToNext = useCallback(() => {
        const isLastSlide = slides.length - 1;
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
    },[])

    const goToSlide = (slideIndex) => setCurrentIndex(slideIndex);

    return (
        <div>
            
        </div>
    );
}

export default ImageSlider;