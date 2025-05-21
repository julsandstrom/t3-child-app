import React from "react";
import useQuiz from "../hooks/quizFunction";
import { imageMap } from "../utils/imageMap";
import "../styles/QuizCards.css";

const QuizCards = () => {
  const { currentQuestion, handleImageClick, selectedImage } = useQuiz();

  if (!currentQuestion) return <div>Laddar fråga...</div>;
  return (
    <div className="quiz-cards">
      <div className="cards-container">
        {currentQuestion.options.map((option, index) => (
          <div
            key={index}
            className={`card-option ${
              selectedImage === option
                ? option === currentQuestion.answer
                  ? "correct"
                  : "wrong"
                : ""
            }`}
            onClick={() => handleImageClick(option)}
          >
            <div className="wooden-sign">
              <img src={imageMap[option]} alt={`option-${index}`} />
            </div>
          </div>
        ))}
      </div>

      <div className="text-wrapper">
        <h1>{currentQuestion.question}</h1>
      </div>
    </div>
  );
};

export default QuizCards;
