import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import InventoryItemDetails from "./components/InventoryItemDetails/InventoryItemDetails";
import "./App.scss";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        {/* TODO change element to reflect home page */}
        <Route path="/" element={<InventoryItemDetails />} />
        <Route path="/inventory/:itemId" element={<InventoryItemDetails />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
