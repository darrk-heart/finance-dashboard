import React from "react";
import styles from "./Markets.module.css";

function Markets() {
  return (
    <div className="roboto-regular">
      <div className={styles.mainText}>
        <div cl>
          <span
            style={{
              fontSize: "0.8rem",
              fontWeight: "500",
              color: "#555555",
              cursor: "pointer",
            }}
          >
            COMPARE MARKETS
          </span>
        </div>
        <div className={styles.list}>
          <span>US</span>
          <span>Europe</span>
          <span>Asia</span>
          <span>Currencies</span>
          <span>Crypto</span>
          <span>Futures</span>
        </div>
      </div>
    </div>
  );
}

export default Markets;
