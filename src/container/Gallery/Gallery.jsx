import React, { useState, useRef, useEffect } from "react";
import {
  BsInstagram,
  BsArrowLeftShort,
  BsArrowRightShort,
} from "react-icons/bs";
import { AiOutlineClose } from "react-icons/ai";

import { images } from "../../constants";
import "./Gallery.css";

const imageList = [
  images.gallery01,
  images.gallery02,
  images.gallery03,
  images.gallery04,
  images.gallery05,
  images.gallery06,
  images.gallery07,
  images.gallery08,
  images.gallery09,
  images.gallery10,
  images.gallery11,
  images.gallery12,
  images.gallery13,
  images.gallery14,
];

const Gallery = () => {
  const scrollRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(null);

  const scroll = (direction) => {
    const { current } = scrollRef;
    if (direction === "left") current.scrollLeft -= 300;
    else current.scrollLeft += 300;
  };

  // 🔥 Keyboard navigation
  useEffect(() => {
    const handleKey = (e) => {
      if (currentIndex === null) return;

      if (e.key === "Escape") setCurrentIndex(null);
      if (e.key === "ArrowRight")
        setCurrentIndex((prev) => (prev + 1) % imageList.length);
      if (e.key === "ArrowLeft")
        setCurrentIndex(
          (prev) => (prev - 1 + imageList.length) % imageList.length,
        );
    };

    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [currentIndex]);

  return (
    <div className="app__gallery flex__center" id="gallery">
      <div className="app__gallery-images">
        <div className="app__gallery-images_container" ref={scrollRef}>
          {imageList.map((image, index) => (
            <div
              className="app__gallery-images_card flex__center"
              key={index}
              onClick={() => setCurrentIndex(index)}
            >
              <img src={image} alt="gallery" />
              <BsInstagram className="gallery__image-icon" />
            </div>
          ))}
        </div>

        {/* Scroll Arrows */}
        <div className="app__gallery-images_arrows">
          <BsArrowLeftShort
            className="gallery__arrow-icon"
            onClick={() => scroll("left")}
          />
          <BsArrowRightShort
            className="gallery__arrow-icon"
            onClick={() => scroll("right")}
          />
        </div>
      </div>

      {/* 🔥 LIGHTBOX MODAL */}
      {currentIndex !== null && (
        <div className="lightbox">
          <AiOutlineClose
            className="lightbox-close"
            onClick={() => setCurrentIndex(null)}
          />

          <BsArrowLeftShort
            className="lightbox-arrow left"
            onClick={() =>
              setCurrentIndex(
                (currentIndex - 1 + imageList.length) % imageList.length,
              )
            }
          />

          <img
            src={imageList[currentIndex]}
            alt="preview"
            className="lightbox-img"
          />

          <BsArrowRightShort
            className="lightbox-arrow right"
            onClick={() =>
              setCurrentIndex((currentIndex + 1) % imageList.length)
            }
          />
        </div>
      )}
    </div>
  );
};

export default Gallery;
