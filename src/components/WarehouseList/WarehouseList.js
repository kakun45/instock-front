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
    <div className="warehouse-list__component">
      <div className="warehouse-list__table-row warehouse-list__table-row--t-show">
        <h4 className="warehouse-item__table-header">WAREHOUSE</h4>
        <h4 className="warehouse-item__table-header">ADDRESS</h4>
        <h4 className="warehouse-item__table-header">CONTACT NAME</h4>
        <h4 className="warehouse-item__table-header">CONTACT INFORMATION</h4>
      </div>
      {warehouseList2 && warehouseList2.map((warehouse) => <WarehouseItem />)}
    </div>
  );
}

export default WarehouseList;
