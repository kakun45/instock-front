import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
 import { Footer } from "./components/Footer/Footer";
import { InventoryList } from "./components/InventoryList/InventoryList";
import InventoryItemDetails from "./components/InventoryItemDetails/InventoryItemDetails";
import DeleteInventoryModal from "./components/DeleteInventoryModal/DeleteInventoryModal";
import "./App.scss";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        {/* TODO change element to reflect home page */}
        <Route path="/" element={<InventoryItemDetails />} />
        <Route path="/inventory/:itemId" element={<InventoryItemDetails />} />
        <Route path="/inventory" element={<InventoryList/>} />
        <Route path="/delete" element={ <DeleteInventoryModal/> }/>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
