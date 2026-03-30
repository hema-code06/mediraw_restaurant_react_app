import React, { useState, useEffect } from "react";
import "./Navbar.css";
import Reservation from "../Reservation/Reservation";
import { GiHamburgerMenu } from "react-icons/gi";
import { BiFoodTag } from "react-icons/bi";
import images from "../../constants/images";

const sections = ["home", "menu", "chef", "intro", "gallery", "contact"];

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [active, setActive] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;

      setScrolled(scrollY > 50);

      sections.forEach((section) => {
        const el = document.getElementById(section);
        if (el) {
          const offsetTop = el.offsetTop - 100;
          const height = el.offsetHeight;

          if (scrollY >= offsetTop && scrollY < offsetTop + height) {
            setActive(section);
          }
        }
      });
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      window.scrollTo({
        top: el.offsetTop - 70,
        behavior: "smooth",
      });
    }
    setToggleMenu(false);
  };

  return (
    <>
      <nav className={`app__navbar ${scrolled ? "scrolled" : ""}`}>
        <div className="app__navbar-logo">
          <img src={images.Medit} alt="Medit" />
        </div>
        <ul className="app__navbar-links">
          {sections.map((sec) => (
            <li
              key={sec}
              className={`p__opensans ${active === sec ? "active" : ""}`}
              onClick={() => handleScrollTo(sec)}
            >
              {sec}
            </li>
          ))}
        </ul>
        <div className="app__navbar-signin">
          <button onClick={() => setShowModal(true)} className="book-btn">
            Book Table
          </button>
        </div>
        <div className="app__navbar-smallscreen">
          <GiHamburgerMenu fontSize={27} onClick={() => setToggleMenu(true)} />
          {toggleMenu && (
            <div className="app__navbar-smallscreen_overlay flex__center slide-bottom">
              <BiFoodTag
                fontSize={30}
                className="overlay__close"
                onClick={() => setToggleMenu(false)}
              />

              <ul className="app__navbar-smallscreen_links">
                {sections.map((sec) => (
                  <li key={sec} onClick={() => handleScrollTo(sec)}>
                    {sec}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </nav>
      <Reservation isOpen={showModal} onClose={() => setShowModal(false)} />
    </>
  );
};

export default Navbar;
