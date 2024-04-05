import React, { useEffect, useState } from "react";
import styles from "./MostFollowed.module.css";
import { CiCirclePlus } from "react-icons/ci";
import { FaArrowDown } from "react-icons/fa";

function Stock({ data }) {
  return (
    <div style={{ display: "flex", justifyContent: "space-between" }}>
      <div className={styles.firsttext}>
        <p className={styles.symbol}>{data.ticker}</p>
        <p className={styles.name}>{data.name}</p>
        <p className={styles.employee}>{data.total_employees} employees</p>
      </div>
      <div
        style={{
          width: "40%",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
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
  );
}

function MostFollowed() {
  const [stocksData, setStocksData] = useState({
    appleData: null,
    googleData: null,
    msData: null,
    amazonData: null,
    meterData: null,
    teslaData: null,
  });

  useEffect(() => {
    const fetchStockData = async (ticker, setData) => {
      try {
        const response = await fetch(
          `https://api.polygon.io/v3/reference/tickers/${ticker}?apiKey=nb4AsP75pkAKlg_4iyruc8nyZW72hCgd`
        );
        const data = await response.json();
        setData(data.results);
      } catch (error) {
        console.error(`Error fetching ${ticker} data: `, error);
      }
    };

    fetchStockData("AAPL", (data) =>
      setStocksData((prevState) => ({ ...prevState, appleData: data }))
    );
    fetchStockData("GOOGL", (data) =>
      setStocksData((prevState) => ({ ...prevState, googleData: data }))
    );
    fetchStockData("MSFT", (data) =>
      setStocksData((prevState) => ({ ...prevState, msData: data }))
    );
    fetchStockData("AMZN", (data) =>
      setStocksData((prevState) => ({ ...prevState, amazonData: data }))
    );
    fetchStockData("META", (data) =>
      setStocksData((prevState) => ({ ...prevState, meterData: data }))
    );
    fetchStockData("TSLA", (data) =>
      setStocksData((prevState) => ({ ...prevState, teslaData: data }))
    );
  }, []);

  return (
    <div className={styles.most}>
      <h3 className={styles.head}>Most followed on Google</h3>

      {Object.values(stocksData).map((stockData, index) => (
        <div key={index} className={styles.stock}>
          {stockData ? <Stock data={stockData} /> : <div>Loading...</div>}
        </div>
      ))}
    </div>
  );
}

export default MostFollowed;
