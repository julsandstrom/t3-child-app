import React, { useEffect } from "react";
import Confetti from "react-confetti";
import spelaIgen from "../assets/startpage/spelaIgen.png";
import braJobbat from "../assets/startpage/braJobbat.png";
// import drumSound from "../assets/sounds/drum.flac";
import trumpetSound from "../assets/sounds/trumpet.mp3";
import kidsSound from "../assets/sounds/kids.mp3";
import "../styles/EndPage.css";
import { useNavigate } from "react-router-dom";

const EndPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const kids = new Audio(kidsSound);
    const trumpet = new Audio(trumpetSound);
    
    kids.play().catch(err => console.log("Ljudfel:", err));

     // Börja fade out efter 2.5 sekunder
    setTimeout(() => {
      let volume = 1;
      const fadeOut = setInterval(() => {
        volume = Math.max(0, volume - 0.1);
        kids.volume = volume;
        
        if (volume === 0) {
          clearInterval(fadeOut);
          kids.pause();
          kids.currentTime = 0;
          trumpet.play().catch(err => console.log("Ljudfel:", err));
        }
      }, 80);
    }, 2500);

    // Städning när komponenten unmountas
    return () => {
      kids.pause();
      trumpet.pause();
    };
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
