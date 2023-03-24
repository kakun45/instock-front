import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import icon from "../../assets/icons/edit-24px.png";
import Button from "../../components/Button/Button";
import { InventoryList } from "../../components/InventoryList/InventoryList";
import NavHeader from "../../components/NavHeader/NavHeader";
import "./WarehouseDetails.scss";
const API_URI = process.env.REACT_APP_API_URI;

const WarehouseDetails = () => {
  const { warehouseId } = useParams();
  const [warehouseObj, setwarehouseObj] = useState({});

  useEffect(() => {
    //try GET http://localhost:8080/api/warehouses/5bf7bd6c-2b16-4129-bddc-9d37ff8539e9
    axios
      .get(`${API_URI}/api/warehouses/${warehouseId}`)
      .then((res) => {
        setwarehouseObj(res.data);
      })
      .catch((err) => console.error(err));
  }, [warehouseId]);
  const handleOnClick = () => {}; // TODO

  return (
    <div>
      <NavHeader
        title={warehouseObj.warehouse_name} // get it out from a res in State
        path="/warehouses">
        <Button
          // TODO text={window.screen.width < 768 ? "" : "Edit"}, if mobile hide the text
          icon={icon}
          emphasis={"high-emphasis"}
          type={"button"}
          handleOnClick={handleOnClick}
        />
      </NavHeader>
      <InventoryList />
    </div>
  );
};

export default WarehouseDetails;
