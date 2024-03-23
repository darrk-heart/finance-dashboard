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
      {/* Sidebar content */}
      <p>This is the sidebar content</p>
    </div>
  );
};

export default Sidebar;
