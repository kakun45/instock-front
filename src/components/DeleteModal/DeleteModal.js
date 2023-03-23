import React from 'react';
import './DeleteModal.scss';
import { Link } from 'react-router-dom';

const DeleteInventoryModal = () => {
  return (
    <div className="delete-modal__container">
      <div className="delete-modal__X-container">
        <Link path="/inevntories">
          <h5 className="delete-modal__X">X</h5>
        </Link>
      </div>
      <div className="delete-modal__header-container">
        <h1 className="delete-modal__header">
          {`Delete Television Inventory Item`}
        </h1>
      </div>
      <div className="delete-modal__confirm-container">
        <p className="delete-modal__confrim-text">
          {`Please confirm that you’d like to delete Television from the inventory
          list. You won’t be able to undo this action.`}
        </p>
      </div>
      <div className="delete-modal__button-container">
        <button className="delete-modal__cancel-button">Cancel</button>
        <button className="delete-modal__delete-button">Delete</button>
      </div>
    </div>
  );
}

export default DeleteInventoryModal
