import React from 'react';
import { images } from '../../constants';
import './Chef.css';

const Chef = () => (
  <div className="app__bg app__wrapper section__padding" id='chef'>
    <div className="app__wrapper_info right-to-left-animation">
      <div className="app__chef-content">
        <div className="app__chef-content_quote">
          <p className="p__opensans">"In our kitchen, passion meets precision, creating culinary masterpieces that ignite the senses."</p>
        </div>
        <p className="p__opensans">"In our restaurant, flavors dance on the palate, each dish a story told in taste. From farm to table, our commitment to excellence shines in every bite."</p>
      </div>

      <div className="app__chef-sign">
        <p>Liholiho</p>
        <p className="p__opensans">Chef & Founder</p>
        <img src={images.sign} style={{marginTop:'0%'}} alt="sign_image" />
      </div>
    </div>
    <div className="app__wrapper_img app__wrapper_img-reverse left-to-right-animation">
      <img src={images.chef} alt="chef_image" />
    </div>
  </div>
);

export default Chef;
