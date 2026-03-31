import React from "react";
import "./Find.css";
import {about} from '../../constants';

const Find = () => {
  return (
    <div className="find" id="contact">
      <video
        className="find-video"
        src={about}
        autoPlay
        loop
        muted
        playsInline
        controls={false} 
      />
    </div>
  );
};

export default Find;