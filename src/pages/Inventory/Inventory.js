import React from 'react'
import { InventoryList } from '../../components/InventoryList/InventoryList'
import SearchBar from '../../components/SearchBar/SearchBar'

const Inventory = () => {
  return (
    <>
    <SearchBar />
    <InventoryList />
    </>
  );
}

export default Inventory
