import React from 'react'
// import Header from '../../components/Header/Header'
import { InventoryCard } from '../../components/InventoryCard/InventoryCard'
import { InventoryList } from '../../components/InventoryList/InventoryList'
import SearchBar from '../../components/SearchBar/SearchBar'
import { Footer } from '../../components/Footer/Footer'

const Inventory = () => {
  return (
    <>
    <SearchBar />
    <InventoryList />
    <Footer />
    </>
  );
}

export default Inventory
