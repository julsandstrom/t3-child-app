import React from 'react'
import bird from "../assets/gamepictures/bird.jpg";
import dog from "../assets/gamepictures/dog.jpg";
import cat from "../assets/gamepictures/cat.jpg"; 
import '../pages/QuizCards.css';

const QuizCards = () => {
return (
    <div className='quiz-cards'>
        <div className="text-wrapper">
                <h1>Hund</h1>
            </div>
        
        <div className="cards-container">
            <div className='first-card'>
                <img src={bird} alt='bird'></img>
            </div>

            <div className='second-card'>
                <img src={dog} alt='dog'></img>
            </div>

            <div className='third-card'>
                <img src={cat} alt='cat'></img>
            </div>
        </div>
    </div>
    );
}

export default QuizCards;