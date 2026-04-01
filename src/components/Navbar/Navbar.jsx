import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./Navbar.css";
import Reservation from "../Reservation/Reservation";
import images from "../../constants/images";

const sections = ["home", "menu", "chef", "gallery", "contact"];

const Navbar = () => {
  const [showModal, setShowModal] = useState(false);
  const [active, setActive] = useState("home");
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      {
        rootMargin: "-40% 0px -50% 0px",
      },
    );

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const handleScrollTo = (id) => {
    const el = document.getElementById(id);
    const navbar = document.querySelector(".app__navbar");

    if (el && navbar) {
      const offset = navbar.offsetHeight;

      window.scrollTo({
        top: el.offsetTop - offset,
        behavior: "smooth",
      });
    }
    setMenuOpen(false);
  };

  return (
    <>
      <nav className={`app__navbar ${scrolled ? "scrolled" : ""}`}>
        <div className="app__navbar-logo">
          <img src={images.Medit} alt="Medit" />
        </div>

        <ul className="app__navbar-links desktop">
          {sections.map((sec) => (
            <li
              key={sec}
              className={active === sec ? "active" : ""}
              onClick={() => handleScrollTo(sec)}
            >
              {sec}
            </li>
          ))}
        </ul>

        <div className="app__navbar-right">
          <button onClick={() => setShowModal(true)} className="book-btn">
            BOOK TABLE
          </button>

          <div
            className={`hamburger ${menuOpen ? "open" : ""}`}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span />
            <span />
            <span />
          </div>
        </div>
      </nav>

      <AnimatePresence>
        {menuOpen && (
          <>
            <motion.div
              className="overlay"
              onClick={() => setMenuOpen(false)}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            />

            <motion.div
              className="mobile-menu"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 120 }}
            >
              <ul>
                {sections.map((sec) => (
                  <li
                    key={sec}
                    className={active === sec ? "active" : ""}
                    onClick={() => handleScrollTo(sec)}
                  >
                    {sec}
                  </li>
                ))}
              </ul>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      <Reservation isOpen={showModal} onClose={() => setShowModal(false)} />
    </>
  );
};

export default Navbar;
