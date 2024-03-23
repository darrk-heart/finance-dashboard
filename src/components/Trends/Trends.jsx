import React from "react";
import styles from "./Trends.module.css";
import { MdStackedLineChart } from "react-icons/md";
import { FaRegCopyright } from "react-icons/fa";
import { MdBarChart } from "react-icons/md";
import { HiMiniArrowTrendingUp } from "react-icons/hi2";
import { SiLeaflet } from "react-icons/si";
import { HiMiniArrowTrendingDown } from "react-icons/hi2";
import { HiOutlineCurrencyDollar } from "react-icons/hi";

function Trends() {
  return (
    <div
      style={{
        border: "1px solid #dddddd",
        padding: "20px 20px 10px 20px",
        display: "flex",
        flexDirection: "column",
        borderRadius: "10px",
        marginTop: "15px",
        fontWeight: "400",
      }}
    >
      Market Trends
      <div className={styles.trends}>
        <div>
          <MdStackedLineChart size={14} style={{ marginRight: "3px" }} />
          Market indexes
        </div>
        <div>
          <MdBarChart
            size={14}
            style={{ color: "#1a73e8", marginRight: "3px" }}
          />
          Most active
        </div>
        <div>
          <HiMiniArrowTrendingUp
            size={14}
            style={{ color: "green", marginRight: "3px" }}
          />
          Gainers
        </div>
        <div>
          <HiMiniArrowTrendingDown
            size={14}
            style={{ color: "red", marginRight: "3px" }}
          />
          Losers
        </div>
        <div>
          <SiLeaflet size={14} style={{ color: "green", marginRight: "3px" }} />
          Climate leaders
        </div>
        <div>
          <FaRegCopyright
            size={14}
            style={{ color: "#f6a600", marginRight: "3px" }}
          />
          Crypto
        </div>
        <div>
          <HiOutlineCurrencyDollar size={14} style={{ marginRight: "3px" }} />
          Currencies
        </div>
      </div>
    </div>
  );
}

export default Trends;
