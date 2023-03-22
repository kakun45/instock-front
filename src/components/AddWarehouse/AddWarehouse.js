import Button from "../Button/Button";
import NavHeader from "../NavHeader/NavHeader";

import "./AddWarehouse.scss";

function AddWarehouse() {
  return (
    <div className="add-warehouse__component">
      <NavHeader title="Add New Warehouse" path="/warehouses">
        <></>
      </NavHeader>
      <div className="add-warehouse__main-content">
        {/* ////LEFT SIDE//// */}
        <div className="add-warehouse__left-side">
          <h3 className="add-warehouse__header">Warehouse Details</h3>
          <form className="warehouse-form">
            <label className="warehouse-form__label">Warehouse Name</label>
            <input
              className="warehouse-form__input"
              placeholder="Warehouse Name"
            ></input>
            <label className="warehouse-form__label">Street Address</label>
            <input
              className="warehouse-form__input"
              placeholder="Street Address"
            ></input>
            <label className="warehouse-form__label">City</label>
            <input className="warehouse-form__input" placeholder="City"></input>
            <label className="warehouse-form__label">Country</label>
            <input
              className="warehouse-form__input"
              placeholder="Country"
            ></input>
          </form>
        </div>
        {/* ///RIGHT SIDE//// */}
        <div className="add-warehouse__right-side">
          <h3 className="add-warehouse__header">Contact Details</h3>
          <form className="warehouse-form">
            <label className="warehouse-form__label">Contact Name</label>
            <input
              className="warehouse-form__input"
              placeholder="Contact Name"
            ></input>
            <label className="warehouse-form__label">Position</label>
            <input
              className="warehouse-form__input"
              placeholder="Position"
            ></input>
            <label className="warehouse-form__label">Phone Number</label>
            <input
              className="warehouse-form__input"
              placeholder="Phone Number"
            ></input>
            <label className="warehouse-form__label">Email</label>
            <input
              className="warehouse-form__input"
              placeholder="Email"
            ></input>
          </form>
          <div className="button-wrapper">
            <Button text="EDIT" emphasis="high-emphasis" type="button" />

            <Button text="EDIT" emphasis="high-emphasis" type="button" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddWarehouse;
