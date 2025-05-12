import React, { useEffect } from "react";
import Confetti from "react-confetti";
import spelaIgen from "../assets/startpage/spelaIgen.png";
import braJobbat from "../assets/startpage/braJobbat.png";
import drumSound from "../assets/sounds/drum.flac";

import "../styles/EndPage.css";
import { useNavigate } from "react-router-dom";

const EndPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const audio = new Audio(drumSound);
    audio.play().catch((err) => {
      console.log("Autoplay blockerades eller filen saknas:", err);
    });
  }, []);
  return (
    <div className="end-page">
      <Confetti className="confetti" />

      

      <div className="text-wrapper">
        <div className="bra-jobbat-animation">
          <img src={braJobbat} alt="Bra jobbat - Du klarade det!" />
        </div>
      </div>

      <button className="play-again-button" onClick={() => navigate("/")}>
        <img src={spelaIgen} alt="Spela igen" />
      </button>
    </div>
  );
};

export default EndPage;
