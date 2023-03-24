import React from 'react'
import WarehouseList from '../../components/WarehouseList/WarehouseList'
import DeleteModal from '../../components/DeleteModal/DeleteModal'


const Warehouse = () => {

  const [modal, setModal] = useState(false);
  const [deleteItem, setDeleteItem] = useState({});

  return (
    <>
      {modal ? (
        <DeleteModal
          setModal={setModal}
          deleteItem={deleteItem}
          setInventoryList={setInventoryList}
        />
      ) : (
        ""
      )}
      <WarehouseList />
    </>
  );
}

export default Warehouse
