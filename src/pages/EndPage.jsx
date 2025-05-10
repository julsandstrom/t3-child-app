import React from "react";
import Confetti from "react-confetti";
import spelaIgen from "../assets/startpage/spelaIgen.png";
import braJobbat from "../assets/startpage/braJobbat.png";

import "../styles/EndPage.css";
import { useNavigate } from "react-router-dom";

const EndPage = () => {
  const navigate = useNavigate();

  return (
    <div className="end-page">
      <Confetti className="confetti" />

      <div className="hanging-monkey">
        <img src="/src/assets/startpage/monkey-hanging.png" alt="apa" />
      </div>
      <div className="corner-zebra">
        <img src="/src/assets/startpage/zebra-corner.png" alt="zebra" />
      </div>
      <div className="corner-parrot">
        <img src="/src/assets/startpage/side-parrot.png" alt="papegoja" />
      </div>

      <div className="text-wrapper">
        <div className="bra-jobbat-animation">
          <img src={braJobbat} alt="Bra jobbat - Du klarade det!" />
        </div>
      </div>

      <button className="play-again-button" onClick={() => navigate("/quizcards")}>
        <img src={spelaIgen} alt="Spela igen" />
      </button>
    </div>
  );
};

export default EndPage;
