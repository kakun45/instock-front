/** @format */

import React from "react";
import "../InventoryList/InventoryList.scss";
import trashcanIcon from "../../assets/icons/delete_outline-24px.svg";
import editIcon from "../../assets/icons/edit-24px.svg";
import arrowIcon from "../../assets/icons/chevron_right-24px.svg";
import arrowDrop from "../../assets/icons/sort-24px.svg";

export const InventoryCard = ({ item }) => {
  const {
    id,
    warehouse_id,
    item_name,
    description,
    category,
    status,
    quantity,
  } = item;

  console.log(status);
  return (
    <>
      <div className="inventory__product-container">
        <div className="inventory__item-container">
          <div className="inventory__items">
            <p>INVENTORY ITEM</p>
            <div className="inventory__chevron-container">
              <p className="inventory__item-text">{`${item_name}`}</p>
              <img src={arrowIcon} alt="chevron arrow icon"></img>
            </div>
          </div>
          <div className="inventory__catagory">
            <p>CATEGORY</p>
            <p>{`${category}`}</p>
          </div>
          <div className="inventory__icons">
            <img src={trashcanIcon} alt="trash can icon"></img>
          </div>
        </div>

        <div className="inventory__status-container">
          <div className="inventory__status">
            <p>STATUS</p>
            <div className="inventory__status-active-container">
              <p
                className={
                  status === "Out of Stock"
                    ? "out_stock"
                    : "inventory__status-text"
                }>{`${status}`}</p>
            </div>
          </div>

          <div className="inventory__quantities">
            <p className="inventory__quantity-text">QTY</p>
            <p>{`${quantity}`}</p>
          </div>

          <div className="inventory__warehouses">
            <p>WAREHOUSE</p>
            <p>Manhattan</p>
          </div>

          <div className="inventory__icons">
            <img
              className="inventory__icon-edit"
              src={editIcon}
              alt="pencil edit icon"></img>
          </div>
        </div>
      </div>

      {/* tablet cards */}
      <div className="inventory__item-container--tablet">
        <div className="inventory__chevron-container">
          <p className="inventory__item-text">{`${item_name}`}</p>
          <img src={arrowIcon} alt="chevron arrow icon"></img>
        </div>
        <p>{`${category}`}</p>
        <div >
          <p
            className={
              status === "Out of Stock" ? "out_stock  inventory__status-active-container" : "inventory__status-text inventory__status-active-container"
            }>{`${status}`}</p>
        </div>
        <p>{`${quantity}`}</p>
        <p>Manhattan</p>
        <span>
          <img
            src={trashcanIcon}
            className="traschcan"
            alt="trash can icon"></img>
          <img src={editIcon} className="edit" alt="pencil edit icon"></img>
        </span>
      </div>
    </>
  );
};
