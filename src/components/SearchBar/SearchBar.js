/** @format */

import React from "react";
import { Link } from "react-router-dom";
import Button from "../Button/Button";
import "../SearchBar/SearchBar.scss";


const SearchBar = ({ title, path }) => {
  return (
    <div className="searchbar">
      <h2 className="searchbar__page-header">{title}</h2>
      <div className="searchbar__input-button-box">
        <form className="searchbar__form">
          <input
            className="searchbar__input"
            type="text"
            placeholder="Search..."
          />
        </form>
        <Link to={`/${path}/add`}>
          <Button
            text="+ Add New Item"
            emphasis="high-emphasis"
            type="button"
          />
        </Link>

      </div>
    </div>
  );
};

export default SearchBar;
