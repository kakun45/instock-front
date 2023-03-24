/** @format */

import React from "react";
import "../InventoryList/InventoryList.scss";
import "./SearchBar.scss";
import { Link } from "react-router-dom";




const SearchBar = () => {
  return (
    <div className="page">
      <div className="inventory__search-container">
        <h2 className="inventory__header">Inventory</h2>
        <div className="inventory__search-inner-container">
          <input
            className="inventory__search-bar"
            type="text"
            placeholder="Search..."
          />
          <Link to='/inventory/add' >
            <button className="inventory__search-button">+ Add New Item</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
