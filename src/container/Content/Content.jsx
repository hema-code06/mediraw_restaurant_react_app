import { images } from "../../constants";
import "./Content.css";

const Content = () => (
  <div className="app__header app__bg app__wrapper" id="home">
    <div className="app__wrapper_img">
      <img src={images.welcome} alt="Welcome" className="image-animation" />
    </div>
    <div className="app__wrapper_info">
      <h1 className="app__header-h1 text-animation">
        Indulge in the Essence of Mediterranean Delights..
      </h1>
      <p className="p_opensans" style={{ margin: "2rem 0" }}>
        Mediterranean food embodies the essence of healthy living with its focus
        on fresh, wholesome ingredients and vibrant, satisfying flavors.
      </p>
      <a href="#menu" className="custom__button">
        Check Out The Menu !!
      </a>
    </div>
  </div>
);
export default Content;
