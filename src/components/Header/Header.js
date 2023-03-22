import "./Header.scss";
import inStockLogo from "../../assets/logo/InStock-Logo_1x.png";

function Header() {
  return (
    <header className="header">
      <img className="navigation__logo" src={inStockLogo} alt="instock-logo" />
      <nav class="navigation">
        <div>
          <ul className="navigation__list">
            <div className="navigation__item-wrapper">
              <li className="navigation__item navigation__item--active">
                WAREHOUSES
              </li>
            </div>

            <div className="navigation__item-wrapper">
              <li className="navigation__item">INVENTORY</li>
            </div>
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default Header;
