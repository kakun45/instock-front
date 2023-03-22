import React from 'react'
import './InventoryList.scss'
import  trashcanIcon  from '../../assets/icons/delete_outline-24px.svg';
import editIcon from "../../assets/icons/edit-24px.svg";
import arrowIcon from '../../assets/icons/chevron_right-24px.svg';

export const InventoryList = () => {
  return (
    <>
      <div className="page">
        <div className="inventory__search-container">
          <h2 className="inventory__header">Inventory</h2>
          <div className="inventory__search-inner-container">
            <input
              className="inventory__search-bar"
              type="text"
              placeholder="Search..."
            />
            <button className="inventory__search-button">+ Add New Item</button>
          </div>
        </div>
      </div>

      <div className="inventory__product-container">
        <div className="inventory__item-container">
          <div className="inventory__items">
            <p>INVENTORY ITEM</p>
            <div className="inventory__chevron-container">
              <p className="inventory__item-text">Television</p>
              <img src={arrowIcon} alt="chevron arrow icon"></img>
            </div>
          </div>
          <div className="inventory__catagory">
            <p>CATAGORY</p>
            <p>Electronics</p>
          </div>
          <div className="inventory__icons">
            <img src={trashcanIcon} alt="trash can icon"></img>
          </div>
        </div>

        <div className="inventory__status-container">
          <div className="inventory__status">
            <div className="inventory__status-active-container">
              <p>STATUS</p>
            </div>
            <p>IN STOCK</p>
          </div>

          <div className="inventory__quantities">
            <p className="inventory__quantity-text">QTY</p>
            <p>500</p>
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

      <div className="inventory__product-container--tablet">
        <div className="inventory__table-headers">
          <p>Inventory Item</p>
          <p>category</p>
          <p>Status</p>
          <p>Qty</p>
          <p>Warehouse</p>
          <p>Actions</p>
        </div>

        <div className="inventory__item-container--tablet">
          <p>Television</p>
          <p>Electronics</p>
          <div className="inventory__status-active-container">
            <p>IN STOCK</p>
          </div>
          <p>500</p>
          <p>Manhattan</p>
          <span>
            <img
              src={trashcanIcon}
              className="traschcan"
              alt="trash can icon"></img>
            <img src={editIcon} className="edit" alt="pencil edit icon"></img>
          </span>
        </div>
      </div>
    </>
  );
}
