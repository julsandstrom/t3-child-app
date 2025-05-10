import React from "react";
import { useNavigate } from "react-router-dom";
import bird from "../assets/gamepictures/bird.jpg";
import dog from "../assets/gamepictures/dog.jpg";
import cat from "../assets/gamepictures/cat.jpg";
import "../styles/QuizCards.css";
import correctSound from "../assets/sounds/sonido-correcto-331225.mp3"

const QuizCards = () => {
  const navigate = useNavigate();

  const handleCorrectClick = () => {
    const correctAudio = new Audio(correctSound);
    correctAudio.play();
    setTimeout(()=>{
        navigate("/endpage");
    },1000);
 
  };

  return (
    <div className="quiz-cards">
      <div className="text-wrapper">
        <h1>Hund</h1>
      </div>

      <div className="cards-container">
        <div className="wrong">
          <div className="wooden-sign">
            <img src={bird} alt="bird" />
          </div>
        </div>

        <div className="correct" onClick={handleCorrectClick}>
          <div className="wooden-sign">
            <img src={dog} alt="dog" />
          </div>
        </div>

        <div className="wrong">
          <div className="wooden-sign">
            <img src={cat} alt="cat" />
          </div>
        </div>
      </div>
    </div>
  );
};
{
  /* <div className="cards-container">
            <div className='first-card'>
                <img src={bird} alt='bird'></img>
            </div>

            <div className='second-card'>
                <img src={dog} alt='dog'></img>
            </div>

            <div className='third-card'>
                <img src={cat} alt='cat'></img>
            </div>
        </div> */
}

export default QuizCards;
