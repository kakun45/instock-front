import { Link } from "react-router-dom";
import deleteIcon from "../../assets/icons/delete_outline-24px.svg";
import editIcon from "../../assets/icons/edit-24px.svg";
import chevronIcon from "../../assets/icons/chevron_right-24px.svg";
import "./WarehouseItem.scss";

function WarehouseItem({ warehouse }) {
  console.log(warehouse);
  return (
    <div className="warehouse-item__component">
      <div className="warehouse-item__left-side">
        <div className="warehouse-item__text-box">
          <h4 className="warehouse-item__table-header warehouse-item__table-header--t-hidden">
            WAREHOUSE
          </h4>
          <Link
            to={`/warehouses/${warehouse.id}`}
            className="warehouse-item__link-box"
          >
            <p className="warehouse-item__link-text">{warehouse.city}</p>
            <img
              className="warehouse-item__link-icon"
              src={chevronIcon}
              alt="chevron icon"
            />
          </Link>
        </div>
        <div className="warehouse-item__text-box">
          <h4 className="warehouse-item__table-header  warehouse-item__table-header--t-hidden">
            ADDRESS
          </h4>
          <p className="warehouse-item__body-medium">{`${warehouse.address}, ${warehouse.city}, ${warehouse.country}`}</p>
        </div>
      </div>
      <div className="warehouse-item__right-side">
        <div className="warehouse-item__text-box">
          <h4 className="warehouse-item__table-header warehouse-item__table-header--t-hidden">
            CONTACT NAME
          </h4>
          <p className="warehouse-item__body-medium">
            {warehouse.contact_name}
          </p>
        </div>
        <div className="warehouse-item__text-box">
          <h4 className="warehouse-item__table-header warehouse-item__table-header--t-hidden">
            CONTACT INFORMATION
          </h4>
          <p className="warehouse-item__body-medium">
            {warehouse.contact_phone}
          </p>
          <p className="warehouse-item__body-medium">
            {warehouse.contact_email}
          </p>
        </div>
      </div>
      <div className="warehouse-item__icons-box">
        <Link to={`/warehouses/${warehouse.id}/delete`}>
          <img
            className="warehouse-item__icon"
            src={deleteIcon}
            alt="delete icon"
          />
        </Link>
        <Link to={`/warehouses/${warehouse.id}/edit`}>
          <img
            className="warehouse-item__icon"
            src={editIcon}
            alt="edit icon"
          />
        </Link>
      </div>
    </div>
  );
}

export default WarehouseItem;
