import React, { useState } from "react";
import { FiFacebook, FiTwitter, FiInstagram } from "react-icons/fi";
import { FaArrowUp } from "react-icons/fa";
import { motion } from "framer-motion";
import "./Footer.css";
import { images } from "../../constants";

const Footer = () => {
  const [email, setEmail] = useState("");

  const handleSubscribe = () => {
    if (email) {
      alert("Subscribed successfully!");
      setEmail("");
    }
  };

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="footer">
      {/* 🔥 TOP SECTION */}
      <div className="footer-top">
        {/* BRAND */}
        <div className="footer-brand">
          <img src={images.Footer} alt="logo" />
          <p>
            Experience Mediterranean flavors like never before. Crafted with
            passion and served with elegance.
          </p>

          <div className="footer-icons">
            {[FiFacebook, FiTwitter, FiInstagram].map((Icon, i) => (
              <motion.div key={i} whileHover={{ scale: 1.2 }}>
                <Icon />
              </motion.div>
            ))}
          </div>
        </div>

        {/* CONTACT */}
        <div>
          <h3>Contact</h3>
          <p>📍 Chennai, Tamil Nadu</p>
          <p>📞 +91 98765 43210</p>
          <p>📧 support@mediterranean.com</p>
        </div>

        {/* HOURS */}
        <div>
          <h3>Opening Hours</h3>
          <p>Mon - Fri: 10AM – 11PM</p>
          <p>Sat - Sun: 9AM – 1AM</p>
        </div>

        {/* 🔥 NEWSLETTER */}
        <div className="footer-news">
          <h3>Stay Updated</h3>
          <p>Get offers & updates</p>

          <div className="newsletter">
            <input
              type="email"
              placeholder="Enter email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <button onClick={handleSubscribe}>Join</button>
          </div>
        </div>
      </div>

      {/* 🔥 BOTTOM */}
      <div className="footer-bottom">
        <p>© 2024 Mediterranean Restaurant</p>

        <motion.button
          onClick={scrollTop}
          className="top-btn"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.9 }}
        >
          <FaArrowUp />
        </motion.button>
      </div>
    </div>
  );
};

export default Footer;
