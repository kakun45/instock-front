import "./Header.scss";
import inStockLogo from "../../assets/logo/InStock-Logo_1x.png";
import { NavLink } from "react-router-dom";

function Header() {
  return (
    <header className="header">
      <img className="navigation__logo" src={inStockLogo} alt="instock-logo" />
      <nav className="navigation">
        <div>
          <ul className="navigation__list">
            <div className="navigation__item-wrapper">
              <NavLink
                to="/warehouses"
                className={({ isActive }) =>
                  isActive
                    ? "navigation__item navigation__item--active"
                    : "navigation__item"
                }
              >
                Warehouses
              </NavLink>
            </div>

            <div className="navigation__item-wrapper">
              <NavLink
                to="/inventory"
                className={({ isActive }) =>
                  isActive
                    ? "navigation__item navigation__item--active"
                    : "navigation__item"
                }
              >
                Inventory
              </NavLink>
            </div>
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default Header;
