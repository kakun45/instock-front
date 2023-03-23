import Button from "../Button/Button";
import NavHeader from "../NavHeader/NavHeader";

import "./EditInventory.scss";

function EditInventory() {
  return (
    <div className="edit-inventory__component">
      <NavHeader title="Add New inventory" path="/inventorys">
        <></>
      </NavHeader>
      <div className="edit-inventory__main-content">
        {/* ////LEFT SIDE and top//// */}
        <div className="edit-inventory__left-side">
          <h3 className="edit-inventory__header">Item Details</h3>
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
        {/* ///RIGHT SIDE and bottom//// */}
        <div className="edit-inventory__right-side">
          <h3 className="edit-inventory__header">Item Availability</h3>

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

export default EditInventory;
