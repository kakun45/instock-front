/** @format */
import Button from "../Button/Button";
import NavHeader from "../NavHeader/NavHeader";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import { v4 as uuid } from "uuid";
import "./AddInventory.scss";

function AddInventory() {

  const id = uuid();
  const [formData, setFormData] = useState({
    item_name: "",
    description: "",
    category: "",
    status: "",
    quantity: "",
    warehouse_id: "",
  });

  const [warehouseData, setWarehouseData] = useState([]);

  useEffect(() => {
    axios.get(`http://localhost:8080/api/warehouses`).then((res) => {
      setWarehouseData(res.data);
    });
  }, []);

  const handleChange = (event) => {
    // console.dir(event.target);
    setFormData( { ...formData , [event.target.name]: event.target.value } );
  };



const addInventory = (e) => {
e.preventDefault()
  console.log(formData)
  axios
    .post(`http://localhost:8080/api/inventories`, formData)
    .then( (res) => console.log(res) )
    .catch( (err) => console.log(err) );
}


  return (
    <div className="add-inventory__component">
      <NavHeader title="Add New Inventory Item" path="/inventory">
        <></>
      </NavHeader>
      <div className="add-inventory__main-content">
        {/* ////LEFT SIDE//// */}
        <form className="inventory-form"
        onSubmit={ addInventory } >
          <div className="inventory-form__form-wrapper">
            <div className="add-inventory__left-side">
              <h3 className="add-inventory__header">Item Details</h3>
              <label className="inventory-form__label">Item Name</label>
              <input
                className="inventory-form__input"
                placeholder="Item Name"
                name="item_name"
                value={formData.item_name}
                onChange={handleChange}
              />
              <label className="inventory-form__label">Description</label>
              <textarea
                className="inventory-form__textarea"
                placeholder="Please enter a brief description"
                name="description"
                value={formData.description}
                onChange={handleChange}></textarea>
              <label className="inventory-form__label">Category</label>
              <select
                className="inventory-form__input"
                placeholder="Please select"
                value={formData.category}
                name="category"
                onChange={handleChange}>
                <option value="Please select">Please select</option>
                <option value="Electronics">Electronics</option>
                <option value="Gear">Gear</option>
                <option value="Apparel">Apparel</option>
                <option value="Health">Health</option>
                <option value="Accessories">Accessories</option>
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
                name="status"
                value={formData.status}
                onChange={handleChange}
              />
              <label className="inventory-form__radio-label" htmlFor="inStock">
                In stock
              </label>
              <input
                className="inventory-form__radio-input"
                type="radio"
                name="status"
                value={formData.status}
                onChange={handleChange}
              />
              <label
                className="inventory-form__radio-label"
                htmlFor="outOfStock">
                Out of stock
              </label>

              {/* ////QUANTITY INPUT/// */}
              <div className="inventory-form__warehouse-label">
                <label className="inventory-form__label">Quantity</label>
              </div>
              <input
                className="inventory-form__input"
                placeholder="0"
                name="quantity"
                value={formData.quantity}
                onChange={handleChange}
              />
              {/* ////WAREHOUSE SELECTOR/// */}
              <div className="inventory-form__warehouse-label">
                <label className="inventory-form__label">Warehouse</label>
              </div>
              <select
                className="inventory-form__input"
                placeholder="Please select"
                name="warehouse_id"
                onChange={handleChange}>
                { warehouseData.map( (warehouse) => {
                  console.log(warehouseData)
                  return (
                    <option
                      value={warehouse.id}
                      onChange={handleChange}>
                      {warehouse.warehouse_name}
                    </option>
                  );
                })}
              </select>
            </div>
          </div>
          <div className="button-wrapper">
            <Button text="Cancel" emphasis="low-emphasis" type="button"/>

            <Button
              text="Add Item"
              emphasis="high-emphasis"
              type="submit"
            />
          </div>
        </form>
      </div>
    </div>
  );
}

export default AddInventory;
