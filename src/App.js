import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Footer } from "./components/Footer/Footer";
import InventoryItemDetails from "./components/InventoryItemDetails/InventoryItemDetails";
import Header from "./components/Header/Header";
import AddWarehouse from "./components/AddWarehouse/AddWarehouse";
import EditWarehouse from "./components/EditWarehouse/EditWarehouse";
import WarehouseDetails from "./pages/WarehouseDetails/WarehouseDetails";
import Warehouse from "./pages/Warehouse/Warehouse";
import EditInventory from "./components/EditInventory/EditInventory";
import AddInventory from "./components/AddInventory/AddInventory";
import Inventory from "./pages/Inventory/Inventory";
<<<<<<< HEAD
import WarehouseItem from "./components/WarehouseItem/WarehouseItem";

// import InventoryList from "./components/InventoryList/InventoryList";
=======
import "./App.scss";
>>>>>>> develop-front

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Warehouse />} />
        <Route path="/warehouses" element={<Warehouse />} />
        <Route path="/warehouses/add" element={<AddWarehouse />} />
        <Route path="/warehouses/:warehouseId" element={<WarehouseDetails />} />
        <Route
          path="/warehouses/:warehouseId/edit"
          element={<EditWarehouse />}
        />
        <Route path="/inventory" element={<Inventory />} />
        <Route path="/inventory/add" element={<AddInventory />} />
        <Route path="/inventory/:itemId" element={<InventoryItemDetails />} />
        <Route path="/inventory/:itemId/edit" element={<EditInventory />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
