import "./StartPage.css";
import lillaDjurVarlden from "../assets/startpage/Lilla-Djurvarlden.png";
import StartSign from "../assets/startpage/Sign-start.png";
import hangingMonkey from "../assets/startpage/monkey-hanging.png";
import cornerZebra from "../assets/startpage/zebra-corner.png";
import cornerParrot from "../assets/startpage/side-parrot.png";
const StartPage = () => {
  return (
    <>
      <div className="start-page">
        <div className="hanging-monkey">
          <img src={hangingMonkey} alt="Hängande apa" />
        </div>
        <div className="corner-zebra">
          <img src={cornerZebra} alt="Glad Zebra" />
        </div>
        <div className="corner-parrot">
          <img src={cornerParrot} alt="Glad Papegoja" />
        </div>
        <div className="game-name">
          <img src={lillaDjurVarlden} alt="Lilla Djurvärlden" />
        </div>
        <button className="start-sign-button">
          <img src={StartSign} alt="Starta spelet" />
        </button>
      </div>
    </>
  );
};

export default StartPage;
