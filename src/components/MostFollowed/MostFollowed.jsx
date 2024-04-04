import React, { useEffect, useState } from "react";
import styles from "./MostFollowed.module.css";

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
      Most followed on Google
      <div>
        <h2>Apple (AAPL) Information</h2>
        {appleData ? (
          <div>
            <p>Symbol: {appleData.ticker}</p>
            <p>Name: {appleData.name}</p>
            <p>Market Type: {appleData.market}</p>
            <p>Currency: {appleData.currency_name}</p>
            <p>Phone: {appleData.phone_number}</p>
          </div>
        ) : (
          <div>Loading...</div>
        )}
      </div>
    </div>
  );
}

export default MostFollowed;
