import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import questions from "../data/question.json";
import correctSoundFile from "../assets/sounds/correct.mp3";
import wrongSoundFile from "../assets/sounds/wrong.mp3";
import { questionSoundMap } from "../utils/questionSoundMap";

const shuffleArray = (array) => {
  return [...array].sort(() => Math.random() - 0.5);
};

const useQuiz = () => {
  const navigate = useNavigate();
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [shuffledQuestions, setShuffledQuestions] = useState([]);
  const [selectedImage, setSelectedImage] = useState(null);
  const [isClickable, setIsClickable] = useState(true);

  const correctSound = new Audio(correctSoundFile);
  const wrongSound = new Audio(wrongSoundFile);

  useEffect(() => {
    const shuffled = shuffleArray(questions).map((q) => ({
      ...q,
      options: shuffleArray(q.options),
    }));
    setShuffledQuestions(shuffled);
  }, []);

  useEffect(() => {
    if (!shuffledQuestions.length) return;

    const current = shuffledQuestions[currentQuestionIndex];
    const soundSrc = questionSoundMap[current.readQuestion];

    if (soundSrc) {
      const audio = new Audio(soundSrc);
      audio.play();
    }
  }, [currentQuestionIndex, shuffledQuestions]);

  const handleImageClick = (option) => {
    if (!isClickable) return;

    const currentQuestion = shuffledQuestions[currentQuestionIndex];
    const isCorrect = option === currentQuestion.answer;

    setSelectedImage(option);

    if (isCorrect) {
      setIsClickable(false);
      correctSound.play();

      setTimeout(() => {
        if (currentQuestionIndex + 1 < shuffledQuestions.length) {
          setCurrentQuestionIndex((prev) => prev + 1);
          setSelectedImage(null);
          setIsClickable(true);
        } else {
          navigate("/endpage");
        }
      }, 1000);
    } else {
      wrongSound.play();

      //visar röd markerad feedback i 0.6 sekunder.
      setTimeout(() => {
        setSelectedImage(null);
      }, 600);
    }
  };

  const currentQuestion = shuffledQuestions[currentQuestionIndex];

  return {
    currentQuestion,
    handleImageClick,
    selectedImage,
    shuffledQuestions,
  };
};

export default useQuiz;
