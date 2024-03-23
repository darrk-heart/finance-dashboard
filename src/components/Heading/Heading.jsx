import React from "react";
import { FaBars } from "react-icons/fa";
import styles from "./Heading.module.css";
import { MdApps } from "react-icons/md";
import background from "../../assets/background.jpg";
import Markets from "../Markets/Markets";
import Search from "../Search/Search";

function Heading() {
  return (
    <>
      <div className={styles.heading}>
        <div className={styles.googleHeading}>
          <FaBars className={styles.fabar} size={21} />
          <h4 className="roboto-medium">
            <span style={{ color: "#4285F4" }}>G</span>
            <span style={{ color: "#EA4335" }}>o</span>
            <span style={{ color: "#FBBC05" }}>o</span>
            <span style={{ color: "#34A853" }}>g</span>
            <span style={{ color: "#EA4335" }}>l</span>
            <span style={{ color: "#4285F4" }}>e</span>
            <span className={styles.finance}> Finance</span>
          </h4>
        </div>
        <div className={styles.signin}>
          <MdApps className={styles.mdapp} size={26} />
          <span className="roboto-medium">Sign in</span>
        </div>
      </div>
      <div style={{ margin: "0", padding: "0" }}>
        <img src={background} alt="background" className={styles.background} />
        <div style={{ position: "relative" }} className={styles.centerText}>
          <Markets />
        </div>
        <div
          style={{ position: "relative", marginTop: "100px" }}
          className={styles.centerTextSecond}
        >
          <Search />
        </div>
      </div>
    </>
  );
}

export default Heading;
