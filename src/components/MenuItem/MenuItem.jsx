import React from "react";
import "./MenuItem.css";

const MenuItem = ({ item }) => {
  return (
    <div className="menu-card">
      <h3>{item.title}</h3>
      <p className="price">₹{item.price}</p>
      <span className={`tag ${item.type}`}>{item.type}</span>
    </div>
  );
};

export default MenuItem;
