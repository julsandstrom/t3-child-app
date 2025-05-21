import { useEffect, useRef } from "react";
import bakgrundsLjud from "../assets/sounds/bakgrundsljud.mp3";

const BakgrundsLjud = () => {
  const audioRef = useRef(null);

  useEffect(() => {
    const handleUserInteraction = () => {
      const audio = audioRef.current;
      if (audio) {
        audio.volume = 0.1;
        audio.loop = true;
        audio.play().catch((error) => {
          console.warn("Ljud kunde inte spelas:", error);
        });
      }

      window.removeEventListener("click", handleUserInteraction);
    };

    window.addEventListener("click", handleUserInteraction);

    return () => {
      window.removeEventListener("click", handleUserInteraction);
    };
  }, []);

  return (
    <div>
      <audio ref={audioRef} src={bakgrundsLjud} />
    </div>
  );
};

export default BakgrundsLjud;
