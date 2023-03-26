import axios from "axios";
import { useState, useEffect } from "react";
import WarehouseList from "../../components/WarehouseList/WarehouseList";
import DeleteWarehouseModal from "../../components/DeleteModal/DeleteWarehouseModal";
import "./Warehouse.scss";
const API_URI = process.env.REACT_APP_API_URI;

const Warehouse = () => {
  const [warehouseList, setWarehouseList] = useState(null);
  const [modal, setModal] = useState(false);
  const [deleteWarehouse, setDeleteWarehouse] = useState(null);

  useEffect(() => {
    axios
      .get(`${API_URI}/api/warehouses`)
      .then((res) => {
        setWarehouseList(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="warehouse-page">
      <div className="warehouse-body">
        {modal && (
          <DeleteWarehouseModal
            setModal={setModal}
            deleteWarehouse={deleteWarehouse}
            setWarehouseList={setWarehouseList}
          />
        )}
        <WarehouseList
          warehouseList={warehouseList}
          setModal={setModal}
          setDeleteWarehouse={setDeleteWarehouse}
        />
      </div>
    </div>
  );
};

export default Warehouse;
