import React, { useEffect, useRef } from "react";
import styles from "./NewList.module.css";

function NewList({ onClose }) {
  const inputRef = useRef(null);

  const handleCloseNewList = () => {
    onClose();
  };

  useEffect(() => {
    inputRef.current.focus();
  }, []);
  return (
    <>
      <div className={styles.overlay}>
        <div className={styles.content}>
          <h3>Create a new list</h3>
          <input type="text" ref={inputRef} />
          <div>
            <span style={{ color: "#1a73e8" }} onClick={handleCloseNewList}>
              Cancel
            </span>
            <span style={{ color: "#1a73e8" }}>Save</span>
          </div>
        </div>
      </div>
    </>
  );
}

export default NewList;
