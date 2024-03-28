import React from "react";
import styles from "./NewList.module.css";

function NewList({ onClose }) {
  const handleCloseNewList = () => {
    onClose();
  };
  return (
    <>
      <div className={styles.overlay}>
        <div className={styles.content}>
          <h3>Create a new list</h3>
          <input />
          <div>
            <span onClick={handleCloseNewList}>Cancel</span>
            <span>Save</span>
          </div>
        </div>
      </div>
    </>
  );
}

export default NewList;