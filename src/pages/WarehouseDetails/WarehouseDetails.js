import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import icon from "../../assets/icons/edit-24px.png";
import Button from "../../components/Button/Button";
import DeleteModal from "../../components/DeleteModal/DeleteModal";
import { WarehouseInventoryList } from "../../components/InventoryList/WarehouseInventoryList";
import NavHeader from "../../components/NavHeader/NavHeader";
import "./WarehouseDetails.scss";
const API_URI = process.env.REACT_APP_API_URI;

const WarehouseDetails = () => {
  const { warehouseId } = useParams();
  const navigate = useNavigate();
  const [warehouseObj, setwarehouseObj] = useState({});

  const [modal, setModal] = useState(false);
  const [deleteItem, setDeleteItem] = useState({});
  const [warehouseInventoryList, setWarehouseInventoryList] = useState([]);

  useEffect(() => {
    //try GET http://localhost:8080/api/warehouses/5bf7bd6c-2b16-4129-bddc-9d37ff8539e9
    axios
      .get(`${API_URI}/api/warehouses/${warehouseId}`)
      .then((res) => {
        setwarehouseObj(res.data);
      })
      .catch((err) => console.error(err));
  }, [API_URI, warehouseId]);

  const handleNavigation = () => navigate(`/warehouses/${warehouseId}/edit`);

  return (
    <main className="warehouse-details-page">
      <div className="warehouse-details-body">
        <NavHeader
          title={warehouseObj.warehouse_name} // get it out from a res in State
          path={"/warehouses"}
        >
          <Button
            text="Edit"
            mHidden="mHidden"
            icon={icon}
            emphasis="high-emphasis"
            type="button"
            handleOnClick={handleNavigation}
          />
        </NavHeader>
        <section className="warehouse-info">
          <div className="warehouse-info__text-box">
            <h4 className="warehouse-info__table-header">WAREHOUSE ADDRESS:</h4>
            <p className="warehouse-info__body-text">{`${warehouseObj.address}, ${warehouseObj.city}, ${warehouseObj.country}`}</p>
          </div>
          <div className="warehouse-info__contact-info">
            <div className="warehouse-info__text-box">
              <h4 className="warehouse-info__table-header">CONTACT NAME:</h4>
              <p className="warehouse-info__body-text">
                {warehouseObj.contact_name}
              </p>
              <p className="warehouse-info__body-text">
                {warehouseObj.contact_position}
              </p>
            </div>
            <div className="warehouse-info__text-box">
              <h4 className="warehouse-info__table-header">
                CONTACT INFORMATION:
              </h4>
              <p className="warehouse-info__body-text">
                {warehouseObj.contact_phone}
              </p>
              <p className="warehouse-info__body-text">
                {warehouseObj.contact_email}
              </p>
            </div>
          </div>
        </section>
        {modal && (
          <DeleteModal
            setModal={setModal}
            deleteItem={deleteItem}
            setWarehouseInventoryList={setWarehouseInventoryList}
          />
        )}
        <WarehouseInventoryList
          setModal={setModal}
          setDeleteItem={setDeleteItem}
          warehouseInventoryList={warehouseInventoryList}
          setWarehouseInventoryList={setWarehouseInventoryList}
        />
      </div>
    </main>
  );
};

export default WarehouseDetails;
