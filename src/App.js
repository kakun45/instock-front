import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Footer } from "./components/Footer/Footer";
import InventoryItemDetails from "./components/InventoryItemDetails/InventoryItemDetails";
import "./App.scss";
import Header from "./components/Header/Header";
import AddWarehouse from "./components/AddWarehouse/AddWarehouse";
import EditWarehouse from "./components/EditWarehouse/EditWarehouse";

import WarehouseDetails from "./pages/WarehouseDetails/WarehouseDetails";
import WarehouseList from "./components/WarehouseList/WarehouseList";
import DeleteModal from "./components/DeleteModal/DeleteModal";
import EditInventory from "./components/EditInventory/EditInventory";
import AddInventory from "./components/AddInventory/AddInventory";
import Inventory from "./pages/Inventory/Inventory";

// import InventoryList from "./components/InventoryList/InventoryList";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        {/* TODO change element to reflect home page */}
        <Route path="/" element={<InventoryItemDetails />} />
        <Route path="/warehouses" element={<WarehouseList />} />
        {/* TODO use the inventory list component to display the inventory for a specific warehouse: */}
        <Route path="/warehouses/:warehouseId" element={<WarehouseDetails />} />
        <Route path="/inventory/:itemId" element={<InventoryItemDetails />} />
        <Route path="/inventory/:itemId/edit" element={<EditInventory />} />
        <Route path="/inventory/:itemId/add" element={<AddInventory />} />
        <Route path="/inventory/add" element={<AddInventory />} />

        {/* <Route path="/inventory" element={<InventoryList />} /> */}
        <Route path="/warehouses/:warehouseId/add" element={<AddWarehouse />} />
        <Route
          path="/warehouses/:warehouseId/edit"
          element={<EditWarehouse />}
        />
        {/* TODO use the inventory list component to display the inventory for a specific warehouse: */}
        <Route path="/inventory" element={<Inventory />} />
      </Routes>
      {/* <Footer /> */}
    </BrowserRouter>
  );
}

export default App;
