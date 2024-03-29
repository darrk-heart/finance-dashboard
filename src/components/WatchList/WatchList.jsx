import React, { useState } from "react";
import { BiListUl } from "react-icons/bi";
import styles from "./WatchList.module.css";
import NewList from "../NewList/NewList";

function WatchList() {
  const [showNewList, setShowNewList] = useState(false);

  const handleOpenNewList = () => {
    setShowNewList(true);
    document.body.classList.add("no-scroll");
  };
  const handleCloseNewList = () => {
    setShowNewList(false);
    document.body.classList.remove("no-scroll");
  };

  return (
    <>
      <span
        style={{
          fontSize: "0.7rem",
        }}
      >
        YOUR LISTS
      </span>
      <div style={{ marginTop: "12px", display: "flex", alignItems: "center" }}>
        <div
          className={styles.lists}
          style={{
            display: "flex",
            justifyContent: "space-between",
            width: "23%",
            alignItems: "center",
            border: "1px solid #dddddd",
            padding: "7px 10px",
            borderRadius: "8px",
          }}
        >
          <div style={{ display: "flex", alignItems: "center" }}>
            <BiListUl
              style={{
                padding: "2px",
                backgroundColor: "#eeeeee",
                marginRight: "5px",
              }}
            />{" "}
            <h4
              style={{
                margin: "0",
                padding: "0",
                fontWeight: "400",
                fontSize: "1 rem",
              }}
            >
              Watchlist
            </h4>
          </div>
          <span style={{ fontWeight: "300", fontSize: "0.8rem" }}>0</span>
        </div>
        <div
          className={styles.new}
          style={{
            width: "12%",
            display: "flex",
            justifyContent: "space-between",
            color: "#1a73e8",
            padding: "3px 10px",
            marginLeft: "5px",
            alignItems: "center",
          }}
        >
          <span style={{ fontSize: "1.6rem", fontWeight: "300" }}>+</span>
          <span onClick={handleOpenNewList}>New list</span>
          {showNewList && <NewList onClose={handleCloseNewList} />}
        </div>
      </div>
    </>
  );
}

export default WatchList;
