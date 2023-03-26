import Button from "../Button/Button";
import NavHeader from "../NavHeader/NavHeader";
import { useParams } from "react-router-dom";

import "./EditWarehouse.scss";

function EditWarehouse() {
  const { warehouseId } = useParams();
  return (
    <div className="edit-warehouse__component">
      <NavHeader title="Edit Warehouse" path={`/warehouses/${warehouseId}`}>
        <></>
      </NavHeader>
      <div className="edit-warehouse__main-content">
        {/* ////LEFT SIDE and top//// */}
        <form className="warehouse-form">
          <div className="edit-warehouse-form__form-wrapper">
            <div className="edit-warehouse__left-side">
              <h3 className="edit-warehouse__header">Warehouse Details</h3>

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
              <input
                className="warehouse-form__input"
                placeholder="USA"
              ></input>

              {/* ///RIGHT SIDE//// */}
              <div className="edit-warehouse__right-side">
                <h3 className="edit-warehouse__header">Contact Details</h3>

                <label className="warehouse-form__label">Contact Name</label>
                <input
                  className="warehouse-form__input"
                  placeholder="Graeme Lyon"
                />
                <label className="warehouse-form__label">Position</label>
                <input
                  className="warehouse-form__input"
                  placeholder="Warehouse Manager"
                />
                <label className="warehouse-form__label">Phone Number</label>
                <input
                  className="warehouse-form__input"
                  placeholder="+1 (647) 504-0911"
                />
                <label className="warehouse-form__label">Email</label>
                <input
                  className="warehouse-form__input"
                  placeholder="glyon@instock.com"
                />
              </div>
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

export default EditWarehouse;
