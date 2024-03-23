import React from "react";

function Calendar() {
  return (
    <div
      style={{
        border: "1px solid #dddddd",
        padding: "20px",
        display: "flex",
        flexDirection: "column",
        borderRadius: "10px",
        marginTop: "15px",
      }}
    >
      <div
        style={{
          borderBottom: "1px solid #dddddd ",
          paddingBottom: "15px",
        }}
      >
        <h3 style={{ padding: "0", margin: "0", fontWeight: "400" }}>
          Earnings calendar
        </h3>
        <p style={{ padding: "0", margin: "0", fontWeight: "400" }}>
          Based on popular stocks
        </p>
      </div>
      <div
        style={{ fontWeight: "100", fontStyle: "italic", fontSize: "0.7rem" }}
      >
        I am gonna display calendar schedules here
      </div>
    </div>
  );
}

export default Calendar;
