import React from "react";
import { AiOutlineBarChart } from "react-icons/ai";
import styles from "./Portfolio.module.css";

function Portfolio() {
  return (
    <div
      style={{
        border: "1px solid #dddddd",
        padding: "20px",
        display: "flex",
        flexDirection: "column",
        borderRadius: "10px",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <AiOutlineBarChart
          style={{
            backgroundColor: "lightblue",
            padding: "10px",
            borderRadius: "7px",
          }}
        />
        <span
          style={{
            fontWeight: "400",
            color: "#666666",
            fontSize: "0.9rem",
            marginLeft: "10px",
          }}
        >
          Create a portfolio to view your investments in one place{" "}
        </span>
      </div>
      <div
        className={styles.new}
        style={{
          textAlign: "center",
          border: "1px solid #dddddd",
          padding: "5px",
          borderRadius: "20px",
          marginTop: "10px",
          color: "blue",
        }}
      >
        + New Portfolio
      </div>
    </div>
  );
}

export default Portfolio;