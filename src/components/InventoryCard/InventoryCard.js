/** @format */

import React from "react";
import "../InventoryList/InventoryList.scss";
import trashcanIcon from "../../assets/icons/delete_outline-24px.svg";
import editIcon from "../../assets/icons/edit-24px.svg";
import arrowIcon from "../../assets/icons/chevron_right-24px.svg";
import arrowDrop from "../../assets/icons/sort-24px.svg";
import { Link } from "react-router-dom";

export const InventoryCard = ({ item, setModal, setDeleteItem }) => {
  const {
    id,
    warehouse_id,
    item_name,
    description,
    category,
    status,
    quantity,
    warehouse_name,
  } = item;
  return (
    <>
      <div className="inventory__product-container">
        <div className="inventory__item-container">
          <div className="inventory__items">
            <p>INVENTORY ITEM</p>
            <div className="inventory__chevron-container">
              <Link to={`/inventory/${id}`}>
                <p className="inventory__item-text">{`${item_name}`}</p>
              </Link>
              <img
                className="inventory"
                src={arrowIcon}
                alt="chevron arrow icon"
              ></img>
            </div>
          </div>
          <div className="inventory__catagory">
            <p>CATEGORY</p>
            <p>{`${category}`}</p>
          </div>
          <div className="inventory__icons">
            <button
              onClick={() => {
                setModal(true);
                setDeleteItem(item);
              }}
            >
              <img
                className="inventory__icons-trash"
                src={trashcanIcon}
                alt="trash can icon"
              ></img>
            </button>
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
                }
              >{`${status}`}</p>
            </div>
          </div>

          <div className="inventory__quantities">
            <p className="inventory__quantity-text">QTY</p>
            <p>{`${quantity}`}</p>
          </div>

          <div className="inventory__warehouses">
            <p>WAREHOUSE</p>
            <p>{`${warehouse_name}`}</p>
          </div>

          <div className="inventory__icons">
            <Link to={`/${id}/edit`}>
              <img
                src={editIcon}
                className="inventory_icons-edit"
                alt="pencil edit icon"
              ></img>
            </Link>
          </div>
        </div>
      </div>

      <div className="inventory__item-container--tablet">
        <div className="inventory__chevron-container">
          <Link to={`/inventory/${id}`}>
            <p className="inventory__item-text">{`${item_name}`}</p>
          </Link>
          <img src={arrowIcon} alt="chevron arrow icon"></img>
        </div>
        <p>{`${category}`}</p>
        <div>
          <p
            className={
              status === "Out of Stock"
                ? "out_stock  inventory__status-active-container"
                : "inventory__status-text inventory__status-active-container"
            }
          >{`${status}`}</p>
        </div>
        <p>{`${quantity}`}</p>
        <p>{`${warehouse_name}`}</p>
        <span>
          <button
            onClick={() => {
              setModal(true);
              setDeleteItem(item);
            }}
          >
            <img
              className="inventory__icons-trash"
              src={trashcanIcon}
              alt="trash can icon"
            ></img>
          </button>
          <Link to={`/inventory/${id}/edit`}>
            <button>
              <img
                src={editIcon}
                className="inventory_icons-edit"
                alt="pencil edit icon"
              ></img>
            </button>
          </Link>
        </span>
      </div>
    </>
  );
};
