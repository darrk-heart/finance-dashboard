import React from "react";

function Tooltip() {
  return (
    <div
      style={{
        position: "fixed",
        top: "290px",
        left: "250px",
        backgroundColor: "white",
        border: "1px solid #eeeeee",
        padding: "20px",
        zIndex: 50,
        fontWeight: "400",
        fontSize: "0.9rem",
        lineHeight: "1.2rem",
        boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
      }}
    >
      This list is generated from recent searches, followed securities, and
      other activity.{" "}
      <a href="https://support.google.com/websearch/answer/9853763">
        Learn more
      </a>{" "}
      <br />
      <br />
      All data and information is provided “as is” for personal informational
      purposes only, and is <br /> not intended to be financial advice nor is it
      for trading purposes or investment, tax, legal,
      <br /> accounting or other advice. Google is not an investment adviser nor
      is it a financial adviser
      <br /> and expresses no view, recommendation or opinion with respect to
      any of the companies
      <br /> included in this list or any securities issued by those companies.
      Please consult your broker
      <br /> or financial representative to verify pricing before executing any
      trades.
      <a
        style={{ marginLeft: "4px" }}
        href="https://www.google.com/intl/en_GH/googlefinance/disclaimer/#disclaimers"
      >
        Learn more
      </a>
    </div>
  );
}

export default Tooltip;
