import React, { useEffect } from "react";
import axios from "axios";
import styles from "./Trial.module.css";

import { CiCirclePlus } from "react-icons/ci";

function Trial() {
  useEffect(() => {
    const fetchData = async () => {
      const options = {
        method: "GET",
        url: "https://google-finance-worldwide-indexes.p.rapidapi.com/",
        headers: {
          "X-RapidAPI-Key":
            "c6c7772e38msh54ccc06c3b1c805p19e97djsne2973b46e118",
          "X-RapidAPI-Host": "google-finance-worldwide-indexes.p.rapidapi.com",
        },
      };

      try {
        const response = await axios.request(options);
        console.log(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <div className={styles.firsttext}>
          <p className={styles.symbol}>
            {/* {appleData.ticker} */}
            AAPL
          </p>
          <p className={styles.name}>
            {/* {appleData.name} */}
            Apple Inc.
          </p>
          <p className={styles.employee}>
            {/* {appleData.total_employees}  */}
            16 employees
          </p>
        </div>
        <div style={{ display: "flex", alignItems: "center" }}>
          <p>Number</p>
          <CiCirclePlus />
        </div>
      </div>
    </div>
  );
}

export default Trial;
