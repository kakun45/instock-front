import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
// import { Footer } from './components/Footer/Footer';
import InventoryItemDetails from "./components/InventoryItemDetails/InventoryItemDetails";
import "./App.scss";
import  { InventoryList } from "./components/InventoryList/InventoryList";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        {/* TODO change element to reflect home page */}
        <Route path="/" element={<InventoryItemDetails />} />
        <Route path="/inventory/:itemId" element={<InventoryItemDetails />} />
        <Route path="/inventory" element={<InventoryList/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
