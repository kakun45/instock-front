/** @format */
import React from "react";
import "./InventoryList.scss";
import SearchBar from "../SearchBar/SearchBar";
import arrowDrop from "../../assets/icons/sort-24px.svg";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { InventoryCard } from "../InventoryCard/InventoryCard";
const API_URI = process.env.REACT_APP_API_URI;

export const InventoryList = ({
  setModal,
  setDeleteItem,
  inventoryList,
  setInventoryList,
}) => {
  const { inventoryId } = useParams();

  useEffect( () => {
    axios
      .get(`${API_URI}/api/inventories`)
      .then((res) => {
        setInventoryList(res.data);
      })

      .catch((err) => console.log(err));
  }, [ inventoryId ]);

  return (
    <>
      <div className="inventory__product-container--tablet">
        <div className="inventory__table-headers">
          <div className="inventory__sort-icon">
            <p>INVENTORY ITEMS</p> <img src={arrowDrop} alt="arrow drop"></img>
          </div>
          <div className="inventory__sort-icon">
            <p>CATEGORY</p> <img src={arrowDrop} alt="arrow drop"></img>
          </div>
          <div className="inventory__sort-icon">
            <p>STATUS</p> <img src={arrowDrop} alt="arrow drop"></img>
          </div>
          <div className="inventory__sort-icon">
            <p>QTY</p> <img src={arrowDrop} alt="arrow drop"></img>
          </div>
          <div className="inventory__sort-icon">
            <p>WAREHOUSE</p> <img src={arrowDrop} alt="arrow drop"></img>
          </div>
          <div className="inventory__sort-icon">
            <p>ACTIONS</p> <img src={arrowDrop} alt="arrow drop"></img>
          </div>
        </div>
      </div>
      {inventoryList.map((item) => {
        return (
          <InventoryCard
            key={item.id}
            item={item}
            setModal={setModal}
            setDeleteItem={setDeleteItem}
          />
        );
      })}
    </>
  );
};
