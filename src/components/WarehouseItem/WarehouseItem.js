import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import deleteIcon from "../../assets/icons/delete_outline-24px.svg";
import editIcon from "../../assets/icons/edit-24px.svg";
import chevronIcon from "../../assets/icons/chevron_right-24px.svg";
import "./WarehouseItem.scss";
import axios from "axios";

function WarehouseItem() {
  const [warehouse, setWarehouse] = useState();
  const { itemId } = useParams();

  useEffect(() => {
    axios
      .get(`http://localhost:8080/api/${itemId}`)
      .then((res) => {
        setWarehouse(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="warehouse-item__component">
      <div className="warehouse-item__left-side">
        <div className="warehouse-item__text-box">
          <h4 className="warehouse-item__table-header warehouse-item__table-header--t-hidden">
            WAREHOUSE
          </h4>
          <Link
            to={`/warehouses/${itemId}`}
            className="warehouse-item__link-box"
          >
            <p className="warehouse-item__link-text">{"warehouse.location"}</p>
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
          <p className="warehouse-item__body-medium">{"warehouse.address"}</p>
        </div>
      </div>
      <div className="warehouse-item__right-side">
        <div className="warehouse-item__text-box">
          <h4 className="warehouse-item__table-header warehouse-item__table-header--t-hidden">
            CONTACT NAME
          </h4>
          <p className="warehouse-item__body-medium">{"warehouse STATUS"}</p>
        </div>
        <div className="c__text-box">
          <h4 className="warehouse-item__table-header warehouse-item__table-header--t-hidden">
            CONTACT INFORMATION
          </h4>
          <p className="warehouse-item__body-medium">{"+1 (222) 333-4444"}</p>
          <p className="warehouse-item__body-medium">{"email@somemail.com"}</p>
        </div>
      </div>
      <div className="warehouse-item__icons-box">
        <Link to={`/warehouse/${"warehouse.id"}/delete`}>
          <img src={deleteIcon} alt="delete icon" />
        </Link>
        <Link to={`/warehouse/${"warehouse.id"}/edit`}>
          <img src={editIcon} alt="edit icon" />
        </Link>
      </div>
    </div>
  );
}

export default WarehouseItem;
