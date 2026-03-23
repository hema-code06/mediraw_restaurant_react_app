import React from "react";
import { MenuItem } from "../../components";
import { data, images } from "../../constants";
import "./SpecialMenu.css";

const SpecialMenu = () => (
  <div className="app__specialMenu flex__center section__padding" id="menu">
    <div className="app__specialMenu-title">
      <h1 className="headtext__cormorant">
        Mediterranean Today&apos;s Special
      </h1>
    </div>

    <div className="app__specialMenu-menu">

      {/* Coastline */}
      <div className="app__specialMenu-menu_coastline flex__center left-to-right-animation">
        <p className="app__specialMenu-menu_heading">Coastline</p>

        <div className="app__specialMenu_menu_items">
          {data.coastline.map((item, index) => (
            <MenuItem
              key={item.title + index}
              title={item.title}
              price={item.price}
            />
          ))}
        </div>
      </div>

      {/* Image */}
      <div className="app__specialMenu-menu_img left-to-right-animation">
        <img src={images.menu} alt="menu__img" />
      </div>

      {/* Mezze */}
      <div className="app__specialMenu-menu_mezze flex__center right-to-left-animation">
        <p className="app__specialMenu-menu_heading">Mezze</p>

        <div className="app__specialMenu_menu_items">
          {data.mezze.map((item, index) => (
            <MenuItem
              key={item.title + index}
              title={item.title}
              price={item.price}
            />
          ))}
        </div>
      </div>

    </div>
  </div>
);

export default SpecialMenu;