/** @format */
import React from "react";
import "./InventoryList.scss";
import SearchBar from "../SearchBar/SearchBar";
import arrowDrop from "../../assets/icons/sort-24px.svg";
import sortIcon from "../../assets/icons/sort-24px.svg";
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

  useEffect(() => {
    axios
      .get(`${API_URI}/api/inventories`)
      .then((res) => {
        setInventoryList(res.data);
      })

      .catch((err) => console.log(err));
  }, [inventoryList.length, inventoryId]);

  return (
    <>
      <div className="warehouse-list__component">
        <div className="warehouse-list__table-row warehouse-list__table-row--t-show">
          <div className="warehouse-list__header-box warehouse-list__header-box--left">
            <h4 className="warehouse-list__table-header">
              INVENTORY ITEM
              <img
                src={sortIcon}
                alt="sort icon"
                className="warehouse-list__icon"
              />
            </h4>
            <h4 className="warehouse-list__table-header">
              CATAGORY
              <img
                src={sortIcon}
                alt="sort icon"
                className="warehouse-list__icon"
              />
            </h4>
          </div>
          <div className="warehouse-list__header-box warehouse-list__header-box--right">
            <h4 className="warehouse-list__table-header">
              STATUS
              <img
                src={sortIcon}
                alt="sort icon"
                className="warehouse-list__icon"
              />
            </h4>
            <h4 className="warehouse-list__table-header">
              QTY
              <img
                src={sortIcon}
                alt="sort icon"
                className="warehouse-list__icon"
              />
            </h4>
            <h4 className="warehouse-list__table-header">
              WAREHOUSE
              <img
                src={sortIcon}
                alt="sort icon"
                className="warehouse-list__icon"
              />
            </h4>
          </div>
          <h4 className="warehouse-list__table-header warehouse-list__table-header--last">
            ACTION
          </h4>
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
