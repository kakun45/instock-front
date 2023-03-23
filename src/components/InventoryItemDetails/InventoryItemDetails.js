import editIcon from "../../assets/icons/edit-24px.png";
import Button from "../Button/Button";
import NavHeader from "../NavHeader/NavHeader";
import "./InventoryItemDetails.scss";

function InventoryItemDetails() {
  return (
    <div className="item-details__component">
      <NavHeader title={"Television"} path="/inventory">
        <Button
          icon={editIcon}
          text="EDIT"
          emphasis="high-emphasis"
          type="button"
        />
      </NavHeader>
      <div className="item-details__main-content">
        <div className="item-details__left-side">
          <div className="item-details__text-box">
            <h4 className="item-details__table-header item-details__table-header--top">
              ITEM DESRIPTION:
            </h4>
            <p className="item-details__body-medium">{"item DESCRIPTION"}</p>
          </div>
          <div className="item-details__text-box">
            <h4 className="item-details__table-header  item-details__table-header--after">
              CATEGORY:
            </h4>
            <p className="item-details__body-medium">{"item CATEGORY"}</p>
          </div>
        </div>
        <div className="item-details__right-side">
          <div className="item-details__stat-quant-box">
            <div className="item-details__text-box">
              <h4 className="item-details__table-header item-details__table-header--top">
                STATUS:
              </h4>
              <h4 className="item-details__instock-label">{"item STATUS"}</h4>
            </div>
            <div className="item-details__text-box">
              <h4 className="item-details__table-header item-details__table-header--top">
                QUANTITY:
              </h4>
              <p className="item-details__body-medium">{"item QUANTITY"}</p>
            </div>
          </div>
          <div className="item-details__text-box">
            <h4 className="item-details__table-header item-details__table-header--after">
              WAREHOUSE:
            </h4>
            <p className="item-details__body-medium">{"item WAREHOUSE"}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default InventoryItemDetails;
