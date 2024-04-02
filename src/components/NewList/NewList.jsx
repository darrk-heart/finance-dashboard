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
          <div className={styles.enter}>
            <input type="text" ref={inputRef} />
          </div>
          <div className={styles.cancelSave}>
            <span
              className={styles.cancel}
              style={{ color: "#1a73e8", padding: "15px" }}
              onClick={handleCloseNewList}
            >
              Cancel
            </span>
            <span
              className={styles.save}
              style={{ color: "#1a73e8", padding: "15px", marginRight: "5px" }}
            >
              Save
            </span>
          </div>
        </div>
      </div>
    </>
  );
}

export default NewList;
