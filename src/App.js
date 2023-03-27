import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Footer } from "./components/Footer/Footer";
import ItemDetails from "./pages/ItemDetails/ItemDetails";
import Header from "./components/Header/Header";
import AddWarehouse from "./components/AddWarehouse/AddWarehouse";
import EditWarehouse from "./components/EditWarehouse/EditWarehouse";
import WarehouseDetails from "./pages/WarehouseDetails/WarehouseDetails";
import Warehouse from "./pages/Warehouse/Warehouse";
import EditInventory from "./components/EditInventory/EditInventory";
import AddInventory from "./components/AddInventory/AddInventory";
import Inventory from "./pages/Inventory/Inventory";
import "./App.scss";
import UpdatePage from "./pages/Update/UpdatePage";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Warehouse />} />
        <Route path="/warehouses" element={<Warehouse />} />
        <Route
          path="/warehouses/add"
          element={
            <UpdatePage>
              <AddWarehouse />
            </UpdatePage>
          }
        />
        <Route path="/warehouses/:warehouseId" element={<WarehouseDetails />} />
        <Route
          path="/warehouses/:warehouseId/edit"
          element={
            <UpdatePage>
              <EditWarehouse />
            </UpdatePage>
          }
        />
        <Route path="/inventory" element={<Inventory />} />
        <Route
          path="/inventory/add"
          element={
            <UpdatePage>
              <AddInventory />
            </UpdatePage>
          }
        />
        <Route path="/inventory/:itemId" element={<ItemDetails />} />
        <Route
          path="/inventory/:itemId/edit"
          element={
            <UpdatePage>
              <EditInventory />
            </UpdatePage>
          }
        />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
