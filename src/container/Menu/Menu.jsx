import { useState } from "react";
import "./Menu.css";
import menuData from "../../constants/data";
import MenuItem from "../../components/MenuItem/MenuItem";

const categories = ["all", "coastline", "mezze"];

const Menu = () => {
  const [filter, setFilter] = useState("all");
  const [search, setSearch] = useState("");

  const filteredMenu = menuData.filter((item) => {
    return (
      (filter === "all" || item.category === filter) &&
      item.title.toLowerCase().includes(search.toLowerCase())
    );
  });

  return (
    <div className="menu section__padding" id="menu">
      <h1 className="menu-title">Discover what’s on our menu</h1>

      <div className="menu-search-wrapper">
        <input
          type="text"
          placeholder="Search dishes..."
          className="menu-search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <span className="search-icon">🔍</span>
      </div>

      <div className="menu-filters">
        {categories.map((cat) => (
          <button
            key={cat}
            className={`filter-btn ${filter === cat ? "active" : ""}`}
            onClick={() => setFilter(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="menu-grid">
        {filteredMenu.length > 0 ? (
          filteredMenu.map((item) => (
            <MenuItem key={item.id} item={item} />
          ))
        ) : (
          <p className="no-results">No dishes found</p>
        )}
      </div>
    </div>
  );
};

export default Menu;