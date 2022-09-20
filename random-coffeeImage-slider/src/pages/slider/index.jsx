import React, { useState } from "react";
import prev from "../../assets/images/left.svg"
import next from "../../assets/images/right.svg"
import "./slider.css";

export default function Slider() {
  const [slideIndex, setSlideIndex] = useState(1);

  const toNextSlide = () => {
    if (slideIndex !== 5) {
      setSlideIndex(slideIndex + 1);
    } else if (slideIndex === 5) {
      setSlideIndex(1);
    }
  };

  const toPrevSlide = () => {
    if (slideIndex !== 1) {
      setSlideIndex(slideIndex - 1);
    } else if (slideIndex === 1) {
      setSlideIndex(5);
    }
  };

  return (
    <div className="container-slider">
      {Array.from({ length: 5 }).map((_, index) => {
        return (
          <div
            key={index}
            className={
              slideIndex === index + 1 ? "slide active-slide" : "slide"
            }
          >
            <img
              src={`https://coffee.alexflipnote.dev/random?cache=${performance.now()}`}
              alt="slider"
            />
          </div>
        );
      })}

      <button onClick={toPrevSlide} className={"action-btn prev"}>
        <img src={prev} alt="left" />
      </button>
      <button onClick={toNextSlide} className={"action-btn next"}>
        <img src={next} alt="right" />
      </button>

      <div className="dot-container">
        {Array.from({ length: 5 }).map((_, index) => (
          <div
            onClick={() => setSlideIndex(index + 1)}
            className={slideIndex === index + 1 ? "dot active" : "dot"}
          >
            <div
              className={
                slideIndex === index + 1 ? "inner-dot active" : "inner-dot"
              }
            ></div>
          </div>
        ))}
      </div>
    </div>
  );
}
