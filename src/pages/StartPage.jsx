import "../styles/StartPage.css";
import lillaDjurVarlden from "../assets/startpage/Lilla-Djurvarlden.png";
import StartSign from "../assets/startpage/Sign-Start.png";
import hangingMonkey from "../assets/startpage/monkey-hanging.png";
import cornerZebra from "../assets/startpage/zebra-corner.png";
import cornerParrot from "../assets/startpage/side-parrot.png";
import monkeySound from "../assets/startpage/Monkey.mp3";
import zebraSound from "../assets/startpage/zebra.mp3";
import parrotSound from "../assets/startpage/Parrot.mp3";
import { useNavigate } from "react-router-dom";

const StartPage = () => {
  const navigate = useNavigate();

  const playSound = (soundFile) => {
    const audio = new Audio(soundFile);
    audio.play();
  };

  return (
    <>
      <div className="start-page">
        <div className="hanging-monkey">
          <img
            src={hangingMonkey}
            alt="Hängande apa"
            onClick={() => playSound(monkeySound)}
          />
        </div>
        <div className="corner-zebra">
          <img
            src={cornerZebra}
            alt="Glad Zebra"
            onClick={() => playSound(zebraSound)}
          />
        </div>
        <div className="corner-parrot">
          <img
            src={cornerParrot}
            alt="Glad Papegoja"
            onClick={() => playSound(parrotSound)}
          />
        </div>
        <div className="game-name">
          <img src={lillaDjurVarlden} alt="Lilla Djurvärlden" />
        </div>
        <button
          onClick={() => navigate("/quizcards")}
          className="start-sign-button"
        >
          <img src={StartSign} alt="Starta spelet" />
        </button>
      </div>
    </>
  );
};

export default StartPage;
