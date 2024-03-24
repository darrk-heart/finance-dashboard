import React from "react";
import { FaSearch } from "react-icons/fa";
import styles from "./Search.module.css";

function Search() {
  return (
    <div
      style={{
        backgroundColor: "white",
        width: "50%",
        padding: "14px 14px 7px 14px",
        alignItems: "center",
        borderRadius: "50px",
        height: "40px",
        boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
        display: "flex",
        justifyContent: "space-between",
      }}
    >
      <FaSearch style={{ marginLeft: "10px" }} />
      <input
        className={styles.inputSection}
        style={{
          border: "none",
          width: "90%",
          marginLeft: "15px",
          height: "40px",
          outline: "none",
          fontWeight: "500",
          fontSize: "1.1rem",
        }}
        placeholder="Search for stocks, ETFs & more "
      />
    </div>
  );
}

export default Search;
