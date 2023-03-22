import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import { Footer } from "./components/Footer/Footer";
import { InventoryList } from "./components/InventoryList/InventoryList";
import InventoryItemDetails from "./components/InventoryItemDetails/InventoryItemDetails";
import "./App.scss";
import Header from "../src/components/Header/Header";
import AddWarehouse from "./components/AddWarehouse/AddWarehouse";
import WarehouseDetails from "./pages/WarehouseDetails/WarehouseDetails";
import DeleteInventoryModal from "./components/DeleteInventoryModal/DeleteInventoryModal";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        {/* TODO change element to reflect home page */}
        <Route path="/" element={<InventoryItemDetails />} />
        <Route path="/inventory/:itemId" element={<InventoryItemDetails />} />
        <Route path="/inventory" element={<InventoryList />} />
        <Route
          path="/warehouses/:warehouseId/delete"
          element={<AddWarehouse />}
        />
        {/* TODO use the inventory list component to display the inventory for a specific warehouse: */}
        <Route path="/warehouse/:warehouseId" element={<WarehouseDetails />} />
        <Route path="/delete" element={ <DeleteInventoryModal/> }/>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
