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
            <p>inventory item</p>
            <div className="inventory__chevron-container">
              <p>Television</p>
              <img src={arrowIcon}></img>
            </div>
          </div>
          <div className="inventory__catagory">
            <p>category</p>
            <p>Electronics</p>
          </div>
          <div className="inventory__icons">
            <img src={trashcanIcon}></img>
          </div>
        </div>

        <div className="inventory__status-container">
          <div className="inventory__status">
            <div className="inventory__status-active-container">
              <p>Status</p>
            </div>
            <p>IN STOCK</p>
          </div>

          <div className="inventory__quantities">
            <p>QTY</p>
            <p>500</p>
          </div>

          <div className="inventory__warehouses">
            <p>Warehouse</p>
            <p>Manhattan</p>
          </div>

          <div className="inventory__icons">
            <img src={editIcon}></img>
          </div>
        </div>
      </div>

      <div className="inventory__product-container">
        <div className="inventory__item-container">
          <div className="inventory__items">
            <p>inventory item</p>
            <div className="inventory__chevron-container">
              <p>Gym Bag</p>
              <img src={arrowIcon}></img>
            </div>
          </div>
          <div className="inventory__catagory">
            <p>category</p>
            <p>Gear</p>
          </div>
          <div className="inventory__icons">
            <img src={trashcanIcon}></img>
          </div>
        </div>

        <div className="inventory__status-container">
          <div className="inventory__status">
            <div className="inventory__status-active-container">
              <p>Status</p>
            </div>
            <p>OUT OF STOCK</p>
          </div>

          <div className="inventory__quantities">
            <p>QTY</p>
            <p>0</p>
          </div>

          <div className="inventory__warehouses">
            <p>Warehouse</p>
            <p>Manhattan</p>
          </div>

          <div className="inventory__icons">
            <img src={editIcon}></img>
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
            <img src={trashcanIcon} className="traschcan"></img>
            <img src={editIcon} className="edit"></img>
          </span>
        </div>

        <div className="inventory__item-container--tablet">
          <p>Gym Bag</p>
          <p>Gear</p>
          <div className="inventory__status-active-container">
            <p>OUT OF STOCK</p>
          </div>
          <p>0</p>
          <p>Manhattan</p>
          <span className='inventory__icons'>
            <img src={trashcanIcon}></img>
            <img src={editIcon}></img>
          </span>
        </div>
      </div>
    </>
  );
}
