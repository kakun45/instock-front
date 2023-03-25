import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import icon from "../../assets/icons/edit-24px.png";
import Button from "../../components/Button/Button";
import DeleteModal from "../../components/DeleteModal/DeleteModal";
import { WarehouseInventoryList } from "../../components/InventoryList/WarehouseInventoryList";
import NavHeader from "../../components/NavHeader/NavHeader";
import "./WarehouseDetails.scss";
const API_URI = process.env.REACT_APP_API_URI;

const WarehouseDetails = () => {
  const { warehouseId } = useParams();
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
        // Alternatively it works either way: in here or in WarehouseInventoryList, keep one, which is lower possible level. For now it's inside WarehouseInventoryList
        // axios
        //   .get(`${API_URI}/api/warehouses/${warehouseId}/inventories`)
        //   .then((res2) => {
        //     console.log(res2.data);
        //     setWarehouseInventoryList(res2.data);
        //   })
        //   .catch((err2) => console.error(err2));
      })
      .catch((err) => console.error(err));
  }, [API_URI, warehouseId]);

  const handleOnClick = () => {};

  return (
    <div>
      <NavHeader
        title={warehouseObj.warehouse_name} // get it out from a res in State
        path="/warehouses"
      >
        <Button
          text="Edit"
          mHidden="mHidden"
          icon={icon}
          emphasis="high-emphasis"
          type="button"
          handleOnClick={handleOnClick}
        />
      </NavHeader>

      {modal ? (
        <DeleteModal
          setModal={setModal}
          deleteItem={deleteItem}
          setWarehouseInventoryList={setWarehouseInventoryList}
        />
      ) : (
        ""
      )}

      <WarehouseInventoryList
        setModal={setModal}
        setDeleteItem={setDeleteItem}
        warehouseInventoryList={warehouseInventoryList}
        setWarehouseInventoryList={setWarehouseInventoryList}
      />
    </div>
  );
};

export default WarehouseDetails;
