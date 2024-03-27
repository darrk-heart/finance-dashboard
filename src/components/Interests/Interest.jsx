import React from "react";

function Interest() {
  return (
    <>
      <div style={{ display: "flex" }}>
        <h4
          style={{
            margin: "0",
            padding: "0",
            fontWeight: "400",
            fontSize: "1.1rem",
            marginRight: "20px",
          }}
        >
          You may be interested in
        </h4>{" "}
        <span
          style={{
            border: "1px solid black",
            fontSize: "0.7rem",
            padding: "4px 8px 2px 8px",
            borderRadius: "50%",
            cursor: "pointer",
          }}
        >
          i
        </span>
      </div>
    </>
  );
}

export default Interest;
