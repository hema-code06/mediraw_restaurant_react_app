import { useState, useEffect } from "react";
import "./Navbar.css";
import Reservation from "../Reservation/Reservation";
import images from "../../constants/images";

const sections = ["home", "menu", "chef", "intro", "gallery", "contact"];

const Navbar = () => {
  const [showModal, setShowModal] = useState(false);
  const [active, setActive] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      {
        root: null,
        rootMargin: "-40% 0px -50% 0px",
        threshold: 0,
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
              className={active === sec ? "active" : ""}
              onClick={() => handleScrollTo(sec)}
            >
              {sec}
            </li>
          ))}
        </ul>

        <div className="app__navbar-signin">
          <button onClick={() => setShowModal(true)} className="book-btn">
            <img
              src="/assets/reservation.png"
              alt="Book Table"
              className="book-icon"
            />
          </button>
        </div>
      </nav>

      <Reservation isOpen={showModal} onClose={() => setShowModal(false)} />
    </>
  );
};

export default Navbar;
