import React, { useEffect } from "react";
import styles from "./SideBar.module.css";
import { FiSettings } from "react-icons/fi";
import { BiMessageSquareDetail } from "react-icons/bi";
import { BiListUl } from "react-icons/bi";
import { PiListMagnifyingGlassBold } from "react-icons/pi";
import { MdOutlinePlaylistAddCheck } from "react-icons/md";

const Sidebar = ({ isVisible, onClose }) => {
  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (isVisible && !event.target.closest(`.${styles.sidebar}`)) {
        onClose();
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [isVisible, onClose]);

  return (
    <div className={`${styles.sidebar} ${isVisible ? styles.visible : ""}`}>
      <div>
        <h4 className={styles.heading}>
          <span className="roboto-medium" style={{ color: "#4285F4" }}>
            G
          </span>
          <span className="roboto-medium" style={{ color: "#EA4335" }}>
            o
          </span>
          <span className="roboto-medium" style={{ color: "#FBBC05" }}>
            o
          </span>
          <span className="roboto-medium" style={{ color: "#34A853" }}>
            g
          </span>
          <span className="roboto-medium" style={{ color: "#EA4335" }}>
            l
          </span>
          <span className="roboto-medium" style={{ color: "#4285F4" }}>
            e
          </span>
          <span className={styles.finance}>
            {" "}
            <span className="roboto-medium">Finance</span>
          </span>
        </h4>
      </div>
      <div className="roboto-medium">
        <div className={styles.first}>
          <div className={styles.home}>
            <MdOutlinePlaylistAddCheck size={25} className={styles.logo} />
            Home
          </div>
          <div className={styles.marketTrends}>
            <PiListMagnifyingGlassBold size={23} className={styles.logo} />
            Market trends
          </div>
        </div>
        <div className={styles.first}>
          <div className={styles.portWatch}>
            <h6>PORTFOLIOS</h6>
            <span>+</span>
          </div>
          <div className={styles.portWatch}>
            <h6>WATCHLISTS</h6>
            <span>+</span>
          </div>
          <div className={styles.marketTrends}>
            <BiListUl size={25} className={styles.logo} /> Watchlist
          </div>
        </div>
        <div className={styles.first}>
          <h6 className={styles.mostActive}>MOST ACTIVE</h6>
        </div>
        <div className={styles.first}>
          <div className={styles.marketTrends}>
            <FiSettings size={23} className={styles.logo} />
            Settings
          </div>
          <div className={styles.marketTrends}>
            <BiMessageSquareDetail size={23} className={styles.logo} />
            Send feedback
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
