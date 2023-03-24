import Button from "../Button/Button";
import NavHeader from "../NavHeader/NavHeader";

import "./EditWarehouse.scss";

function EditWarehouse() {
  return (
    <div className="edit-warehouse__component">
      <NavHeader title="Edit Warehouse" path="/editwarehouses">
        <></>
      </NavHeader>
      <div className="edit-warehouse__main-content">
        {/* ////TOP AND LEFT SIDE//// */}
        <div className="edit-warehouse__left-side">
          <h3 className="edit-warehouse__header">Warehouse Details</h3>
          <form className="warehouse-form">
            <label className="warehouse-form__label">Warehouse Name</label>
            <input
              className="warehouse-form__input"
              placeholder="Washington"
            ></input>
            <label className="warehouse-form__label">Street Address</label>
            <input
              className="warehouse-form__input"
              placeholder="33 Pearl St SW"
            ></input>
            <label className="warehouse-form__label">City</label>
            <input
              className="warehouse-form__input"
              placeholder="Washington"
            ></input>
            <label className="warehouse-form__label">Country</label>
            <input className="warehouse-form__input" placeholder="USA"></input>
          </form>
        </div>
        {/* ///RIGHT SIDE//// */}
        <div className="edit-warehouse__right-side">
          <h3 className="edit-warehouse__header">Contact Details</h3>
          <form className="warehouse-form">
            <label className="warehouse-form__label">Contact Name</label>
            <input
              className="warehouse-form__input"
              placeholder="Graeme Lyon"
            ></input>
            <label className="warehouse-form__label">Position</label>
            <input
              className="warehouse-form__input"
              placeholder="Warehouse Manager"
            ></input>
            <label className="warehouse-form__label">Phone Number</label>
            <input
              className="warehouse-form__input"
              placeholder="+1(647)504-0911"
            ></input>
            <label className="warehouse-form__label">Email</label>
            <input
              className="warehouse-form__input"
              placeholder="glyon@instock.com"
            ></input>
          </form>
          <div className="button-wrapper">
            <Button text="Cancel" emphasis="low-emphasis" type="button" />

            <Button text="Save" emphasis="high-emphasis" type="button" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default EditWarehouse;
