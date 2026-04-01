import { useState } from "react";
import { BsArrowLeftShort, BsArrowRightShort } from "react-icons/bs";
import "./Gallery.css";

import { galleryData } from "../../constants/images";

const Gallery = () => {
  const [index, setIndex] = useState(0);

  const nextSlide = () => setIndex((index + 1) % galleryData.length);

  const prevSlide = () =>
    setIndex((index - 1 + galleryData.length) % galleryData.length);

  return (
    <div className="gallery-section">
      <div className="gallery-content">
        <h1>{galleryData[index].title}</h1>
        <p>{galleryData[index].desc}</p>
      </div>

      <div className="gallery-slider">
        <img src={galleryData[index].img} alt="gallery" />

        <div className="slider-arrows">
          <BsArrowLeftShort onClick={prevSlide} />
          <BsArrowRightShort onClick={nextSlide} />
        </div>

        <div className="slider-dots">
          {galleryData.map((_, i) => (
            <span
              key={i}
              className={i === index ? "dot active" : "dot"}
              onClick={() => setIndex(i)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gallery;
