import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import { Footer } from "./components/Footer/Footer";
import { InventoryList } from "./components/InventoryList/InventoryList";
import InventoryItemDetails from "./components/InventoryItemDetails/InventoryItemDetails";
import "./App.scss";
import WarehouseItem from "./components/WarehouseItem/WarehouseItem";
import WarehouseList from "./components/WarehouseList/WarehouseList";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        {/* TODO change element to reflect home page */}
        <Route path="/" element={<InventoryItemDetails />} />
        <Route path="/warehouses" element={<WarehouseList />} />
        <Route path="/warehouses/:warehouseId" element={<WarehouseItem />} />
        <Route path="/inventory/:itemId" element={<InventoryItemDetails />} />
        <Route path="/inventory" element={<InventoryList />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
