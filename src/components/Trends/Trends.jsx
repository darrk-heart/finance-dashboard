import React from "react";
import styles from "./Trends.module.css";
import { FaWaveSquare } from "react-icons/fa";
import { FaRegCopyright } from "react-icons/fa";

function Trends() {
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
      Market Trends
      <div className={styles.trends}>
        <div>
          <FaWaveSquare />
          Market indexes
        </div>
        <div>Most active</div>
        <div>Gainers</div>
        <div>Losers</div>
        <div>Climate leaders</div>
        <div>
          <FaRegCopyright />
          Crypto
        </div>
        <div>Currencies</div>
      </div>
    </div>
  );
}

export default Trends;
