import React from "react";
import { SubHeading } from '../../components';
import { images } from "../../constants";
import "./Content.css";

const Content = () => (
  <div className="app__header app__bg app__wrapper" id="home">
    <div className="app__wrapper_img">
      <img src={images.welcome} alt="header_img" className="image-animation" />
    </div>
    <div className="app__wrapper_info">
      <SubHeading title="Mediterranean Palate : Delight in Every Bite.." />
      <h1 className="app__header-h1 text-animation">
        Indulge in the Essence of Mediterranean Delights..
      </h1>
      <p className="p_opensans" style={{ margin: "2rem 0" }}>
        Mediterranean food embodies the essence of healthy living with its focus
        on fresh, wholesome ingredients and vibrant, satisfying flavors.
      </p>
      <button type="button" id="#menu" className="custom__button">
        Check Out The Menu !!
      </button>
    </div>
  </div>
);
export default Content;
