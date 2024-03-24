import React from "react";

function Footer() {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        padding: "15px 0 15px 0",
        borderTop: "1px solid #dddddd",
        marginTop: "10px",
      }}
    >
      <div
        className="roboto-medium"
        style={{
          fontSize: "1.6rem",
          cursor: "default",
        }}
      >
        Google
      </div>
      <ul
        style={{
          listStyle: "none",
          display: "flex",
          justifyContent: "space-between",
          width: "45%",
          color: "#3c4043",
          cursor: "pointer",
          paddingTop: "5px",
          fontSize: "400",
        }}
      >
        <li>Help</li>
        <li>Send feedback</li>
        <li>Privacy</li>
        <li>Terms</li>
        <li>Disclaimer</li>
      </ul>
    </div>
  );
}

export default Footer;
