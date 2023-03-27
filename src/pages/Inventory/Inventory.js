import { useState } from "react";
import { InventoryList } from "../../components/InventoryList/InventoryList";
import SearchBar from "../../components/SearchBar/SearchBar";
import DeleteModal from "../../components/DeleteModal/DeleteModal";
import "../../components/InventoryList/InventoryList.scss";
import "./Inventory.scss";

const Inventory = () => {
  const [modal, setModal] = useState(false);
  const [deleteItem, setDeleteItem] = useState({});
  const [inventoryList, setInventoryList] = useState([]);

  return (
    <main className="inventory-page">
      <div className="inventory-body">
        <SearchBar title="Inventory" path="inventory" />
        {modal && (
          <DeleteModal
            setModal={setModal}
            deleteItem={deleteItem}
            setInventoryList={setInventoryList}
          />
        )}
        <InventoryList
          setModal={setModal}
          setDeleteItem={setDeleteItem}
          inventoryList={inventoryList}
          setInventoryList={setInventoryList}
        />
      </div>
    </main>
  );
};

export default Inventory;
