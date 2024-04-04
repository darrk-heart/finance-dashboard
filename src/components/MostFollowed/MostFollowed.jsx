import React, { useEffect, useState } from "react";
import styles from "./MostFollowed.module.css";
import { CiCirclePlus } from "react-icons/ci";

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
        {appleData ? (
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <div>
              <p>{appleData.ticker}</p>
              <p>{appleData.name}</p>
              <p>{appleData.total_employees} employees </p>
            </div>
            <div>
              <p>Number</p>
              <CiCirclePlus />
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
