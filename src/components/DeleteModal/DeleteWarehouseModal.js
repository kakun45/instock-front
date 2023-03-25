import axios from "axios";
import X from "../../assets/icons/close-24px.svg";
import "./DeleteModal.scss";

const DeleteWarehouseModal = ({
  setModal,
  deleteWarehouse,
  setWarehouseList,
}) => {
  const deleteInventoryItem = (id) => {
    axios
      .delete(`http://localhost:8080/api/warehouses/${deleteWarehouse.id}`)
      .then((res) => {
        setModal(false);
        setWarehouseList((prevState) =>
          prevState.filter((item) => item.id !== id)
        );
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      <div className="delete-modal__overlay">
        <div className="delete-modal__container">
          <button onClick={() => setModal(false)}>
            <img src={X} className="delete-modal__X"></img>
          </button>
          <div className="delete-modal__header-container">
            <h1 className="delete-modal__header">{`Delete ${deleteWarehouse.warehouse_name} warehouse?`}</h1>
          </div>
          <div className="delete-modal__confirm-container">
            <p className="delete-modal__confrim-text">
              {`Please confirm that you’d like to delete ${deleteWarehouse.warehouse_name} from the list of warehouses. You won’t be able to undo this action.`}
            </p>
          </div>
          <div className="delete-modal__button-container">
            <button
              onClick={() => setModal(false)}
              className="delete-modal__cancel-button"
            >
              Cancel
            </button>
            <button
              onClick={() => {
                deleteInventoryItem(deleteWarehouse.id);
              }}
              className="delete-modal__delete-button"
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default DeleteWarehouseModal;
