import React, { useState } from "react";
import "../style/components/carousel_agenda.css"
import LeftArrow from "../assets/leftArrow.png"
import rightArrow from "../assets/rightArrow.png"
import AgendaCSP from "../assets/agendaCSP.png"
import AgendaDL from "../assets/agendaDL.png"
import AgendaLLB from "../assets/agendaLLB.png"
import AgendaM from "../assets/agendaM.png"
import AgendaSM from "../assets/agendaSM.png"


const CarouselAgenda = () => {
  const img = [AgendaCSP, AgendaDL,AgendaM, AgendaSM, AgendaLLB];
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % img.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? img.length - 1 : prevIndex - 1
    );
  };

  return (
    <>
    <div className="carousel-container">
      <img src={LeftArrow} alt="leftArrow" onClick={prevSlide} className="leftArrow"/>
      
      <div className="carousel-slide">
        <img src={img[currentIndex]} alt="" className="agendaImg"/>
      </div>

      <img src={rightArrow} alt="rightArrow" onClick={nextSlide} className="rightArrow"/>
    </div>
    </>
 
  );
};

export default CarouselAgenda;