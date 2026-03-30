import React from "react";
import { BsFillPlayFill, BsPauseFill } from "react-icons/bs";
import { motion } from "framer-motion";

import { meal } from "../../constants";
import "./Intro.css";

const Intro = () => {
  const [playVideo, setPlayVideo] = React.useState(true);
  const vidRef = React.useRef();

  React.useEffect(() => {
    vidRef.current.play();
  }, []);

  return (
    <div className="intro">

      {/* VIDEO */}
      <video
        ref={vidRef}
        src={meal}
        loop
        muted
        className="intro-video"
      />

      {/* OVERLAY */}
      <div className="intro-overlay">

        {/* 🔥 TEXT CONTENT */}
        <motion.div
          className="intro-content"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          <h1>Experience Mediterranean Luxury</h1>
          <p>Where flavor meets elegance</p>
        </motion.div>

        {/* 🔥 PLAY BUTTON */}
        <motion.div
          className="intro-play"
          whileHover={{ scale: 1.2 }}
          onClick={() => {
            setPlayVideo(!playVideo);
            playVideo
              ? vidRef.current.pause()
              : vidRef.current.play();
          }}
        >
          {playVideo ? (
            <BsPauseFill size={50} />
          ) : (
            <BsFillPlayFill size={50} />
          )}
        </motion.div>

        {/* 🔥 SCROLL INDICATOR */}
        <div className="scroll-indicator">
          <span></span>
        </div>

      </div>
    </div>
  );
};

export default Intro;