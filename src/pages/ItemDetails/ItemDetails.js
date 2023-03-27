import InventoryItemDetails from "../../components/InventoryItemDetails/InventoryItemDetails";
import "./ItemDetails.scss";

function ItemDetails() {
  return (
    <main className="item-details-page">
      <div className="item-details-body">
        <InventoryItemDetails />
      </div>
    </main>
  );
}

export default ItemDetails;
