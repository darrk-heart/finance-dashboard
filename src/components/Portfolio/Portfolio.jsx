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
        <AiOutlineBarChart size={25}
          style={{
            backgroundColor: "#e8f0fe",
            padding: "5px",
            borderRadius: "7px",
            color: "#1a73e8",
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
          color: "#1a73e8",
        }}
      >
        + New Portfolio
      </div>
    </div>
  );
}

export default Portfolio;
