import React from 'react'
import WarehouseList from '../../components/WarehouseList/WarehouseList'
import DeleteModal from '../../components/DeleteModal/DeleteModal'


const Warehouse = () => {

const [modal, setModal] = useState(false);
const [deleteItem, setDeleteItem] = useState({});
const [warehouseList, setwareHouseList] = useState([]);


  return (
    <>
      {modal ? (
        <DeleteModal
          setModal={setModal}
          deleteItem={deleteItem}

        />
      ) : (
        ""
      )}
      <WarehouseList />
    </>
  );
}

export default Warehouse
