import React from 'react'
import './InventoryList.scss'

export const InventoryList = () => {
  return (
    <body>
      <div className="inventory__search-container">
        <h2>Inventory</h2>
        <div className="inventory__search-inner-container">
          <input
            className="inventory__search-bar"
            type="text"
            placeholder="Search..."
          />
          <button className="inventory__search-button">Add New Item</button>
        </div>
      </div>
    </body>
  );
}
