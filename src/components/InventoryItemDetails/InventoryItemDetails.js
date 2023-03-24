import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import editIcon from "../../assets/icons/edit-24px.png";
import Button from "../Button/Button";
import NavHeader from "../NavHeader/NavHeader";
import "./InventoryItemDetails.scss";
<<<<<<< HEAD
import { useParams } from "react-router-dom";

function InventoryItemDetails() {

=======
const API_URI = process.env.REACT_APP_API_URI;

function InventoryItemDetails() {
  const { itemId } = useParams();
  const [inventoryItem, setinventoryItem] = useState({});

  useEffect(() => {
    axios
      .get(`${API_URI}/api/inventories/${itemId}`)
      .then((res) => {
        setinventoryItem(res.data[0]); // comes in as [{...}] due requirements
      })
      .catch((err) => console.error(err));
  }, [itemId]);
>>>>>>> develop-front

  return (
    <div className="item-details__component">
      <NavHeader title={inventoryItem.item_name} path="/inventory">
        <Button
          icon={editIcon}
          text="EDIT" // TODO On mobile, hide text
          emphasis="high-emphasis"
          type="button"
        />
      </NavHeader>
      <div className="item-details__main-content">
        <div className="item-details__left-side">
          <div className="item-details__text-box">
            <h4 className="item-details__table-header item-details__table-header--top">
              ITEM DESRIPTION:
            </h4>
            <p className="item-details__body-medium">
              {inventoryItem.description}
            </p>
          </div>
          <div className="item-details__text-box">
            <h4 className="item-details__table-header  item-details__table-header--after">
              CATEGORY:
            </h4>
            <p className="item-details__body-medium">
              {inventoryItem.category}
            </p>
          </div>
        </div>
        <div className="item-details__right-side">
          <div className="item-details__stat-quant-box">
            <div className="item-details__text-box">
              <h4 className="item-details__table-header item-details__table-header--top">
                STATUS:
              </h4>
              <h4 className="item-details__instock-label">
                {inventoryItem.status}
              </h4>
            </div>
            <div className="item-details__text-box">
              <h4 className="item-details__table-header item-details__table-header--top">
                QUANTITY:
              </h4>
              <p className="item-details__body-medium">
                {inventoryItem.quantity}
              </p>
            </div>
          </div>
          <div className="item-details__text-box">
            <h4 className="item-details__table-header item-details__table-header--after">
              WAREHOUSE:
            </h4>
            <p className="item-details__body-medium">
              {inventoryItem.warehouse_name}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default InventoryItemDetails;
