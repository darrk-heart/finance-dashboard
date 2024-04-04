import React, { useEffect, useState } from "react";
import styles from "./Markets.module.css";

function Markets() {
  const [stockData, setStockData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://api.polygon.io/v2/aggs/grouped/locale/us/market/stocks/2023-01-09?adjusted=true&limit=100&apiKey=nb4AsP75pkAKlg_4iyruc8nyZW72hCgd"
        );
        const data = await response.json();
        const extractedData = data.results.slice(0, 5).map((stock) => ({
          symbol: stock.T,
          open: stock.o,
          close: stock.c,
        }));
        setStockData(extractedData);
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    };

    fetchData();
  }, []);

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

      <div>
        {stockData ? (
          <div>
            <ul>
              {stockData.map((stock, index) => (
                <li key={index}>
                  <strong>Symbol:</strong> {stock.symbol}
                  <span>Open: {stock.open}</span>
                  <span>Close: {stock.close}</span>
                </li>
              ))}
            </ul>
          </div>
        ) : (
          <div>Loading...</div>
        )}
      </div>
    </div>
  );
}

export default Markets;
