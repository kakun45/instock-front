import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import InventoryItemDetails from "./components/InventoryItemDetails/InventoryItemDetails";
import { Footer } from "./components/Footer/Footer";
import { InventoryList } from "./components/InventoryList/InventoryList";
import WarehouseList from "./components/WarehouseList/WarehouseList";
import WarehouseDetails from "./pages/WarehouseDetails/WarehouseDetails";
import AddWarehouse from "./components/AddWarehouse/AddWarehouse";
import DeleteModal from "./components/DeleteModal/DeleteModal";
import "./App.scss";

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
        <Route path="/inventory" element={<InventoryList />} />
        <Route path="/warehouses/:warehouseId/add" element={<AddWarehouse />} />
        {/* TODO use the inventory list component to display the inventory for a specific warehouse: */}
        <Route path="/delete" element={<DeleteModal />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
