/** @format */
import React from "react";
import "./DeleteModal.scss";
import axios from "axios";
import X from '../../assets/icons/close-24px.svg';
// import { useNavigate } from "react-router-dom";

const DeleteInventoryModal = ({
  setModal,
  inventoryList,
  deleteItem,
  setInventoryList,
}) => {

  // const nav = useNavigate()

  const deleteInventoryItem = (id) => {
    axios
      .delete(`http://localhost:8080/api/inventories/${id}`)
      .then((_res) => {

        const updatedList = inventoryList.filter((item) => item.id !== id);
        setInventoryList(updatedList);
        // nav("/inventory");
           setModal(false);
          window.location.reload()

      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      <div className="delete-modal__overlay">

        <div className="delete-modal__container">
          {/* <div className="delete-modal__X-container"> */}
          <button onClick={() => setModal(false)}>
            <img src={X} className="delete-modal__X"></img>
          </button>
          {/* </div> */}
          <div className="delete-modal__header-container">
            <h1 className="delete-modal__header">{`Delete ${deleteItem.item_name} Inventory Item`}</h1>
          </div>
          <div className="delete-modal__confirm-container">
            <p className="delete-modal__confrim-text">
              {`Please confirm that you’d like to delete  ${deleteItem.item_name}  from the inventory
          list. You won’t be able to undo this action.`}
            </p>
          </div>
          <div className="delete-modal__button-container">
            <button
              onClick={() => setModal(false)}
              className="delete-modal__cancel-button">
              Cancel
            </button>
            <button
              onClick={() => {
                deleteInventoryItem(deleteItem.id);
                window.location.reload(false);
              }}
              className="delete-modal__delete-button">
              Delete
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default DeleteInventoryModal;
