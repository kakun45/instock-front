// import axios from "axios";
// import { useState } from "react";
import "./WarehouseDetails.scss";
// import { InventoryList } from "../../components/InventoryList/InventoryList";
import icon from "../../assets/icons/edit-24px.png";
import Button from "../../components/Button/Button";
import NavHeader from "../../components/NavHeader/NavHeader";
import Header from "../../components/Header/Header";
import { InventoryList } from "../../components/InventoryList/InventoryList";
import { useParams } from "react-router-dom";
const API_URI = process.env.REACT_APP_API_URI;

const WarehouseDetails = () => {
  const { wHouseId } = useParams();
  // const [???, set???] = useState(???);

  // axios.get(`${API_URI}/????`)
  // .then((res) => {
  // get request => get title out of axios res:
  //  need to create the endpoint for this req first
  //   set???(res.data);
  //   title = ???
  // })
  // .catch((err) => console.error(err));
  const handleOnClick = () => {};

  return (
    <div>
      <Header />
      <NavHeader
      // title={title} // get it out from a res
      // path="/warehouses" // needs a page
      >
        <Button
          // TODO for mobile text={? text hide : "edit"}
          icon={icon}
          emphasis={"high-emphasis"}
          type={"button"}
          handleOnClick={handleOnClick}
        />
      </NavHeader>
      <InventoryList />
    </div>
  );
};

export default WarehouseDetails;
