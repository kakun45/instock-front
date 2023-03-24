import React from "react";
import { InventoryList } from "../../components/InventoryList/InventoryList";
import SearchBar from "../../components/SearchBar/SearchBar";
import DeleteModal from "../../components/DeleteModal/DeleteModal";
import "../../components/InventoryList/InventoryList.scss";
import { useState } from "react";

const Inventory = () => {
  const [modal, setModal] = useState(false);
  const [deleteItem, setDeleteItem] = useState({});
  const [inventoryList, setInventoryList] = useState([]);

  return (
    <>
      <SearchBar />
      {modal ? (
        <DeleteModal
          setModal={setModal}
          deleteItem={deleteItem}
          setInventoryList={setInventoryList}
        />
      ) : (
        ""
      )}
      <InventoryList
        setModal={setModal}
        setDeleteItem={setDeleteItem}
        inventoryList={inventoryList}
        setInventoryList={setInventoryList}
      />
    </>
  );
};

export default Inventory;
