import React, { useEffect, useRef, useState } from "react";
import styles from "./NewList.module.css";

function NewList({ onClose, onSave }) {
  const inputRef = useRef(null);
  const [inputValue, setInputValue] = useState("");
  const [saveColor, setSaveColor] = useState("#666666");
  const [saveBgColor, setSaveBgColor] = useState("#eeeeee");
  const [divBorder, setDivBorder] = useState("#164de5");
  const [emptyText, setEmptyText] = useState("white");

  const handleCloseNewList = () => {
    onClose();
  };

  const handleSave = () => {
    onSave(inputValue);
  };

  const handleInputChange = (event) => {
    const value = event.target.value;
    setInputValue(value);
    setSaveColor(value ? "white" : "#666666");
    setSaveBgColor(value ? "#1a73e8" : "#eeeeee");
    setDivBorder(value ? "#164de5" : "red");
    setEmptyText(value ? "white" : "red");
  };

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return (
    <div className={styles.overlay}>
      <div className={styles.content}>
        <h3>Create a new list</h3>
        <div style={{ borderColor: divBorder }} className={styles.enter}>
          <input
            value={inputValue}
            onChange={handleInputChange}
            type="text"
            ref={inputRef}
            placeholder="New Item"
          />
        </div>
        <span
          style={{
            color: emptyText,
            fontSize: "0.8rem",
            fontWeight: "400",
            paddingLeft: "13px",
            paddingTop: "10px",
          }}
        >
          Enter a name
        </span>
        <div className={styles.cancelSave}>
          <span
            className={styles.cancel}
            style={{
              color: "#1a73e8",
              padding: "10px",
              borderRadius: "2px",
            }}
            onClick={handleCloseNewList}
          >
            Cancel
          </span>
          <span
            className={styles.save}
            style={{
              color: saveColor,
              padding: "10px",
              marginRight: "5px",
              marginLeft: "15px",
              borderRadius: "2px",
              backgroundColor: saveBgColor,
            }}
          >
            Save
          </span>
        </div>
      </div>
    </div>
  );
}

export default NewList;
