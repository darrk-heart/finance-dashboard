import React, { useEffect, useState } from "react";
import styles from "./MostFollowed.module.css";
import { CiCirclePlus } from "react-icons/ci";
import { FaArrowDown } from "react-icons/fa";

function MostFollowed() {
  const [appleData, setAppleData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://api.polygon.io/v3/reference/tickers/AAPL?apiKey=nb4AsP75pkAKlg_4iyruc8nyZW72hCgd"
        );
        const data = await response.json();
        console.log(data);
        setAppleData(data.results);
      } catch (error) {
        console.error("Error fetching Apple data: ", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className={styles.most}>
      <h3 className={styles.head}> Most followed on Google </h3>
      <div className={styles.stock}>
        {appleData ? (
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <div className={styles.firsttext}>
              <p className={styles.symbol}>{appleData.ticker}</p>
              <p className={styles.name}>{appleData.name}</p>
              <p className={styles.employee}>
                {appleData.total_employees} employees
              </p>
            </div>
            <div
              style={{
                width: "40%",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              {" "}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  padding: "0px 8px",
                  backgroundColor: "#fce8e6",
                  height: "35%",
                  borderRadius: "5px",
                }}
              >
                <FaArrowDown color="red" />
                <p style={{ color: "red" }}>0.49%</p>
              </div>
              <CiCirclePlus size={24} color="#80868b" />
            </div>
          </div>
        ) : (
          <div>Loading...</div>
        )}
      </div>
    </div>
  );
}

export default MostFollowed;
