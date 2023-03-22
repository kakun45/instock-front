function AddWarehouse() {
  return (
    <div className="add-warehouse__component">
      {/* <NavHeader path="/addwarehouse">
          <Button
            icon={editIcon}
            text="EDIT"
            emphasis="high-emphasis"
            type="button"
          />
        </NavHeader> */}
      <div className="add-warehouse__main-content">
        {/* ////LEFT SIDE//// */}
        <div className="add-warehouse__left-side">
          <h2>Warehouse Details</h2>
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
        <div className="item-details__right-side">
          <h2>Contact Details</h2>
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
            <label className="warehouse-form__label">City</label>
            <input
              className="warehouse-form__input"
              placeholder="Phone Number"
            ></input>
            <label className="warehouse-form__label">Phone Number</label>
            <input className="warehouse-form__input" placeholder=""></input>
          </form>
        </div>
      </div>
    </div>
  );
}

export default InventoryItemDetails;
