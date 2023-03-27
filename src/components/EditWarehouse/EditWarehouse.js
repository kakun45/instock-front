import Button from "../Button/Button";
import NavHeader from "../NavHeader/NavHeader";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./EditWarehouse.scss";
const API_URI = process.env.REACT_APP_API_URI;

function EditWarehouse() {
  const { warehouseId } = useParams();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    warehouse_name: "",
    address: "",
    city: "",
    country: "",
    contact_name: "",
    contact_position: "",
    contact_phone: "",
    contact_email: "",
  });

  useEffect(() => {
    axios
      .get(`${API_URI}/api/warehouses/${warehouseId}`)
      .then((res) => {
        const warehouse = res.data;
        setFormData({
          warehouse_name: warehouse.warehouse_name,
          address: warehouse.address,
          city: warehouse.city,
          country: warehouse.country,
          contact_name: warehouse.contact_name,
          contact_position: warehouse.contact_position,
          contact_phone: warehouse.contact_phone,
          contact_email: warehouse.contact_email,
        });
      })
      .catch((err) => console.error(err));
  }, []);

  const updateWarehouse = (e) => {
    e.preventDefault();
    axios
      .put(`${API_URI}/api/warehouses/${warehouseId}`, formData)
      .then((_res) => {
        setFormData({});
        navigate(`/warehouses`);
      })
      .catch((err) => console.log(err));
  };
  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };
  return (
    <div className="edit-warehouse__component">
      <NavHeader title="Edit Warehouse" path={`/warehouses/${warehouseId}`}>
        <></>
      </NavHeader>
      <div className="edit-warehouse__main-content">
        {/* ////LEFT SIDE and top//// */}
        <form onSubmit={updateWarehouse} className="warehouse-form">
          <div className="edit-warehouse__form-wrapper">
            <div className="edit-warehouse__left-side">
              <h3 className="edit-warehouse__header">Warehouse Details</h3>

              <label className="warehouse-form__label">Warehouse Name</label>
              <input
                name="warehouse_name"
                value={formData.warehouse_name}
                className="warehouse-form__input"
                placeholder="Washington"
                onChange={handleChange}
              ></input>
              <label className="warehouse-form__label">Street Address</label>
              <input
                name="address"
                value={formData.address}
                className="warehouse-form__input"
                onChange={handleChange}
                placeholder="33 Pearl St SW"
              ></input>
              <label className="warehouse-form__label">City</label>
              <input
                name="city"
                value={formData.city}
                className="warehouse-form__input"
                onChange={handleChange}
                placeholder="Washington"
              ></input>
              <label className="warehouse-form__label">Country</label>
              <input
                name="country"
                value={formData.country}
                className="warehouse-form__input"
                onChange={handleChange}
                placeholder="USA"
              ></input>
            </div>

            {/* ///RIGHT SIDE//// */}
            <div className="edit-warehouse__right-side">
              <h3 className="edit-warehouse__header">Contact Details</h3>

              <label className="warehouse-form__label">Contact Name</label>
              <input
                name="contact_name"
                value={formData.contact_name}
                placeholder="Contact Name"
                onChange={handleChange}
                className="warehouse-form__input"
              />
              <label className="warehouse-form__label">Position</label>
              <input
                name="contact_position"
                value={formData.contact_position}
                placeholder="Warehouse Manager"
                onChange={handleChange}
                className="warehouse-form__input"
              />
              <label className="warehouse-form__label">Phone Number</label>
              <input
                name="contact_phone"
                value={formData.contact_phone}
                placeholder="310-701-1121"
                onChange={handleChange}
                className="warehouse-form__input"
              />
              <label className="warehouse-form__label">Email</label>
              <input
                name="contact_email"
                value={formData.contact_email}
                placeholder="glyon@instock.com"
                onChange={handleChange}
                className="warehouse-form__input"
              />

              <div className="button-wrapper">
                <Button
                  text="Cancel"
                  emphasis="low-emphasis"
                  type="button"
                  handleOnClick={() => navigate(`/warehouses/${warehouseId}`)}
                />
                <Button text="Save" emphasis="high-emphasis" type="submit" />
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default EditWarehouse;
