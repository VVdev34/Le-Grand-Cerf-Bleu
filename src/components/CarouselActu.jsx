import React, { useState } from "react";
import "../style/components/carousel_actu.css"
import LeftArrow from "../assets/leftArrow.png"
import rightArrow from "../assets/rightArrow.png"
import CroireSurParole from "./acutaliteComponents/CroireSurParole";
import Delumiere from "./acutaliteComponents/DeLumiere";
import Monade from "./acutaliteComponents/Monade";
import SansModerations from "./acutaliteComponents/SansModerations";


const CarouselActu = () => {
  const components = [<CroireSurParole/>, <Delumiere />, <Monade/>, <SansModerations/>];
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % components.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? components.length - 1 : prevIndex - 1
    );
  };

  return (
    <>
    <div className="carousel-container">
      <img src={LeftArrow} alt="leftArrow" onClick={prevSlide} className="leftArrow"/>
      
      <div className="carousel-slideActu">
        {components[currentIndex]}
      </div>

      <img src={rightArrow} alt="rightArrow" onClick={nextSlide} className="rightArrow"/>
    </div>
    </>
 
  );
};

export default CarouselActu;
