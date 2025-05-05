import React from "react";
import "../styles/AnimalCard.css";

import bird from "../assets/gamepictures/bird.jpg";
import dog from "../assets/gamepictures/dog.jpg";
import cat from "../assets/gamepictures/cat.jpg";

const AnimalCard = () => {
  return (
    <div className="option-wrapper">
      <div className="bacground-ellipse top-left" />
      <div className="background-ellipse bottom-right" />
      <h2>FÅGEL</h2>
      <div className="image-grid">
        {[bird, dog, cat].map((img, i) => (
          <div className="image-slot" key={i}>
            <img src={img.default ?? img} alt={`option-${i}`} />
          </div>
        ))}
      </div>
      <button className="next-button"> Nästa</button>
    </div>
  );
};

export default AnimalCard;
