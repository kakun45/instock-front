import Button from "../Button/Button";
import NavHeader from "../NavHeader/NavHeader";

import "./AddInventory.scss";

function AddInventory() {
  return (
    <div className="add-inventory__component">
      <NavHeader title="Add New inventory" path="/inventorys">
        <></>
      </NavHeader>
      <div className="add-inventory__main-content">
        {/* ////LEFT SIDE//// */}
        <div className="add-inventory__left-side">
          <h3 className="add-inventory__header">Item Details</h3>
          <form className="inventory-form">
            <label className="inventory-form__label">Item Name</label>
            <input
              className="inventory-form__input"
              placeholder="Item Name"
            ></input>
            <label className="inventory-form__label">Description</label>
            <textarea
              className="inventory-form__textarea"
              placeholder="Please enter a brief item description..."
            ></textarea>
            <label className="inventory-form__label">Category</label>
            <select className="inventory-form__input"></select>
          </form>
        </div>
        {/* ///RIGHT SIDE//// */}
        <div className="add-inventory__right-side">
          <h3 className="add-inventory__header">Item Availability</h3>

          {/* ////RADIO BUTTON/// */}
          <form className="inventory-form">
            <label className="inventory-form__label">Status</label>
            <input type="radio" className="inventory-form__input" id="in-stock">
              <label className="inventory-form__label">In stock</label>
              <label className="inventory-form__label">Out of stock</label>
            </input>
            {/* ////QUANTITY INPUT/// */}
            <label className="inventory-form__label">Quantity</label>
            <input
              className="inventory-form__input"
              placeholder="Quantity"
            ></input>
            {/* ////WAREHOUSE SELECTOR/// */}
            <label className="inventory-form__label">Category</label>
            <select className="inventory-form__input"></select>
          </form>
          <div className="button-wrapper">
            <Button text="Cancel" emphasis="low-emphasis" type="button" />

            <Button text="Add Item" emphasis="high-emphasis" type="button" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddInventory;
