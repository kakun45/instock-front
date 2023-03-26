import React from "react";
import "./InventoryList.scss"; // this file is used for styling on both: InventoryList.js and WarehouseInventoryList.js
import arrowDrop from "../../assets/icons/sort-24px.svg";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useEffect } from "react";
import { InventoryCard } from "../InventoryCard/InventoryCard";
const API_URI = process.env.REACT_APP_API_URI;

export const WarehouseInventoryList = ({
  setModal,
  setDeleteItem,
  warehouseInventoryList,
  setWarehouseInventoryList,
}) => {
  const { warehouseId } = useParams();
  // Alternatively it works either way: in here or in WarehouseDetails, keep one, which is lower possible level. For now it's inside in here, move up if needed
  useEffect(() => {
    axios
    .get(`${API_URI}/api/warehouses/${warehouseId}/inventories`)
    .then((res) => {
      setWarehouseInventoryList(res.data);
    })
    .catch((err) => console.log(err));
    // eslint-disable-next-line
  }, [API_URI, warehouseId]);

  return (
    <>
      <div className="inventory__product-container--tablet">
        <div className="inventory__table-headers">
          <div className="inventory__sort-icon">
            <p>INVENTORY ITEMS</p> <img src={arrowDrop} alt="arrow drop"></img>
          </div>
          <div className="inventory__sort-icon">
            <p>CATEGORY</p> <img src={arrowDrop} alt="arrow drop"></img>
          </div>
          <div className="inventory__sort-icon">
            <p>STATUS</p> <img src={arrowDrop} alt="arrow drop"></img>
          </div>
          <div className="inventory__sort-icon">
            <p>QTY</p> <img src={arrowDrop} alt="arrow drop"></img>
          </div>
          <div className="inventory__sort-icon">
            <p>ACTIONS</p> <img src={arrowDrop} alt="arrow drop"></img>
          </div>
        </div>
      </div>
      {warehouseInventoryList &&
        warehouseInventoryList.map((item) => {
          return (
            <InventoryCard
              key={item.id}
              item={item}
              setModal={setModal}
              setDeleteItem={setDeleteItem}
            />
          );
        })}
    </>
  );
};
