import React, { useEffect } from "react";
import styles from "./SideBar.module.css";

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
  );
};

export default Sidebar;
