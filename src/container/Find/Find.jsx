import React from "react";
import { images } from "../../constants";
import "./Find.css";
import { motion } from "framer-motion";

const Find = () => {
  return (
    <div className="find section__padding" id="contact">
      <motion.h1
        className="find-title"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
      >
        Visit Our Restaurant
      </motion.h1>

      <div className="find__modern">

        {/* 🔥 CARDS */}
        <div className="find__cards">

          <motion.div
            className="find__card"
            whileHover={{ scale: 1.05 }}
          >
            <img src={images.findus} alt="location" />
            <h3>Location</h3>
            <p>Lane Ends Bungalow, Rudheath, CW9</p>
          </motion.div>

          <motion.div
            className="find__card"
            whileHover={{ scale: 1.05 }}
          >
            <img src={images.spn} alt="hours" />
            <h3>Opening Hours</h3>
            <p>Mon - Fri: 8AM - 3AM</p>
            <p>Sat - Sun: 9AM - 5AM</p>
          </motion.div>

          <motion.div
            className="find__card"
            whileHover={{ scale: 1.05 }}
          >
            <img
              src="https://source.unsplash.com/400x300/?restaurant,interior"
              alt="experience"
            />
            <h3>Ambience</h3>
            <p>Luxury Mediterranean dining experience</p>
          </motion.div>

        </div>

        {/* 🔥 CTA */}
        <motion.button
          className="find-btn"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          Book Your Table
        </motion.button>
      </div>
    </div>
  );
};

export default Find;