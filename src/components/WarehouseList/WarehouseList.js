import WarehouseItem from "../WarehouseItem/WarehouseItem";
import sortIcon from "../../assets/icons/sort-24px.svg";
import SearchBar from "../SearchBar/SearchBar";
import "./WarehouseList.scss";

function WarehouseList({ warehouseList, setModal, setDeleteWarehouse }) {
  return (
    <div className="warehouse-list__component">
      <SearchBar title="Warehouses" path="warehouses" />
      <div className="warehouse-list__table-row warehouse-list__table-row--t-show">
        <div className="warehouse-list__header-box warehouse-list__header-box--left">
          <h4 className="warehouse-list__table-header">
            WAREHOUSE
            <img
              src={sortIcon}
              alt="sort icon"
              className="warehouse-list__icon"
            />
          </h4>
          <h4 className="warehouse-list__table-header">
            ADDRESS
            <img
              src={sortIcon}
              alt="sort icon"
              className="warehouse-list__icon"
            />
          </h4>
        </div>
        <div className="warehouse-list__header-box warehouse-list__header-box--right">
          <h4 className="warehouse-list__table-header">
            CONTACT NAME
            <img
              src={sortIcon}
              alt="sort icon"
              className="warehouse-list__icon"
            />
          </h4>
          <h4 className="warehouse-list__table-header">
            CONTACT INFORMATION
            <img
              src={sortIcon}
              alt="sort icon"
              className="warehouse-list__icon"
            />
          </h4>
        </div>
        <h4 className="warehouse-list__table-header warehouse-list__table-header--last">
          ACTION
          <img
            src={sortIcon}
            alt="sort icon"
            className="warehouse-list__icon"
          />
        </h4>
      </div>
      {warehouseList &&
        warehouseList.map((warehouse) => (
          <WarehouseItem
            key={warehouse.id}
            warehouse={warehouse}
            setModal={setModal}
            setDeleteWarehouse={setDeleteWarehouse}
          />
        ))}
    </div>
  );
}

export default WarehouseList;
