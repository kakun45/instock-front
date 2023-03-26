import InventoryItemDetails from "../../components/InventoryItemDetails/InventoryItemDetails";
import "./ItemDetails.scss";

function ItemDetails() {
  return (
    <div className="item-details-page">
      <div className="item-details-body">
        <InventoryItemDetails />
      </div>
    </div>
  );
}

export default ItemDetails;
