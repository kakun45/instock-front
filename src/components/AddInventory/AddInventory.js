import Button from "../Button/Button";
import NavHeader from "../NavHeader/NavHeader";

import "./AddInventory.scss";

function AddInventory() {
  return (
    <div className="add-inventory__component">
      <NavHeader title="Add New Inventory Item" path="/inventory">
        <></>
      </NavHeader>
      <div className="add-inventory__main-content">
        {/* ////LEFT SIDE//// */}
        <form className="inventory-form">
          <div className="inventory-form__form-wrapper">
            <div className="add-inventory__left-side">
              <h3 className="add-inventory__header">Item Details</h3>
              <label className="inventory-form__label">Item Name</label>
              <input
                className="inventory-form__input"
                placeholder="Item Name"
              />
              <label className="inventory-form__label">Description</label>
              <textarea
                className="inventory-form__textarea"
                placeholder="Please enter a brief description"
              ></textarea>
              <label className="inventory-form__label">Category</label>
              <select
                className="inventory-form__input"
                placeholder="Please select"
              >
                <option value="Please select">Please select</option>
              </select>
            </div>

            {/* ///RIGHT SIDE and bottom//// */}
            <div className="add-inventory__right-side">
              <h3 className="add-inventory__header">Item Availability</h3>
              {/* ////RADIO BUTTON/// */}
              <div>
                <label className="inventory-form__label">Status</label>
              </div>
              <input
                className="inventory-form__radio-input"
                type="radio"
                name="inStock"
                value="inStock"
              />
              <label className="inventory-form__radio-label" htmlFor="inStock">
                In stock
              </label>
              <input
                className="inventory-form__radio-input"
                type="radio"
                name="outOfStock"
                value="outOfStock"
              />
              <label
                className="inventory-form__radio-label"
                htmlFor="outOfStock"
              >
                Out of stock
              </label>

              {/* ////QUANTITY INPUT/// */}
              <div className="inventory-form__warehouse-label">
                <label className="inventory-form__label">Quantity</label>
              </div>
              <input className="inventory-form__input" placeholder="0" />
              <div className="inventory-form__warehouse-label">
                <label className="inventory-form__label">Warehouse</label>
              </div>
              <input className="inventory-form__input" placeholder="0" />
              {/* ////WAREHOUSE SELECTOR/// */}
              <div className="inventory-form__warehouse-label">
                <label className="inventory-form__label">Warehouse</label>
              </div>
              <select
                className="inventory-form__input"
                placeholder="Please select"
              >
                <option value="Please select">Please select</option>
              </select>
            </div>
          </div>
          <div className="button-wrapper">
            <Button text="Cancel" emphasis="low-emphasis" type="button" />

            <Button text="Add Item" emphasis="high-emphasis" type="button" />
          </div>
        </form>
      </div>
    </div>
  );
}

export default AddInventory;
