import React, { useState } from "react";
import "../styles/carousel.css";

const images = [
  "/images/doc1.jpg",
  "/images/doc2.webp",
  "/images/doc3.jpg",
  "/images/doc3.jpg",
  "/images/doc3.jpg",
];

const Carousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(2);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  return (
    <div className="carousel-container">
      <div className="carousel">
        {images.map((img, index) => {
          let className = "slide";
          if (index === currentIndex) className += " active";
          else if (
            index === (currentIndex - 1 + images.length) % images.length
          )
            className += " prev";
          else if ((index === (currentIndex + 1) % images.length))
            className += " next";
          else className += " hidden";

          return (
            <div
              key={index}
              className={className}
              style={{ backgroundImage: `url(${img})` }}
            />
          );
        })}

        <button className="nav-button left" onClick={prevSlide}>
          &#8592;
        </button>
        <button className="nav-button right" onClick={nextSlide}>
          &#8594;
        </button>

        <div className="dots">
          {images.map((_, idx) => (
            <span
              key={idx}
              className={`dot ${idx === currentIndex ? "active-dot" : ""}`}
              onClick={() => setCurrentIndex(idx)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Carousel;
