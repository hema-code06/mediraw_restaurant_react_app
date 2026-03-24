import React from "react";
import { images } from "../../constants";

const Find = () => (
  <div
    className="app__wrapper section__padding"
    style={{ background: "beige" }}
    id="about"
  >
    <div className="find_image">
      <img src={images.spn} alt="find_img" />
    </div>
    <div className="app__wrapper_info">
      <h1 className="headtext__cormorant" style={{ marginBottom: "2rem" }}>
        Dine with Us
      </h1>
      <div className="app__wrapper-content">
        <p className="p__opensans">
          Lane Ends Bungalow, Whatcroft Hall Lane, Rudheath, CW9 75G
        </p>
        <p
          className="p__cormorant"
          style={{ color: "olivedrab", paddingTop: "5rem" }}
        >
          Opening Hours
        </p>
        <p className="p__opensans">Mon - Fri: 08:00 am - 03:00 am</p>
        <p className="p__opensans">Sat - Sun: 09:00 am - 05:00 am</p>
      </div>
      <button
        type="button"
        className="custom__button"
        style={{ marginTop: "2rem" }}
      >
        Visit Our Restaurant
      </button>
    </div>

    <div className="app__wrapper_img" style={{ marginTop: "7rem" }}>
      <img src={images.findus} alt="finus_img" />
    </div>
  </div>
);

export default Find;
