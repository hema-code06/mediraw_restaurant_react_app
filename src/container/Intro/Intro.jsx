import React from "react";
import { BsFillPlayFill, BsPauseFill } from "react-icons/bs";
import { motion } from "framer-motion";

import { meal } from "../../constants";
import "./Intro.css";

const Intro = () => {
  const [isPlaying, setIsPlaying] = React.useState(true);
  const vidRef = React.useRef();

  React.useEffect(() => {
    vidRef.current.play();
  }, []);

  const togglePlay = () => {
    setIsPlaying((prev) => !prev);
    isPlaying ? vidRef.current.pause() : vidRef.current.play();
  };

  return (
    <div className="intro">
      <video ref={vidRef} src={meal} loop muted className="intro-video" />

      <motion.div
        className="intro-play"
        onClick={togglePlay}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {isPlaying ? <BsPauseFill size={30} /> : <BsFillPlayFill size={30} />}
      </motion.div>
    </div>
  );
};

export default Intro;
