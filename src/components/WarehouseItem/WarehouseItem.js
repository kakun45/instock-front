import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import deleteIcon from "../../assets/icons/delete_outline-24px.svg";
import editIcon from "../../assets/icons/edit-24px.svg";
import chevronIcon from "../../assets/icons/chevron_right-24px.svg";
import "./WarehouseItem.scss";
import axios from "axios";

function WarehouseItem() {
  const [item, setItem] = useState();
  const { itemId } = useParams();

  useEffect(() => {
    axios
      .get(`http://localhost:8080/api/${itemId}`)
      .then((res) => {
        setItem(res.data);
      })
      .catch((err) => console.log(err));
  }, [itemId]);

  return (
    <div className="warehouse-item__component">
      <div className="warehouse-item__left-side">
        <div className="warehouse-item__text-box">
          <h4 className="warehouse-item__table-header warehouse-item__table-header--top">
            WAREHOUSE
          </h4>
          <Link
            to={`/warehouses/${itemId}`}
            className="warehouse-item__link-box"
          >
            <p className="warehouse-item__link-text">{"item.location"}</p>
            <img
              className="warehouse-item__link-icon"
              src={chevronIcon}
              alt="chevron icon"
            />
          </Link>
        </div>
        <div className="warehouse-item__text-box">
          <h4 className="warehouse-item__table-header  warehouse-item__table-header--after">
            ADDRESS
          </h4>
          <p className="warehouse-item__body-medium">{"item.address"}</p>
        </div>
      </div>
      <div className="warehouse-item__right-side">
        <div className="warehouse-item__text-box">
          <h4 className="warehouse-item__table-header warehouse-item__table-header--top">
            CONTACT NAME
          </h4>
          <p className="warehouse-item__body-medium">{"item STATUS"}</p>
        </div>
        <div className="c__text-box">
          <h4 className="warehouse-item__table-header item-details__table-header--top">
            CONTACT INFORMATION
          </h4>
          <p className="warehouse-item__body-medium">{"+1 (222) 333-4444"}</p>
          <p className="warehouse-item__body-medium">{"email@somemail.com"}</p>
        </div>
      </div>
      <div className="warehouse-item__icons-box">
        <img src={deleteIcon} alt="delete icon" />
        <img src={editIcon} alt="edit icon" />
      </div>
    </div>
  );
}

export default WarehouseItem;
