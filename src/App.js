import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Footer } from "./components/Footer/Footer";
import InventoryItemDetails from "./components/InventoryItemDetails/InventoryItemDetails";
import "./App.scss";
import Header from "./components/Header/Header";
import AddWarehouse from "./components/AddWarehouse/AddWarehouse";
import WarehouseDetails from "./pages/WarehouseDetails/WarehouseDetails";
import WarehouseList from "./components/WarehouseList/WarehouseList";
import DeleteModal from "./components/DeleteModal/DeleteModal";
import Inventory from "./pages/Inventory/Inventory";

function App() {
  return (
    <BrowserRouter>
      <Header  />
      <Routes>
        {/* TODO change element to reflect home page */}
        <Route path="/" element={<InventoryItemDetails />} />
        <Route path="/warehouses" element={<WarehouseList />} />
        {/* TODO use the inventory list component to display the inventory for a specific warehouse: */}
        <Route path="/warehouses/:warehouseId" element={<WarehouseDetails />} />
        <Route path="/inventory/:itemId" element={<InventoryItemDetails />} />
        <Route path="/inventory" element={<Inventory />} />
        <Route path="/warehouses/:warehouseId/add" element={<AddWarehouse />} />
        {/* TODO use the inventory list component to display the inventory for a specific warehouse: */}
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
