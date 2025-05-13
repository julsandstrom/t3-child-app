import { useEffect, useRef } from "react";

const BakgrundsLjud = () => {
  const audioRef = useRef(null);

  useEffect(() => {
    const audio = audioRef.current;

    if (audio) {
      audio.volume = 0.1;
      audio.loop = true;

      audio.play().catch((error) => {
        console.warn("Ljudet kan ej spelas:", error);
      });
    }

    return () => {
      if (audio) {
        audio.pause();
      }
    };
  }, []);

  return (
    <div>
      <audio ref={audioRef} src="/bakgrundsljud.mp3" />
    </div>
  );
};

export default BakgrundsLjud;