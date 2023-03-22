import { Children } from "react";
import { Link } from "react-router-dom";
import arrowBackIcon from "../../assets/icons/arrow_back-24px.svg";
import "./NavHeader.scss";

function NavHeader({ title, path, children }) {
  return (
    <div className="nav-header">
      <div className="nav-header__back-header-box">
        <Link to={path} className="nav-header__link">
          <img
            className="nav-header__back-icon"
            src={arrowBackIcon}
            alt="back icon"
          />
        </Link>
        <h1 className="nav-header__page-header">{title}</h1>
      </div>
      {Children.only(children)}
    </div>
  );
}

export default NavHeader;
