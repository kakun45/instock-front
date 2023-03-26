import Button from "../Button/Button";
import NavHeader from "../NavHeader/NavHeader";
import { useParams } from "react-router-dom";

import "./EditInventory.scss";

function EditInventory() {
  const { itemId } = useParams();
  return (
    <div className="edit-inventory__component">
      <NavHeader title="Edit Inventory Item" path={`/inventory/${itemId}`}>
        <></>
      </NavHeader>
      <div className="edit-inventory__main-content">
        {/* ////LEFT SIDE and top//// */}
        <form className="inventory-form">
          <div className="inventory-form__form-wrapper">
            <div className="edit-inventory__left-side">
              <h3 className="edit-inventory__header">Item Details</h3>

              <label className="inventory-form__label">Item Name</label>
              <input
                className="inventory-form__input"
                placeholder="Item Name"
              />
              <label className="inventory-form__label">Description</label>
              <textarea
                className="inventory-form__textarea"
                placeholder="This 50'' 4K LED TV provides a crystal-clear picture and vivid colors"
              ></textarea>
              <label className="inventory-form__label">Category</label>
              <select className="inventory-form__input">
                <option value="Electronics">Electronics</option>
              </select>
            </div>
            {/* ///RIGHT SIDE and bottom//// */}
            <div className="edit-inventory__right-side">
              <h3 className="edit-inventory__header">Item Availability</h3>
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
                <label className="inventory-form__label">Warehouse</label>
              </div>
              <input
                className="inventory-form__input"
                placeholder="Manhattan"
              />
              {/* ////WAREHOUSE SELECTOR/// */}
            </div>
          </div>
          <div className="button-wrapper">
            <Button text="Cancel" emphasis="low-emphasis" type="button" />

            <Button text="Save" emphasis="high-emphasis" type="button" />
          </div>
        </form>
      </div>
    </div>
  );
}

export default EditInventory;
