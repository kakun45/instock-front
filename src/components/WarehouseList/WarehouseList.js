import WarehouseItem from "../WarehouseItem/WarehouseItem";
import "./WarehouseList.scss";

function WarehouseList({ warehouseList }) {
  /* TODO change hard coded list to list from pros */
  const warehouseList2 = [
    { location: "Manhattan", address: "503 Broadway, New York, USA" },
    { location: "Seattle", address: "503 Broadway, New York, USA" },
    { location: "Bellevue", address: "503 Broadway, New York, USA" },
    { location: "Brooklyn", address: "503 Broadway, New York, USA" },
  ];

  return (
    <div>
      {warehouseList2 && warehouseList2.map((warehouse) => <WarehouseItem />)}
    </div>
  );
}

export default WarehouseList;
