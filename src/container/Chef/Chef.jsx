import React, { useEffect, useState } from "react";
import { images } from "../../constants";
import "./Chef.css";
import { motion } from "framer-motion";

const useCountUp = (end, duration = 2000) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const increment = end / (duration / 16);

    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [end, duration]);

  return count;
};

const Chef = () => {
  const exp = useCountUp(15);
  const dishes = useCountUp(50);
  const rating = useCountUp(48);

  return (
    <div className="chef section__padding" id="chef">
      <div className="chef-container">
        <motion.div
          className="chef-image"
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <img src={images.chef} alt="chef" />
        </motion.div>

        <motion.div
          className="chef-content"
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="chef-title">Meet Our Chef</h2>

          <p className="chef-quote">
            “In our kitchen, passion meets precision — every dish tells a
            story.”
          </p>

          <p className="chef-desc">
            With years of Mediterranean culinary mastery, Chef Liholiho blends
            tradition with innovation. Every plate reflects culture, flavor, and
            art.
          </p>

          <div className="chef-highlights">
            <motion.div whileHover={{ scale: 1.1 }}>
              <h3>{exp}+</h3>
              <p>Years Experience</p>
            </motion.div>

            <motion.div whileHover={{ scale: 1.1 }}>
              <h3>{dishes}+</h3>
              <p>Signature Dishes</p>
            </motion.div>

            <motion.div whileHover={{ scale: 1.1 }}>
              <h3>{(rating / 10).toFixed(1)}★</h3>
              <p>Customer Rating</p>
            </motion.div>
          </div>

          <motion.div
            className="chef-sign"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <p>Liholiho</p>
            <span>Chef & Founder</span>
            <img src={images.sign} alt="sign" />
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Chef;
