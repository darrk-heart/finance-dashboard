import React, { useState } from "react";
import Tooltip from "../Tooltip/Tooltip";
import { CiCircleInfo } from "react-icons/ci";

function Interest() {
  const [showTooltip, setShowTooltip] = useState(false);

  const handleMouseEnter = () => {
    setShowTooltip(true);
  };

  const handleMouseLeave = () => {
    setShowTooltip(false);
  };
  return (
    <>
      <div style={{ display: "flex", marginBottom: "20px"}}>
        <h4
          style={{
            margin: "0",
            padding: "0",
            fontWeight: "400",
            fontSize: "1.1rem",
            marginRight: "5px",
          }}
        >
          You may be interested in
        </h4>
        <CiCircleInfo
          style={{ cursor: "pointer" }}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        />
        {showTooltip && <Tooltip />}
      </div>
    </>
  );
}

export default Interest;
