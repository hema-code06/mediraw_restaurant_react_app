import React from 'react';
import { FiFacebook, FiTwitter, FiInstagram } from 'react-icons/fi';
import './Footer.css';
import { images } from '../../constants';

const Footer = () => (
  <div className="app__bg app__footer section__padding" id="contact">
    <img src={images.Footer} style={{ width: "530px" }} alt="footer_logo" />
    <div className="app__footer-links">
      <div className="app__footer-links_contact">
        <h1 className="app__footer-headtext" style={{ color: 'olivedrab' }}>Contact</h1>
        <p className="p__opensans">9 W 53rd St, Bengaluru, KA 56006, INDIA</p>
        <p className="p__opensans">+91 4526953840</p>
        <p className="p__opensans">+91 3463463567</p>
      </div>
      <div className="app__footer-links_logo">
        <p className="p__opensans">&quot;The best way to find yourself is to lose yourself in the service of others.&quot;</p>
        <div className="app__footer-links_icons">
          <FiFacebook />
          <FiTwitter />
          <FiInstagram />
        </div>
      </div>
      <div className="app__footer-links_work">
        <h1 className="app__footer-headtext" style={{ color: 'olivedrab' }}>Working Hours</h1>
        <p className="p__opensans">Monday-Friday:</p>
        <p className="p__opensans">08:00 am - 3:00 am</p>
        <p className="p__opensans">Saturday-Sunday:</p>
        <p className="p__opensans">09:00 am - 5:00 pm</p>
      </div>
    </div>

    <div className="footer__copyright">
      <p className="p__opensans" style={{ textAlign: "center" }}>2026 Mediterranean. All Rights reserved.</p>
    </div>
  </div>
);

export default Footer;